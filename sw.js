self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('MDL-cache')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/about.html',
          '/blog.html',
          '/contact.html',
          '/images/logo.png',
          '/images/example-work01.jpg',
          '/images/example-work07.jpg',
          '/images/example-work02.jpg',
          '/images/example-work03.jpg',
          '/images/example-work04.jpg',
          '/images/example-work05.jpg',
          '/images/example-work06.jpg',
          '/images/example-work08.jpg',
          '/images/example-work09.jpg',
          '/styles.css',
          '/images/footer-background.png',
          '/images/header-bg.jpg',
          '/images/photo.jpg',
          '/images/photo-wide.jpg',
          '/images/portfolio-example-01.jpg',
          '/images/portfolio-example-02.jpg',
          '/images/portfolio-example-03.jpg',
          '/images/portfolio-example-04.jpg',
          '/images/portfolio-example-05.jpg',
          '/images/portfolio-example-06.jpg',
          '/app.js',
          '/manifest.json',
          '/sw.js'
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

