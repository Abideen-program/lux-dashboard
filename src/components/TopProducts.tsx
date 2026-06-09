'use client';

const products = [
  { name: 'Enterprise Plan', revenue: '$24,500', share: 51, color: '#6366f1', tone: 'primary', sales: 245  },
  { name: 'Pro Plan',        revenue: '$14,700', share: 30, color: '#f472b6', tone: 'accent',  sales: 490  },
  { name: 'Starter Plan',   revenue: '$9,095',  share: 19, color: '#38bdf8', tone: 'info',    sales: 1857 },
];

export default function TopProducts() {
  return (
    <div surface="matte" radius="xl" elevation="low" layout="stack" style={{ height: '100%' }}>

      {/* Header */}
      <div style={{ padding: '1.25rem 1.25rem 0' }}>
        <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Top Products</div>
        <div text="caption" style={{ marginTop: '0.1rem' }}>By revenue share</div>
      </div>

      {/* Product list */}
      <div layout="stack" gap="md" style={{ padding: '1.25rem', flex: 1 }}>
        {products.map((p) => (
          <div key={p.name} layout="stack" gap="xs">
            <div layout="row" justify="between" align="center">
              <div layout="row" gap="sm" align="center">
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{p.name}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>{p.revenue}</div>
                <div text="caption" style={{ fontSize: '0.68rem' }}>{p.sales} sales</div>
              </div>
            </div>
            {/* Lux progress bar */}
            <div progress="true" tone={p.tone}>
              <div progress-bar="true" style={{ width: `${p.share}%`, background: p.color }} />
            </div>
            <div text="caption" style={{ fontSize: '0.68rem' }}>{p.share}% of total</div>
          </div>
        ))}
      </div>

      {/* Donut chart */}
      <div layout="center" style={{ padding: '0 1.25rem 1.25rem' }}>
        <svg width="110" height="110" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="45" fill="none" stroke="var(--lux-surface-2)" strokeWidth="14" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="#6366f1" strokeWidth="14"
            strokeDasharray={`${51 * 2.827} ${100 * 2.827}`} strokeDashoffset={`${25 * 2.827}`} strokeLinecap="round" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="#f472b6" strokeWidth="14"
            strokeDasharray={`${30 * 2.827} ${100 * 2.827}`} strokeDashoffset={`${-26 * 2.827}`} strokeLinecap="round" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="#38bdf8" strokeWidth="14"
            strokeDasharray={`${18 * 2.827} ${100 * 2.827}`} strokeDashoffset={`${-56 * 2.827}`} strokeLinecap="round" />
          <text x="60" y="56" textAnchor="middle" style={{ fontSize: '0.75rem', fontWeight: 700, fill: 'var(--lux-fg)' }}>$48k</text>
          <text x="60" y="68" textAnchor="middle" style={{ fontSize: '0.5rem', fill: 'var(--lux-fg)', opacity: 0.45 }}>TOTAL</text>
        </svg>
      </div>
    </div>
  );
}
