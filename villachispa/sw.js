const ROOT=new URL('./',self.location.href);
const PREFIX=`villachispa-${ROOT.pathname.replace(/[^a-z0-9]/gi,'_')}-`;
const VERSION=PREFIX+'v1.0.1';
const FILES=['./','./index.html','./style.css','./app.js','./art.js','./core.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/icon-maskable.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(FILES.map(path=>new URL(path,ROOT).href))));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==VERSION)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;event.respondWith((async()=>{const cache=await caches.open(VERSION);const found=await cache.match(event.request,{ignoreSearch:true});if(found)return found;try{return await fetch(event.request);}catch(error){if(event.request.mode==='navigate')return (await cache.match(new URL('./index.html',ROOT).href))||Response.error();throw error;}})());});
self.addEventListener('message',event=>{if(event.data?.type!=='CHECK_CACHE'||!event.ports[0])return;event.waitUntil((async()=>{const cache=await caches.open(VERSION);const results=await Promise.all(FILES.map(path=>cache.match(new URL(path,ROOT).href)));event.ports[0].postMessage({ready:results.every(Boolean),version:VERSION});})());});
