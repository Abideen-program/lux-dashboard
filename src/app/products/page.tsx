import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const products = [
  { name: 'Starter Plan',   desc: 'For individuals getting started',     price: '$49/mo',  sales: 1857, revenue: '$9,095',  status: 'Active', tone: 'success', color: '#38bdf8' },
  { name: 'Pro Plan',       desc: 'For growing teams and businesses',     price: '$299/mo', sales: 490,  revenue: '$14,700', status: 'Active', tone: 'success', color: '#6366f1' },
  { name: 'Enterprise Plan',desc: 'Custom solutions for large orgs',      price: '$999/mo', sales: 245,  revenue: '$24,500', status: 'Active', tone: 'success', color: '#f472b6' },
  { name: 'Add-on: Extra Seats',  desc: 'Additional team member seats',   price: '$15/mo',  sales: 612,  revenue: '$9,180',  status: 'Active', tone: 'success', color: '#22c55e' },
  { name: 'Add-on: Priority Support', desc: '24/7 priority support tier', price: '$99/mo',  sales: 88,   revenue: '$8,712',  status: 'Active', tone: 'success', color: '#f59e0b' },
  { name: 'Legacy Plan (2024)', desc: 'Grandfathered legacy pricing',     price: '$29/mo',  sales: 34,   revenue: '$986',    status: 'Deprecated', tone: 'neutral', color: '#8b5cf6' },
];

export default function ProductsPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Products" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div layout="row" justify="between" align="center">
          <div>
            <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Products</h2>
            <p text="caption">{products.length} products and plans</p>
          </div>
          <button surface="solid" tone="primary" radius="full" density="compact" ripple="true">
            + Add Product
          </button>
        </div>

        {/* Products grid */}
        <div layout="grid" cols="1" md-cols="3" gap="md">
          {products.map((p) => (
            <div key={p.name} surface="matte" radius="xl" density="spacious" motion="subtle" reveal="bottom" layout="stack" gap="sm">
              <div layout="row" justify="between" align="center">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `color-mix(in srgb, ${p.color} 18%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  📦
                </div>
                <span badge="true" tone={p.tone} style={{ fontSize: '0.65rem' }}>{p.status}</span>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{p.name}</div>
                <div text="caption" style={{ fontSize: '0.78rem' }}>{p.desc}</div>
              </div>
              <div layout="row" justify="between" align="center" style={{ borderTop: '1px solid var(--lux-border)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                <div>
                  <div text="caption" style={{ fontSize: '0.68rem' }}>Price</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.price}</div>
                </div>
                <div>
                  <div text="caption" style={{ fontSize: '0.68rem' }}>Sales</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.sales}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div text="caption" style={{ fontSize: '0.68rem' }}>Revenue</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
