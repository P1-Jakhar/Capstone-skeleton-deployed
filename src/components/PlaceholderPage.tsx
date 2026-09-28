import type { ReactNode } from "react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PlaceholderPage({ title, description, children }: PlaceholderPageProps) {
  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
            {description}
          </p>
        )}
      </div>

      {children ? (
        children
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <svg className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.31-3.06A2.99 2.99 0 005 14.94V21h14v-6.06a3 3 0 00-1.11-2.83l-5.31-3.06a1 1 0 00-.58-.18 1 1 0 00-.58.18z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 0l3-3m-3 3L9 5" />
              </svg>
            </div>
            <p className="text-lg font-medium text-[var(--color-text)]">Under Construction</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              This page is a placeholder and will be built out soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
