import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <PlaceholderPage
      title="Profile"
      description="Manage your account settings and preferences."
    >
      <div className="max-w-2xl">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-2xl font-bold text-[var(--color-primary)]">
              U
            </div>
            <div>
              <p className="text-lg font-semibold text-[var(--color-text)]">User Name</p>
              <p className="text-sm text-[var(--color-text-muted)]">user@example.com</p>
            </div>
          </div>
          <hr className="my-6 border-[var(--color-border)]" />
          <div className="space-y-4">
            {["Display Name", "Email", "Bio", "Location"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-[var(--color-text)]">{field}</label>
                <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
              </div>
            ))}
          </div>
          <div className="mt-6 h-10 w-32 rounded-md bg-[var(--color-primary)]/20 text-center leading-10 text-sm text-[var(--color-text-muted)]">
            Save (placeholder)
          </div>
        </div>
      </div>
    </PlaceholderPage>
  );
}
