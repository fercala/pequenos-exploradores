import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {createExpansion} from '../expansion.js';
import {bodyById,bodyRadius,validatePortable} from '../simulation.js';
function fixture(){
 const elements=new Map(),make=()=>({style:{setProperty(){}},classList:{toggle(){}},dataset:{},append(){},prepend(){},insertAdjacentHTML(){},setAttribute(){},querySelectorAll:()=>[]});
 const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 globalThis.document={createElement:make,body:make(),documentElement:make(),querySelector:()=>make()};
 const planet=bodyById('moon'),r=bodyRadius(planet),s={planet,settings:{},position:new T.Vector3(0,r+1.7,0),velocity:new T.Vector3(),quaternion:new T.Quaternion(),landed:false,auto:null};
 const w={planet,scene:new T.Scene(),ship:new T.Group(),planetGroup:new T.Group(),parkedPosition:new T.Vector3(0,r+4.2,0),parkedQuaternion:new T.Quaternion(),groundRadius:()=>r,isWater:()=>false,setOrientation(){}};
 const messages=[],ex=createExpansion({state:s,world:w,$,toast:t=>messages.push(t),persist(){},resetInputs(){},brake(){s.velocity.set(0,0,0);s.throttle=0;},closePanel(){},settingsSave(){}});
 Object.assign(s,{visited:new Set(['moon']),landings:new Set(['moon']),explored:new Set(),elapsed:10,photos:0,shield:100});s.vehicle='walk';s.throttle=0;return {s,w,ex,r,messages};
}
test('Boarding the rover during a jump discards airborne momentum and keeps normal rover footing',()=>{
 const {s,ex,r}=fixture();ex.jump();ex.surfacePhysics(.2,{x:0,y:0},new Set());assert.ok(ex.jumpHeight>0);assert.ok(ex.jumpSpeed>0);
 ex.changeVehicle('rover');assert.equal(s.vehicle,'rover');assert.equal(ex.jumpHeight,0);assert.equal(ex.jumpSpeed,0);
 ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.ok(Math.abs(s.position.length()-(r+1))<1e-9);
});
test('Returning to the ship and leaving again cannot resume an old jump',()=>{
 const {s,ex,r}=fixture();ex.jump();ex.surfacePhysics(.2,{x:0,y:0},new Set());ex.changeVehicle('ship');assert.equal(s.vehicle,'ship');assert.equal(ex.jumpSpeed,0);assert.equal(ex.jumpHeight,0);
 ex.changeVehicle('walk');ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.equal(s.vehicle,'walk');assert.ok(Math.abs(s.position.length()-(r+1.7))<1e-9);
 ex.jump();ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.ok(ex.jumpHeight>0);
});
test('A rejected vehicle change preserves the ongoing jump',()=>{
 const {s,w,ex}=fixture();w.parkedPosition.set(170,0,0);ex.jump();ex.surfacePhysics(.2,{x:0,y:0},new Set());const height=ex.jumpHeight,speed=ex.jumpSpeed;
 ex.changeVehicle('rover');assert.equal(s.vehicle,'walk');assert.equal(ex.jumpHeight,height);assert.equal(ex.jumpSpeed,speed);
 ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.ok(ex.jumpHeight>height);
});

test('Distance accumulated on other worlds never completes the local rover mission',()=>{
 const {s,ex}=fixture();s.roverDistance=1000;ex.changeVehicle('rover');ex.surfacePhysics(.1,{x:0,y:0},new Set());
 assert.equal(s.missions.has('moon:rover'),false);
 s.throttle=1;for(let i=0;i<100;i++)ex.surfacePhysics(.1,{x:0,y:0},new Set());
 assert.equal(s.missions.has('moon:rover'),false);
 for(let i=0;i<35;i++)ex.surfacePhysics(.1,{x:0,y:0},new Set());
 assert.equal(s.missions.has('moon:rover'),true);
 s.planet=bodyById('mars');s.throttle=0;ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.equal(s.missions.has('mars:rover'),false);
});

test('Rover partials survive snapshot, portable validation and controller restoration independently',()=>{
 const {s,ex}=fixture();ex.changeVehicle('rover');s.throttle=1;for(let i=0;i<40;i++)ex.surfacePhysics(.1,{x:0,y:0},new Set());s.roverDistances.earth=75;
 const raw=ex.snapshot(),portable=validatePortable(JSON.parse(JSON.stringify(raw))),copy=fixture();copy.ex.restore(portable);
 assert.ok(copy.s.roverDistances.moon>30&&copy.s.roverDistances.moon<40);assert.equal(copy.s.roverDistances.earth,75);
 copy.s.roverDistances.moon=0;assert.ok(raw.roverDistances.moon>30);
 const old={...portable};delete old.roverDistances;old.roverDistance=1234;old.missions=['earth:rover'];copy.ex.restore(old);
 assert.deepEqual(copy.s.roverDistances,{});assert.equal(copy.s.roverDistance,1234);assert.ok(copy.s.missions.has('earth:rover'));
});
