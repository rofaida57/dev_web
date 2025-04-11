const CACHE_NAME = "programming-lang-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/book 01.html",
  "/book02.html",
  "/book03.html",
  "/book04.html",
  "/book05.html",
  "/book06.html",
  "/book07.html",
  "/book08.html",
  "/eee.png",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Tajawal&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
