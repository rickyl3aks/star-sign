const cacheName = "zodiac_sign_v1";

const staticAssets = ["./", "style.css", "main.js"];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("[demoPWA - ServiceWorker] Activate event fired.");
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("[demoPWA - ServiceWorker] Removing old cache...", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
