import * as T from './vendor/three.module.js';
import {HISTORIC_SITES} from './catalog-v4.js';
import {SHIPS,illumination} from './systems.js';
import {toNormal} from './surface.js';
import {bodyRadius} from './simulation.js';
export function installMissionWorld(w){
 const station=new T.Group(),metal=new T.MeshStandardMaterial({color:'#c7d5dd',metalness:.65,roughness:.4}),blue=new T.MeshStandardMaterial({color:'#214a77',emissive:'#123559',emissiveIntensity:.5});
 const core=new T.Mesh(new T.CylinderGeometry(6,6,22,20),metal);core.rotation.z=Math.PI/2;station.add(core);
 for(const side of [-1,1]){const panel=new T.Mesh(new T.BoxGeometry(16,.3,30),blue);panel.position.set(side*22,0,0);station.add(panel);const beam=new T.Mesh(new T.BoxGeometry(40,1,1),metal);station.add(beam);}
 const port=new T.Mesh(new T.TorusGeometry(3,.5,8,24),new T.MeshStandardMaterial({color:'#bafa73',emissive:'#bafa73',emissiveIntensity:1}));port.position.z=14;station.add(port);w.scene.add(station);w.station=station;
 w.stationQuaternion=new T.Quaternion();w.stationPosition=()=>new T.Vector3(.25,.42,1).normalize().multiplyScalar(bodyRadius(w.planet)+360);w.dockPosition=()=>w.stationPosition().add(new T.Vector3(0,0,24));
 const historic=new T.Group();w.scene.add(historic);let previous=null,currentShip=null;
 const tail=new T.Mesh(new T.ConeGeometry(75,700,16,1,true),new T.MeshBasicMaterial({color:'#a8d3d4',transparent:true,opacity:.13,side:T.DoubleSide,depthWrite:false}));w.scene.add(tail);
 const cargo=new T.Group();for(const side of [-1,1]){const tank=new T.Mesh(new T.CylinderGeometry(1.2,1.2,8,12),metal.clone());tank.rotation.x=Math.PI/2;tank.position.set(side*4,1.5,1);cargo.add(tank);}w.ship.add(cargo);
 w.updateMissionWorld=(dt,position,quaternion,alt)=>{
  const c=w.campaign;if(!c)return;
  if(currentShip!==c.ship){const model=SHIPS.find(m=>m.id===c.ship)||SHIPS[0];w.ship.scale.fromArray(model.scale);cargo.visible=c.ship==='research';w.ship.traverse(o=>{if(o.material?.isMeshStandardMaterial&&o.material.metalness>.3)o.material.color.set(model.color);});currentShip=c.ship;}
  station.position.copy(w.stationPosition());station.visible=!w.overview;
  if(previous!==w.planet.id){w.clearGroup(historic);for(const site of HISTORIC_SITES.filter(s=>s.body===w.planet.id)){const g=new T.Group(),m=new T.MeshStandardMaterial({color:'#d6b56d',metalness:.4,roughness:.7}),platform=new T.Mesh(new T.BoxGeometry(4,1.2,4),m);platform.position.y=1.2;g.add(platform);if(site.body==='moon'){const cone=new T.Mesh(new T.ConeGeometry(2,3,6),m);cone.position.y=3;g.add(cone);}else for(const x of [-2,2])for(const z of [-1,1]){const wheel=new T.Mesh(new T.SphereGeometry(.6,8,6),new T.MeshStandardMaterial({color:'#282b31'}));wheel.position.set(x,.6,z);g.add(wheel);}const beacon=new T.Mesh(new T.CylinderGeometry(.1,.1,10,6),new T.MeshBasicMaterial({color:'#ffcf7c'}));beacon.position.y=5;g.add(beacon);g.userData.site=site;historic.add(g);}previous=w.planet.id;}
  historic.quaternion.copy(w.planetGroup.quaternion);historic.visible=!w.overview;for(const model of historic.children){const site=model.userData.site,n=new T.Vector3(...toNormal(site.lat,site.lon)),global=n.clone().applyQuaternion(w.planetGroup.quaternion);model.position.copy(n).multiplyScalar(w.groundRadius(global));model.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),n);}
  const sun=w.sunlight.position.clone().normalize(),normal=position.clone().normalize();
  if(c.solarHour!==null){const axis=new T.Vector3(0,1,0);if(Math.abs(axis.dot(normal))>.95)axis.set(1,0,0);const east=new T.Vector3().crossVectors(axis,normal).normalize(),angle=(c.solarHour-12)/24*Math.PI*2;sun.copy(normal).multiplyScalar(Math.cos(angle)).addScaledVector(east,Math.sin(angle));w.sunlight.position.copy(sun).multiplyScalar(10000);w.sun.position.copy(sun).multiplyScalar(12000);}
  w.localIllumination=illumination(normal,sun);const night=alt<180?w.localIllumination:1;
  w.ambient.intensity=.025+night*.24;w.fill.intensity=.015+night*.12;
  if(alt<160&&night<.3){w.scene.background.multiplyScalar(.1+night*2);if(w.scene.fog)w.scene.fog.color.multiplyScalar(.1+night*2);w.stars.material.opacity=Math.max(w.stars.material.opacity,.75-night);}
  tail.visible=w.planet.id==='comet67p'&&!w.overview&&alt>150;tail.position.copy(w.sunlight.position).normalize().multiplyScalar(-430);tail.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),w.sunlight.position.clone().normalize());
 };
}
