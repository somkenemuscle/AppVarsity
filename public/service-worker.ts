self.addEventListener('install', (event: Event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event: Event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event: any) => {
    console.log('Fetching:', event.request.url);
    event.respondWith(fetch(event.request));
});