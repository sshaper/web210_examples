//version 5
try{
    importScripts("events.js");

}
catch(e){

}

self.addEventListener("fetch", event =>{
    console.log(`fetch ${event.request.url}`);
    const response = new Response(`fetch ${event.request.url}`);
    event.respondWith(response);
});