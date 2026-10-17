'use strict';
const CACHE='pequenos-exploradores-mobile-v6';
const ROOT=new URL('./',self.location.href).href;
const SHELL=['./','index.html','style.css','expansion.css','discovery.css','mobile.css','art.js','app.js','adventures.js','discovery.js','mobile.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'].map(p=>new URL(p,ROOT).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('pequenos-exploradores-mobile-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(ROOT)||['villachispa/','solar-nave/'].some(path=>url.href.startsWith(new URL(path,ROOT).href)))return;
 if(event.request.mode==='navigate'){
  event.respondWith(caches.match(ROOT).then(cached=>cached||fetch(event.request)));return;
 }
 if(SHELL.includes(url.href))event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
