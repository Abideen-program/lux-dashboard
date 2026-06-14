import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const allOrders = [
  { id: '#ORD-001', customer: 'Sarah Johnson',   avatar: 'SJ', avatarBg: '#6366f1', product: 'Pro Plan',     amount: '$299', date: 'Jun 10', status: 'Completed',  tone: 'success' },
  { id: '#ORD-002', customer: 'Marcus Williams', avatar: 'MW', avatarBg: '#f472b6', product: 'Starter Plan', amount: '$49',  date: 'Jun 10', status: 'Pending',    tone: 'warning' },
  { id: '#ORD-003', customer: 'Aiko Tanaka',     avatar: 'AT', avatarBg: '#38bdf8', product: 'Enterprise',   amount: '$999', date: 'Jun 9',  status: 'Completed',  tone: 'success' },
  { id: '#ORD-004', customer: 'David Okafor',    avatar: 'DO', avatarBg: '#22c55e', product: 'Pro Plan',     amount: '$299', date: 'Jun 9',  status: 'Processing', tone: 'info'    },
  { id: '#ORD-005', customer: 'Lena Schmidt',    avatar: 'LS', avatarBg: '#f59e0b', product: 'Starter Plan', amount: '$49',  date: 'Jun 8',  status: 'Failed',     tone: 'danger'  },
  { id: '#ORD-006', customer: 'James Obi',       avatar: 'JO', avatarBg: '#8b5cf6', product: 'Enterprise',   amount: '$999', date: 'Jun 8',  status: 'Completed',  tone: 'success' },
  { id: '#ORD-007', customer: 'Priya Sharma',    avatar: 'PS', avatarBg: '#ec4899', product: 'Pro Plan',     amount: '$299', date: 'Jun 7',  status: 'Completed',  tone: 'success' },
  { id: '#ORD-008', customer: 'Tom Becker',      avatar: 'TB', avatarBg: '#14b8a6', product: 'Starter Plan', amount: '$49',  date: 'Jun 7',  status: 'Refunded',   tone: 'neutral' },
  { id: '#ORD-009', customer: 'Ngozi Adeyemi',   avatar: 'NA', avatarBg: '#f97316', product: 'Enterprise',   amount: '$999', date: 'Jun 6',  status: 'Processing', tone: 'info'    },
  { id: '#ORD-010', customer: 'Chen Wei',        avatar: 'CW', avatarBg: '#84cc16', product: 'Pro Plan',     amount: '$299', date: 'Jun 6',  status: 'Completed',  tone: 'success' },
];

const filters = ['All', 'Completed', 'Pending', 'Processing', 'Failed', 'Refunded'];

export default function OrdersPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Orders" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div layout="row" justify="between" align="center">
          <div>
            <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Orders</h2>
            <p text="caption">{allOrders.length} total orders</p>
          </div>
          <button surface="solid" tone="primary" radius="full" density="compact" ripple="true">
            + New Order
          </button>
        </div>

        {/* Filters */}
        <div layout="row" gap="xs">
          {filters.map((f, i) => (
            <button
              key={f}
              surface={i === 0 ? 'solid' : 'matte'}
              tone="primary"
              radius="full"
              density="compact"
              style={{ fontSize: '0.78rem', fontWeight: 600, opacity: i === 0 ? 1 : 0.6 }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((o) => (
                  <tr key={o.id}>
                    <td><span style={{ fontFamily: 'monospace', fontSize: '0.78rem', opacity: 0.55 }}>{o.id}</span></td>
                    <td>
                      <div layout="row" gap="sm" align="center">
                        <div className="avatar" style={{ background: o.avatarBg, fontSize: '0.65rem' }}>{o.avatar}</div>
                        <span style={{ fontWeight: 500 }}>{o.customer}</span>
                      </div>
                    </td>
                    <td><span text="caption" style={{ fontSize: '0.82rem' }}>{o.product}</span></td>
                    <td><span text="caption" style={{ fontSize: '0.82rem' }}>{o.date}</span></td>
                    <td><span style={{ fontWeight: 700 }}>{o.amount}</span></td>
                    <td><span badge="true" tone={o.tone} style={{ fontSize: '0.7rem' }}>{o.status}</span></td>
                    <td>
                      <button surface="ghost" tone="neutral" radius="full" density="compact" tooltip="Actions" tooltip-pos="left" style={{ fontSize: '0.8rem' }}>
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div layout="row" justify="between" align="center">
          <span text="caption">Showing 1-10 of 1,429 orders</span>
          <div layout="row" gap="xs">
            <button surface="matte" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>← Previous</button>
            <button surface="matte" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>Next →</button>
          </div>
        </div>

      </main>
    </div>
  );
}
