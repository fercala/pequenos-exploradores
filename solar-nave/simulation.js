import {EXTRA_BODIES} from './catalog-v4.js';
import {cleanCampaign} from './systems.js';
import {PLANETS} from './data.js';
import {clamp,terrainHeight} from './core.js';

const moon=(id,name,parent,radius,gravity,color,year,extra)=>({id,name,parent,radius,gravity,color,year,rocky:true,kind:'Luna',au:PLANETS.find(p=>p.id===parent).au,rotation:year+' · síncrona',tilt:0,pressure:'Exosfera muy tenue',atmosphere:'Sin atmósfera densa',temperature:'Variable según iluminación',surface:'Región de exploración',...extra});
export const MOONS=[
 moon('moon','Luna','earth',1737.4,1.62,'#bdbab2','27,32 días',{description:'Cráteres, mares oscuros y un cielo sin aire.',detail:'La Luna muestra siempre aproximadamente la misma cara a la Tierra. Sus mares oscuros son antiguas llanuras de lava. El mapa orbital usa una textura cartográfica; el relieve usa datos LOLA en la región de Tycho y terreno generado fuera de ella.',temperature:'≈−173 a 127 °C · extremos',source:'https://science.nasa.gov/moon/facts/'}),
 moon('europa','Europa','jupiter',1560.8,1.315,'#c7baa0','3,55 días',{description:'Una corteza de hielo surcada por fracturas.',detail:'La superficie helada de Europa está cruzada por fracturas. Hay fuertes evidencias de un océano bajo la corteza. Esta versión no permite acceder al océano ni afirma haber encontrado vida. El relieve es ilustrativo.',temperature:'≈−160 °C · superficie de referencia',atmosphere:'Exosfera extremadamente tenue de oxígeno',source:'https://science.nasa.gov/jupiter/moons/europa/'}),
 moon('titan','Titán','saturn',2574.7,1.352,'#c6a36c','15,95 días',{description:'Bruma naranja, dunas y lagos de hidrocarburos.',detail:'Una atmósfera densa, principalmente de nitrógeno, oculta el suelo. Sus lagos y mares superficiales contienen hidrocarburos líquidos. El paisaje y los lagos son una recreación, no una cartografía de sus costas.',temperature:'≈−179 °C · superficie',pressure:'≈1,5 bar en superficie',atmosphere:'Nitrógeno con metano',source:'https://science.nasa.gov/saturn/moons/titan/facts/'})
];
export const BODIES=[...PLANETS,...MOONS,...EXTRA_BODIES];
export const bodyById=id=>BODIES.find(p=>p.id===id)||PLANETS[2];
export const bodyRadius=p=>BODIES.find(b=>b.id===(typeof p==='string'?p:p.id))?.playRadius||({mercury:300,venus:580,earth:600,mars:400,jupiter:2000,saturn:1700,uranus:1050,neptune:1000,moon:170,europa:155,titan:245})[typeof p==='string'?p:p.id]||600;
const periods=[87.97,224.7,365.26,686.98,4332.59,10759.22,30688.5,60182];
const spin=[58.646,-243.025,.99727,1.02596,.41354,.444,-.71833,.67125];
const orbits=[7000,10500,15000,22000,40000,55000,75000,100000];
export function orbitalPosition(id,days=0,scale='play'){
 const p=bodyById(id),i=PLANETS.findIndex(b=>b.id===id);
 if(p.parent){const parent=orbitalPosition(p.parent,days,scale),period=p.periodDays||{moon:27.32,europa:3.551,titan:15.945}[id],distance=scale==='real'?((p.moonDistanceKm||{moon:384400,europa:671100,titan:1221870}[id])/149597870.7*10000):(p.playDistance||{moon:2400,europa:4200,titan:3900}[id]);const a=.6+days/period*Math.PI*2;return [parent[0]+Math.cos(a)*distance,parent[1]+Math.sin(a)*distance*.08,parent[2]+Math.sin(a)*distance];}
 const distance=scale==='real'?p.au*10000:(p.playOrbit||orbits[i]),angle=-2.4+(i>=0?i*.2:BODIES.indexOf(p)*.3)+days/(p.periodDays||periods[i])*Math.PI*2;
 return [Math.cos(angle)*distance,Math.sin(angle)*distance*.015,Math.sin(angle)*distance];
}
export function rotationAngle(id,days){const i=PLANETS.findIndex(p=>p.id===id);const period=bodyById(id).spinDays||(i>=0?spin[i]:({moon:27.32,europa:3.551,titan:15.945}[id]));return days/period*Math.PI*2;}
export function scientificRadius(p){return p.radius/149597870.7*10000;}
export function atmosphericDensity(p,alt){const base=({venus:8,earth:1,mars:.02,titan:1.7,jupiter:2,saturn:1.3,uranus:1.6,neptune:2})[p.id]||0;return base*Math.exp(-Math.max(0,alt)/45);}
export function entryHeating(p,alt,speed){return clamp(atmosphericDensity(p,alt)*Math.pow(Math.max(0,speed)/65,3)*22,0,100);}
export function localGravity(p,distance){return p.gravity*Math.pow(bodyRadius(p)/Math.max(bodyRadius(p)*.7,distance),2);}
export function terrainRadius(p,n){return bodyRadius(p)+terrainHeight(p.id,n.x,n.y,n.z);}
export function safeLanding(speed,vertical,gear,tilt){return gear&&speed<=12&&Math.abs(vertical)<=6&&tilt<.35;}
export function tutorialAdvance(stage,event){const expected=['orient','thrust','brake','destination','land'];return event===expected[stage]?Math.min(stage+1,5):stage;}
export const TUTORIAL=['Arrastra en la escena para orientar la nave.','Mueve Propulsión para encender los motores.','Pulsa DETENER para frenar.','Abre Destinos y elige un mundo.','Desciende y completa tu primer aterrizaje.'];
export function missionList(p){return p.rocky?[{key:'scan',title:'Medir el entorno',hint:'Vuela a menos de 150 m simulados y mide.'},{key:'sample',title:'Tomar una muestra',hint:'Aterriza y sal a pie para tomar una muestra.'},{key:'rover',title:'Recorrer 100 m con el rover',hint:'Despliega el rover junto a la nave.'},{key:'photo',title:'Fotografiar este mundo',hint:'Abre el modo fotografía y captura una imagen.'}]:[{key:'scan',title:'Medir la atmósfera',hint:'Desciende hasta la capa de nubes y mide.'},{key:'probe',title:'Desplegar una sonda',hint:'Despliega una sonda dentro de la atmósfera.'},{key:'photo',title:'Fotografiar este mundo',hint:'Abre el modo fotografía y captura una imagen.'}];}
export function missionAllowed(key,context){if(key==='scan')return context.altitude<150&&!context.auto;if(key==='sample')return context.rocky&&context.vehicle==='walk'&&!context.auto&&Number.isFinite(context.altitude)&&context.altitude>=0&&context.altitude<=2.1&&Number.isFinite(context.jumpHeight??0)&&(context.jumpHeight??0)>=0&&(context.jumpHeight??0)<.01;if(key==='probe')return !context.rocky&&context.altitude<0&&!context.auto;return true;}
export function cleanRoverDistances(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return {};
 return Object.fromEntries(BODIES.filter(p=>p.rocky&&typeof raw[p.id]==='number'&&Number.isFinite(raw[p.id])&&raw[p.id]>=0).map(p=>[p.id,Math.min(raw[p.id],1e7)]));
}
export function cleanRoverParking(raw,planet){
 const finite=(a,n,max)=>Array.isArray(a)&&a.length===n&&a.every(x=>typeof x==='number'&&Number.isFinite(x)&&Math.abs(x)<=max);
 if(!raw||raw.planet!==planet||!BODIES.some(p=>p.id===planet&&p.rocky)||!finite(raw.position,3,1e6)||Math.hypot(...raw.position)<1||!finite(raw.quaternion,4,1.1)||Math.abs(Math.hypot(...raw.quaternion)-1)>.02)return null;
 return {planet,position:[...raw.position],quaternion:[...raw.quaternion]};
}
export function validatePortable(raw){
 if(!raw||typeof raw!=='object'||![1,2].includes(raw.version)||!BODIES.some(p=>p.id===raw.planet))throw Error('La partida no pertenece a una versión compatible de Órbita.');
 const vector=(v,count,max)=>Array.isArray(v)&&v.length===count&&v.every(n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<=max);
 if(!vector(raw.position,3,1000000)||Math.hypot(...raw.position)<1||!vector(raw.quaternion,4,1.1)||Math.abs(Math.hypot(...raw.quaternion)-1)>.02)throw Error('La posición o la orientación de la partida no son válidas.');
 for(const k of ['visited','landed','explored'])if(!Array.isArray(raw[k])||raw[k].length>30||raw[k].some(id=>!BODIES.some(p=>p.id===id)))throw Error('El progreso contiene destinos desconocidos.');
 if(!Number.isFinite(raw.elapsed)||raw.elapsed<0||raw.elapsed>1e10)throw Error('El tiempo de la partida no es válido.');
 const vehicle=['ship','walk','rover','eva'].includes(raw.vehicle)?raw.vehicle:'ship';if(['walk','rover'].includes(vehicle)&&!bodyById(raw.planet).rocky)throw Error('No se puede explorar a pie un gigante gaseoso.');
 if(vehicle!=='ship'&&(!vector(raw.parkedPosition,3,1000000)||Math.hypot(...raw.parkedPosition)<1))throw Error('Falta la posición de la nave estacionada.');
 const savedMissions=new Set(Array.isArray(raw.missions)?raw.missions:[]),missions=BODIES.flatMap(p=>missionList(p).map(m=>p.id+':'+m.key)).filter(id=>savedMissions.has(id));
 return {gear:raw.gear!==false,roverDistances:cleanRoverDistances(raw.roverDistances),roverParking:cleanRoverParking(raw.roverParking,raw.planet),campaign:cleanCampaign(raw.campaign,BODIES.map(p=>p.id)),version:2,planet:raw.planet,position:[...raw.position],quaternion:[...raw.quaternion],visited:[...new Set(raw.visited)],landed:[...new Set(raw.landed)],explored:[...new Set(raw.explored)],elapsed:raw.elapsed,photos:clamp(Number(raw.photos)||0,0,100000),shield:clamp(Number(raw.shield)||100,1,100),onGround:!!raw.onGround&&bodyById(raw.planet).rocky,vehicle,parkedPosition:vector(raw.parkedPosition,3,1000000)?[...raw.parkedPosition]:null,parkedQuaternion:vector(raw.parkedQuaternion,4,1.1)&&Math.abs(Math.hypot(...raw.parkedQuaternion)-1)<.02?raw.parkedQuaternion:null,spinAngle:clamp(Number(raw.spinAngle)||0,-10000000,10000000),days:clamp(Number(raw.days)||0,-1000000,1000000),missions,tutorial:Math.trunc(clamp(Number(raw.tutorial)||0,0,5)),roverDistance:clamp(Number(raw.roverDistance)||0,0,1e7)};
}
