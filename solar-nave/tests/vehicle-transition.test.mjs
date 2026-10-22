import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {createExpansion} from '../expansion.js';
import {bodyById,bodyRadius,validatePortable} from '../simulation.js';
function fixture(settings={}){
 const canvasContext={fillRect(){},fillText(){}};
 const elements=new Map(),make=()=>({style:{setProperty(){}},classList:{toggle(){},add(){},remove(){}},dataset:{},append(){},remove(){},prepend(){},insertAdjacentHTML(){},setAttribute(){},querySelector:()=>({getContext:()=>canvasContext}),querySelectorAll:()=>[]});
 const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 globalThis.document={createElement:make,body:make(),documentElement:make(),querySelector:()=>make()};
 const planet=bodyById('moon'),r=bodyRadius(planet),s={planet,settings,position:new T.Vector3(0,r+1.7,0),velocity:new T.Vector3(),quaternion:new T.Quaternion(),landed:false,auto:null};
 const w={planet,scene:new T.Scene(),ship:new T.Group(),planetGroup:new T.Group(),parkedPosition:new T.Vector3(0,r+4.2,0),parkedQuaternion:new T.Quaternion(),groundRadius:()=>r,isWater:()=>false,setOrientation(){}};
 const messages=[],settingsWrites=[],ex=createExpansion({state:s,world:w,$,toast:t=>messages.push(t),persist(){},setThrottle:n=>s.throttle=n,resetInputs(){},brake(){s.velocity.set(0,0,0);s.throttle=0;},closePanel(){},settingsSave(){settingsWrites.push(structuredClone(s.settings));}});
 Object.assign(s,{visited:new Set(['moon']),landings:new Set(['moon']),explored:new Set(),elapsed:10,photos:0,shield:100});s.vehicle='walk';s.throttle=0;return {s,w,ex,r,messages,$,settingsWrites,canvasContext};
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

test('Landing gear toggles survive snapshot, portable validation and world restoration',()=>{
 const original=fixture();original.$('gear-btn').onclick();assert.equal(original.s.gear,false);assert.equal(original.w.gear,false);
 const saved=validatePortable(JSON.parse(JSON.stringify(original.ex.snapshot())));assert.equal(saved.gear,false);
 const restored=fixture();restored.ex.restore(saved);assert.equal(restored.s.gear,false);assert.equal(restored.w.gear,false);
 restored.$('gear-btn').onclick();const extended=validatePortable(restored.ex.snapshot());assert.equal(extended.gear,true);original.ex.restore(extended);assert.equal(original.s.gear,true);assert.equal(original.w.gear,true);
});


test('Reopening the atlas keeps its scale selector and explanation aligned with the rendered scale',()=>{
 const {ex,w,$}=fixture();w.realScale=false;ex.enterAtlas();
 $('atlas-scale').onchange({target:{value:'real'}});assert.equal(w.realScale,true);assert.match($('atlas-note').textContent,/radios y distancias/);
 $('atlas-back').onclick();$('atlas-scale').value='play';$('atlas-note').textContent='Arrastra para girar.';ex.enterAtlas();assert.equal($('atlas-scale').value,'real');assert.match($('atlas-note').textContent,/radios y distancias/);
 $('atlas-scale').onchange({target:{value:'play'}});assert.equal(w.realScale,false);$('atlas-back').onclick();ex.enterAtlas();assert.equal($('atlas-scale').value,'play');assert.match($('atlas-note').textContent,/comprimida/);
});


test('Photo exposure follows the retained slider on every entry and normal flight keeps its own exposure',()=>{
 const {ex,w,$}=fixture();w.cameraMode='cockpit';w.renderer={toneMappingExposure:1.12};$('photo-exposure').value='1.1';
 ex.togglePhoto(true);assert.equal(w.renderer.toneMappingExposure,1.1);assert.equal(w.cameraMode,'observe');
 $('photo-exposure').value='2.3';$('photo-exposure').oninput({target:$('photo-exposure')});assert.equal(w.renderer.toneMappingExposure,2.3);
 ex.togglePhoto(false);assert.equal(w.renderer.toneMappingExposure,1.12);assert.equal(w.cameraMode,'cockpit');assert.equal($('photo-exposure').value,'2.3');
 ex.togglePhoto(true);assert.equal(w.renderer.toneMappingExposure,2.3);ex.togglePhoto(false);assert.equal(w.renderer.toneMappingExposure,1.12);
});


test('Boarding a nearby parked rover uses its own position and orientation instead of moving it to the walker',()=>{
 const {s,w,ex,r}=fixture();w.parkedPosition.set(1000,0,0);w.roverParked=new T.Vector3(9,r+1,0).setLength(r+1);w.roverParkedQuaternion=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),.7);const parked=w.roverParked.clone(),orientation=w.roverParkedQuaternion.clone();
 assert.ok(s.position.distanceTo(parked)<20);ex.changeVehicle('rover');assert.equal(s.vehicle,'rover');assert.ok(s.position.distanceTo(parked)<1e-8);assert.ok(s.quaternion.angleTo(orientation)<1e-8);assert.ok(w.roverParked.distanceTo(parked)<1e-8);
});

