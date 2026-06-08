'use client';

const activities = [
  { icon: '🛒', color: '#6366f1', text: 'New order from',        user: 'Sarah Johnson',   time: '2m ago'  },
  { icon: '👤', color: '#22c55e', text: 'New signup',            user: 'Marcus Williams', time: '14m ago' },
  { icon: '💳', color: '#f472b6', text: 'Payment received from', user: 'Aiko Tanaka',     time: '1h ago'  },
  { icon: '⚠️', color: '#f59e0b', text: 'Payment failed',        user: 'Lena Schmidt',    time: '2h ago'  },
  { icon: '📦', color: '#38bdf8', text: 'Order shipped to',      user: 'David Okafor',    time: '3h ago'  },
  { icon: '⭐', color: '#8b5cf6', text: '5-star review from',    user: 'James Obi',       time: '5h ago'  },
];

export default function ActivityFeed() {
  return (
    <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>

      {/* Header */}
      <div layout="row" justify="between" align="center" style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
        <div layout="stack" gap="xs">
          <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Activity Feed</div>
          <div text="caption">Real-time updates</div>
        </div>
        <span badge="dot" tone="success" style={{ fontSize: '0.7rem' }}>Live</span>
      </div>

      {/* Activity items */}
      <div layout="stack">
        {activities.map((a, i) => (
          <div
            key={i}
            layout="row"
            gap="sm"
            align="center"
            motion="subtle"
            style={{ padding: '0.65rem 1.25rem', borderRadius: 0, cursor: 'default' }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              background: `color-mix(in srgb, ${a.color} 15%, transparent)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'
            }}>
              {a.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>{a.text} </span>
              <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>{a.user}</span>
            </div>
            <span text="caption" style={{ fontSize: '0.68rem', whiteSpace: 'nowrap', flexShrink: 0 }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
