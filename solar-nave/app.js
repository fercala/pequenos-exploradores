import * as T from './vendor/three.module.js';
import {SolarUniverse as Universe} from './world-v2.js';
import {DEFAULT_SETTINGS,format} from './data.js';
import {BODIES as PLANETS,bodyById as getPlanet,bodyRadius,orbitalPosition,localGravity,atmosphericDensity,safeLanding,validatePortable} from './simulation.js';
import {createExpansion} from './expansion.js';
import {clamp,smoothstep,terrainHeight,isOcean,pressureAtDepth,landingResult,readSave,writeSave} from './core.js';

const $=id=>document.getElementById(id),panel=$('panel'),content=$('panel-content');
const state={planet:getPlanet('earth'),position:new T.Vector3(0,220,1650),quaternion:new T.Quaternion(),velocity:new T.Vector3(),throttle:0,elapsed:0,started:false,paused:false,landed:false,shield:100,visited:new Set(['earth']),landings:new Set(),explored:new Set(),photos:0,settings:{...DEFAULT_SETTINGS},auto:null,camera:'follow'};
const ids=new Set(PLANETS.map(p=>p.id));
let world,save=readSave(localStorage),last=performance.now(),lastHud=0,saveClock=0,toastTimer,installPrompt,drag=null,look=false,holds=new Set(),joy={x:0,y:0},joyPointer=null,contextLost=false;
try{const s=JSON.parse(localStorage.getItem('orbita-settings')||'null');if(s)state.settings={...DEFAULT_SETTINGS,...s};}catch{}
if(matchMedia('(prefers-reduced-motion:reduce)').matches)state.settings.reducedMotion=true;
try{world=new Universe($('scene'),state.settings.quality);world.setPlanet(state.planet);}catch(error){console.error(error);$('fatal').hidden=false;throw error;}
const canvas=world.renderer.domElement;
function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,5000);}
const expansion=createExpansion({state,world,toast,$,persist,resetInputs,brake,closePanel,showPanel,changeReference,settingsSave,setThrottle});
function settingsSave(){try{localStorage.setItem('orbita-settings',JSON.stringify(state.settings));}catch{toast('El navegador no permite guardar los ajustes.');}}
function persist(){if(!state.started||state.auto)return true;return writeSave(localStorage,expansion.snapshot());}
function setThrottle(value){state.throttle=clamp(Number(value)||0,-40,100)/100;$('throttle').value=String(Math.round(state.throttle*100));$('throttle-output').textContent=`${Math.round(state.throttle*100)}%`;}
function resetInputs(){holds.clear();joy.x=joy.y=0;drag=null;joyPointer=null;document.querySelectorAll('.active[data-hold]').forEach(b=>b.classList.remove('active'));const knob=$('joystick').firstElementChild;knob.style.transform='';}
function freeze(){return !state.started||state.paused||panel.open||$('welcome').open||document.hidden||contextLost;}
function showPanel(type){resetInputs();content.replaceChildren();$('panel-eyebrow').textContent=({map:'NAVEGACIÓN INTERPLANETARIA',info:'ARCHIVO CIENTÍFICO',settings:'CONFIGURACIÓN DE LA EXPEDICIÓN',help:'MANUAL DE VUELO',journal:'DIARIO DE EXPLORACIÓN'})[type];({map:renderMap,info:renderInfo,settings:renderSettings,help:renderHelp,journal:renderJournal})[type]();if(!panel.open)panel.showModal();}
function closePanel(){panel.close();resetInputs();last=performance.now();}
function planetDot(p){return `<span class="planet-dot ${p.id}" style="--planet:${p.color}"></span>`;}
function renderStrip(){
  $('planet-list').innerHTML=PLANETS.map(p=>`<button data-planet="${p.id}" class="${p.id===state.planet.id?'selected':''}" aria-label="Viajar a ${p.name}" aria-pressed="${p.id===state.planet.id}">${planetDot(p)}<span>${p.name}</span></button>`).join('');
  $('planet-list').querySelectorAll('button').forEach(b=>b.onclick=()=>selectDestination(b.dataset.planet));
  $('visited-counter').textContent=`${state.visited.size} / 11`;
}
function selectDestination(id){if(state.auto){toast('Cancela o termina la maniobra antes de elegir otro destino.');return;}if(id===state.planet.id){showPanel('info');return;}showPanel('map');const card=content.querySelector(`[data-destination="${id}"]`);card?.focus();card?.scrollIntoView({block:'nearest'});}
function setPlanet(id,mark=true){const p=getPlanet(id);state.planet=p;world.setPlanet(p);state.landed=false;state.velocity.set(0,0,0);state.shield=100;setThrottle(0);if(mark)state.visited.add(p.id);updatePlanetUI();}
function changeReference(id,absolute){const velocity=state.velocity.clone(),quaternion=state.quaternion.clone(),shield=state.shield;state.planet=getPlanet(id);world.setPlanet(state.planet);world.roverParked=null;state.roverDistance=0;state.position.copy(absolute).sub(new T.Vector3(...orbitalPosition(id,state.days)));state.velocity.copy(velocity);state.quaternion.copy(quaternion);state.shield=shield;state.landed=false;state.visited.add(id);updatePlanetUI();}
function updatePlanetUI(){const p=state.planet;$('planet-title').innerHTML=`${p.name}<span>.</span>`;$('planet-subtitle').textContent=p.description;$('location-tag').textContent=`SECTOR ${String(PLANETS.indexOf(p)+1).padStart(2,'0')} / ${p.kind.toUpperCase()}`;$('solar-distance').innerHTML=`${format(p.au,p.au<2?2:1)} <small>UA</small>`;$('gravity-value').innerHTML=`${format(p.gravity,2)} <small>m/s²</small>`;$('reticle-label').textContent=p.name.toUpperCase();$('land-label').textContent=p.rocky?'Descender al planeta':'Explorar atmósfera';renderStrip();}
function renderMap(){
  content.innerHTML=`<h2>¿Cuál es tu próxima frontera?</h2><p>Elige entre ocho planetas y tres lunas. El piloto recorre el espacio común sin cambiar de escena.</p><svg class="system-map" viewBox="0 0 920 150" role="img" aria-label="Esquema del sistema solar, distancias comprimidas"><circle class="sun" cx="28" cy="75" r="16"/>${PLANETS.map((p,i)=>`<path d="M ${78+i*77} 10 Q ${45+i*77} 75 ${78+i*77} 140" fill="none" stroke="#ffffff16"/><circle class="map-planet" data-map="${p.id}" cx="${78+i*77}" cy="75" r="${p.rocky?5:10}" fill="${p.color}"/><text x="${78+i*77}" y="109" text-anchor="middle">${format(p.au,1)} UA</text>`).join('')}</svg><p class="compact-note">Distancias y tamaños del esquema comprimidos. 1 UA ≈ 149,6 millones de km. El Sol se observa en la escena, pero no es un destino de aterrizaje.</p><div class="planet-cards">${PLANETS.map(p=>`<button class="planet-card ${state.planet.id===p.id?'current':''}" data-destination="${p.id}">${planetDot(p)}<strong>${p.name} ${state.visited.has(p.id)?'· ✓':''}</strong><small>${p.kind}<br>${state.planet.id===p.id?'Estás aquí':p.rocky?'Descenso y aterrizaje':'Exploración atmosférica'}</small></button>`).join('')}</div>`;
  content.querySelectorAll('[data-destination]').forEach(b=>b.onclick=()=>{if(b.dataset.destination===state.planet.id){renderInfo();return;}startTravel(b.dataset.destination);});
  content.querySelectorAll('[data-map]').forEach(b=>{b.style.cursor='pointer';b.onclick=()=>content.querySelector(`[data-destination="${b.dataset.map}"]`)?.click();});
}
function renderInfo(){const p=state.planet;content.innerHTML=`<div class="badge">${p.kind} · ${p.rocky?'Aterrizaje disponible':'Sin superficie de aterrizaje'}</div><h2 style="margin-top:18px">${p.name}</h2><p>${p.detail}</p><div class="info-grid">${[['Radio medio',`${format(p.radius)} km`],['Gravedad de referencia',`${format(p.gravity,2)} m/s²`],['Distancia media al Sol',`${format(p.au,3)} UA`],['Rotación',p.rotation],['Periodo orbital',p.year],['Temperatura de referencia',p.temperature],['Presión',p.pressure],['Inclinación del eje',`${format(p.tilt,2)}°`],['Región de exploración',p.surface]].map(([k,v])=>`<div><label>${k}</label><strong>${v}</strong></div>`).join('')}</div><h3>Atmósfera</h3><p>${p.atmosphere}.</p><div class="info-note">Los datos anteriores son valores astronómicos aproximados. Los tamaños de vuelo, altitudes, tiempos de viaje, gravedad de juego y límites de descenso se adaptan para explorar. Los mapas globales combinan datos observacionales y reconstrucciones acreditadas. El relieve local y el clima son ilustrativos; no son topografía real ni observaciones en tiempo real.</div><p class="compact-note">En los gigantes, gravedad y temperatura se refieren a niveles atmosféricos de referencia, no a un suelo. Las condiciones reales varían con el lugar, la altura y el tiempo.</p><p><a href="${p.source}" target="_blank" rel="noopener noreferrer">Consultar la fuente: NASA ↗</a></p><button id="info-land" class="primary-button">${p.rocky?'Explorar la superficie':'Explorar la atmósfera'} ↓</button>`;$('info-land').onclick=()=>{closePanel();startLanding();};}
function renderHelp(){content.innerHTML=`<h2>La nave está en tus manos.</h2><p>Todo funciona con mouse en ordenador y con los dedos en móvil. No necesitas teclado.</p><div class="help-list">${[
    ['Orientar','Arrastra en una zona libre de la escena. Cambias hacia dónde apunta la nave. En móvil, usa la mitad derecha para orientar.'],
    ['Avanzar y frenar','Mueve el deslizador de propulsión. Cero corta el empuje; el botón DETENER corta el empuje y frena. La asistencia reduce la inercia.'],
    ['Desplazamiento lateral','Usa las flechas de maniobra. En móvil, el joystick izquierdo desplaza la nave lateral y verticalmente.'],
    ['Girar sobre el eje','Usa ↶ y ↷ en el panel de maniobra. En móvil están disponibles al activar los controles ampliados de Ajustes.'],
    ['Mirar sin cambiar el rumbo','Activa Mirar y arrastra. Los botones + y − ajustan la distancia de cámara; también puedes usar la rueda o pellizcar con dos dedos.'],
    ['Viajar a otro planeta','Pulsa un planeta en la franja inferior o abre Destinos. El viaje asistido comprime las distancias. Puedes cancelarlo.'],
    ['Descender y despegar','Descender al planeta te lleva a una zona segura. Regresar al espacio inicia un ascenso. También puedes aproximarte y aterrizar manualmente.'],
    ['Explorar los gigantes','Desciende entre nubes con protección ficticia. No hay suelo. La presión aumenta con la profundidad y la nave asciende antes de superar el límite.'],
    ['Guardar y continuar','La expedición se guarda en este navegador cada diez segundos. Si borras sus datos, se pierde el progreso.'],
    ['Fotografiar','El botón ▣ guarda una imagen de la escena. En móviles compatibles abre la opción de compartir.']
  ].map(([h,p])=>`<div><b>${h}</b><p>${p}</p></div>`).join('')}</div><p class="compact-note">Vuelo continuo con referencia local flotante. Las órbitas se aproximan con círculos: el atlas científico conserva las proporciones de radios y distancias, sin pretender ser una efeméride. En Expedición puedes caminar, desplegar el rover, medir y exportar tu partida.</p>`;}
