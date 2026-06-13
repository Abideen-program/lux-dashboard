'use client';

import 'luxcss/dist/lux.js';

// This component renders nothing — it exists purely so that
// `lux.js` (a side-effect import) is included in the CLIENT
// bundle. In Next.js App Router, app/layout.tsx is a Server
// Component, and side-effect imports there never reach the
// browser. Importing from a 'use client' component fixes this.
export default function LuxLoader() {
  return null;
}
