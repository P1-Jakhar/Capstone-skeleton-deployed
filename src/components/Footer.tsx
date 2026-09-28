import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)]">Capstone</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Building the future, one feature at a time.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">Product</h4>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/pricing", label: "Pricing" },
                { href: "/dashboard", label: "Dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">Company</h4>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">Privacy Policy</span>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Capstone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
