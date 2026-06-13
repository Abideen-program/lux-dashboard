import type { Metadata } from 'next';
import 'luxcss/dist/lux.css';
import './globals.css';
import LuxLoader from '@/components/LuxLoader';

export const metadata: Metadata = {
  title: 'Lux Dashboard',
  description: 'A beautiful dashboard built with Next.js and Lux CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LuxLoader />
        {children}
      </body>
    </html>
  );
}