function renderJournal(){content.innerHTML=`<h2>Tu huella entre los planetas.</h2><p>${state.visited.size} de 11 mundos visitados · ${state.landings.size} de 7 aterrizajes · ${state.explored.size} de 4 atmósferas exploradas · ${state.photos} fotografías.</p>${PLANETS.map(p=>`<div class="journal-row">${planetDot(p)}<div><b>${p.name}</b><small>${p.rocky?(state.landings.has(p.id)?'Aterrizaje completado':'Aterrizaje pendiente'):(state.explored.has(p.id)?'Descenso atmosférico completado':'Descenso atmosférico pendiente')}</small></div><span>${state.visited.has(p.id)?'Visitado ✓':'Por descubrir'}</span></div>`).join('')}<p class="compact-note">Explora a tu ritmo. Las actividades son opcionales.</p><button id="journal-save" class="secondary-button">Guardar expedición ahora</button>`;$('journal-save').onclick=()=>toast(persist()?'Expedición guardada en este dispositivo.':'No se pudo guardar; el almacenamiento está bloqueado.');}
function renderSettings(){content.innerHTML=`<h2>Prepara tu expedición.</h2><div class="settings-row"><div>Calidad gráfica<small>Reduce el detalle y la resolución para móviles.</small></div><select id="quality"><option value="auto">Automática</option><option value="low">Baja</option><option value="medium">Media</option><option value="high">Alta</option></select></div><div class="settings-row"><div>Sensibilidad de giro</div><input id="sensitivity" type="range" min="0.3" max="2" step="0.1" aria-label="Sensibilidad"></div><div class="settings-row"><div>Movimiento reducido<small>Suaviza los efectos y reduce la turbulencia.</small></div><input id="reduced-motion" type="checkbox"></div><div class="settings-row"><div>Modo de exploración</div><select id="game-mode"><option value="exploration">Exploración libre</option><option value="challenge">Desafío con daños</option></select></div><div class="settings-row"><div>Controles táctiles ampliados<small>Mostrar giro longitudinal y frenado.</small></div><input id="extended" type="checkbox"></div><div class="settings-row"><div>Aplicación sin conexión<small id="cache-status">Comprobando descarga…</small></div><button id="offline-btn" class="secondary-button">Descargar</button></div><div class="settings-actions"><button id="install-btn" class="primary-button">Instalar en mi dispositivo</button><button id="save-btn" class="secondary-button">Guardar expedición</button><button id="clear-cache" class="secondary-button">Borrar descarga</button></div><p id="install-instructions" class="compact-note"></p><p class="compact-note">La descarga completa ocupa aproximadamente 10 MB e incluye once mundos, mapas y modelos. El navegador puede liberar almacenamiento. No hay conexión con tiendas de aplicaciones.</p><div class="info-note">Órbita 2 · Once destinos, vuelo continuo, exploración a pie, rover y misiones. Las órbitas circulares, los paisajes locales, el clima y la física se simplifican. Los mapas astronómicos están acreditados más abajo.</div>`;
  $('quality').value=state.settings.quality;$('sensitivity').value=state.settings.sensitivity;$('reduced-motion').checked=state.settings.reducedMotion;$('game-mode').value=state.settings.mode;$('extended').checked=document.body.classList.contains('extended');
  $('quality').onchange=e=>{state.settings.quality=e.target.value;world.setQuality(e.target.value);world.setPlanet(state.planet);settingsSave();};
  $('sensitivity').oninput=e=>{state.settings.sensitivity=Number(e.target.value);settingsSave();};
  $('reduced-motion').onchange=e=>{state.settings.reducedMotion=e.target.checked;settingsSave();};
  $('game-mode').onchange=e=>{state.settings.mode=e.target.value;settingsSave();};
  $('extended').onchange=e=>{document.body.classList.toggle('extended',e.target.checked);};
  $('save-btn').onclick=()=>toast(persist()?'Expedición guardada.':'No se pudo guardar.');
  $('install-btn').onclick=installApp;$('offline-btn').onclick=downloadOffline;$('clear-cache').onclick=clearOffline;
  updateCacheStatus();
  if(matchMedia('(display-mode:standalone)').matches)$('install-instructions').textContent='La aplicación ya se está ejecutando en modo instalado.';
  expansion.renderSettings(content);
}
async function updateCacheStatus(){try{const names=(await caches.keys()).filter(k=>k.startsWith('orbita-solar-'));let ready=false;for(const name of names){const cache=await caches.open(name),essential=['index.html','app.js','world.js','data.js','vendor/three.module.js','vendor/three.core.js'];const found=await Promise.all(essential.map(file=>cache.match(new URL(file,location.href))));if(found.every(Boolean)){ready=true;break;}}if($('cache-status'))$('cache-status').textContent=ready?'Ocho planetas disponibles sin conexión.':'Requiere una primera descarga con conexión.';}catch{if($('cache-status'))$('cache-status').textContent='El navegador no permite almacenamiento sin conexión.';}}
async function installApp(){if(installPrompt){await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;}else if(matchMedia('(display-mode:standalone)').matches){toast('Órbita ya está instalada.');}else{const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);const text=ios?'En Safari: pulsa Compartir, luego Añadir a pantalla de inicio y confirma Abrir como app web si aparece.':'Abre el menú del navegador y busca Instalar aplicación o Añadir a la pantalla de inicio. La opción depende del navegador.';if($('install-instructions'))$('install-instructions').textContent=text;else toast(text);}}
async function downloadOffline(){if(!('serviceWorker'in navigator)){toast('Este navegador no admite la descarga sin conexión.');return;}const button=$('offline-btn');if(button){button.disabled=true;button.textContent='Descargando…';}try{const reg=await navigator.serviceWorker.register('./sw.js',{scope:'./'});const worker=reg.active||reg.installing||reg.waiting;if(!worker)throw Error('No hay service worker');if(worker.state!=='activated')await new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(Error('Tiempo de descarga agotado')),25000);worker.addEventListener('statechange',()=>{if(worker.state==='activated'){clearTimeout(timeout);resolve();}if(worker.state==='redundant'){clearTimeout(timeout);reject(Error('Descarga fallida'));}});});await new Promise((resolve,reject)=>{const channel=new MessageChannel();const timer=setTimeout(()=>reject(Error('Descarga agotada')),25000);channel.port1.onmessage=e=>{clearTimeout(timer);e.data.ok?resolve():reject(Error(e.data.error));};worker.postMessage({type:'CACHE_ALL'},[channel.port2]);});toast('Descarga completa. Los ocho planetas están disponibles sin conexión.');await updateCacheStatus();}catch(e){console.error(e);toast('No se pudo completar la descarga. Comprueba la conexión y el espacio disponible.');}finally{if(button){button.disabled=false;button.textContent='Descargar';}}}
async function clearOffline(){try{if('serviceWorker'in navigator){const regs=await navigator.serviceWorker.getRegistrations();for(const reg of regs)if(reg.scope===new URL('./',location.href).href)await reg.unregister();}for(const key of await caches.keys())if(key.startsWith('orbita-solar-'))await caches.delete(key);toast('Descarga borrada. Tu expedición se conserva.');await updateCacheStatus();}catch{toast('No se pudo borrar la descarga.');}}