test('Deploying near the ship still works when an older rover is parked far away',()=>{
 const {s,w,ex,r}=fixture();w.roverParked=new T.Vector3(r+1,0,0);const before=s.position.clone().setLength(r+1);ex.changeVehicle('rover');assert.equal(s.vehicle,'rover');assert.ok(s.position.distanceTo(before)<1e-8);
});


test('Entering the atlas stops propulsion as well as velocity while a rejected entry leaves flight untouched',()=>{
 const {s,w,ex,$}=fixture();s.vehicle='ship';s.throttle=.8;s.velocity.set(3,4,5);s.auto={type:'travel'};ex.enterAtlas();assert.equal(s.throttle,.8);assert.equal(s.velocity.lengthSq(),50);assert.equal(w.overview,undefined);
 s.auto=null;ex.enterAtlas();assert.equal(w.overview,true);assert.equal(s.throttle,0);assert.equal(s.velocity.lengthSq(),0);$('atlas-back').onclick();assert.equal(w.overview,false);assert.equal(s.throttle,0);
});


test('A blocked shoreline step does not freeze jumping or award walking distance',()=>{
 const {s,w,ex,r}=fixture();w.isWater=n=>Math.abs(n.x)>1e-9||Math.abs(n.z)>1e-9;s.throttle=1;ex.jump();ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.ok(ex.jumpHeight>0);assert.ok(ex.jumpSpeed<3.5);
 for(let i=0;i<110;i++)ex.surfacePhysics(.05,{x:0,y:0},new Set());
 assert.equal(ex.jumpHeight,0);assert.equal(ex.jumpSpeed,0);assert.ok(Math.abs(s.position.length()-(r+1.7))<1e-8);assert.equal(s.position.x,0);assert.equal(s.position.z,0);assert.equal(ex.v4.campaign.fieldLog.moon?.distance||0,0);
});

test('Rover shoreline collisions still block movement and cannot accumulate driven distance',()=>{
 const {s,w,ex}=fixture();ex.changeVehicle('rover');const before=s.position.clone();w.isWater=n=>Math.abs(n.x)>1e-9||Math.abs(n.z)>1e-9;s.throttle=1;ex.surfacePhysics(.1,{x:0,y:0},new Set());assert.ok(s.position.equals(before));assert.equal(s.velocity.length(),0);assert.equal(s.roverDistance,0);assert.equal(s.roverDistances.moon||0,0);
});

