import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
import {bodyById} from '../simulation.js';
import {createExploration} from '../exploration.js';
function fixture(vehicle='ship',looking=false){
 const buttons=['left','up','down','right','in','out','camera'].map(view=>({dataset:{view}})),elements=new Map();
 const make=tag=>({style:{},classList:{toggle(){}},append(){},insertAdjacentHTML(){},setAttribute(){},querySelectorAll:()=>tag==='nav'?buttons:[]});
 globalThis.document={createElement:make,querySelector:()=>make(),body:make()};const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 const s={vehicle,position:new T.Vector3(0,170,0),quaternion:new T.Quaternion(),settings:{weather:true},landed:false,auto:null},w={cameraMode:'follow',viewYaw:0,viewPitch:0,overview:false,zoom:1};
 createExploration({state:s,world:w,$,toast(){},settingsSave(){},isLooking:()=>looking},()=>{});
 return {s,w,press:view=>buttons.find(b=>b.dataset.view===view).onclick()};
}

test('Accessible direction buttons in Look mode move only the view for ship, rover and walker',()=>{
 for(const vehicle of ['ship','rover','walk']){const {s,w,press}=fixture(vehicle,true),q=s.quaternion.clone();press('left');press('up');assert.ok(Math.abs(w.viewYaw-.12)<1e-9);assert.ok(Math.abs(w.viewPitch-.12)<1e-9);assert.equal(s.quaternion.angleTo(q),0);press('in');assert.equal(w.zoom,.8);}
});

test('Without Look mode accessible controls still turn the active vehicle, while observation keeps camera control',()=>{
 for(const vehicle of ['ship','rover','walk']){const {s,w,press}=fixture(vehicle,false),q=s.quaternion.clone();press('left');assert.ok(s.quaternion.angleTo(q)>.1);assert.equal(w.viewYaw,0);}
 const {s,w,press}=fixture();w.cameraMode='observe';press('left');assert.equal(w.viewYaw,.12);assert.equal(s.quaternion.angleTo(new T.Quaternion()),0);
});


test('A suspended terrain scanner performs no hidden sampling or drawing and resumes its selected state',()=>{
 let samples=0,draws=0;const elements=new Map(),ctx={fillRect(){draws++;},fillText(){}};
 const make=()=>({style:{},classList:{toggle(){}},append(){},insertAdjacentHTML(){},setAttribute(){},dataset:{},querySelectorAll:()=>[],querySelector:()=>({getContext:()=>ctx})});
 globalThis.document={createElement:make,querySelector:make,body:make()};const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 const s={started:true,planet:bodyById('moon'),settings:{weather:true},position:new T.Vector3(0,180,0),velocity:new T.Vector3(),quaternion:new T.Quaternion(),gear:true};
 const w={groundRadius:()=>{samples++;return 170;},isWater:()=>false,localGroup:new T.Group()};
 const controls=createExploration({state:s,world:w,$,toast(){},settingsSave(){}},()=>{});$('scanner-btn').onclick();
 controls.tick(.3,true);assert.equal(samples,0);assert.equal(draws,0);
 controls.tick(.3,false);assert.ok(samples>0);assert.equal(draws,25);const previous=samples;
 controls.tick(.3,true);assert.equal(samples,previous);assert.equal(draws,25);
 controls.tick(.3,false);assert.ok(samples>previous);assert.equal(draws,50);
});


test('The surface map draws the current beacon and can select its coordinates without moving the player',()=>{
 let beacon={lat:12,lon:-34};const labels=[],elements=new Map(),ctx={fillRect(){},drawImage(){},strokeRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},fill(){},fillText:text=>labels.push(text)};
 const make=()=>({style:{},classList:{toggle(){}},append(){},insertAdjacentHTML(){},setAttribute(){},querySelectorAll:()=>[],getContext:()=>ctx,width:900,height:450});globalThis.document={createElement:make,querySelector:make,querySelectorAll:()=>[],body:make()};const $=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
 const s={planet:bodyById('moon'),settings:{weather:true},position:new T.Vector3(0,180,0)},w={planetGroup:new T.Group(),terrainRegions:[],texture:()=>({image:null}),localNormal:n=>n,landingNormal:new T.Vector3(),landingPosition:new T.Vector3(),groundRadius:()=>170,isWater:()=>false};
 createExploration({state:s,world:w,$,getBeacon:body=>body==='moon'?beacon:null,toast(){},settingsSave(){}},()=>{});const before=s.position.clone();$('surface-map-btn').onclick();assert.ok(labels.includes('Tu baliza'));assert.equal($('surface-beacon').disabled,false);$('surface-beacon').onclick();assert.equal($('surface-lat').value,'12.00');assert.equal($('surface-lon').value,'-34.00');assert.match($('surface-target').textContent,/Baliza de exploración/);assert.ok(labels.includes('Tu baliza · destino'));assert.ok(s.position.equals(before));assert.deepEqual(beacon,{lat:12,lon:-34});
 s.planet=bodyById('mars');labels.length=0;$('surface-map-btn').onclick();assert.equal($('surface-beacon').disabled,true);assert.equal(labels.includes('Tu baliza'),false);s.planet=bodyById('moon');
 beacon=null;labels.length=0;$('surface-map-btn').onclick();assert.equal($('surface-beacon').disabled,true);assert.equal(labels.includes('Tu baliza'),false);
});
