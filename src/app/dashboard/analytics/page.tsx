import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
  return (
    <PlaceholderPage
      title="Analytics"
      description="In-depth analytics and reporting for your application."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {["Page Views", "Unique Visitors", "Bounce Rate", "Session Duration"].map((metric) => (
          <div
            key={metric}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-[var(--color-text-muted)]">{metric}</p>
            <div className="mt-4 flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)]">
              <span className="text-xs text-[var(--color-text-muted)]">Chart placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
