import * as T from './vendor/three.module.js';
import {toNormal,toCoordinates} from './surface.js';
import {fieldGoals,walkingDistance} from './field-data.js';

export function createFieldExpedition(api,ex,panel){
 const {state:s,world:w,$,toast,persist,closePanel,resetInputs,setThrottle}=api;
 const kit=document.createElement('section');kit.id='field-kit';kit.hidden=true;kit.setAttribute('aria-label','Exploración de superficie');
 kit.innerHTML='<strong id="field-heading">EXPLORACIÓN DE SUPERFICIE</strong><p id="field-status"></p><div class="field-quick"><button id="field-primary">Salir a explorar</button><button id="field-secondary">Actividades</button><button id="field-launch" hidden>Despegar</button></div>';
 document.querySelector('.flight-controls').append(kit);
 const beacon=new T.Group(),pole=new T.Mesh(new T.CylinderGeometry(.08,.08,3,8),new T.MeshStandardMaterial({color:'#d2dbdf',metalness:.4}));pole.position.y=1.5;beacon.add(pole);
 const flag=new T.Mesh(new T.BoxGeometry(1.5,.8,.08),new T.MeshStandardMaterial({color:'#bafa73',emissive:'#4c702a',emissiveIntensity:.7}));flag.position.set(.75,2.5,0);beacon.add(flag);
 const ring=new T.Mesh(new T.TorusGeometry(.65,.07,6,20),new T.MeshBasicMaterial({color:'#bafa73'}));ring.rotation.x=Math.PI/2;ring.position.y=.12;beacon.add(ring);beacon.visible=false;w.scene.add(beacon);
 const entry=()=>ex.v4.campaign.fieldLog[s.planet.id]??={distance:0,beacon:null};
 const surface=()=>s.planet.rocky&&!s.auto&&['walk','rover'].includes(s.vehicle)&&s.position.length()-w.groundRadius(s.position.clone().normalize())<8&&ex.jumpHeight<.1;
 const shipDistance=()=>s.position.distanceTo(w.parkedPosition);
 let statusClock=0,previousBody=s.planet.id,movementVehicle=null;
 function goals(){return fieldGoals(ex.v4.campaign.fieldLog[s.planet.id],s.missions,s.planet.id);}
 function open(){
  if(!surface()&&!(s.vehicle==='ship'&&s.landed)){toast('Aterriza en terreno firme para iniciar una expedición de superficie.');return;}
  const progress=goals(),b=entry().beacon;
  panel(`Exploración · ${s.planet.name}`,`<p>Tu tripulante puede recorrer el terreno, examinarlo y dejar una señal para reconocer el lugar.</p><ol class="field-goals">${progress.map(g=>`<li>${g.done?'✓':'○'} ${g.text}</li>`).join('')}</ol><p id="field-detail"></p><div class="expedition-grid"><button id="field-scan">Examinar entorno</button><button id="field-sample">Tomar muestra</button><button id="field-beacon">${b?'Mover baliza aquí':'Colocar baliza'}</button><button id="field-find-beacon">Orientar hacia baliza</button><button id="field-ship">${shipDistance()<=35?'Volver a bordo':'Orientar hacia la nave'}</button><button id="field-rover">${s.vehicle==='rover'?'Bajar del rover':'Conducir rover'}</button><button id="field-photo">Fotografiar</button></div><p id="science-result" class="info-note" role="status">Camina con el joystick o la marcha. Arrastra para orientar al tripulante.</p><p class="compact-note">Excursión virtual: distancias comprimidas, traje protector y baliza ficticios. Las mediciones usan el catálogo educativo.</p>`);
  $('field-detail').textContent=`A pie: ${Math.floor(entry().distance)} m simulados · Nave a ${Math.round(shipDistance())} m.${b?` Baliza: ${b.lat.toFixed(2)}°, ${b.lon.toFixed(2)}°.`:''}`;
  $('field-scan').onclick=()=>activity('scan');$('field-sample').onclick=()=>activity('sample');$('field-beacon').onclick=placeBeacon;$('field-ship').onclick=returnToShip;$('field-find-beacon').onclick=findBeacon;$('field-find-beacon').disabled=!b;
  $('field-rover').onclick=()=>{closePanel();ex.changeVehicle(s.vehicle==='rover'?'walk':'rover');};
  $('field-photo').onclick=()=>{closePanel();ex.togglePhoto(true);};
 }
 function activity(kind){
  if(!surface()){toast('Sal de la nave y apóyate en el terreno para explorar.');return;}
  if(ex.science(kind)){open();$('science-result').textContent=kind==='sample'?'Muestra virtual añadida al cuaderno científico.':'Entorno examinado y añadido al cuaderno científico.';}
 }
 function placeBeacon(){
  if(!surface()||s.vehicle!=='walk'){toast('Baja a pie y apóyate en el suelo para colocar la baliza.');return;}
  entry().beacon=toCoordinates(w.localNormal(s.position.clone().normalize()));
  const b=entry().beacon;ex.v4.record('note','Baliza de exploración',`Señal virtual colocada en ${b.lat.toFixed(2)}°, ${b.lon.toFixed(2)}°. Marca de orientación del juego, no una instalación real.`);persist();open();$('science-result').textContent='Baliza colocada. Cierra el panel para verla junto al tripulante.';
 }
 function findBeacon(){
  if(!surface()||w.overview){toast('Apóyate en el suelo y termina cualquier maniobra para buscar la baliza.');return;}
  const b=ex.v4.campaign.fieldLog[s.planet.id]?.beacon;if(!b){toast('Coloca primero una baliza en este mundo.');return;}
  const normal=new T.Vector3(...toNormal(b.lat,b.lon)).applyQuaternion(w.planetGroup.quaternion),target=normal.clone().multiplyScalar(w.groundRadius(normal)),distance=s.position.distanceTo(target);
  if(distance<5){resetInputs();setThrottle(0);toast('Ya estás junto a la baliza.');return;}
  const n=s.position.clone().normalize(),direction=target.sub(s.position);direction.addScaledVector(n,-direction.dot(n));
  if(direction.lengthSq()<1e-8){toast('La baliza queda al otro lado del mundo. Consulta sus coordenadas en la mochila.');return;}
  s.quaternion.setFromRotationMatrix(new T.Matrix4().lookAt(s.position,s.position.clone().add(direction.normalize()),n));w.viewYaw=w.viewPitch=0;w.cameraMode='follow';resetInputs();setThrottle(0);closePanel();toast('Orientado hacia la baliza, a '+Math.round(distance)+' m simulados. Avanza para acercarte.');
 }
 function returnToShip(){
  if(!surface()){toast('Vuelve a la superficie antes de buscar la nave.');return;}
  if(shipDistance()<=35){closePanel();ex.changeVehicle('ship');return;}
  const n=s.position.clone().normalize(),direction=w.parkedPosition.clone().sub(s.position);direction.addScaledVector(n,-direction.dot(n));
  if(direction.lengthSq()<1e-8){toast('La nave queda al otro lado del mundo. Usa el mapa de superficie para orientarte.');return;}
  s.quaternion.setFromRotationMatrix(new T.Matrix4().lookAt(s.position,s.position.clone().add(direction.normalize()),n));w.viewYaw=w.viewPitch=0;w.cameraMode='follow';resetInputs();setThrottle(0);closePanel();toast(`Orientado hacia la nave, a ${Math.round(shipDistance())} m simulados. Avanza para acercarte.`);
 }
 $('field-primary').onclick=()=>{if(s.vehicle==='ship')ex.changeVehicle('walk');else if(s.vehicle==='walk')ex.jump();else{closePanel();ex.changeVehicle('walk');}};
 $('field-secondary').onclick=open;$('field-launch').onclick=()=>api.startAscent();
 return {open,beacon,
  walkStep(before,after){if(s.vehicle==='walk'&&s.planet.rocky){const distance=walkingDistance(before.toArray(),after.toArray());if(distance<1)entry().distance=Math.min(1e7,entry().distance+distance);}},
  tick(dt){
   if(movementVehicle!==s.vehicle){movementVehicle=s.vehicle;const suffix=s.vehicle==='walk'?'a pie':s.vehicle==='rover'?'en rover':null;document.querySelector('[data-hold="up"]')?.setAttribute('aria-label',suffix?'Avanzar '+suffix:'Ascender');document.querySelector('[data-hold="down"]')?.setAttribute('aria-label',suffix?'Retroceder '+suffix:'Descender');}

   const visible=s.started&&!w.overview&&!ex.photo&&s.planet.rocky&&((s.vehicle==='ship'&&s.landed)||['walk','rover'].includes(s.vehicle));kit.hidden=!visible;
   document.body.classList.toggle('field-active',visible);document.body.classList.toggle('on-foot',s.vehicle==='walk');
   if(previousBody!==s.planet.id){previousBody=s.planet.id;beacon.visible=false;}
   const b=ex.v4.campaign.fieldLog[s.planet.id]?.beacon;beacon.visible=!!b&&!w.overview&&!ex.photo;
   if(b){const n=new T.Vector3(...toNormal(b.lat,b.lon)).applyQuaternion(w.planetGroup.quaternion);beacon.position.copy(n).multiplyScalar(w.groundRadius(n));beacon.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),n);}
   statusClock+=dt;if(statusClock<.2)return;statusClock=0;
   if(!visible){if(s.vehicle==='ship'){$('throttle-title').textContent='PROPULSIÓN';$('throttle').setAttribute('aria-label','Potencia de propulsión');}return;}
   const foot=s.vehicle==='walk',ship=s.vehicle==='ship';$('field-heading').textContent=ship?'TU TRIPULANTE ESTÁ LISTO':foot?'EXPLORACIÓN A PIE':'EXPLORACIÓN EN ROVER';
   const count=goals().filter(g=>g.done).length;$('field-status').textContent=ship?'Baja a caminar y hacer actividades.':`Nave ${Math.round(shipDistance())} m${b?' · Baliza '+Math.round(s.position.distanceTo(beacon.position))+' m':''} · ${count}/4 objetivos`;
   $('field-primary').textContent=ship?'Salir a explorar':foot?'Saltar':'Bajar del rover';
   $('field-secondary').textContent='Mochila y actividades';$('field-launch').hidden=!ship;
   $('throttle-title').textContent=ship?'PROPULSIÓN':foot?'CAMINAR':'CONDUCIR';$('throttle').setAttribute('aria-label',ship?'Potencia de propulsión':foot?'Marcha del tripulante':'Marcha del rover');
  }
 };
}
