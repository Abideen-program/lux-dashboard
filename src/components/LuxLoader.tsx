'use client';

import 'luxcss/dist/lux.js';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LuxLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-init Lux on every route change so reveal=, ripple=,
    // tooltip=, motion= etc. work on freshly rendered elements
    if (typeof window !== 'undefined' && window.Lux) {
      window.Lux.init();
    }
  }, [pathname]);

  return null;
}
