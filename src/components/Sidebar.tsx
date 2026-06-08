'use client';

import { useState } from 'react';

const navItems = [
  { icon: '⬡', label: 'Overview',      section: 'main'  },
  { icon: '📊', label: 'Analytics',    section: 'main'  },
  { icon: '🛒', label: 'Orders',       section: 'main'  },
  { icon: '👥', label: 'Customers',    section: 'main'  },
  { icon: '📦', label: 'Products',     section: 'main'  },
  { icon: '💬', label: 'Messages',     section: 'main'  },
  { icon: '📁', label: 'Reports',      section: 'other' },
  { icon: '🔗', label: 'Integrations', section: 'other' },
  { icon: '⚙️', label: 'Settings',     section: 'other' },
];

export default function Sidebar() {
  const [active, setActive] = useState('Overview');
  const mainItems  = navItems.filter(i => i.section === 'main');
  const otherItems = navItems.filter(i => i.section === 'other');

  return (
    <aside className="dash-sidebar">

      {/* Logo */}
      <div
        layout="row"
        gap="sm"
        align="center"
        style={{ padding: '0 1.25rem', height: '56px', borderBottom: '1px solid var(--lux-border)', flexShrink: 0 }}
      >
        <div
          surface="solid"
          tone="primary"
          radius="md"
          style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, color: '#fff', flexShrink: 0 }}
        >
          ✦
        </div>
        <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>
          Lux<span style={{ opacity: 0.35 }}>Dash</span>
        </span>
        <span badge="true" tone="primary" style={{ fontSize: '0.55rem', marginLeft: 'auto' }}>v1</span>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '0.75rem', flex: 1 }}>
        <div className="nav-label">Main</div>
        {mainItems.map(item => (
          <button
            key={item.label}
            className={`nav-item ${active === item.label ? 'active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            <span style={{ fontSize: '1rem', width: 20, textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
            {item.label}
            {item.label === 'Messages' && (
              <span badge="counter" tone="primary" style={{ marginLeft: 'auto', fontSize: '0.6rem' }}>3</span>
            )}
          </button>
        ))}

        <div className="nav-label">System</div>
        {otherItems.map(item => (
          <button
            key={item.label}
            className={`nav-item ${active === item.label ? 'active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            <span style={{ fontSize: '1rem', width: 20, textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* User profile */}
      <div style={{ padding: '0.875rem', borderTop: '1px solid var(--lux-border)' }}>
        <div
          surface="matte"
          radius="lg"
          density="compact"
          motion="subtle"
          layout="row"
          gap="sm"
          align="center"
          style={{ cursor: 'pointer' }}
        >
          <div className="avatar" style={{ background: 'linear-gradient(135deg, #6366f1, #f472b6)' }}>AB</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Abideen</div>
            <div text="caption" style={{ fontSize: '0.7rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>admin@luxcss.dev</div>
          </div>
          <span style={{ opacity: 0.35, fontSize: '0.75rem' }}>⋯</span>
        </div>
      </div>
    </aside>
  );
}
