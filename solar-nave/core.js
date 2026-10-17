export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const smoothstep=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
export const lerp=(a,b,t)=>a+(b-a)*t;
export function random(seed=42){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
export function noise(x,y,z){return Math.sin(x*2.3+Math.sin(z*3.2))*Math.cos(y*3.1-z*.7)*.5+Math.sin(x*7.7+y*4.1)*Math.cos(z*5.9-y)*.25+Math.sin(x*17.3-z*11.2+y*6.1)*.125;}
export function terrainHeight(id,x,y,z){
  const n=noise(x,y,z),fine=noise(x*5+11,y*5,z*5)*.6;
  if(id==='earth')return Math.max(-3,(n+.08)*26)+Math.max(0,n-.25)*45+fine*1.5;
  if(id==='mars')return n*19+fine*3+Math.sin(x*95+z*12)*.6;
  if(id==='venus')return n*14+fine*3;
  if(id==='mercury')return n*12+fine*3;
  if(id==='moon')return n*7+fine*1.5;
  if(id==='europa')return n*2+Math.abs(Math.sin(x*45+z*28+y*19))*.8;
  if(id==='comet67p')return -150+190*Math.abs(x)+n*20;
  if(id==='vesta')return n*32+fine*4;
  if(['ganymede','enceladus','pluto','ceres'].includes(id))return n*(id==='enceladus'?3:9)+fine;
  if(id==='titan')return n*8+Math.sin(x*85+z*31)*.5;
  return 0;
}
export function isOcean(id,x,y,z){return id==='earth'&&noise(x,y,z)<-.08;}
export function surfaceRadius(id,n){return 600+terrainHeight(id,n.x,n.y,n.z);}
export function safePosition(id,point,clearance=2.8){
  const length=Math.hypot(...point),n=length>0?point.map(v=>v/length):[0,0,1];
  const r=600+terrainHeight(id,...n)+clearance;
  return {position:length<r?n.map(v=>v*r):[...point],collided:length<r};
}
const STORAGE_KEY='orbita-solar-v1';
export function readSave(storage){try{const p=JSON.parse(storage.getItem(STORAGE_KEY));return validateSave(p)?p:null;}catch{return null;}}
export function validateSave(p){return !!p&&[1,2].includes(p.version)&&typeof p.planet==='string'&&Array.isArray(p.position)&&p.position.length===3&&p.position.every(Number.isFinite)&&Math.hypot(...p.position)>1&&Math.hypot(...p.position)<1000000&&Array.isArray(p.quaternion)&&p.quaternion.length===4&&p.quaternion.every(Number.isFinite)&&Math.hypot(...p.quaternion)>.5&&Math.hypot(...p.quaternion)<1.5&&Array.isArray(p.visited)&&Array.isArray(p.landed)&&Array.isArray(p.explored)&&Number.isFinite(p.elapsed);}
export function writeSave(storage,state){try{storage.setItem(STORAGE_KEY,JSON.stringify({...state,version:state.version||1}));return true;}catch{return false;}}
export function pressureAtDepth(id,depth){const base=id==='jupiter'?1:id==='saturn'?.8:.5;return base*Math.exp(clamp(depth,0,120)/30);}
export function landingResult(speed,vertical,mode){const impact=speed>12||Math.abs(vertical)>6;return {impact,damage:impact&&mode==='challenge'?clamp((speed-8)*2+Math.abs(vertical)*3,0,80):0};}
