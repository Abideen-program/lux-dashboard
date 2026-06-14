'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const tabs = ['Profile', 'Billing', 'Notifications', 'Security', 'Team'];

function toast(msg: string, opts?: { title?: string; type?: string }) {
  if (typeof window !== 'undefined' && window.Lux) {
    window.Lux.toast(msg, opts);
  }
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Settings" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div>
          <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Settings</h2>
          <p text="caption">Manage your account preferences</p>
        </div>

        {/* Tab bar */}
        <div layout="row" gap="xs" style={{ borderBottom: '1px solid var(--lux-border)', paddingBottom: '0.75rem' }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              surface={activeTab === t ? 'solid' : 'ghost'}
              tone={activeTab === t ? 'primary' : 'neutral'}
              radius="full"
              density="compact"
              style={{ fontSize: '0.82rem', fontWeight: 600 }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'Profile' && (
          <div layout="stack" gap="lg" style={{ maxWidth: 560 }}>

            {/* Avatar */}
            <div surface="matte" radius="xl" density="spacious" layout="row" gap="lg" align="center">
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #6366f1, #f472b6)', width: 64, height: 64, fontSize: '1.2rem' }}>AB</div>
              <div layout="stack" gap="sm">
                <div style={{ fontWeight: 600 }}>Abideen</div>
                <button surface="ghost" tone="primary" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>
                  Change Photo
                </button>
              </div>
            </div>

            {/* Fields */}
            <div layout="stack" gap="md">
              {[
                { label: 'Full Name',     value: 'Abideen',           type: 'text'  },
                { label: 'Email Address', value: 'admin@luxcss.dev',  type: 'email' },
                { label: 'Username',      value: 'abideen-program',   type: 'text'  },
                { label: 'Website',       value: 'https://luxcss.dev',type: 'url'   },
              ].map((f) => (
                <div key={f.label} layout="stack" gap="xs">
                  <label text="label" style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>{f.label}</label>
                  <div surface="matte" radius="lg" density="compact">
                    <input
                      type={f.type}
                      defaultValue={f.value}
                      style={{ background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '0.875rem', color: 'var(--lux-fg)', padding: '0.5rem 0' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div layout="row" gap="sm">
              <button surface="solid" tone="primary" radius="full" density="default" ripple="true"
                onClick={() => toast('Profile updated!', { title: 'Saved ✓', type: 'success' })}>
                Save Changes
              </button>
              <button surface="ghost" tone="neutral" radius="full" density="default">
                Cancel
              </button>
            </div>

          </div>
        )}

        {/* Billing Tab */}
        {activeTab === 'Billing' && (
          <div layout="stack" gap="md" style={{ maxWidth: 560 }}>

            <div surface="matte" radius="xl" density="spacious" layout="stack" gap="sm">
              <div layout="row" justify="between" align="center">
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Pro Plan</div>
                  <div text="caption">$299/month · Renews Jul 10, 2026</div>
                </div>
                <span badge="true" tone="success" style={{ fontSize: '0.7rem' }}>Active</span>
              </div>
              <div style={{ borderTop: '1px solid var(--lux-border)', paddingTop: '0.875rem' }}>
                <button surface="ghost" tone="primary" radius="full" density="compact" style={{ fontSize: '0.82rem' }}>
                  Upgrade to Enterprise →
                </button>
              </div>
            </div>

            <div surface="matte" radius="xl" density="spacious" layout="stack" gap="sm">
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Payment Method</div>
              <div layout="row" justify="between" align="center">
                <div layout="row" gap="sm" align="center">
                  <div style={{ width: 36, height: 24, borderRadius: 4, background: 'var(--lux-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700 }}>VISA</div>
                  <span style={{ fontSize: '0.85rem' }}>•••• •••• •••• 4242</span>
                  <span text="caption" style={{ fontSize: '0.78rem' }}>Exp 08/28</span>
                </div>
                <button surface="ghost" tone="neutral" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>Update</button>
              </div>
            </div>

          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'Notifications' && (
          <div layout="stack" gap="md" style={{ maxWidth: 560 }}>
            {[
              { label: 'New Order',          desc: 'When a customer places a new order',     on: true  },
              { label: 'Payment Failed',     desc: 'When a payment attempt fails',            on: true  },
              { label: 'New Customer',       desc: 'When a new customer signs up',           on: false },
              { label: 'Weekly Digest',      desc: 'Summary of key metrics every Monday',    on: true  },
              { label: 'Product Updates',    desc: 'New features and changelog',              on: false },
              { label: 'Security Alerts',    desc: 'Suspicious login or account changes',    on: true  },
            ].map((n) => (
              <div key={n.label} surface="matte" radius="xl" density="compact" layout="row" justify="between" align="center">
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{n.label}</div>
                  <div text="caption" style={{ fontSize: '0.76rem' }}>{n.desc}</div>
                </div>
                <div
                  style={{ width: 44, height: 24, borderRadius: 99, background: n.on ? 'var(--lux-primary)' : 'var(--lux-surface-2)', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
                >
                  <div style={{ position: 'absolute', top: 3, left: n.on ? 23 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.3)' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'Security' && (
          <div layout="stack" gap="md" style={{ maxWidth: 560 }}>
            <div surface="matte" radius="xl" density="spacious" layout="stack" gap="md">
              <div style={{ fontWeight: 600 }}>Change Password</div>
              {['Current Password', 'New Password', 'Confirm Password'].map((f) => (
                <div key={f} layout="stack" gap="xs">
                  <label text="label" style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>{f}</label>
                  <div surface="matte" radius="lg" density="compact">
                    <input type="password" placeholder="••••••••" style={{ background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '0.875rem', color: 'var(--lux-fg)', padding: '0.5rem 0' }} />
                  </div>
                </div>
              ))}
              <button surface="solid" tone="primary" radius="full" density="default" ripple="true"
                style={{ width: 'fit-content' }}
                onClick={() => toast('Password updated!', { title: 'Saved ✓', type: 'success' })}>
                Update Password
              </button>
            </div>

            <div surface="matte" radius="xl" density="spacious" layout="row" justify="between" align="center">
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Two-Factor Authentication</div>
                <div text="caption">Add an extra layer of security</div>
              </div>
              <button surface="solid" tone="success" radius="full" density="compact" ripple="true">Enable 2FA</button>
            </div>

            <div surface="matte" radius="xl" density="spacious" layout="stack" gap="sm">
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Active Sessions</div>
              {[
                { device: 'Chrome · Windows 11', location: 'Lagos, Nigeria',    time: 'Now',     current: true  },
                { device: 'Safari · iPhone',     location: 'London, UK',        time: '2 days ago', current: false },
              ].map((s) => (
                <div key={s.device} layout="row" justify="between" align="center" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--lux-border)' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{s.device}</div>
                    <div text="caption" style={{ fontSize: '0.72rem' }}>{s.location} · {s.time}</div>
                  </div>
                  {s.current
                    ? <span badge="true" tone="success" style={{ fontSize: '0.65rem' }}>Current</span>
                    : <button surface="ghost" tone="danger" radius="full" density="compact" style={{ fontSize: '0.72rem' }}>Revoke</button>
                  }
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'Team' && (
          <div layout="stack" gap="md" style={{ maxWidth: 640 }}>
            <div layout="row" justify="between" align="center">
              <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Team Members</div>
              <button surface="solid" tone="primary" radius="full" density="compact" ripple="true"
                style={{ fontSize: '0.78rem' }}
                onClick={() => toast('Invite sent!', { title: 'Done ✓', type: 'success' })}>
                + Invite Member
              </button>
            </div>
            {[
              { name: 'Abideen',       email: 'admin@luxcss.dev',   avatar: 'AB', bg: '#6366f1', role: 'Owner',  tone: 'accent'  },
              { name: 'Fatima Ali',    email: 'fatima@luxcss.dev',  avatar: 'FA', bg: '#f472b6', role: 'Admin',  tone: 'primary' },
              { name: 'Kofi Mensah',   email: 'kofi@luxcss.dev',    avatar: 'KM', bg: '#38bdf8', role: 'Editor', tone: 'info'    },
              { name: 'Yuki Tanaka',   email: 'yuki@luxcss.dev',    avatar: 'YT', bg: '#22c55e', role: 'Viewer', tone: 'success' },
            ].map((m) => (
              <div key={m.email} surface="matte" radius="xl" density="compact" layout="row" justify="between" align="center">
                <div layout="row" gap="sm" align="center">
                  <div className="avatar" style={{ background: m.bg }}>{m.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{m.name}</div>
                    <div text="caption" style={{ fontSize: '0.74rem' }}>{m.email}</div>
                  </div>
                </div>
                <div layout="row" gap="sm" align="center">
                  <span badge="true" tone={m.tone} style={{ fontSize: '0.68rem' }}>{m.role}</span>
                  {m.role !== 'Owner' && (
                    <button surface="ghost" tone="neutral" radius="full" density="compact" style={{ fontSize: '0.75rem' }}>•••</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
