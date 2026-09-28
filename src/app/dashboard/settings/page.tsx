import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <PlaceholderPage
      title="Settings"
      description="Configure your application preferences."
    >
      <div className="max-w-2xl space-y-6">
        {/* General settings */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">General</h2>
          <div className="mt-4 space-y-4">
            {["Application Name", "Default Language", "Timezone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-[var(--color-text)]">{field}</label>
                <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Notification settings */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">Notifications</h2>
          <div className="mt-4 space-y-3">
            {["Email notifications", "Push notifications", "SMS alerts"].map((setting) => (
              <div key={setting} className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3">
                <span className="text-sm text-[var(--color-text-secondary)]">{setting}</span>
                <div className="h-6 w-11 rounded-full bg-[var(--color-bg-tertiary)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Danger zone */}
        <div className="rounded-xl border border-[var(--color-error)]/30 bg-[var(--color-error)]/5 p-6">
          <h2 className="text-lg font-semibold text-[var(--color-error)]">Danger Zone</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Irreversible actions. Proceed with caution.
          </p>
          <div className="mt-4 h-10 w-40 rounded-md bg-[var(--color-error)]/20 text-center leading-10 text-sm text-[var(--color-text-muted)]">
            Delete Account
          </div>
        </div>
      </div>
    </PlaceholderPage>
  );
}
