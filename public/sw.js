self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('https://random-d.uk/')) {
        const resp = new Response(`{"ok":false,"mensaje":"Este recurso no está disponible debido a políticas de CORS"}`);
        event.respondWith(resp);
    }
})
