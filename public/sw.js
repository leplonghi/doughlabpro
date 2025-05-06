
// Service Worker for DoughLab Pro

const CACHE_NAME = 'doughlab-pro-cache-v1';

// Resources to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.ico',
  '/pizza-logo.svg',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png',
  '/lovable-uploads/dough-mixing.jpg',
  '/lovable-uploads/dough-kneading.jpg',
  '/lovable-uploads/dough-fermentation.jpg',
  '/lovable-uploads/dough-balling.jpg',
  '/lovable-uploads/dough-proofing.jpg',
  '/lovable-uploads/pizza-shaping.jpg',
  '/lovable-uploads/pizza-baking.jpg',
  '/lovable-uploads/pizza-serving.jpg',
];

// Install event - caches resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - cleans up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Fetch event - serves cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - return the result from the live server
        // and cache it for future
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response for caching and for the browser
            let responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // If fetch fails, show offline page
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
          });
      })
  );
});
