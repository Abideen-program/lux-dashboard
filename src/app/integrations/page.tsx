import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const integrations = [
  {
    category: 'Payments',
    items: [
      { name: 'Stripe',      desc: 'Accept payments and manage subscriptions',  icon: '💳', connected: true,  tone: 'success' },
      { name: 'PayPal',      desc: 'Accept PayPal payments globally',            icon: '🌐', connected: false, tone: 'neutral' },
      { name: 'Paddle',      desc: 'Merchant of record for SaaS',               icon: '🏓', connected: false, tone: 'neutral' },
    ],
  },
  {
    category: 'Communication',
    items: [
      { name: 'Slack',       desc: 'Get notifications in your Slack workspace',  icon: '💬', connected: true,  tone: 'success' },
      { name: 'Intercom',    desc: 'Customer messaging and support',             icon: '🎯', connected: true,  tone: 'success' },
      { name: 'Mailchimp',   desc: 'Email marketing and automation',             icon: '📧', connected: false, tone: 'neutral' },
    ],
  },
  {
    category: 'Analytics',
    items: [
      { name: 'Google Analytics', desc: 'Track traffic and user behavior',      icon: '📊', connected: true,  tone: 'success' },
      { name: 'Mixpanel',   desc: 'Product analytics and funnels',               icon: '🔬', connected: false, tone: 'neutral' },
      { name: 'Segment',    desc: 'Collect and route customer data',             icon: '🔀', connected: false, tone: 'neutral' },
    ],
  },
  {
    category: 'Developer',
    items: [
      { name: 'GitHub',     desc: 'Connect repos and automate workflows',        icon: '🐙', connected: true,  tone: 'success' },
      { name: 'Webhook',    desc: 'Send real-time events to your endpoints',     icon: '🔗', connected: true,  tone: 'success' },
      { name: 'Zapier',     desc: 'Automate with 5,000+ apps',                  icon: '⚡', connected: false, tone: 'neutral' },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Integrations" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        <div layout="row" justify="between" align="center">
          <div>
            <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Integrations</h2>
            <p text="caption">Connect your favourite tools and services</p>
          </div>
          <span badge="true" tone="primary" style={{ fontSize: '0.75rem' }}>
            {integrations.flatMap(g => g.items).filter(i => i.connected).length} connected
          </span>
        </div>

        {integrations.map((group) => (
          <div key={group.category} layout="stack" gap="sm">
            <div text="label" style={{ fontSize: '0.72rem', opacity: 0.45, letterSpacing: '0.08em' }}>{group.category}</div>
            <div layout="grid" cols="1" md-cols="3" gap="md">
              {group.items.map((item) => (
                <div key={item.name} surface="matte" radius="xl" density="spacious" motion="subtle" reveal="bottom">
                  <div layout="row" justify="between" align="center" style={{ marginBottom: '0.875rem' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--lux-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                      {item.icon}
                    </div>
                    <span badge="true" tone={item.tone} style={{ fontSize: '0.65rem' }}>
                      {item.connected ? 'Connected' : 'Not connected'}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.name}</div>
                  <div text="caption" style={{ fontSize: '0.78rem', marginBottom: '1rem' }}>{item.desc}</div>
                  <button
                    surface={item.connected ? 'ghost' : 'solid'}
                    tone={item.connected ? 'neutral' : 'primary'}
                    radius="full"
                    density="compact"
                    ripple="true"
                    style={{ fontSize: '0.78rem', width: '100%' }}
                  >
                    {item.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      </main>
    </div>
  );
}
