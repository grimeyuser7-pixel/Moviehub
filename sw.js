const CACHE="moviehub-final-v1";
const SHELL=["./","./index.html","./manifest.json","./sw.js","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET") return;
 const u=new URL(e.request.url);
 if(u.origin===location.origin){
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const c=x.clone();caches.open(CACHE).then(k=>k.put(e.request,c));return x}).catch(()=>caches.match("./index.html"))));
 }
});
