import PlaceholderPage from "@/components/PlaceholderPage";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Product ${id}`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <PlaceholderPage
      title={`Product #${id}`}
      description="Detailed product view with specifications, pricing, and reviews."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Product image placeholder */}
        <div className="flex h-64 items-center justify-center rounded-xl bg-[var(--color-bg-tertiary)] lg:h-96">
          <span className="text-6xl">📦</span>
        </div>

        {/* Product info */}
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
            <span className="inline-block rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-sm font-medium text-[var(--color-success)]">
              In Stock
            </span>
            <p className="mt-4 text-3xl font-bold text-[var(--color-text)]">$99.00</p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              This is a placeholder description for product #{id}. Real content will be loaded from your data source.
            </p>
            <div className="mt-6 h-12 w-full rounded-lg bg-[var(--color-primary)]/20 text-center leading-[3rem] text-sm font-medium text-[var(--color-text-muted)]">
              Add to Cart (placeholder)
            </div>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </PlaceholderPage>
  );
}
