import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {createExpansion} from '../expansion.js';
import {bodyById,bodyRadius,validatePortable} from '../simulation.js';
function fixture(settings={}){
 const elements=new Map(),make=()=>({style:{setProperty(){}},classList:{toggle(){}},dataset:{},append(){},prepend(){},insertAdjacentHTML(){},setAttribute(){},querySelectorAll:()=>[]});
 const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 globalThis.document={createElement:make,body:make(),documentElement:make(),querySelector:()=>make()};
 const planet=bodyById('moon'),r=bodyRadius(planet),s={planet,settings,position:new T.Vector3(0,r+1.7,0),velocity:new T.Vector3(),quaternion:new T.Quaternion(),landed:false,auto:null};
 const w={planet,scene:new T.Scene(),ship:new T.Group(),planetGroup:new T.Group(),parkedPosition:new T.Vector3(0,r+4.2,0),parkedQuaternion:new T.Quaternion(),groundRadius:()=>r,isWater:()=>false,setOrientation(){}};
 const messages=[],settingsWrites=[],ex=createExpansion({state:s,world:w,$,toast:t=>messages.push(t),persist(){},resetInputs(){},brake(){s.velocity.set(0,0,0);s.throttle=0;},closePanel(){},settingsSave(){settingsWrites.push(structuredClone(s.settings));}});
 Object.assign(s,{visited:new Set(['moon']),landings:new Set(['moon']),explored:new Set(),elapsed:10,photos:0,shield:100});s.vehicle='walk';s.throttle=0;return {s,w,ex,r,messages,$,settingsWrites};
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

test('Orbital clock preference restores pause and every supported speed and rejects invalid saved rates',()=>{
 for(const orbitTime of [0,1,60,3600]){const {s,ex}=fixture({orbitTime});assert.equal(s.timeScale,orbitTime);const before=s.days;ex.updateTime(2);assert.equal(s.days-before,2*orbitTime/86400);}
 for(const orbitTime of [undefined,null,'0',-1,12,NaN,Infinity])assert.equal(fixture({orbitTime}).s.timeScale,60);
});
test('Changing the clock selector saves the preference and the next session restores it',()=>{
 const {s,ex,$,settingsWrites}=fixture();ex.renderSettings({append(){}});
 for(const value of ['0','1','3600','60']){$('orbit-time').onchange({target:{value}});assert.equal(s.timeScale,Number(value));assert.equal(settingsWrites.at(-1).orbitTime,Number(value));assert.equal(fixture(settingsWrites.at(-1)).s.timeScale,Number(value));}
});

test('Starting audio restores the saved preference without creating a muted context and handles failure',async()=>{
 const muted=fixture({sound:false});let mutedCalls=0;muted.ex.audio.enable=async value=>{assert.equal(value,false);mutedCalls++;};assert.equal(await muted.ex.resumeAudio(),true);assert.equal(mutedCalls,1);
 const enabled=fixture({sound:true});let value=null;enabled.ex.audio.enable=async next=>{value=next;};assert.equal(await enabled.ex.resumeAudio(),true);assert.equal(value,true);
 enabled.ex.audio.enable=async()=>{throw Error('Audio unavailable');};assert.equal(await enabled.ex.resumeAudio(),false);assert.match(enabled.messages.at(-1),/audio/);assert.equal(enabled.s.settings.sound,true);
});

test('Restoring enabled audio resumes one existing audio graph while a muted start creates none',async()=>{
 let contexts=0;const node=()=>({connect(next){return next;},start(){},frequency:{value:0},gain:{value:0}});
 class FakeAudioContext{constructor(){contexts++;this.sampleRate=10;this.currentTime=0;this.resumes=0;this.state='suspended';this.oscillators=0;}createOscillator(){this.oscillators++;return node();}createGain(){return node();}createBiquadFilter(){return node();}createBuffer(){return {getChannelData:()=>new Float32Array(20)};}createBufferSource(){return node();}async resume(){this.resumes++;this.state='running';}suspend(){this.state='suspended';}}
 const before=globalThis.window;globalThis.window={AudioContext:FakeAudioContext};try{
  const muted=fixture({sound:false});await muted.ex.resumeAudio();assert.equal(contexts,0);assert.equal(muted.ex.audio.context,null);
  const enabled=fixture({sound:true});assert.equal(await enabled.ex.resumeAudio(),true);assert.equal(contexts,1);assert.equal(enabled.ex.audio.enabled,true);assert.equal(enabled.ex.audio.context.state,'running');
  await enabled.ex.resumeAudio();assert.equal(contexts,1);assert.equal(enabled.ex.audio.context.resumes,2);assert.equal(enabled.ex.audio.context.oscillators,1);
  enabled.s.settings.sound=false;await enabled.ex.resumeAudio();assert.equal(enabled.ex.audio.enabled,false);assert.equal(enabled.ex.audio.context.state,'suspended');enabled.ex.audio.context.suspend=async()=>{throw Error('Suspend failed');};assert.equal(await enabled.ex.resumeAudio(),false);
 }finally{if(before===undefined)delete globalThis.window;else globalThis.window=before;}
});
