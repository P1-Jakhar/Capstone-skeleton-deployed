import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Check",
  description: "System health check — fetches live data to confirm the app is working.",
};

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  public_repos: number;
  followers: number;
  created_at: string;
}

interface HealthStatus {
  status: "healthy" | "degraded" | "error";
  timestamp: string;
  checks: {
    name: string;
    status: "pass" | "fail";
    responseTimeMs: number;
    detail?: string;
  }[];
}

async function performHealthChecks(): Promise<HealthStatus> {
  const checks: HealthStatus["checks"] = [];

  // Check 1: Fetch data from GitHub API (public, no auth needed)
  const ghStart = Date.now();
  try {
    const res = await fetch("https://api.github.com/users/vercel", {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: GitHubUser = await res.json();
    checks.push({
      name: "GitHub API",
      status: "pass",
      responseTimeMs: Date.now() - ghStart,
      detail: `Fetched profile for @${data.login} (${data.public_repos} repos)`,
    });
  } catch (err) {
    checks.push({
      name: "GitHub API",
      status: "fail",
      responseTimeMs: Date.now() - ghStart,
      detail: err instanceof Error ? err.message : "Unknown error",
    });
  }

  // Check 2: Fetch from JSONPlaceholder (public REST API)
  const jpStart = Date.now();
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const post = await res.json();
    checks.push({
      name: "JSONPlaceholder API",
      status: "pass",
      responseTimeMs: Date.now() - jpStart,
      detail: `Fetched post: "${post.title?.slice(0, 40)}…"`,
    });
  } catch (err) {
    checks.push({
      name: "JSONPlaceholder API",
      status: "fail",
      responseTimeMs: Date.now() - jpStart,
      detail: err instanceof Error ? err.message : "Unknown error",
    });
  }

  // Check 3: Runtime environment
  const envStart = Date.now();
  checks.push({
    name: "Runtime Environment",
    status: "pass",
    responseTimeMs: Date.now() - envStart,
    detail: `Node ${process.version} | ${process.platform} | ${process.env.NODE_ENV}`,
  });

  const overallStatus = checks.every((c) => c.status === "pass")
    ? "healthy"
    : checks.some((c) => c.status === "pass")
    ? "degraded"
    : "error";

  return {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    checks,
  };
}

export default async function HealthPage() {
  const health = await performHealthChecks();

  const statusColors = {
    healthy: "text-[var(--color-success)] bg-[var(--color-success)]/10 border-[var(--color-success)]/30",
    degraded: "text-[var(--color-warning)] bg-[var(--color-warning)]/10 border-[var(--color-warning)]/30",
    error: "text-[var(--color-error)] bg-[var(--color-error)]/10 border-[var(--color-error)]/30",
  };

  const statusEmoji = {
    healthy: "💚",
    degraded: "🟡",
    error: "🔴",
  };

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Health Check
        </h1>
        <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
          System status and live data verification.
        </p>
      </div>

      {/* Overall status banner */}
      <div className={`mb-8 rounded-xl border p-6 ${statusColors[health.status]}`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{statusEmoji[health.status]}</span>
          <div>
            <h2 className="text-xl font-bold capitalize">{health.status}</h2>
            <p className="text-sm opacity-80">
              Last checked: {new Date(health.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Individual checks */}
      <div className="space-y-4">
        {health.checks.map((check) => (
          <div
            key={check.name}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-3 w-3 rounded-full ${
                    check.status === "pass" ? "bg-[var(--color-success)]" : "bg-[var(--color-error)]"
                  }`}
                />
                <h3 className="font-semibold text-[var(--color-text)]">{check.name}</h3>
              </div>
              <span className="rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-mono text-[var(--color-text-muted)]">
                {check.responseTimeMs}ms
              </span>
            </div>
            {check.detail && (
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{check.detail}</p>
            )}
          </div>
        ))}
      </div>

      {/* Environment info */}
      <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">Environment Variables</h2>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">
          These environment variables are configured (values hidden for security):
        </p>
        <div className="space-y-2">
          {[
            { key: "NODE_ENV", set: !!process.env.NODE_ENV },
            { key: "DATABASE_URL", set: !!process.env.DATABASE_URL },
            { key: "NEXT_PUBLIC_API_URL", set: !!process.env.NEXT_PUBLIC_API_URL },
            { key: "AUTH_SECRET", set: !!process.env.AUTH_SECRET },
          ].map((env) => (
            <div key={env.key} className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2">
              <code className="text-sm font-mono text-[var(--color-text)]">{env.key}</code>
              <span className={`text-xs font-medium ${env.set ? "text-[var(--color-success)]" : "text-[var(--color-text-muted)]"}`}>
                {env.set ? "✓ Set" : "○ Not set"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
