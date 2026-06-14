import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const reports = [
  { name: 'Monthly Revenue Report',    desc: 'Revenue breakdown by product and region',         date: 'Jun 1, 2026',  size: '2.4 MB', type: 'PDF', tone: 'danger'  },
  { name: 'Customer Growth Q2 2026',   desc: 'Acquisition, churn, and retention analysis',      date: 'May 15, 2026', size: '1.8 MB', type: 'PDF', tone: 'danger'  },
  { name: 'Product Sales Summary',     desc: 'Sales performance per plan and add-on',           date: 'May 1, 2026',  size: '890 KB', type: 'XLSX',tone: 'success' },
  { name: 'Traffic & Conversion',      desc: 'Marketing funnel and conversion rate data',       date: 'Apr 15, 2026', size: '1.2 MB', type: 'PDF', tone: 'danger'  },
  { name: 'Support Ticket Analysis',   desc: 'Response times, volume, and resolution rates',    date: 'Apr 1, 2026',  size: '640 KB', type: 'CSV', tone: 'info'    },
  { name: 'Financial Overview H1 2025',desc: 'Full year revenue, expenses, and profit margins', date: 'Jan 2, 2026',  size: '4.1 MB', type: 'PDF', tone: 'danger'  },
];

const scheduled = [
  { name: 'Weekly Revenue Digest',    frequency: 'Every Monday',       next: 'Jun 17, 2026' },
  { name: 'Monthly Customer Report',  frequency: 'First of each month', next: 'Jul 1, 2026'  },
  { name: 'Quarterly Business Review',frequency: 'Every 3 months',     next: 'Jul 1, 2026'  },
];

export default function ReportsPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Reports" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div layout="row" justify="between" align="center">
          <div>
            <h2 text="heading" style={{ marginBottom: '0.25rem' }}>Reports</h2>
            <p text="caption">Download and schedule business reports</p>
          </div>
          <button surface="solid" tone="primary" radius="full" density="compact" ripple="true">
            + Generate Report
          </button>
        </div>

        {/* Reports list */}
        <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
            <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Recent Reports</div>
          </div>
          <div layout="stack">
            {reports.map((r) => (
              <div
                key={r.name}
                layout="row"
                justify="between"
                align="center"
                motion="subtle"
                style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)', borderRadius: 0 }}
              >
                <div layout="row" gap="md" align="center">
                  <div
                    style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--lux-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}
                  >
                    <span badge="true" tone={r.tone} style={{ fontSize: '0.6rem' }}>{r.type}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.1rem' }}>{r.name}</div>
                    <div text="caption" style={{ fontSize: '0.76rem' }}>{r.desc}</div>
                  </div>
                </div>
                <div layout="row" gap="md" align="center">
                  <div style={{ textAlign: 'right' }}>
                    <div text="caption" style={{ fontSize: '0.72rem' }}>{r.date}</div>
                    <div text="caption" style={{ fontSize: '0.72rem' }}>{r.size}</div>
                  </div>
                  <button surface="ghost" tone="primary" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>
                    ↓ Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled reports */}
        <div surface="matte" radius="xl" elevation="low" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)' }}>
            <div text="label" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>Scheduled Reports</div>
          </div>
          <div layout="stack">
            {scheduled.map((s) => (
              <div
                key={s.name}
                layout="row"
                justify="between"
                align="center"
                style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--lux-border)', borderRadius: 0 }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{s.name}</div>
                  <div text="caption" style={{ fontSize: '0.76rem' }}>{s.frequency}</div>
                </div>
                <div layout="row" gap="md" align="center">
                  <div style={{ textAlign: 'right' }}>
                    <div text="caption" style={{ fontSize: '0.68rem' }}>Next run</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.next}</div>
                  </div>
                  <button surface="ghost" tone="neutral" radius="full" density="compact" style={{ fontSize: '0.78rem' }}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
