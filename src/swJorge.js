// console.log('Aqui mis Sw.js')

// const CACHE_NAME = "what-to-do-v2";
// const cacheUrls = [
//     "/",
//     "/favicon.ico",
//     'assets/error.html'
// ];

// self.addEventListener('install',function(ev){
//     // console.log(ev);
//     caches.open(CACHE_NAME)
//         .then(function(cache){
//             return cache.addAll(cacheUrls);
//         })
// })

// self.addEventListener('activate',function(ev){
//     console.log('SW Actualizada')
//     const limpiarCachePr = caches.keys().then(function(names){
//         console.log(names);
//         const limpiarViejosPr = names.map((name)=>{
//             if(CACHE_NAME !== name ) return caches.delete(name);
//         })
//     })

//     ev.waitUntil(limpiarCachePr);
// })

// self.addEventListener('fetch',function(ev){
//     // console.log(ev.request);
//     const responsePr = caches.match(ev.request)
//     .then(function(response){
//         console.log(response)
//         if(response){
//             return response;
//         }
//         return fetch(ev.request);
//     }).catch(err=>{
//         if(ev.request.mode == "navigate")
//         return caches.match("assets/error.html");
//     })
//     ev.respondWith(responsePr); 
// });
