import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Larios Beach Holidays Resort | Beachside Stay in Baga, Goa',
  description: 'A relaxed beachside resort near Baga Beach, Goa featuring comfortable rooms, outdoor swimming pool, sea views, and beachfront dining.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=2026', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2026', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico?v=2026' },
      { url: '/icon.svg?v=2026', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon-32x32.png?v=2026',
    apple: '/apple-touch-icon.png?v=2026',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2026" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2026" />
        <link rel="icon" href="/favicon.ico?v=2026" />
        <link rel="icon" href="/icon.svg?v=2026" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2026" />
      </head>
      <body className="bg-resort-bg text-resort-dark antialiased selection:bg-sand-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}
