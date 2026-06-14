import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RevenueChart from '@/components/RevenueChart';

const metrics = [
  { label: 'Page Views',      value: '128,492', change: '+18.2%', dir: 'up',   tone: 'success' },
  { label: 'Unique Visitors', value: '24,103',  change: '+9.4%',  dir: 'up',   tone: 'success' },
  { label: 'Avg Session',     value: '4m 32s',  change: '+1.1%',  dir: 'up',   tone: 'success' },
  { label: 'Bounce Rate',     value: '38.2%',   change: '-2.3%',  dir: 'down', tone: 'success' },
];

const sources = [
  { name: 'Organic Search', value: 42, color: '#6366f1' },
  { name: 'Direct',         value: 28, color: '#f472b6' },
  { name: 'Social Media',   value: 18, color: '#38bdf8' },
  { name: 'Referral',       value: 12, color: '#22c55e' },
];

const topPages = [
  { path: '/pricing',           views: '18,420', avgTime: '3m 12s' },
  { path: '/docs',               views: '14,205', avgTime: '5m 48s' },
  { path: '/blog/lux-v2-launch', views: '11,392', avgTime: '4m 02s' },
  { path: '/',                   views: '9,810',  avgTime: '2m 15s' },
  { path: '/templates',          views: '7,233',  avgTime: '3m 50s' },
];

export default function AnalyticsPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Analytics" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div>
          <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Analytics</h2>
          <p text="caption">Traffic, sources, and engagement insights.</p>
        </div>

        {/* Metric cards */}
        <div layout="grid" cols="2" md-cols="4" gap="md">
          {metrics.map((m) => (
            <div key={m.label} surface="matte" radius="xl" density="spacious" motion="subtle" reveal="bottom" layout="stack" gap="sm">
              <div text="caption">{m.label}</div>
              <div text="heading" style={{ fontSize: '1.65rem', letterSpacing: '-0.03em' }}>{m.value}</div>
              <span badge="true" tone={m.tone} style={{ fontSize: '0.7rem', width: 'fit-content' }}>
                {m.dir === 'up' ? '↑' : '↓'} {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* Chart + Traffic Sources */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1rem' }}>
          <RevenueChart />

          <div surface="matte" radius="xl" elevation="low" layout="stack" style={{ height: '100%' }}>
            <div style={{ padding: '1.25rem 1.25rem 0' }}>
              <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Traffic Sources</div>
              <div text="caption" style={{ marginTop: '0.1rem' }}>Last 30 days</div>
            </div>
            <div layout="stack" gap="md" style={{ padding: '1.25rem', flex: 1 }}>
              {sources.map((s) => (
                <div key={s.name} layout="stack" gap="xs">
                  <div layout="row" justify="between" align="center">
                    <div layout="row" gap="sm" align="center">
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{s.name}</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{s.value}%</span>
                  </div>
                  <div progress="true" tone="primary">
                    <div progress-bar="true" style={{ width: `${s.value}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages Table */}
        <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>
          <div layout="row" justify="between" align="center" style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
            <div layout="stack" gap="xs">
              <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Top Pages</div>
              <div text="caption">By page views</div>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Views</th>
                  <th>Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((p) => (
                  <tr key={p.path}>
                    <td><span style={{ fontFamily: 'monospace', fontSize: '0.82rem' }}>{p.path}</span></td>
                    <td><span style={{ fontWeight: 700 }}>{p.views}</span></td>
                    <td><span text="caption" style={{ fontSize: '0.82rem' }}>{p.avgTime}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
