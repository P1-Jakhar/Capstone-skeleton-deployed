import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with our team. We'd love to hear from you."
    >
      <div className="max-w-xl">
        <div className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Name</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Email</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Message</label>
            <div className="mt-1 h-24 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div className="h-10 w-full rounded-md bg-[var(--color-primary)]/20 text-center leading-10 text-sm text-[var(--color-text-muted)]">
            Submit (placeholder)
          </div>
        </div>
      </div>
    </PlaceholderPage>
  );
}
