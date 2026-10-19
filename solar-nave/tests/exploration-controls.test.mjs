import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.js';
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
