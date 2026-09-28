import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <PlaceholderPage
      title="Create Account"
      description="Join Capstone and start building today."
    >
      <div className="mx-auto max-w-md">
        <div className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Full Name</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Email</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Password</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Confirm Password</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div className="h-10 w-full rounded-md bg-[var(--color-primary)]/20 text-center leading-10 text-sm text-[var(--color-text-muted)]">
            Create Account (placeholder)
          </div>
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            Already have an account?{" "}
            <a href="/login" className="text-[var(--color-primary)] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </PlaceholderPage>
  );
}
