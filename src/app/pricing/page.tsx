import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying things out.",
    features: ["1 project", "Basic analytics", "Community support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Best for growing teams.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom integrations"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations.",
    features: ["Everything in Pro", "Dedicated account manager", "SLA guarantee", "SSO & SAML"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <PlaceholderPage
      title="Pricing"
      description="Simple, transparent pricing that grows with you."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl border p-6 ${
              tier.highlighted
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-lg ring-2 ring-[var(--color-primary)]/20"
                : "border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-sm"
            }`}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{tier.name}</h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{tier.description}</p>
            <p className="mt-4 text-3xl font-bold text-[var(--color-text)]">{tier.price}</p>
            <ul className="mt-6 space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-success)]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div
              className={`mt-6 rounded-md py-2 text-center text-sm font-medium ${
                tier.highlighted
                  ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                  : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]"
              }`}
            >
              {tier.cta} (placeholder)
            </div>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
