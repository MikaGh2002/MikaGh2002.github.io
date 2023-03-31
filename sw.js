self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('MDL-cache')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          'about.html',
          'blog.html',
          'contact.html',
          '/images/example-work01.jpg',
          '/images/example-work07.jpg',
          '/images/example-work02.jpg',
          '/images/example-work04.jpg',
          '/images/example-work05.jpg',
          '/images/example-work03.jpg',
          '/images/example-work06.jpg',
          '/images/example-work08.jpg',
          '/images/example-work09.jpg',
          '/images/logo.png'
        ])
      })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});

