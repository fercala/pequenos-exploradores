import test from 'node:test';
import assert from 'node:assert/strict';
import {BODIES,MOONS,bodyRadius,orbitalPosition,scientificRadius,rotationAngle,localGravity,entryHeating,atmosphericDensity,safeLanding,missionAllowed,validatePortable,tutorialAdvance} from '../simulation.js';
import {createSaveSession,readSave} from '../core.js';
const norm=v=>Math.hypot(...v),sub=(a,b)=>a.map((x,i)=>x-b[i]);
test('Seventeen destinations include the Moon, Europa and Titan, each outside its parent',()=>{assert.equal(BODIES.length,17);for(const moon of MOONS){const separation=norm(sub(orbitalPosition(moon.id),orbitalPosition(moon.parent)));assert.ok(separation>bodyRadius(moon)+bodyRadius(moon.parent));assert.ok(moon.source.startsWith('https://science.nasa.gov/'));}});
test('Floating references preserve global position across planet and moon changes',()=>{const global=[22123,5400,-19441];for(const body of BODIES){const origin=orbitalPosition(body.id,12.5),local=sub(global,origin),restored=local.map((x,i)=>x+origin[i]);restored.forEach((x,i)=>assert.ok(Math.abs(x-global[i])<1e-8));}});
test('Scientific view has the same AU scale for body radii and orbital distances',()=>{for(const body of BODIES.filter(p=>!p.parent)){assert.ok(Math.abs(norm(orbitalPosition(body.id,0,'real'))/(body.au*10000)-1)<.001);assert.equal(scientificRadius(body),body.radius/149597870.7*10000);}});
test('Orbit returns after a complete Mercury period; Venus rotates retrograde',()=>{const a=orbitalPosition('mercury',0),b=orbitalPosition('mercury',87.97);assert.ok(norm(sub(a,b))<1e-7);assert.ok(rotationAngle('venus',1)<0);assert.ok(rotationAngle('earth',1)>6);});
test('Surface gravity differs by world and decreases at altitude',()=>{for(const body of BODIES){assert.equal(localGravity(body,bodyRadius(body)),body.gravity);assert.ok(localGravity(body,bodyRadius(body)*2)<body.gravity);}assert.ok(localGravity(BODIES.find(p=>p.id==='moon'),170)<localGravity(BODIES.find(p=>p.id==='earth'),600));});
test('Atmospheric heating respects vacuum and increases with entry speed',()=>{const moon=BODIES.find(p=>p.id==='moon'),earth=BODIES.find(p=>p.id==='earth');assert.equal(atmosphericDensity(moon,0),0);assert.equal(entryHeating(moon,0,200),0);assert.ok(entryHeating(earth,10,100)>entryHeating(earth,10,40));assert.ok(entryHeating(earth,300,100)<entryHeating(earth,10,100));});
test('Manual landing requires deployed gear, low speed and a level attitude',()=>{assert.equal(safeLanding(3,-1,true,.1),true);assert.equal(safeLanding(3,-1,false,.1),false);assert.equal(safeLanding(30,-1,true,.1),false);assert.equal(safeLanding(3,-1,true,1),false);});
test('Missions cannot be completed from an invalid location or vehicle',()=>{assert.equal(missionAllowed('sample',{rocky:true,vehicle:'ship'}),false);assert.equal(missionAllowed('sample',{rocky:true,vehicle:'walk',altitude:1.7,jumpHeight:0}),true);assert.equal(missionAllowed('probe',{rocky:false,altitude:20,auto:false}),false);assert.equal(missionAllowed('probe',{rocky:false,altitude:-30,auto:false}),true);assert.equal(missionAllowed('scan',{altitude:30,auto:true}),false);});
test('Portable saves migrate v1 and preserve surface vehicles and missions',()=>{const raw={version:1,planet:'moon',position:[0,0,180],quaternion:[0,0,0,1],visited:['earth','moon'],landed:['moon'],explored:[],elapsed:10};assert.equal(validatePortable(raw).version,2);const saved={...raw,version:2,vehicle:'rover',parkedPosition:[0,0,174],missions:['moon:sample'],days:12,roverDistance:51};const result=validatePortable(JSON.parse(JSON.stringify(saved)));assert.equal(result.vehicle,'rover');assert.equal(result.roverDistance,51);assert.deepEqual(result.missions,['moon:sample']);});
test('Invalid imports and unusable coordinates are rejected before changing storage',()=>{const raw={version:2,planet:'earth',position:[0,0,700],quaternion:[0,0,0,1],visited:['earth'],landed:[],explored:[],elapsed:10};for(const changed of [{planet:'unknown'},{position:[0,0,0]},{quaternion:[0,0,0,0]},{elapsed:-1},{visited:['missing']},{vehicle:'walk',parkedPosition:null}])assert.throws(()=>validatePortable({...raw,...changed}));});
test('Tutorial advances in response to the intended action only',()=>{let stage=0;assert.equal(tutorialAdvance(stage,'land'),0);for(const event of ['orient','thrust','brake','destination','land'])stage=tutorialAdvance(stage,event);assert.equal(stage,5);});

