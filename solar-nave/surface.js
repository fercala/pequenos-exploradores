import {clamp,terrainHeight} from './core.js';
import {bodyRadius} from './simulation.js';
export const toNormal=(lat,lon)=>{const a=lat*Math.PI/180,b=lon*Math.PI/180;return [Math.cos(a)*Math.cos(b),Math.sin(a),-Math.cos(a)*Math.sin(b)];};
export const toCoordinates=n=>({lat:Math.asin(clamp(n.y,-1,1))*180/Math.PI,lon:Math.atan2(-n.z,n.x)*180/Math.PI});
export const POINTS=[
 {body:'moon',name:'Mar de la Tranquilidad',lat:8.5,lon:31.4,note:'Llanura de antiguas lavas basálticas.'},
 {body:'moon',name:'Cráter Tycho',lat:-43.31,lon:-11.36,note:'Cráter de impacto con un extenso sistema de rayos.'},
 {body:'mars',name:'Monte Olimpo',lat:18.65,lon:-133.8,note:'Gran volcán de escudo de Marte.'},
 {body:'mars',name:'Valles Marineris',lat:-13.9,lon:-59.2,note:'Extenso sistema de cañones.'},
 {body:'mercury',name:'Cuenca Caloris',lat:30.5,lon:162.7,note:'Gran cuenca de impacto.'},
 {body:'venus',name:'Maxwell Montes',lat:65.2,lon:3.3,note:'Región montañosa de Ishtar Terra.'},
 {body:'earth',name:'Sahara',lat:24,lon:13,note:'Región desértica del norte de África.'},
 {body:'europa',name:'Región de Conamara',lat:9.7,lon:-86.9,note:'Terreno caótico de hielo; paisaje cercano ilustrativo.'},
 {body:'titan',name:'Shangri-La',lat:-10,lon:-165,note:'Región de dunas; paisaje cercano ilustrativo.'}
];
export function sampleRegion(region,lat,lon){
 if(lat<region.south||lat>region.north||lon<region.west||lon>region.east)return null;
 const x=clamp((lon-region.west)/(region.east-region.west)*(region.width-1),0,region.width-1),y=clamp((region.north-lat)/(region.north-region.south)*(region.height-1),0,region.height-1),i=Math.min(Math.floor(x),region.width-2),j=Math.min(Math.floor(y),region.height-2),u=x-i,v=y-j,a=region.values,k=j*region.width+i;
 return (a[k]*(1-u)+a[k+1]*u)*(1-v)+(a[k+region.width]*(1-u)+a[k+region.width+1]*u)*v;
}
export function surfaceHeight(p,n,regions=[]){
 const base=terrainHeight(p.id,n.x,n.y,n.z)*bodyRadius(p)/600,c=toCoordinates(n);
 for(const r of regions.filter(r=>r.body===p.id)){const elevation=sampleRegion(r,c.lat,c.lon);if(elevation===null)continue;const edge=Math.min((c.lon-r.west)/(r.east-r.west),(r.east-c.lon)/(r.east-r.west),(c.lat-r.south)/(r.north-r.south),(r.north-c.lat)/(r.north-r.south));const blend=clamp(edge/.08,0,1);return base*(1-blend)+elevation/1000*bodyRadius(p)/p.radius*blend;}
 return base;
}
export function assessLanding({rocky,water,slope,roughness,speed,vertical,gear,tilt,altitude,obstacle=false}){
 const reasons=[];if(!rocky)reasons.push('Sin suelo sólido');if(water)reasons.push('Agua');if(slope>12)reasons.push('Pendiente elevada');if(roughness>1.8)reasons.push('Terreno irregular');if(obstacle)reasons.push('Obstáculo cercano');if(!gear)reasons.push('Desplegar tren');if(speed>12||Math.abs(vertical)>6)reasons.push('Reducir velocidad');if(tilt>.35)reasons.push('Nivelar nave');if(altitude>150)reasons.push('Acercarse a menos de 150 u');return {safe:reasons.length===0,reasons};
}
