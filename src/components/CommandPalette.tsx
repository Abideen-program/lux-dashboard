'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const commands = [
  { icon: '⬡', label: 'Overview',      href: '/',             category: 'Navigate' },
  { icon: '📊', label: 'Analytics',    href: '/analytics',     category: 'Navigate' },
  { icon: '🛒', label: 'Orders',       href: '/orders',        category: 'Navigate' },
  { icon: '👥', label: 'Customers',    href: '/customers',     category: 'Navigate' },
  { icon: '📦', label: 'Products',     href: '/products',      category: 'Navigate' },
  { icon: '💬', label: 'Messages',     href: '/messages',       category: 'Navigate' },
  { icon: '📁', label: 'Reports',      href: '/reports',        category: 'Navigate' },
  { icon: '🔗', label: 'Integrations', href: '/integrations',   category: 'Navigate' },
  { icon: '⚙️', label: 'Settings',     href: '/settings',       category: 'Navigate' },
  { icon: '🌙', label: 'Toggle Dark Mode',  href: null, action: 'theme', category: 'Actions' },
  { icon: '🎉', label: 'Trigger Confetti',  href: null, action: 'confetti', category: 'Actions' },
];

export default function CommandPalette() {
  const [open, setOpen]     = useState(false);
  const [query, setQuery]   = useState('');
  const [selected, setSelected] = useState(0);
  const router  = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard shortcut — Cmd+K or Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
        setQuery('');
        setSelected(0);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Arrow key navigation + Enter
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === 'Enter')     { e.preventDefault(); runCommand(filtered[selected]); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, filtered, selected]);

  function runCommand(cmd: typeof commands[0]) {
    if (!cmd) return;
    setOpen(false);
    if (cmd.href) {
      router.push(cmd.href);
    } else if (cmd.action === 'theme') {
      const cur = document.documentElement.getAttribute('scheme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('scheme', next);
      localStorage.setItem('lux-scheme', next);
    } else if (cmd.action === 'confetti') {
      window.Lux?.confetti({ count: 100 });
    }
  }

  if (!open) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        surface="matte"
        radius="xl"
        elevation="float"
        style={{ width: '100%', maxWidth: 560, overflow: 'hidden', margin: '0 1rem' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div layout="row" gap="sm" align="center" style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
          <span style={{ opacity: 0.4, fontSize: '1rem', flexShrink: 0 }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(0); }}
            placeholder="Search commands or navigate…"
            style={{ background: 'none', border: 'none', outline: 'none', fontSize: '0.95rem', color: 'var(--lux-fg)', flex: 1 }}
          />
          <kbd style={{ fontSize: '0.65rem', opacity: 0.4, background: 'var(--lux-surface-2)', padding: '0.2em 0.5em', borderRadius: 4, fontFamily: 'monospace' }}>ESC</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 380, overflowY: 'auto', padding: '0.5rem' }}>
          {filtered.length === 0 ? (
            <div text="caption" style={{ padding: '1.5rem', textAlign: 'center', opacity: 0.5 }}>No results for "{query}"</div>
          ) : (
            (() => {
              const categories = [...new Set(filtered.map(c => c.category))];
              return categories.map(cat => (
                <div key={cat}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.4, padding: '0.5rem 0.75rem 0.25rem' }}>{cat}</div>
                  {filtered.filter(c => c.category === cat).map((cmd, i) => {
                    const globalIndex = filtered.indexOf(cmd);
                    return (
                      <div
                        key={cmd.label}
                        layout="row"
                        gap="sm"
                        align="center"
                        onClick={() => runCommand(cmd)}
                        style={{
                          padding: '0.6rem 0.75rem',
                          borderRadius: 8,
                          cursor: 'pointer',
                          background: globalIndex === selected ? 'color-mix(in srgb, var(--lux-primary) 12%, transparent)' : 'transparent',
                          color: globalIndex === selected ? 'var(--lux-primary)' : 'var(--lux-fg)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                        onMouseEnter={() => setSelected(globalIndex)}
                      >
                        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--lux-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0 }}>{cmd.icon}</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{cmd.label}</span>
                        {cmd.href && <span style={{ marginLeft: 'auto', fontSize: '0.65rem', opacity: 0.35, fontFamily: 'monospace' }}>{cmd.href}</span>}
                      </div>
                    );
                  })}
                </div>
              ));
            })()
          )}
        </div>

        {/* Footer */}
        <div layout="row" gap="md" align="center" style={{ padding: '0.625rem 1.25rem', borderTop: '1px solid var(--lux-border)' }}>
          {[['↑↓', 'navigate'], ['↵', 'select'], ['esc', 'close']].map(([key, label]) => (
            <div key={key} layout="row" gap="xs" align="center">
              <kbd style={{ fontSize: '0.65rem', background: 'var(--lux-surface-2)', padding: '0.15em 0.4em', borderRadius: 4, fontFamily: 'monospace' }}>{key}</kbd>
              <span text="caption" style={{ fontSize: '0.68rem' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
