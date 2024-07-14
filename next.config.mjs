import withPWA from 'next-pwa';

/** @type {import("next").NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
};

export default withPWA({
  target: 'serverless',
  dest: 'public', // destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true, // skip waiting for service worker activation
  // runtimeCaching: [ // TODO: Investigate so that Service Worker becomes better
  //     {
  //         urlPattern: /^https:\/\/example.com\/api\/.*/,
  //         handler: '',
  //         options: {
  //             cacheName: '',
  //             expiration: {
  //                 maxEntries: 10,
  //                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
  //             },
  //             networkTimeoutSeconds: 10,
  //         },
  //     },
  // ],
})(nextConfig);
