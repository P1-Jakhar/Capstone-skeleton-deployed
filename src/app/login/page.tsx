import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <PlaceholderPage
      title="Log In"
      description="Welcome back! Sign in to your account."
    >
      <div className="mx-auto max-w-md">
        <div className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Email</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)]">Password</label>
            <div className="mt-1 h-10 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]" />
          </div>
          <div className="h-10 w-full rounded-md bg-[var(--color-primary)]/20 text-center leading-10 text-sm text-[var(--color-text-muted)]">
            Log In (placeholder)
          </div>
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[var(--color-primary)] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </PlaceholderPage>
  );
}
