'use client';

import { useState, useEffect } from 'react';

export default function Header({ title = 'Overview' }: { title?: string }) {
  const [scheme, setScheme] = useState<'dark' | 'light'>('dark');
  const [search, setSearch]  = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('lux-scheme') as 'dark' | 'light' | null;
    if (stored) {
      setScheme(stored);
      document.documentElement.setAttribute('scheme', stored);
    }
  }, []);

  const toggleTheme = () => {
    const next = scheme === 'dark' ? 'light' : 'dark';
    setScheme(next);
    document.documentElement.setAttribute('scheme', next);
    localStorage.setItem('lux-scheme', next);
  };

  return (
    <header
      surface="glass"
      layout="row"
      justify="between"
      align="center"
      pos="sticky"
      z="50"
      radius="none"
      style={{ height: '56px', borderBottom: '1px solid var(--lux-border)', padding: '0 1.5rem' }}
    >
      {/* Left — page title */}
      <div layout="row" gap="sm" align="center">
        <h1 text="label" style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'none' }}>
          {title}
        </h1>
        <span badge="dot" tone="success" style={{ fontSize: '0.65rem' }}>Live</span>
      </div>

      {/* Right — actions */}
      <div layout="row" gap="sm" align="center">

        {/* Search */}
        <div surface="matte" radius="full" layout="row" gap="sm" align="center" density="compact">
          <span style={{ opacity: 0.4, fontSize: '0.8rem' }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search…"
            style={{ background: 'none', border: 'none', outline: 'none', fontSize: '0.8rem', width: '130px', color: 'var(--lux-fg)' }}
          />
        </div>

        {/* Notifications */}
        <button
          surface="matte"
          radius="full"
          tooltip="Notifications"
          tooltip-pos="bottom"
          style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', position: 'relative', padding: 0 }}
        >
          🔔
          <span style={{ position: 'absolute', top: 4, right: 4, width: 7, height: 7, borderRadius: '50%', background: 'var(--lux-danger)', border: '1.5px solid var(--lux-bg)' }} />
        </button>

        {/* Theme toggle */}
        <button
          surface="matte"
          radius="full"
          ripple="true"
          tooltip={scheme === 'dark' ? 'Light mode' : 'Dark mode'}
          tooltip-pos="bottom"
          onClick={toggleTheme}
          style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', padding: 0 }}
        >
          {scheme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Avatar */}
        <div
          className="avatar"
          tone="primary"
          glow="sm"
          tooltip="Abideen"
          tooltip-pos="bottom"
          style={{ background: 'linear-gradient(135deg, #6366f1, #f472b6)', width: 34, height: 34, cursor: 'pointer' }}
        >
          AB
        </div>
      </div>
    </header>
  );
}
