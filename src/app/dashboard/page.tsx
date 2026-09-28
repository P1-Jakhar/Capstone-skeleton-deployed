import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  { label: "Total Users", value: "1,234", change: "+12%", positive: true },
  { label: "Revenue", value: "$45,678", change: "+8.3%", positive: true },
  { label: "Active Projects", value: "23", change: "-2", positive: false },
  { label: "Conversion Rate", value: "3.2%", change: "+0.4%", positive: true },
];

export default function DashboardPage() {
  return (
    <div className="page-container">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">Dashboard</h1>
          <p className="mt-1 text-[var(--color-text-secondary)]">Overview of your application metrics.</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/analytics"
            className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Settings
          </Link>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-[var(--color-text-muted)]">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
            <p className={`mt-1 text-sm font-medium ${stat.positive ? "text-[var(--color-success)]" : "text-[var(--color-error)]"}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">Revenue Over Time</h2>
        <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)]">
          <p className="text-sm text-[var(--color-text-muted)]">Chart placeholder — will integrate with real data</p>
        </div>
      </div>

      {/* Recent activity placeholder */}
      <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">Recent Activity</h2>
        <div className="space-y-3">
          {["User signed up", "New order placed", "Payment received", "Product updated"].map((activity, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
            >
              <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">{activity}</span>
              <span className="ml-auto text-xs text-[var(--color-text-muted)]">{i + 1}h ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
