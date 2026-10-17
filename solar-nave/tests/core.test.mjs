import test from 'node:test';
import assert from 'node:assert/strict';
import {safePosition,terrainHeight,isOcean,pressureAtDepth,landingResult,readSave,writeSave,validateSave,smoothstep} from '../core.js';
import {PLANETS} from '../data.js';
test('The collision boundary follows the same terrain as the planet mesh, in every rocky world',()=>{
  for(const planet of PLANETS.filter(p=>p.rocky))for(let i=0;i<40;i++){
    const a=i*1.7,b=i*.81,n=[Math.sin(a)*Math.cos(b),Math.sin(b),Math.cos(a)*Math.cos(b)];
    const r=600+terrainHeight(planet.id,...n),result=safePosition(planet.id,n.map(x=>x*(r-15)),4.2);
    assert.equal(result.collided,true);assert.ok(Math.abs(Math.hypot(...result.position)-r-4.2)<1e-9);
    assert.equal(safePosition(planet.id,n.map(x=>x*(r+40)),4.2).collided,false);
  }
});
test('Atmospheric pressure rises continuously with depth, without a solid ground',()=>{
  for(const p of PLANETS.filter(p=>!p.rocky)){let last=0;for(let depth=0;depth<=90;depth+=10){const pressure=pressureAtDepth(p.id,depth);assert.ok(Number.isFinite(pressure)&&pressure>last);last=pressure;}}
});
test('Free exploration protects against impact damage while challenge mode records it',()=>{assert.deepEqual(landingResult(3,-2,'challenge'),{impact:false,damage:0});assert.equal(landingResult(40,-20,'exploration').damage,0);assert.ok(landingResult(40,-20,'challenge').damage>0);});
test('Corrupt or impossible saves are rejected; progress survives serialization',()=>{
  const memory=new Map(),storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v)};
  const save={version:1,planet:'earth',position:[0,220,1650],quaternion:[0,0,0,1],visited:['earth','mars'],landed:['mars'],explored:[],elapsed:45};
  assert.equal(writeSave(storage,save),true);assert.deepEqual(readSave(storage),save);
  assert.equal(validateSave({...save,position:[NaN,1,2]}),false);assert.equal(validateSave({...save,position:[0,0,0]}),false);assert.equal(validateSave({...save,quaternion:[0,0,0,0]}),false);
  storage.getItem=()=>'{broken';assert.equal(readSave(storage),null);
  storage.setItem=()=>{throw Error('Storage full');};assert.equal(writeSave(storage,save),false);
});
test('The arrival curve starts and ends at rest without overshoot',()=>{assert.equal(smoothstep(-1),0);assert.equal(smoothstep(2),1);assert.ok(smoothstep(.0001)<.000001);assert.ok(1-smoothstep(.9999)<.000001);});
test('There are exactly four landable planets and eight destinations with scientific sources',()=>{assert.equal(PLANETS.length,8);assert.equal(new Set(PLANETS.map(p=>p.id)).size,8);assert.equal(PLANETS.filter(p=>p.rocky).length,4);for(const p of PLANETS){assert.ok(p.source.startsWith('https://science.nasa.gov/'));assert.ok(p.radius>0&&p.gravity>0&&p.au>0);}});