const portable=()=>({version:2,planet:'earth',position:[0,0,1650],quaternion:[0,0,0,1],visited:['earth'],landed:[],explored:[],elapsed:12});
function memoryStore(){const data=new Map();return {getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};}
test('Imported progress survives outgoing lifecycle saves and a new session resumes normal saving',()=>{
 const storage=memoryStore(),session=createSaveSession(storage),old=portable();session.save(old);
 const imported=validatePortable({...old,planet:'comet67p',visited:['earth','moon','comet67p'],landed:['moon'],missions:['moon:sample'],elapsed:314,campaign:{storyActive:true,storyStep:4,notebook:[{body:'moon',kind:'sample',title:'Muestra',text:'Roca lunar'}]}});
 assert.equal(session.replace(imported),true);
 for(const hook of ['pagehide','visibilitychange','blur','periodic']){assert.equal(session.save(old),true,hook);assert.deepEqual(readSave(storage),imported,hook);}
 assert.equal(session.replace(old),false);assert.deepEqual(readSave(storage),imported);
 const resumed=readSave(storage);assert.equal(resumed.campaign.storyStep,4);assert.equal(resumed.campaign.notebook.length,1);assert.equal(resumed.elapsed,314);
 const next=createSaveSession(storage);assert.equal(next.save({...resumed,elapsed:400}),true);assert.equal(readSave(storage).elapsed,400);
});
test('Rejected import files and failed storage do not lock or replace the running save',()=>{
 const storage=memoryStore(),session=createSaveSession(storage),old=portable();session.save(old);
 assert.throws(()=>session.replace(validatePortable({...old,planet:'unknown'})));assert.deepEqual(readSave(storage),old);
 const set=storage.setItem;storage.setItem=()=>{throw Error('Quota');};assert.equal(session.replace(validatePortable({...old,planet:'moon'})),false);assert.deepEqual(readSave(storage),old);
 storage.setItem=set;assert.equal(session.save({...old,elapsed:30}),true);assert.equal(readSave(storage).elapsed,30);assert.equal(session.replace(validatePortable({...old,planet:'moon'})),true);assert.equal(readSave(storage).planet,'moon');
});


test('Parked rover survives export, import and local save with its own orientation',()=>{
 const roverParking={planet:'earth',position:[80,600,15],quaternion:[0,.6,0,.8]};
 const raw={...portable(),vehicle:'walk',parkedPosition:[0,600,0],roverParking};
 const storage=memoryStore();createSaveSession(storage).save(raw);
 const restored=validatePortable(JSON.parse(JSON.stringify(readSave(storage))));
 assert.deepEqual(restored.roverParking,roverParking);
 restored.roverParking.position[0]=99;assert.equal(roverParking.position[0],80);
 assert.equal(validatePortable(portable()).roverParking,null);
});
test('Invalid and foreign-world rover anchors are discarded without losing the expedition',()=>{
 const good={planet:'earth',position:[80,600,15],quaternion:[0,0,0,1]};
 for(const changed of [{planet:'mars'},{position:[0,0,0]},{position:[Infinity,600,0]},{position:['80',600,0]},{quaternion:[0,0,0,0]},{quaternion:[0,0,0,3]}]){
  const clean=validatePortable({...portable(),roverParking:{...good,...changed}});assert.equal(clean.roverParking,null);assert.equal(clean.elapsed,12);
 }
 assert.equal(validatePortable({...portable(),planet:'jupiter',roverParking:{...good,planet:'jupiter'}}).roverParking,null);
});

test('Restored parking transform places the rover on the same footing as the active vehicle',async()=>{
 const T=await import('../vendor/three.module.js'),{SolarUniverse}=await import('../world-v2.js');
 const parked=new T.Vector3(80,600,15),orientation=new T.Quaternion(0,.6,0,.8);
 const world={rover:new T.Group(),roverParked:parked.clone(),roverParkedQuaternion:orientation};
 SolarUniverse.prototype.placeParkedRover.call(world);
 assert.ok(Math.abs(world.rover.position.length()-(parked.length()-1))<1e-9);
 assert.deepEqual(world.rover.quaternion.toArray(),orientation.toArray());assert.deepEqual(world.roverParked.toArray(),parked.toArray());
});


test('Sampling requires contact with terrain on foot and rejects every airborne entry point',()=>{
 const ground={rocky:true,vehicle:'walk',altitude:1.7,jumpHeight:0,auto:null};
 assert.equal(missionAllowed('sample',ground),true);
 for(const changed of [{altitude:100},{altitude:2.2},{altitude:-1},{altitude:NaN},{altitude:undefined},{jumpHeight:.5},{jumpHeight:.01},{jumpHeight:Infinity},{auto:{type:'landing'}},{vehicle:'rover'},{vehicle:'ship'},{vehicle:'eva'},{rocky:false}])assert.equal(missionAllowed('sample',{...ground,...changed}),false,JSON.stringify(changed));
 assert.equal(missionAllowed('sample',{...ground,altitude:1.7,jumpHeight:0}),true);
 assert.equal(missionAllowed('scan',{...ground,altitude:100}),true);
 assert.equal(missionAllowed('probe',{rocky:false,vehicle:'ship',altitude:-30,auto:null}),true);
});

test('Portable rover counters retain only finite nonnegative known solid-world distances',()=>{
 const clean=validatePortable({...portable(),roverDistances:{earth:50,moon:2e7,mars:-1,venus:Infinity,pluto:'12',jupiter:12,unknown:3}});
 assert.deepEqual(clean.roverDistances,{earth:50,moon:1e7});assert.deepEqual(validatePortable(portable()).roverDistances,{});
});
