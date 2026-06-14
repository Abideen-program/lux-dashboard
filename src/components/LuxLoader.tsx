'use client';

import 'luxcss/dist/lux.js';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CommandPalette from './CommandPalette';

export default function LuxLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Lux) {
      window.Lux.init();
    }
  }, [pathname]);

  return <CommandPalette />;
}