function aimQuaternion(position,direction,up){const matrix=new T.Matrix4().lookAt(position,position.clone().add(direction),up);return new T.Quaternion().setFromRotationMatrix(matrix);}
function startTravel(id){
  if(state.auto)return;if(world.overview){world.overview=false;document.body.classList.remove('atlas-mode');$('atlas-controls')?.remove();world.zoom=1;}if(state.vehicle!=='ship'){toast('Vuelve a la nave antes de viajar.');return;}closePanel();resetInputs();persist();state.landed=false;setThrottle(0);state.velocity.set(0,0,0);const origin=new T.Vector3(...orbitalPosition(state.planet.id,state.days)),normal=state.position.clone().normalize();state.auto={type:'travel',destination:id,time:0,duration:16,fromAbsolute:origin.clone().add(state.position),departure:origin.clone().add(normal.multiplyScalar(Math.max(world.radius+2200,state.position.length()))),qFrom:state.quaternion.clone()};expansion.event('destination');$('travel-progress').hidden=false;$('travel-label').textContent=`RUMBO A ${getPlanet(id).name.toUpperCase()}`;toast(`Viaje continuo hacia ${getPlanet(id).name}. Puedes cancelar y pilotar en cualquier momento.`);
}
function startLanding(){
  if(!state.started)return;if(state.auto){toast('Ya hay una maniobra en curso.');return;}if(state.landed){toast('Ya has aterrizado. Pulsa Regresar al espacio para despegar.');return;}
  if(state.vehicle!=='ship'){toast('Vuelve a la nave antes de iniciar un descenso.');return;}state.gear=true;world.gear=true;expansion.cruise=false;
  const p=state.planet,n=world.landingNormal.clone(),target=p.rocky?world.landingPosition.clone():n.clone().multiplyScalar(world.radius-38);
  const tangent=new T.Vector3(1,0,0).cross(n).normalize();
  const endQ=aimQuaternion(target,tangent,n);
  state.velocity.set(0,0,0);setThrottle(0);resetInputs();
  state.auto={type:p.rocky?'landing':'atmosphere',time:0,duration:12,from:state.position.clone(),to:target,qFrom:state.quaternion.clone(),qTo:endQ};
  $('travel-progress').hidden=false;$('travel-label').textContent=p.rocky?'DESCENSO ASISTIDO':'INMERSIÓN ATMOSFÉRICA';toast(p.rocky?`Descenso a ${p.surface.toLowerCase()}. Tren desplegado.`:'Exploración protegida. Este planeta no tiene suelo de aterrizaje.');
}
function startAscent(safety=false){
  if(state.auto&&!safety){toast('Cancela la maniobra actual antes de ascender.');return;}
  if(state.vehicle!=='ship'){toast('Vuelve a la nave antes de despegar.');return;}
  const n=state.position.clone().normalize(),to=n.clone().multiplyScalar(world.radius+1100);state.landed=false;setThrottle(0);state.velocity.set(0,0,0);resetInputs();
  state.auto={type:'ascent',time:0,duration:10,from:state.position.clone(),to,qFrom:state.quaternion.clone(),qTo:aimQuaternion(to,to.clone().negate(),new T.Vector3(0,1,0))};$('travel-progress').hidden=false;$('travel-label').textContent=safety?'ASCENSO DE SEGURIDAD':'REGRESO AL ESPACIO';
  if(safety)toast('Límite de profundidad o protección. Ascenso de seguridad activado.');
}
function cancelAuto(){if(!state.auto)return;state.auto=null;state.velocity.set(0,0,0);setThrottle(0);$('travel-progress').hidden=true;state.visited.add(state.planet.id);renderStrip();persist();toast('Maniobra cancelada. Tienes el control.');}
function updateAuto(dt){
  const a=state.auto;a.time+=dt;const t=clamp(a.time/a.duration,0,1),s=smoothstep(t);
  if(a.type==='travel'){
    const destination=getPlanet(a.destination),center=new T.Vector3(...orbitalPosition(a.destination,state.days)),normal=new T.Vector3(.1,.2,1).normalize(),end=center.clone().addScaledVector(normal,bodyRadius(destination)+1100),approach=center.clone().addScaledVector(normal,bodyRadius(destination)+2400);let absolute;
    if(t<.18)absolute=a.fromAbsolute.clone().lerp(a.departure,smoothstep(t/.18));
    else if(t<.82){const u=smoothstep((t-.18)/.64),control=a.departure.clone().lerp(approach,.5);control.y+=Math.max(7000,a.departure.distanceTo(approach)*.25);absolute=a.departure.clone().multiplyScalar((1-u)*(1-u)).addScaledVector(control,2*(1-u)*u).addScaledVector(approach,u*u);}
    else absolute=approach.clone().lerp(end,smoothstep((t-.82)/.18));
    const previous=new T.Vector3(...orbitalPosition(state.planet.id,state.days)).add(state.position);state.velocity.copy(absolute).sub(previous).divideScalar(Math.max(dt,.001));
    if(state.planet.id!==destination.id&&absolute.distanceTo(center)<bodyRadius(destination)+2500)changeReference(destination.id,absolute);else state.position.copy(absolute).sub(new T.Vector3(...orbitalPosition(state.planet.id,state.days)));
    const direction=t>.8?center.clone().sub(absolute):state.velocity.clone();if(direction.lengthSq()>1)state.quaternion.slerp(aimQuaternion(state.position,direction.normalize(),new T.Vector3(0,1,0)),Math.min(1,dt*3));
    $('travel-bar').style.width=`${t*100}%`;if(t>=1){if(state.planet.id!==destination.id)changeReference(destination.id,absolute);state.auto=null;state.velocity.set(0,0,0);$('travel-progress').hidden=true;state.visited.add(destination.id);renderStrip();persist();toast(`Has llegado a ${destination.name}.`);}return;
  }
  if(a.type==='landing'||a.type==='atmosphere'){
    const fromNormal=a.from.clone().normalize(),toNormal=a.to.clone().normalize(),rotation=new T.Quaternion().setFromUnitVectors(fromNormal,toNormal),partial=new T.Quaternion().slerp(rotation,s);
    state.position.copy(fromNormal).applyQuaternion(partial).multiplyScalar(T.MathUtils.lerp(a.from.length(),a.to.length(),s));
  }else state.position.lerpVectors(a.from,a.to,s);
  state.quaternion.slerpQuaternions(a.qFrom,a.qTo,s);
  const derivative=6*t*(1-t)/a.duration;state.velocity.copy(a.to).sub(a.from).multiplyScalar(derivative);
  $('travel-bar').style.width=`${t*100}%`;
  if(t>=1){const type=a.type;state.auto=null;state.velocity.set(0,0,0);$('travel-progress').hidden=true;state.visited.add(state.planet.id);
    if(type==='landing'){state.position.setLength(world.groundRadius(state.position.clone().normalize())+4.2);state.landed=true;state.landings.add(state.planet.id);expansion.event('land');expansion.audio.chime();toast(`Aterrizaje completado en ${state.planet.name}. Puedes salir de la nave.`);}
    else if(type==='atmosphere'){state.explored.add(state.planet.id);toast('Estás entre las nubes. Explora con cuidado y observa la presión.');}
    else if(type==='travel'){toast(`Has llegado a ${state.planet.name}. Tu exploración comienza aquí.`);}
    else toast('Ascenso completado. De nuevo entre las estrellas.');
    renderStrip();persist();
  }
}
function updatePhysics(dt){
  if(state.vehicle!=='ship'){expansion.surfacePhysics(dt,joy,holds);return;}expansion.checkReference();
  const p=state.planet,normal=state.position.clone().normalize(),radius=world.groundRadius(normal),alt=state.position.length()-radius;
  if(state.landed){state.velocity.set(0,0,0);setThrottle(0);return;}
  const lateral=(holds.has('right')?1:0)-(holds.has('left')?1:0)+joy.x,vertical=(holds.has('up')?1:0)-(holds.has('down')?1:0)-joy.y;
  if(holds.has('rollLeft')||holds.has('rollRight'))state.quaternion.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,0,1),((holds.has('rollLeft')?1:0)-(holds.has('rollRight')?1:0))*dt*.75));
  const acceleration=new T.Vector3(lateral*26,vertical*26,-state.throttle*65*(expansion.cruise?80:1)).applyQuaternion(state.quaternion);
  const gravity=localGravity(p,state.position.length());
  // Hover assistance counteracts local gravity; disabling it reveals a simplified local acceleration.
  if(!state.settings.assist)acceleration.addScaledVector(normal,-gravity);
  state.velocity.addScaledVector(acceleration,dt);
  const atmospheric=atmosphericDensity(p,alt),drag=(state.settings.assist?(expansion.cruise?.05:.65):.004)+atmospheric*.13;
  state.velocity.multiplyScalar(Math.exp(-drag*dt));
  const limit=alt<120?75:expansion.cruise?18000:850;if(state.velocity.length()>limit)state.velocity.setLength(limit);
  if(!p.rocky&&alt<25&&!state.settings.reducedMotion){const turbulence=new T.Vector3(Math.sin(state.elapsed*2),Math.cos(state.elapsed*1.7),Math.sin(state.elapsed*2.9)).multiplyScalar(dt*(p.id==='neptune'?3:1.5));state.velocity.add(turbulence);}
  state.position.addScaledVector(state.velocity,dt);
  if(p.rocky){
    const nn=state.position.clone().normalize(),ground=world.groundRadius(nn)+4.2;
    if(state.position.length()<ground){const speed=state.velocity.length(),vv=state.velocity.dot(nn),result=landingResult(speed,vv,state.settings.mode);state.position.copy(nn).multiplyScalar(ground);state.velocity.set(0,0,0);setThrottle(0);
      if(world.isWater(nn)){toast('Zona oceánica. La nave mantiene un vuelo estacionario; elige terreno firme.');state.position.addScaledVector(nn,10);}
      else if(!safeLanding(speed,vv,state.gear,Math.acos(clamp(new T.Vector3(0,1,0).applyQuaternion(state.quaternion).dot(nn),-1,1)))){state.shield=Math.max(0,state.shield-result.damage);state.position.addScaledVector(nn,12);toast(!state.gear?'Despliega el tren de aterrizaje antes de tocar tierra.':'Contacto inseguro: reduce velocidad y nivela la nave.');}
      else{state.landed=true;state.landings.add(p.id);expansion.event('land');const tangent=new T.Vector3(1,0,0).cross(nn).normalize();if(tangent.length()<.5)tangent.set(0,0,1);state.quaternion.copy(aimQuaternion(state.position,tangent,nn));toast(`Aterrizaje manual en ${p.name}.`);persist();}
    }
  }else{const depth=world.radius-state.position.length();if(depth>15){state.explored.add(p.id);if(state.settings.mode==='challenge')state.shield-=dt*.5;}if(depth>90||state.shield<20)startAscent(true);}
  const absolute=new T.Vector3(...orbitalPosition(p.id,state.days)).add(state.position),sunDistance=absolute.length();if(sunDistance<1300){absolute.setLength(1400);state.position.copy(absolute).sub(new T.Vector3(...orbitalPosition(p.id,state.days)));state.velocity.set(0,0,0);toast('Límite de aproximación al Sol. Protección térmica activa.');}
  if(state.position.length()>1000000){state.velocity.set(0,0,0);state.position.setLength(999000);toast('Límite de navegación. Selecciona un destino para regresar.');}
  if(state.shield<=0){state.shield=100;startAscent(true);}
}
function updateHud(now){
  if(now-lastHud<120)return;lastHud=now;const n=state.position.clone().normalize(),alt=state.position.length()-world.groundRadius(n),depth=Math.max(0,world.radius-state.position.length()),speed=state.velocity.length();
  $('speed-value').innerHTML=`${format(speed)} <small>m/s</small>`;$('speed-meter').style.width=`${clamp(speed/150*100,0,100)}%`;
  $('altitude-label').textContent=state.planet.rocky?'ALTITUD SIMULADA':depth>0?'PROFUNDIDAD SIMULADA':'SOBRE NIVEL DE NUBES';$('altitude-value').innerHTML=`${format(Math.abs(alt))} <small>m</small>`;
  $('vertical-value').textContent=`${format(state.velocity.dot(n),1)} m/s`;$('shield-value').textContent=`${format(state.shield)}%`;
  $('flight-state').textContent=state.paused?'EN PAUSA':state.vehicle!=='ship'?(state.vehicle==='walk'?'A PIE':'ROVER'):state.auto?({travel:'EN TRÁNSITO',landing:'DESCENDIENDO',atmosphere:'EXPLORANDO',ascent:'ASCENDIENDO'})[state.auto.type]:state.landed?'EN SUPERFICIE':depth>0&&!state.planet.rocky?'ENTRE NUBES':alt<140?'VUELO BAJO':'VUELO ESPACIAL';
  $('land-label').textContent=state.landed?'Aterrizaje completado':state.planet.rocky?'Descender al planeta':'Explorar atmósfera';$('land-btn').disabled=state.landed||!!state.auto;$('orbit-btn').disabled=!!state.auto;
  $('environment').hidden=state.planet.rocky||alt>120;if(!$('environment').hidden)$('environment').textContent=`Presión de juego: ${format(pressureAtDepth(state.planet.id,depth),1)} bar · Límite: 90 m de profundidad simulada`;
  const h=Math.floor(state.elapsed/3600),m=Math.floor(state.elapsed/60)%60,s=Math.floor(state.elapsed)%60;$('mission-clock').textContent=[h,m,s].map(v=>String(v).padStart(2,'0')).join(':');
  $('status-banner').hidden=!state.paused&&!state.landed&&!state.auto&&!(alt<35&&speed>25);
  $('status-banner').textContent=state.paused?'EXPEDICIÓN EN PAUSA · Pulsa continuar':state.landed?'ATERRIZAJE COMPLETADO · Explora la vista o vuelve a despegar':state.auto?'PILOTO AUTOMÁTICO · Puedes cancelar la maniobra':'PRECAUCIÓN · Reduce la velocidad cerca del terreno';
}
function frame(now){requestAnimationFrame(frame);const dt=Math.max(0,Math.min((now-last)/1000,1));last=now;
  const frozen=freeze()||expansion.photo||expansion.editing;if(!frozen){state.elapsed+=dt;saveClock+=dt;expansion.updateTime(dt);if(!world.overview){if(state.auto)updateAuto(dt);else{let remaining=dt;while(remaining>0){const step=Math.min(remaining,1/60);updatePhysics(step);remaining-=step;}}}if(saveClock>10){saveClock=0;persist();}}
  const n=state.position.clone().normalize(),alt=state.position.length()-world.groundRadius(n);expansion.tick(dt,frozen,joy,holds);world.adjustPerformance(dt*1000);
  if(!contextLost)world.update(frozen?0:dt,state.position,state.quaternion,state.velocity,state.throttle,alt,state.settings.reducedMotion);
  updateHud(now);
}

