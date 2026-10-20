const CACHE='orbita-solar-v44';
const ROOT=new URL('./',self.location.href);
const FILES=['./','index.html','style.css','app.js','world.js','world-v2.js','simulation.js','expansion.js','audio.js','catalog-v4.js','systems.js','world-mission.js','mission-control.js','field-data.js','field-expedition.js','surface.js','exploration.js','assets/terrain/regions.js','assets/terrain/CREDITS.md','core.js','data.js','manifest.webmanifest','assets/icon.svg','assets/icon-192.png','assets/icon-512.png','vendor/three.module.js','vendor/three.core.js',...['mercury','venus_surface','venus_atmosphere','earth_daymap','earth_clouds','mars','jupiter','saturn','uranus','neptune','moon','europa','titan'].map(n=>`assets/textures/${n}.jpg`),'assets/textures/CREDITS.md'];
async function download(){const cache=await caches.open(CACHE);await cache.addAll(FILES.map(f=>new Request(new URL(f,ROOT),{cache:'reload'})));}
self.addEventListener('install',event=>{event.waitUntil(download().then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith('orbita-solar-')&&name!==CACHE)await caches.delete(name);await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='CACHE_ALL')event.waitUntil(download().then(()=>event.ports[0]?.postMessage({ok:true})).catch(error=>event.ports[0]?.postMessage({ok:false,error:String(error)})));});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  event.respondWith((async()=>{const cache=await caches.open(CACHE);if(event.request.mode==='navigate'){try{const response=await fetch(event.request);if(response.ok)await cache.put(new URL('index.html',ROOT),response.clone());return response;}catch{const saved=await cache.match(new URL('index.html',ROOT));return saved||new Response('Conéctate para descargar Órbita por primera vez.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}}
    const cached=await cache.match(event.request);if(url.hostname==='127.0.0.1'||url.hostname==='localhost'){try{return await fetch(event.request);}catch{return cached||new Response('',{status:503});}}return cached||fetch(event.request);
  })());
});
