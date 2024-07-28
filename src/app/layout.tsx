import type { Metadata, Viewport } from 'next';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from 'next/font/google';
import '../scss/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pocket Flower',
  description: '',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [''],
  authors: [
    {
      name: 'tika',
      url: '',
    },
  ],
  // viewport:
  //   "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-48x48.png' },
    { rel: 'icon', url: 'icons/icon-48x48.png' },
  ],
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
