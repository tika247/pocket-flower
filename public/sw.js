if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      f = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => f[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: 'b782f4e3957012a2f85a0bd9cb430be8' },
        { url: '/_next/static/6zpEVzLjyJ8MghfrV31aE/_buildManifest.js', revision: '39246a7d1705afa22a9fb135583c7b97' },
        { url: '/_next/static/6zpEVzLjyJ8MghfrV31aE/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/173-5f0488561ee1b928.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/23-aa4c8f6d1463d769.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/853-f4db691d44fbc7c2.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/_not-found/page-a13250d2f63318ba.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/auth-protected/page-a670ec126481ad9f.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/layout-d09110cedc6db090.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/middleware/page-edbf92b68d7be650.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/page-4fc74610c85b644e.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/app/profile/page-8bcf58efcbe3a64f.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/fd9d1056-1f4c605cebad2e8d.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/framework-f66176bb897dc684.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/main-app-45d563e31f19dfa6.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/main-f05d1e8ac95c0c77.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/pages/_error-c8744fecb1ea8a0c.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js', revision: '79330112775102f91e1010318bae2bd3' },
        { url: '/_next/static/chunks/webpack-80246db25cf251b6.js', revision: '6zpEVzLjyJ8MghfrV31aE' },
        { url: '/_next/static/css/37acae4ba8d1b02a.css', revision: '37acae4ba8d1b02a' },
        { url: '/_next/static/media/05a31a2ca4975f99-s.woff2', revision: 'f1b44860c66554b91f3b1c81556f73ca' },
        { url: '/_next/static/media/513657b02c5c193f-s.woff2', revision: 'c4eb7f37bc4206c901ab08601f21f0f2' },
        { url: '/_next/static/media/51ed15f9841b9f9d-s.woff2', revision: 'bb9d99fb9bbc695be80777ca2c1c2bee' },
        { url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2', revision: '74c3556b9dad12fb76f84af53ba69410' },
        { url: '/_next/static/media/d6b16ce4a6175f26-s.woff2', revision: 'dd930bafc6297347be3213f22cc53d3e' },
        { url: '/_next/static/media/ec159349637c90ad-s.woff2', revision: '0e89df9522084290e01e4127495fae99' },
        { url: '/_next/static/media/fd4db3eb5472fc27-s.woff2', revision: '71f3fcaf22131c3368d9ec28ef839831' },
        { url: '/favicon.ico', revision: 'c2b3a2bff634d6c713ef8d955bc6df8d' },
        { url: '/favicon.png', revision: '19105f1c3d51d8ff93707c888a26e923' },
        { url: '/icons/icon-128x128.png', revision: '8d6f234d1c18a5ec0c6bb9a6dcacfe58' },
        { url: '/icons/icon-48x48.png', revision: 'ff2c6c8503c26f9e2d297e10fb222bcb' },
        { url: '/manifest.json', revision: 'edc06f7c11b3edac743b822cb8b30702' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
