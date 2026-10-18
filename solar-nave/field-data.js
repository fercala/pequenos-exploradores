import {clamp} from './core.js';

export function cleanFieldLog(raw,ids){
 const result={};
 if(!raw||typeof raw!=='object')return result;
 for(const id of ids){
  if(['jupiter','saturn','uranus','neptune'].includes(id))continue;
  const item=raw[id];if(!item||typeof item!=='object')continue;
  const distance=typeof item.distance==='number'&&Number.isFinite(item.distance)?clamp(item.distance,0,1e7):0;
  const b=item.beacon,beacon=b&&typeof b.lat==='number'&&Number.isFinite(b.lat)&&Math.abs(b.lat)<=90&&typeof b.lon==='number'&&Number.isFinite(b.lon)&&Math.abs(b.lon)<=180?{lat:b.lat,lon:b.lon}:null;
  result[id]={distance,beacon};
 }
 return result;
}

// Arc distance ignores vertical jumping and terrain height changes. Units are the game's compressed metres.
export function walkingDistance(a,b){
 const ra=Math.hypot(...a),rb=Math.hypot(...b);if(!ra||!rb)return 0;
 const cross=Math.hypot(a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]);
 const dot=a.reduce((sum,x,i)=>sum+x*b[i],0);
 const d=Math.atan2(cross,dot)*(ra+rb)/2;
 return Number.isFinite(d)?d:0;
}

export function fieldGoals(entry,missions,body){
 return [{id:'walk',done:(entry?.distance||0)>=50,text:`Recorrer 50 m a pie · ${Math.min(50,Math.floor(entry?.distance||0))}/50`},
 {id:'scan',done:missions.has(body+':scan'),text:'Examinar el entorno'},
 {id:'sample',done:missions.has(body+':sample'),text:'Tomar una muestra a pie'},
 {id:'beacon',done:!!entry?.beacon,text:'Señalar el lugar con una baliza'}];
}

export function animateWalker(avatar,speed,dt,reducedMotion=false,walking=true){
 const rig=avatar.userData.walkRig;if(!rig)return;
 rig.phase+=Math.max(0,dt)*Math.min(8,Math.max(0,speed)*2.4);
 const swing=walking?Math.min(1,Math.max(0,speed)/3)*(reducedMotion?.15:.65):0;
 for(let i=0;i<2;i++){
  const angle=Math.sin(rig.phase+i*Math.PI)*swing;
  rig.legs[i].rotation.x=angle;rig.arms[i].rotation.x=-angle*.7;
 }
}
