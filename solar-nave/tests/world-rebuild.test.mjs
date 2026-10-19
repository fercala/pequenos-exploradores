import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {Universe} from '../world.js';
import {SolarUniverse} from '../world-v2.js';
import {bodyById,rotationAngle} from '../simulation.js';
function fixture(id){const w=Object.create(SolarUniverse.prototype);Object.assign(w,{planet:id?bodyById(id):null,spinAngle:1.234,days:2,roverParked:new T.Vector3(40,150,20),roverParkedQuaternion:new T.Quaternion(0,.6,0,.8),textureCache:new Map(),texture:()=>new T.Texture(),groundRadius:()=>170,buildMeasuredTerrain(){},reprojectRocks(){}});return w;}
function withRebuild(fn){const original=Universe.prototype.setPlanet;Universe.prototype.setPlanet=function(p){this.planet=p;this.planetGroup=new T.Group();this.localGroup=new T.Group();this.body=new T.Mesh(new T.SphereGeometry(600,8,8));this.landingNormal=new T.Vector3(0,1,0);};try{fn();}finally{Universe.prototype.setPlanet=original;}}
test('Rebuilding the same world preserves the parked rover transform and terrain phase',()=>withRebuild(()=>{
 const w=fixture('moon'),position=w.roverParked.clone(),quaternion=w.roverParkedQuaternion.clone();w.setPlanet(bodyById('moon'));
 assert.deepEqual(w.roverParked?.toArray(),position.toArray());assert.deepEqual(w.roverParkedQuaternion?.toArray(),quaternion.toArray());assert.equal(w.spinAngle,1.234);
 const expected=new T.Quaternion().setFromEuler(new T.Euler(0,0,T.MathUtils.degToRad(w.planet.tilt))).multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),1.234));assert.ok(w.planetGroup.quaternion.angleTo(expected)<1e-7);
}));
test('Travelling to another world clears old rover anchors and uses the new phase',()=>withRebuild(()=>{
 const w=fixture('moon');w.setPlanet(bodyById('mars'));assert.equal(w.roverParked,null);assert.equal(w.roverParkedQuaternion,null);assert.equal(w.spinAngle,rotationAngle('mars',2));
}));
test('Initial loading and a missing phase use the normal rotation fallback',()=>withRebuild(()=>{
 for(const id of [null,'moon']){const w=fixture(id);w.spinAngle=undefined;w.setPlanet(bodyById('moon'));assert.equal(w.spinAngle,rotationAngle('moon',2));}
}));


test('Atlas camera responds to pitch and yaw at constant radius without reaching the poles',()=>{
 const original=Universe.prototype.update;Universe.prototype.update=function(){};
 try{
  const group=()=>new T.Group(),w=Object.create(SolarUniverse.prototype);Object.assign(w,{planet:bodyById('moon'),days:0,clockDays:0,overview:true,vehicle:'ship',spinAngle:0,timeScale:0,viewPitch:0,viewYaw:0,zoom:1,realScale:false,atlasFocus:'all',scene:Object.assign(new T.Scene(),{background:new T.Color()}),planetGroup:group(),localGroup:group(),remoteGroup:group(),overviewGroup:group(),overviewSun:group(),sun:group(),ship:group(),rover:group(),avatar:group(),stars:group(),probes:group(),remote:[],landingNormal:new T.Vector3(0,1,0),rawLandingNormal:new T.Vector3(0,1,0),landingPosition:new T.Vector3(),sunlight:{position:new T.Vector3(),target:group()},weather:Object.assign(group(),{material:{color:new T.Color()}}),camera:new T.PerspectiveCamera(),renderer:{render(){}},setOrientation(){},groundRadius:()=>170,updateExplorationLights(){}});
  const update=()=>w.update(0,new T.Vector3(0,0,1000),new T.Quaternion(),new T.Vector3(),0,800);
  update();const initial=w.camera.position.clone(),radius=initial.length();assert.ok(initial.distanceTo(new T.Vector3(0,99000,180000))<1e-7);
  w.viewPitch=.5;update();assert.ok(w.camera.position.y>initial.y);assert.ok(Math.abs(w.camera.position.length()-radius)<1e-7);
  w.viewPitch=-.8;update();assert.ok(w.camera.position.y<0);w.viewYaw=.6;update();assert.ok(w.camera.position.x>0);
  for(const pitch of [-100,100]){w.viewPitch=pitch;update();assert.ok(w.camera.position.toArray().every(Number.isFinite));assert.ok(Math.abs(w.camera.position.y)<radius);assert.ok(Math.abs(w.camera.position.length()-radius)<1e-7);}
 }finally{Universe.prototype.update=original;}
});
