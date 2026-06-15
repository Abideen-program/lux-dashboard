import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatsCards from '@/components/StatsCards';
import RevenueChart from '@/components/RevenueChart';
import OrdersTable from '@/components/OrdersTable';
import TopProducts from '@/components/TopProducts';
import ActivityFeed from '@/components/ActivityFeed';

export default function DashboardPage() {
  return (
    <div className="dash-shell">
      <Sidebar />
      <Header title="Overview" />
      <main className="dash-main" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Page heading */}
        <div>
          <h2 text="heading" style={{ marginBottom: '0.25rem' }}>
            Good morning, Abideen 👋
          </h2>
          <p text="caption">Here's what's happening with your store today.</p>
        </div>

        {/* Stats */}
        <StatsCards />

        {/* Row 1 — Chart + Products */}
        <div className="chart-row" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1rem' }}>
          <RevenueChart />
          <TopProducts />
        </div>

        {/* Row 2 — Orders + Activity */}
        <div className="orders-row" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1rem' }}>
          <OrdersTable />
          <ActivityFeed />
        </div>

      </main>
    </div>
  );
}
