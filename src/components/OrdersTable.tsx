'use client';

const orders = [
  { id: '#ORD-001', customer: 'Sarah Johnson',  avatar: 'SJ', avatarBg: '#6366f1', product: 'Pro Plan',     amount: '$299', status: 'Completed',  tone: 'success' },
  { id: '#ORD-002', customer: 'Marcus Williams', avatar: 'MW', avatarBg: '#f472b6', product: 'Starter Plan', amount: '$49',  status: 'Pending',    tone: 'warning' },
  { id: '#ORD-003', customer: 'Aiko Tanaka',     avatar: 'AT', avatarBg: '#38bdf8', product: 'Enterprise',   amount: '$999', status: 'Completed',  tone: 'success' },
  { id: '#ORD-004', customer: 'David Okafor',    avatar: 'DO', avatarBg: '#22c55e', product: 'Pro Plan',     amount: '$299', status: 'Processing', tone: 'info'    },
  { id: '#ORD-005', customer: 'Lena Schmidt',    avatar: 'LS', avatarBg: '#f59e0b', product: 'Starter Plan', amount: '$49',  status: 'Failed',     tone: 'danger'  },
  { id: '#ORD-006', customer: 'James Obi',       avatar: 'JO', avatarBg: '#8b5cf6', product: 'Enterprise',   amount: '$999', status: 'Completed',  tone: 'success' },
];

export default function OrdersTable() {
  return (
    <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>

      {/* Header */}
      <div layout="row" justify="between" align="center" style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
        <div layout="stack" gap="xs">
          <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Recent Orders</div>
          <div text="caption">Latest 6 transactions</div>
        </div>
        <button surface="ghost" tone="primary" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>
          View all →
        </button>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', opacity: 0.55 }}>{o.id}</span>
                </td>
                <td>
                  <div layout="row" gap="sm" align="center">
                    <div className="avatar" style={{ background: o.avatarBg, fontSize: '0.65rem' }}>{o.avatar}</div>
                    <span style={{ fontWeight: 500 }}>{o.customer}</span>
                  </div>
                </td>
                <td>
                  <span text="caption" style={{ fontSize: '0.82rem' }}>{o.product}</span>
                </td>
                <td>
                  <span style={{ fontWeight: 700 }}>{o.amount}</span>
                </td>
                <td>
                  <span badge="true" tone={o.tone as any} style={{ fontSize: '0.7rem' }}>
                    {o.status}
                  </span>
                </td>
                <td>
                  <button
                    surface="ghost"
                    tone="neutral"
                    radius="full"
                    density="compact"
                    tooltip="Actions"
                    tooltip-pos="left"
                    style={{ fontSize: '0.8rem' }}
                  >
                    ⋯
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