test('Pending PNG capture ignores repeated requests and releases the capture button after success or failure',async()=>{
 const {s,w,ex,$,messages}=fixture();const jobs=[];let records=0;
 w.renderer={domElement:{width:800,height:600},toneMappingExposure:1.12};$('photo-exposure').value='1.1';$('panel').showModal=()=>{$('panel').open=true;};
 const create=document.createElement,ctx={drawImage(){},fillRect(){},fillText(){}};document.createElement=tag=>tag==='canvas'?{getContext:()=>ctx,toBlob:done=>jobs.push(done),toDataURL:()=>"data:image/jpeg;base64,AA=="}:create(tag);w.localNormal=n=>n;const recordPhoto=ex.v4.photo;ex.v4.photo=c=>{records++;recordPhoto(c);};
 ex.togglePhoto(true);const first=ex.capture();const repeated=ex.capture();assert.equal(jobs.length,1);assert.equal(records,0);assert.equal($('capture-photo').disabled,true);assert.match($('capture-photo').textContent,/Capturando/);jobs.shift()(new Blob(['photo'],{type:'image/png'}));await Promise.all([first,repeated]);assert.equal(s.photos,1);assert.equal(records,1);assert.equal($('capture-photo').disabled,false);assert.equal($('capture-photo').textContent,'Capturar imagen');assert.match($('panel-content').innerHTML,/Descargar fotografía/);URL.revokeObjectURL(ex.photoUrl);
 const notebook=JSON.stringify(ex.v4.campaign.notebook);ex.togglePhoto(true);const failed=ex.capture();assert.equal(JSON.stringify(ex.v4.campaign.notebook),notebook);jobs.shift()(null);await failed;assert.equal(JSON.stringify(ex.v4.campaign.notebook),notebook);assert.equal(s.photos,1);assert.equal($('capture-photo').disabled,false);assert.match(messages.at(-1),/No se ha podido generar/);
 const retry=ex.capture();assert.equal(jobs.length,1);jobs.shift()(new Blob(['retry'],{type:'image/png'}));await retry;assert.equal(s.photos,2);assert.equal(records,2);assert.equal($('capture-photo').disabled,false);URL.revokeObjectURL(ex.photoUrl);
});

test('Repositioning the joystick stops manual motion and finishing cannot restart old propulsion',()=>{
 for(const vehicle of ['ship','walk','rover']){
  const {s,ex,$,settingsWrites}=fixture({joyPosition:[.2,.6]});s.vehicle=vehicle;s.throttle=.7;s.velocity.set(2,3,4);const position=s.position.clone(),quaternion=s.quaternion.clone();let done;document.body.append=node=>{done=node;};ex.renderSettings({append(){}});$('edit-controls').onclick();assert.equal(ex.editing,true);assert.equal(s.throttle,0,vehicle);assert.equal(s.velocity.length(),0,vehicle);assert.equal(s.vehicle,vehicle);assert.ok(s.position.equals(position));assert.ok(s.quaternion.equals(quaternion));assert.deepEqual(s.settings.joyPosition,[.2,.6]);assert.equal(done.id,'finish-layout');done.onclick();assert.equal(ex.editing,false);assert.equal(s.throttle,0);assert.equal(s.velocity.length(),0);assert.deepEqual(settingsWrites.at(-1).joyPosition,[.2,.6]);
 }
});

test('A selected scanner stops drawing during simulation pause, photo and atlas and resumes without retoggling',()=>{
 const {s,w,ex,$,canvasContext}=fixture();let draws=0;canvasContext.fillRect=()=>draws++;s.started=true;w.overview=false;w.localGroup=new T.Group();$('scanner-btn').onclick();ex.tick(.3,false);assert.equal(draws,25);
 ex.tick(.3,true);assert.equal(draws,25,'pause must perform no scanner drawing');ex.photo=true;ex.tick(.3,false);assert.equal(draws,25);ex.photo=false;w.overview=true;ex.tick(.3,false);assert.equal(draws,25);w.overview=false;ex.tick(.3,false);assert.equal(draws,50,'continuing resumes the selected scanner');
});

test('Portable download survives expiry timers and releases the replaced save URL',async()=>{
 const oldCreate=URL.createObjectURL,oldRevoke=URL.revokeObjectURL,oldTimer=globalThis.setTimeout,live=new Map(),timers=[];let serial=0;URL.createObjectURL=blob=>{const u='blob:save-'+(++serial);live.set(u,blob);return u;};URL.revokeObjectURL=u=>live.delete(u);globalThis.setTimeout=fn=>{timers.push(fn);return 1;};
 try{const {ex,$}=fixture();$('panel').open=true;const anchor={};$('panel-content').querySelector=()=>anchor;ex.exportSave();const first=anchor.href;for(const fn of timers.splice(0))fn();assert.ok(live.has(first),'Visible portable download must not expire');assert.equal(JSON.parse(await live.get(first).text()).planet,'moon');ex.exportSave();assert.equal(live.has(first),false);assert.ok(live.has(anchor.href));assert.equal(live.size,1);}
 finally{URL.createObjectURL=oldCreate;URL.revokeObjectURL=oldRevoke;globalThis.setTimeout=oldTimer;}
});
