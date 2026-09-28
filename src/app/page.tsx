import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capstone App — Home",
  description: "Welcome to the Capstone App. A modern full-stack application.",
};

export default function HomePage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="py-12 text-center sm:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
          Build Something{" "}
          <span className="text-[var(--color-primary)]">Amazing</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl">
          A modern, full-stack capstone application scaffolded with Next.js,
          Tailwind CSS, and TypeScript. Every screen is routed and ready to
          build.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard"
            className="rounded-lg bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/products"
            className="rounded-lg border border-[var(--color-border-dark)] px-8 py-3 text-base font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
          What&apos;s Included
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "App Router",
              desc: "File-based routing with layouts, loading states, and error boundaries.",
              icon: "🗂️",
            },
            {
              title: "Server Components",
              desc: "Server Components by default, Client Components only where needed.",
              icon: "⚡",
            },
            {
              title: "Tailwind CSS",
              desc: "Utility-first CSS with custom design tokens for consistent styling.",
              icon: "🎨",
            },
            {
              title: "TypeScript",
              desc: "Full type safety across the entire application.",
              icon: "🔒",
            },
            {
              title: "Responsive Design",
              desc: "Mobile-first responsive layout tested at 375px and 1280px.",
              icon: "📱",
            },
            {
              title: "Health Check",
              desc: "Live API health-check page that fetches and renders real data.",
              icon: "💚",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
