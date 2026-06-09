'use client';

const stats = [
  { icon: '💰', iconColor: '#6366f1', label: 'Total Revenue', value: '$48,295', change: '+12.5%', dir: 'up',   tone: 'success' },
  { icon: '🛒', iconColor: '#22c55e', label: 'Total Orders',  value: '1,429',   change: '+8.2%',  dir: 'up',   tone: 'success' },
  { icon: '👥', iconColor: '#38bdf8', label: 'New Customers', value: '384',     change: '+3.1%',  dir: 'up',   tone: 'success' },
  { icon: '📉', iconColor: '#ef4444', label: 'Churn Rate',    value: '2.4%',    change: '-0.8%',  dir: 'down', tone: 'danger'  },
];

export default function StatsCards() {
  return (
    <div layout="grid" cols="2" md-cols="4" gap="md">
      {stats.map((s) => (
        <div
          key={s.label}
          surface="matte"
          radius="xl"
          density="spacious"
          motion="subtle"
          reveal="bottom"
          layout="stack"
          gap="sm"
        >
          {/* Top row */}
          <div layout="row" justify="between" align="center">
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `color-mix(in srgb, ${s.iconColor} 15%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              {s.icon}
            </div>
            <span badge="dot" tone={s.tone} style={{ fontSize: '0.7rem' }}>
              {s.dir === 'up' ? '↑' : '↓'} {s.change}
            </span>
          </div>

          {/* Value */}
          <div text="heading" style={{ fontSize: '1.65rem', letterSpacing: '-0.03em' }}>{s.value}</div>

          {/* Label */}
          <div text="caption">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
