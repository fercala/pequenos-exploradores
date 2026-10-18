import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {cleanFieldLog,walkingDistance,fieldGoals,animateWalker} from '../field-data.js';
import {createFieldExpedition} from '../field-expedition.js';
import {defaultCampaign,cleanCampaign} from '../systems.js';
import {bodyById,bodyRadius,BODIES,validatePortable} from '../simulation.js';
import {SolarUniverse} from '../world-v2.js';

test('Walking counts surface travel rather than vertical jumps or terrain height changes',()=>{
 assert.equal(walkingDistance([0,600,0],[0,630,0]),0);
 assert.ok(Math.abs(walkingDistance([600,0,0],[0,600,0])-Math.PI*300)<1e-8);
 assert.equal(walkingDistance([0,0,0],[0,600,0]),0);
 assert.ok(walkingDistance([600,0,0],[600,.05,0])>.049);
});
test('Surface logs migrate safely, bound distance and beacon coordinates, and reject gas-giant walks',()=>{
 const ids=BODIES.map(p=>p.id),raw={moon:{distance:71,beacon:{lat:20,lon:-30}},mars:{distance:Infinity,beacon:{lat:91,lon:0}},earth:{distance:-5},jupiter:{distance:100},unknown:{distance:100}};
 assert.deepEqual(cleanFieldLog(raw,ids),{earth:{distance:0,beacon:null},mars:{distance:0,beacon:null},moon:{distance:71,beacon:{lat:20,lon:-30}}});
 assert.deepEqual(cleanCampaign({},ids).fieldLog,{});
 const portable={version:2,planet:'moon',position:[0,0,180],quaternion:[0,0,0,1],visited:['earth','moon'],landed:['moon'],explored:[],elapsed:1,campaign:{fieldLog:raw,noteDraft:'Conservar'}};
 const clean=validatePortable(JSON.parse(JSON.stringify(portable)));assert.equal(clean.campaign.fieldLog.moon.distance,71);assert.equal(clean.campaign.fieldLog.moon.beacon.lon,-30);assert.equal(clean.campaign.noteDraft,'Conservar');
});
test('Surface objectives reuse existing scientific missions without crediting another world',()=>{
 const missions=new Set(['moon:scan','moon:sample']);assert.equal(fieldGoals({distance:50,beacon:{lat:0,lon:0}},missions,'moon').filter(g=>g.done).length,4);
 assert.equal(fieldGoals({distance:49,beacon:null},missions,'mars').filter(g=>g.done).length,0);
});
test('Astronaut limbs alternate, respect pause and reduce motion, and settle when standing',()=>{
 const avatar=SolarUniverse.prototype.makeAstronaut();animateWalker(avatar,3,.2);const rig=avatar.userData.walkRig;assert.ok(Math.abs(rig.legs[0].rotation.x)>.1);assert.ok(Math.abs(rig.legs[0].rotation.x+rig.legs[1].rotation.x)<1e-8);
 const angle=rig.legs[0].rotation.x;animateWalker(avatar,3,0);assert.equal(rig.legs[0].rotation.x,angle);animateWalker(avatar,3,0,true);assert.ok(Math.abs(rig.legs[0].rotation.x)<Math.abs(angle));animateWalker(avatar,0,.1);assert.equal(Math.abs(rig.legs[0].rotation.x),0);animateWalker(avatar,3,.1,false,false);assert.equal(Math.abs(rig.arms[0].rotation.x),0);
});

function fixture(body='moon'){
 const elements=new Map(),make=()=>({style:{},hidden:false,textContent:'',innerHTML:'',append(){},setAttribute(){}}),$=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 globalThis.document={createElement:make,querySelector:()=>make(),body:{classList:{toggle(){}}}};
 const planet=bodyById(body),r=bodyRadius(planet),s={planet,position:new T.Vector3(0,0,r+1.7),quaternion:new T.Quaternion(),vehicle:'walk',auto:null,landed:false,started:true,missions:new Set()},w={scene:new T.Scene(),planetGroup:new T.Group(),parkedPosition:new T.Vector3(0,0,r+4.2),groundRadius:()=>r,localNormal:n=>n,viewYaw:1,viewPitch:1};
 const c=defaultCampaign(),calls={records:[],saves:0,closed:0,ascents:0,vehicles:[],messages:[]},ex={jumpHeight:0,v4:{campaign:c,record:(...a)=>calls.records.push(a)},changeVehicle:v=>calls.vehicles.push(v),science:key=>{s.missions.add(body+':'+key);return true;},jump(){}};
 const field=createFieldExpedition({state:s,world:w,$,toast:t=>calls.messages.push(t),persist:()=>calls.saves++,closePanel:()=>calls.closed++,resetInputs(){},setThrottle:n=>s.throttle=n,startAscent:()=>calls.ascents++},ex,()=>{});
 return {s,w,c,ex,calls,$,field};
}
test('Placing a beacon creates a terrain-anchored marker and a saved notebook record only while on foot',()=>{
 const {s,w,c,calls,$,field}=fixture();field.open();$('field-beacon').onclick();assert.ok(c.fieldLog.moon.beacon);assert.equal(calls.records[0][1],'Baliza de exploración');field.tick(.3);assert.equal(field.beacon.visible,true);assert.ok(Math.abs(field.beacon.position.length()-w.groundRadius())<1e-8);
 const old=JSON.stringify(c.fieldLog);s.vehicle='rover';$('field-beacon').onclick();assert.equal(JSON.stringify(c.fieldLog),old);assert.equal(calls.records.length,1);
 s.planet=bodyById('mars');field.tick(.3);assert.equal(field.beacon.visible,false);
});
test('Field walking progress excludes teleports and rover movement; ship return boards nearby and points from afar',()=>{
 const {s,w,c,calls,$,field}=fixture();const before=s.position.clone();s.position.x+=.2;field.walkStep(before,s.position);assert.ok(c.fieldLog.moon.distance>.19);const distance=c.fieldLog.moon.distance;s.vehicle='rover';field.walkStep(before,s.position);assert.equal(c.fieldLog.moon.distance,distance);s.vehicle='walk';field.walkStep(before,new T.Vector3(200,0,200));assert.equal(c.fieldLog.moon.distance,distance);
 field.open();$('field-ship').onclick();assert.deepEqual(calls.vehicles,['ship']);w.parkedPosition.set(100,0,170);field.open();$('field-ship').onclick();assert.equal(w.viewYaw,0);assert.equal(s.throttle,0);assert.equal(calls.vehicles.length,1);s.vehicle='ship';s.landed=true;field.tick(.3);assert.equal($('field-launch').hidden,false);$('field-launch').onclick();assert.equal(calls.ascents,1);assert.match(calls.messages.at(-1),/Orientado hacia la nave/);
});
test('The expedition kit rejects airborne, jumping and giant-planet interactions',()=>{
 const {s,c,ex,calls,$,field}=fixture();field.open();ex.jumpHeight=1;$('field-beacon').onclick();assert.deepEqual(c.fieldLog.moon.beacon,null);assert.equal(calls.records.length,0);
 s.vehicle='ship';s.landed=false;field.open();assert.match(calls.messages.at(-1),/Aterriza/);s.planet=bodyById('jupiter');s.vehicle='walk';field.open();assert.match(calls.messages.at(-1),/Aterriza/);
});
