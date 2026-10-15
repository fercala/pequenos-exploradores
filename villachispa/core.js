export const SAVE_KEY='villachispa.save.v1';
export const DAYS=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
export const SHOP=[
 {id:'kite',name:'Cometa de colores',price:10,description:'Llévala al parque y hazla volar.',kind:'kite'},
 {id:'flowers',name:'Jardín de flores',price:5,description:'Planta flores de colores en tu parque.',kind:'flower'},
 {id:'drums',name:'Pequeña orquesta',price:10,description:'Crea tu propia melodía.',kind:'drum'},
 {id:'track',name:'Pista de juguete',price:20,description:'Construye una pista y prueba el coche.',kind:'car'},
];
export function freshSave(){return {version:1,age:3,coins:5,inventory:[],events:{},completed:{},active:null,checkpoints:{},weekDay:0,weekRun:0,fireRun:0,settings:{sound:true,quiet:false,holiday:false},park:{flowers:[],blocks:[],track:[],paint:[]},evidence:[]};}
export function validateSave(value){
 if(!value||value.version!==1||![3,4,5,6].includes(value.age)||!Number.isSafeInteger(value.coins)||value.coins<0||value.coins>1000000)throw new Error('La copia no tiene un formato válido.');
 const out=freshSave();out.age=value.age;out.coins=value.coins;
 out.inventory=[...new Set((value.inventory||[]).filter(x=>SHOP.some(s=>s.id===x)))];
 for(const name of ['events','completed'])if(value[name]&&typeof value[name]==='object'&&!Array.isArray(value[name]))out[name]=Object.fromEntries(Object.entries(value[name]).filter(([k,v])=>k.length<120&&(typeof v==='number'||typeof v==='boolean')));
 out.weekDay=Number.isInteger(value.weekDay)?Math.max(0,Math.min(6,value.weekDay)):0;
 out.weekRun=Number.isSafeInteger(value.weekRun)?Math.max(0,value.weekRun):0;
 out.fireRun=Number.isSafeInteger(value.fireRun)?Math.max(0,value.fireRun):0;
 out.settings={sound:value.settings?.sound!==false,quiet:!!value.settings?.quiet,holiday:!!value.settings?.holiday};
 if(value.park&&typeof value.park==='object')for(const k of ['flowers','blocks','track','paint'])out.park[k]=Array.isArray(value.park[k])?value.park[k].slice(0,100).filter(p=>p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=0&&p.x<=1200&&p.y>=0&&p.y<=760).map(p=>({x:p.x,y:p.y,color:typeof p.color==='string'&&/^#[a-f0-9]{6}$/i.test(p.color)?p.color:'#dc8a65'})):[];
 if(value.active&&['fire','week'].includes(value.active.type)&&Number.isInteger(value.active.stage)&&value.active.stage>=0&&value.active.stage<10){out.active=structuredClone(value.active);out.active.picked=Array.isArray(out.active.picked)?out.active.picked.filter(x=>typeof x==='string').slice(0,20):[];out.active.run=Number.isInteger(out.active.run)?out.active.run:0;out.active.level=[3,4,5,6].includes(out.active.level)?out.active.level:out.age;out.active.day=Number.isInteger(out.active.day)?Math.max(0,Math.min(6,out.active.day)):out.weekDay;out.active.water=Array.isArray(out.active.water)?out.active.water.slice(0,3).map(n=>Number.isFinite(n)?Math.max(0,Math.min(1,n)):0):[0,0,0];out.active.assisted=!!out.active.assisted;}
 if(value.checkpoints&&typeof value.checkpoints==='object')for(const type of ['fire','week'])if(value.checkpoints[type]?.type===type){const normalized=validateSave({...freshSave(),active:value.checkpoints[type]});if(normalized.active)out.checkpoints[type]=normalized.active;}
 out.evidence=Array.isArray(value.evidence)?value.evidence.slice(-60).filter(x=>x&&typeof x.text==='string'):[];
 return out;
}
export function reward(save,mission,eventId){
 if(save.events[eventId])return {amount:0,first:false};
 const first=!save.completed[mission];const amount=first?10:3;
 save.coins+=amount;save.completed[mission]=(save.completed[mission]||0)+1;save.events[eventId]=true;
 return {amount,first};
}
export function weekBonus(save){if(DAYS.every((_,i)=>save.completed[`week-${i}`])&&!save.events['week-bonus']){save.events['week-bonus']=true;save.coins+=15;return 15;}return 0;}
export function purchase(save,id){const item=SHOP.find(x=>x.id===id);if(!item)return {ok:false,reason:'No encontramos ese juguete.'};if(save.inventory.includes(id))return {ok:false,reason:'¡Este juguete ya es tuyo!'};if(save.coins<item.price)return {ok:false,reason:'Puedes seguir jugando y conseguir más monedas.'};save.coins-=item.price;save.inventory.push(id);return {ok:true,item};}
export function fireSteps(age){return age<=3?['equipo','camino','animales','agua','cuidado']:['equipo','depósito','camino','animales','agua','cuidado','recuerdos'];}
export function safeText(value){return String(value).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));}
