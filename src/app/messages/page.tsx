import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const conversations = [
  { name: 'Sarah Johnson',   avatar: 'SJ', avatarBg: '#6366f1', preview: 'Hey, do you offer a discount for annual billing?', time: '2m',  unread: true  },
  { name: 'Marcus Williams', avatar: 'MW', avatarBg: '#f472b6', preview: 'Thanks for the quick response!',                  time: '1h',  unread: false },
  { name: 'Aiko Tanaka',     avatar: 'AT', avatarBg: '#38bdf8', preview: 'Our enterprise contract renewal — few questions',  time: '3h',  unread: true  },
  { name: 'David Okafor',    avatar: 'DO', avatarBg: '#22c55e', preview: 'Is the API rate limit per key or per account?',    time: '5h',  unread: false },
  { name: 'Lena Schmidt',    avatar: 'LS', avatarBg: '#f59e0b', preview: 'My payment failed, can you help?',                  time: '1d',  unread: true  },
  { name: 'James Obi',       avatar: 'JO', avatarBg: '#8b5cf6', preview: 'Loving the new dashboard update 🎉',                time: '2d',  unread: false },
];

const activeChat = [
  { from: 'them', text: 'Hey, do you offer a discount for annual billing?', time: '10:24 AM' },
  { from: 'me',   text: 'Hi Sarah! Yes, annual billing gets you 2 months free compared to monthly.', time: '10:26 AM' },
  { from: 'them', text: 'That sounds great. How do I switch my current plan?', time: '10:28 AM' },
  { from: 'me',   text: 'You can switch anytime from Settings → Billing → Change Plan. The discount applies automatically.', time: '10:30 AM' },
  { from: 'them', text: 'Perfect, thank you so much!', time: '10:31 AM' },
];

export default function MessagesPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Messages" />
      <main className="dash-main" style={{ padding: '1.75rem', height: 'calc(100vh - 56px)', boxSizing: 'border-box' }}>

        <div className="chart-row" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1rem', height: '100%' }}>

          {/* Conversation list */}
          <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
              <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Messages</div>
              <div text="caption" style={{ marginTop: '0.1rem' }}>{conversations.filter(c => c.unread).length} unread</div>
            </div>
            <div layout="stack" style={{ overflowY: 'auto' }}>
              {conversations.map((c, i) => (
                <div
                  key={c.name}
                  layout="row"
                  gap="sm"
                  align="center"
                  motion="subtle"
                  style={{ padding: '0.85rem 1.25rem', cursor: 'pointer', background: i === 0 ? 'var(--lux-surface-1)' : 'transparent', borderRadius: 0 }}
                >
                  <div className="avatar" style={{ background: c.avatarBg, width: 38, height: 38, fontSize: '0.7rem' }}>{c.avatar}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div layout="row" justify="between" align="center">
                      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{c.name}</span>
                      <span text="caption" style={{ fontSize: '0.68rem' }}>{c.time}</span>
                    </div>
                    <div text="caption" style={{ fontSize: '0.76rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.preview}
                    </div>
                  </div>
                  {c.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--lux-primary)', flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Active chat */}
          <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div layout="row" gap="sm" align="center" style={{ padding: '1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
              <div className="avatar" style={{ background: '#6366f1', width: 38, height: 38, fontSize: '0.7rem' }}>SJ</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Sarah Johnson</div>
                <div text="caption" style={{ fontSize: '0.72rem', color: 'var(--lux-success)' }}>● Online</div>
              </div>
            </div>

            <div layout="stack" gap="md" style={{ padding: '1.25rem', flex: 1, overflowY: 'auto' }}>
              {activeChat.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                  <div
                    surface={m.from === 'me' ? 'solid' : 'matte'}
                    tone={m.from === 'me' ? 'primary' : undefined}
                    radius="lg"
                    density="compact"
                    style={{ maxWidth: '70%' }}
                  >
                    <div style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{m.text}</div>
                    <div style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '0.3rem' }}>{m.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div layout="row" gap="sm" align="center" style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--lux-border)' }}>
              <div surface="matte" radius="full" density="compact" style={{ flex: 1 }}>
                <input
                  placeholder="Type a message…"
                  style={{ background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: 'var(--lux-fg)' }}
                />
              </div>
              <button surface="solid" tone="primary" radius="full" density="compact" ripple="true">
                Send
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
