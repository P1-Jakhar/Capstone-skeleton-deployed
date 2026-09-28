import PlaceholderPage from "@/components/PlaceholderPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const sampleProducts = [
  { id: "1", name: "Product Alpha", price: "$49", category: "Software" },
  { id: "2", name: "Product Beta", price: "$99", category: "Hardware" },
  { id: "3", name: "Product Gamma", price: "$149", category: "Service" },
  { id: "4", name: "Product Delta", price: "$199", category: "Software" },
  { id: "5", name: "Product Epsilon", price: "$249", category: "Hardware" },
  { id: "6", name: "Product Zeta", price: "$299", category: "Service" },
];

export default function ProductsPage() {
  return (
    <PlaceholderPage
      title="Products"
      description="Explore our product catalog."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/30"
          >
            <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)]">
              <span className="text-4xl">📦</span>
            </div>
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              {product.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
              {product.name}
            </h3>
            <p className="mt-1 text-xl font-bold text-[var(--color-text)]">{product.price}</p>
          </Link>
        ))}
      </div>
    </PlaceholderPage>
  );
}