function start(resume=false){
  if(resume&&save){try{save=validatePortable(save);}catch{toast('La partida guardada no es válida. Se iniciará una expedición nueva.');save=null;}}
  if(resume&&save){setPlanet(ids.has(save.planet)?save.planet:'earth');state.position.fromArray(save.position);state.quaternion.fromArray(save.quaternion).normalize();state.visited=new Set(save.visited.filter(id=>ids.has(id)));state.visited.add(state.planet.id);state.landings=new Set(save.landed.filter(id=>ids.has(id)));state.explored=new Set(save.explored.filter(id=>ids.has(id)));state.elapsed=save.elapsed;state.photos=Number(save.photos)||0;state.shield=clamp(Number(save.shield)||100,1,100);state.landed=!!save.onGround;expansion.restore(save);if(state.vehicle==='ship')state.position.setLength(Math.max(state.position.length(),world.groundRadius(state.position.clone().normalize())+4.2));renderStrip();}
  state.started=true;state.paused=false;$('welcome').close();last=performance.now();persist();toast(resume?'Expedición recuperada. Bienvenido a bordo.':'Arrastra para orientar y mueve Propulsión para avanzar. Destinos te lleva a otros mundos.');
}
$('start-btn').onclick=()=>start();$('resume-btn').onclick=()=>start(true);$('resume-btn').hidden=!save;
$('map-btn').onclick=()=>showPanel('map');$('info-btn').onclick=()=>showPanel('info');$('help-btn').onclick=()=>showPanel('help');$('settings-btn').onclick=()=>showPanel('settings');$('journal-btn').onclick=()=>showPanel('journal');$('close-panel').onclick=closePanel;
panel.addEventListener('click',e=>{if(e.target===panel){const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel();}});
panel.addEventListener('close',()=>{resetInputs();last=performance.now();});
$('throttle').oninput=e=>{if(!state.auto&&!state.landed){setThrottle(e.target.value);if(Math.abs(state.throttle)>.1)expansion.event('thrust');}else setThrottle(0);};
function brake(){setThrottle(0);state.velocity.set(0,0,0);expansion.event('brake');toast('Propulsión detenida. Velocidad estabilizada.');}
$('zero-throttle').onclick=brake;$('brake-btn').onclick=brake;
$('stabilize-btn').onclick=()=>{state.settings.assist=!state.settings.assist;updateAssist();settingsSave();};
function updateAssist(){$('stabilize-btn').setAttribute('aria-pressed',state.settings.assist);$('stabilize-btn').innerHTML=`<span class="live-dot"></span> ESTABILIZACIÓN ${state.settings.assist?'ACTIVA':'DESACTIVADA'}`;}
$('land-btn').onclick=startLanding;$('orbit-btn').onclick=()=>startAscent();$('cancel-travel').onclick=cancelAuto;
$('pause-btn').onclick=()=>{state.paused=!state.paused;resetInputs();$('pause-btn').textContent=state.paused?'▶':'Ⅱ';$('pause-btn').setAttribute('aria-label',state.paused?'Continuar':'Pausar');persist();};
document.querySelector('.brand').onclick=e=>{e.preventDefault();persist();save=readSave(localStorage);$('resume-btn').hidden=!save;resetInputs();$('welcome').showModal();};
document.querySelectorAll('[data-hold]').forEach(b=>{const release=()=>{holds.delete(b.dataset.hold);b.classList.remove('active');};b.addEventListener('pointerdown',e=>{if(freeze()||state.auto)return;e.preventDefault();b.setPointerCapture(e.pointerId);holds.add(b.dataset.hold);b.classList.add('active');});b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);});
const pointers=new Map();let pinchDistance=0;
canvas.addEventListener('pointerdown',e=>{if(freeze())return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);if(pointers.size===2){const [a,b]=[...pointers.values()];pinchDistance=Math.hypot(a.x-b.x,a.y-b.y);drag=null;return;}if(e.pointerType==='touch'&&e.clientX<innerWidth*.35)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};});
canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const [a,b]=[...pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance>0)world.zoom=clamp(world.zoom*pinchDistance/d,.4,4);pinchDistance=d;return;}if(!drag||drag.id!==e.pointerId||freeze())return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.x=e.clientX;drag.y=e.clientY;const sensitivity=.0035*state.settings.sensitivity;if(Math.abs(dx)+Math.abs(dy)>3)expansion.event('orient');if(world.overview||look||state.landed||state.auto||world.cameraMode==='observe'){world.viewYaw-=dx*sensitivity;world.viewPitch=clamp(world.viewPitch-dy*sensitivity,-1.3,1.3);}else if(state.vehicle!=='ship'){const n=state.position.clone().normalize();state.quaternion.premultiply(new T.Quaternion().setFromAxisAngle(n,-dx*sensitivity));world.viewPitch=clamp(world.viewPitch-dy*sensitivity,-1.1,1.1);}else{const q=new T.Quaternion().setFromEuler(new T.Euler(-dy*sensitivity,-dx*sensitivity,0,'YXZ'));state.quaternion.multiply(q).normalize();}});
function releasePointer(e){pointers.delete(e.pointerId);if(drag?.id===e.pointerId)drag=null;if(pointers.size<2)pinchDistance=0;}
canvas.addEventListener('pointerup',releasePointer);canvas.addEventListener('pointercancel',releasePointer);canvas.addEventListener('lostpointercapture',releasePointer);
canvas.addEventListener('wheel',e=>{e.preventDefault();world.zoom=clamp(world.zoom+e.deltaY*.001,.4,4);},{passive:false});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
const joystick=$('joystick');joystick.addEventListener('pointerdown',e=>{if(freeze()||state.auto)return;e.preventDefault();joyPointer=e.pointerId;joystick.setPointerCapture(e.pointerId);if(expansion.layoutPointer(e))return;moveJoy(e);});
function moveJoy(e){if(joyPointer!==e.pointerId)return;if(expansion.layoutPointer(e))return;const r=joystick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width*.32),y=(e.clientY-r.top-r.height/2)/(r.height*.32),length=Math.max(1,Math.hypot(x,y));joy.x=x/length;joy.y=y/length;joystick.firstElementChild.style.transform=`translate(${joy.x*26}px,${joy.y*26}px)`;}
joystick.addEventListener('pointermove',moveJoy);function resetJoy(){joyPointer=null;joy.x=joy.y=0;joystick.firstElementChild.style.transform='';}joystick.addEventListener('pointerup',resetJoy);joystick.addEventListener('pointercancel',resetJoy);joystick.addEventListener('lostpointercapture',resetJoy);
$('look-btn').onclick=()=>{look=!look;$('look-btn').setAttribute('aria-pressed',look);if(!look){world.viewYaw=0;world.viewPitch=0;}};
$('camera-btn').onclick=()=>{const modes=['follow','cockpit','observe'];world.cameraMode=modes[(modes.indexOf(world.cameraMode)+1)%3];world.viewYaw=world.viewPitch=0;$('camera-label').textContent=({follow:'Seguimiento',cockpit:'Cabina',observe:'Observación'})[world.cameraMode];};
$('zoom-in').onclick=()=>world.zoom=clamp(world.zoom-.2,.4,4);$('zoom-out').onclick=()=>world.zoom=clamp(world.zoom+.2,.4,4);
$('photo-btn').onclick=()=>expansion.togglePhoto(!expansion.photo);
window.addEventListener('resize',()=>world.resize());window.addEventListener('blur',()=>{resetInputs();pointers.clear();setThrottle(0);persist();});document.addEventListener('visibilitychange',()=>{if(document.hidden){resetInputs();setThrottle(0);persist();}last=performance.now();});window.addEventListener('pagehide',persist);
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});window.addEventListener('appinstalled',()=>toast('Órbita ya está instalada. Nos vemos entre los planetas.'));
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();contextLost=true;resetInputs();persist();toast('La vista 3D se ha interrumpido. Esperando recuperación gráfica…');});canvas.addEventListener('webglcontextrestored',()=>{contextLost=false;world.setPlanet(state.planet);last=performance.now();toast('Vista 3D recuperada.');});
// Extra touch controls are ordinary buttons, so no motion sensor or keyboard is required.
const touchRoll=document.createElement('div');touchRoll.className='touch-roll';touchRoll.innerHTML='<button aria-label="Girar a la izquierda">↶</button><button aria-label="Frenar">■</button><button aria-label="Girar a la derecha">↷</button>';document.body.append(touchRoll);
touchRoll.children[1].onclick=brake;[0,2].forEach((index)=>{const b=touchRoll.children[index],key=index===0?'rollLeft':'rollRight';b.onpointerdown=e=>{if(freeze()||state.auto)return;b.setPointerCapture(e.pointerId);holds.add(key);};b.onpointerup=b.onpointercancel=b.onlostpointercapture=()=>holds.delete(key);});
updatePlanetUI();updateAssist();$('welcome').showModal();requestAnimationFrame(frame);
// Register after the first interactive frame, and never register while a user has cleared the download in this session.
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}),{once:true});
