import type { Metadata } from 'next';
import 'luxcss/dist/lux.css';
import './globals.css';
import LuxLoader from '@/components/LuxLoader';
import { SidebarProvider } from '@/components/SidebarContext';

export const metadata: Metadata = {
  title: 'Lux Dashboard',
  description: 'A beautiful dashboard built with Next.js and Lux CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Apply saved theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var s = localStorage.getItem('lux-scheme');
            if (s) document.documentElement.setAttribute('scheme', s);
          } catch(e) {}
        `}} />
      </head>
      <body>
        <SidebarProvider>
          <LuxLoader />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
