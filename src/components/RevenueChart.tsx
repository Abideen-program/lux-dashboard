'use client';

import { useState } from 'react';

const data = [
  { month: 'Jan', value: 42, revenue: '$32k' },
  { month: 'Feb', value: 58, revenue: '$44k' },
  { month: 'Mar', value: 45, revenue: '$34k' },
  { month: 'Apr', value: 72, revenue: '$55k' },
  { month: 'May', value: 65, revenue: '$49k' },
  { month: 'Jun', value: 88, revenue: '$67k' },
  { month: 'Jul', value: 74, revenue: '$56k' },
  { month: 'Aug', value: 92, revenue: '$70k' },
  { month: 'Sep', value: 68, revenue: '$52k' },
  { month: 'Oct', value: 85, revenue: '$65k' },
  { month: 'Nov', value: 95, revenue: '$72k' },
  { month: 'Dec', value: 100, revenue: '$76k' },
];

const periods = ['12M', '6M', '3M', '1M'];
const sliceMap: Record<string, number> = { '12M': 12, '6M': 6, '3M': 3, '1M': 1 };

export default function RevenueChart() {
  const [active, setActive]   = useState('12M');
  const [hovered, setHovered] = useState<number | null>(null);
  const displayed = data.slice(-sliceMap[active]);

  return (
    <div surface="matte" radius="xl" density="spacious" elevation="low">

      {/* Header */}
      <div layout="row" justify="between" align="center" style={{ marginBottom: '1.25rem' }}>
        <div layout="stack" gap="xs">
          <span text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>
            Revenue Overview
          </span>
          <span text="caption">
            {hovered !== null ? `${displayed[hovered].month}: ${displayed[hovered].revenue}` : 'Hover bars for details'}
          </span>
        </div>

        {/* Period selector */}
        <div layout="row" gap="xs">
          {periods.map(p => (
            <button
              key={p}
              surface={active === p ? 'solid' : 'matte'}
              tone="primary"
              radius="full"
              density="compact"
              onClick={() => setActive(p)}
              style={{ fontSize: '0.72rem', fontWeight: 600, opacity: active === p ? 1 : 0.5 }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '120px', padding: '0 0.25rem' }}>
        {displayed.map((d, i) => (
          <div
            key={d.month}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}
          >
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: '100%',
                height: `${d.value}%`,
                borderRadius: '4px 4px 0 0',
                background: hovered === i
                  ? 'var(--lux-primary)'
                  : 'color-mix(in srgb, var(--lux-primary) 35%, transparent)',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
            />
            <span style={{ fontSize: '0.6rem', opacity: 0.4, whiteSpace: 'nowrap' }}>{d.month}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
