const CACHE = 'tutorial-v2';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html'])));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : null))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(response => {
        let copy = response.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
