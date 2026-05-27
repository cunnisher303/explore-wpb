import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-base)] mt-24">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/assets/logo-71.png" alt="Why People Believe" width={32} height={32} className="rounded-lg" />
              <span className="font-semibold text-sm text-[var(--text-primary)]">Why People Believe</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Psychology resources for real self-understanding — not surface-level tips.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="section-label mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { href: "/workbooks", label: "Workbooks" },
                { href: "/picks", label: "Book Picks" },
                { href: "/blog", label: "Blog" },
                { href: "/channel", label: "Channel" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App */}
          <div>
            <p className="section-label mb-4">The App</p>
            <ul className="space-y-2.5">
              {[
                { href: "https://whypeoplebelieve.com", label: "Open App" },
                { href: "https://whypeoplebelieve.com/upgrade", label: "Go Premium" },
                { href: "https://whypeoplebelieve.com/assessments", label: "Assessments" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="section-label mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { href: "https://whypeoplebelieve.com/privacy", label: "Privacy Policy" },
                { href: "https://whypeoplebelieve.com/terms", label: "Terms of Service" },
                { href: "mailto:hello@whypeoplebelieve.com", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} Why People Believe. All rights reserved.</p>
          <p className="affiliate-note">This site contains affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
