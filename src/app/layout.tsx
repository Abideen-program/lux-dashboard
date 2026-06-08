import type { Metadata } from 'next';
import 'luxcss/dist/lux.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lux Dashboard',
  description: 'A beautiful dashboard built with Next.js and Lux CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/luxcss/dist/lux.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
