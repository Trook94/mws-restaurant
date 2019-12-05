let staticCacheName = 'mws-static-v1';

// Install Service worker and cache all pages and assets required for offline access

self.addEventListener('install', function (event){
    event.waitUntil(caches.open(staticCacheName).then(function(cache){
        return cache.addAll(['./',
        'js/main.js', 'js/restaurant_info.js', 'js/dbhelper.js', 
        'css/styles.css',
        'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg',
        'data/restaurants.json',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
              ]);
          }));
        });