import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const customers = [
  { name: 'Sarah Johnson',   email: 'sarah.j@email.com',   avatar: 'SJ', avatarBg: '#6366f1', orders: 12, spent: '$3,240', plan: 'Pro',        tone: 'primary' },
  { name: 'Marcus Williams', email: 'marcus.w@email.com',  avatar: 'MW', avatarBg: '#f472b6', orders: 3,  spent: '$147',   plan: 'Starter',    tone: 'neutral' },
  { name: 'Aiko Tanaka',     email: 'aiko.t@email.com',    avatar: 'AT', avatarBg: '#38bdf8', orders: 28, spent: '$27,972',plan: 'Enterprise', tone: 'accent'  },
  { name: 'David Okafor',    email: 'david.o@email.com',   avatar: 'DO', avatarBg: '#22c55e', orders: 8,  spent: '$2,392', plan: 'Pro',        tone: 'primary' },
  { name: 'Lena Schmidt',    email: 'lena.s@email.com',    avatar: 'LS', avatarBg: '#f59e0b', orders: 1,  spent: '$49',    plan: 'Starter',    tone: 'neutral' },
  { name: 'James Obi',       email: 'james.o@email.com',   avatar: 'JO', avatarBg: '#8b5cf6', orders: 15, spent: '$14,985',plan: 'Enterprise', tone: 'accent'  },
  { name: 'Priya Sharma',    email: 'priya.s@email.com',   avatar: 'PS', avatarBg: '#ec4899', orders: 6,  spent: '$1,794', plan: 'Pro',        tone: 'primary' },
  { name: 'Tom Becker',      email: 'tom.b@email.com',     avatar: 'TB', avatarBg: '#14b8a6', orders: 2,  spent: '$98',    plan: 'Starter',    tone: 'neutral' },
  { name: 'Ngozi Adeyemi',   email: 'ngozi.a@email.com',   avatar: 'NA', avatarBg: '#f97316', orders: 19, spent: '$18,981',plan: 'Enterprise', tone: 'accent'  },
];

const stats = [
  { label: 'Total Customers', value: '2,847',  change: '+124 this month' },
  { label: 'New This Month',  value: '124',    change: '+18% vs last month' },
  { label: 'Avg. LTV',        value: '$1,842', change: '+6.2% vs last month' },
];

export default function CustomersPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Customers" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div layout="row" justify="between" align="center">
          <div>
            <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Customers</h2>
            <p text="caption">Manage your customer base</p>
          </div>
          <button surface="solid" tone="primary" radius="full" density="compact" ripple="true">
            + Add Customer
          </button>
        </div>

        {/* Stats */}
        <div layout="grid" cols="1" md-cols="3" gap="md">
          {stats.map((s) => (
            <div key={s.label} surface="matte" radius="xl" density="spacious" reveal="bottom" layout="stack" gap="xs">
              <div text="caption">{s.label}</div>
              <div text="heading" style={{ fontSize: '1.65rem', letterSpacing: '-0.03em' }}>{s.value}</div>
              <div text="caption" style={{ fontSize: '0.72rem', color: 'var(--lux-success)' }}>{s.change}</div>
            </div>
          ))}
        </div>

        {/* Customer Grid */}
        <div layout="grid" cols="1" md-cols="3" gap="md">
          {customers.map((c) => (
            <div key={c.email} surface="matte" radius="xl" density="spacious" motion="subtle" reveal="bottom" layout="stack" gap="sm">
              <div layout="row" justify="between" align="center">
                <div layout="row" gap="sm" align="center">
                  <div className="avatar" style={{ background: c.avatarBg, width: 40, height: 40, fontSize: '0.85rem' }}>{c.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.name}</div>
                    <div text="caption" style={{ fontSize: '0.72rem' }}>{c.email}</div>
                  </div>
                </div>
                <span badge="true" tone={c.tone} style={{ fontSize: '0.65rem' }}>{c.plan}</span>
              </div>
              <div layout="row" justify="between" align="center" style={{ borderTop: '1px solid var(--lux-border)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                <div>
                  <div text="caption" style={{ fontSize: '0.68rem' }}>Orders</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.orders}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div text="caption" style={{ fontSize: '0.68rem' }}>Total Spent</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.spent}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
