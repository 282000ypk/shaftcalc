function registerServiceWorker(){
    navigator.serviceWorker
    .register('/serviceWorker.js')
    .then(function(reg){
        console.log("service worker registered", reg)
    })
    .catch(function(err){
        console.log("error when registering service worker", err)
    })
}

self.addEventListener('install', function(event){
    console.log("service worker installed", event)
})

self.addEventListener('activate', function(event){
    console.log("service worker activated", event)
})

var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "./index.html"
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(STATIC_CACHE_CONTAINER)
        .then(function(cache){
            cache.addAll(STATIC_FILES)
        })
    )
})

self.addEventListener('activate', function(event){
    console.log("service worker activated", event)
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response
            } 
        })
    )
})

/*latest change*/