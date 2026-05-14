"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["Destinations", "/destinations"],
  ["Travel Essentials", "/essentials"],
  ["Itineraries", "/itineraries"],
  ["Work With Us", "/deals/partner"]
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 15c6-8 11-11 16-12-4 5-6 10-5 17-3-4-7-5-11-5Z" fill="currentColor" />
            </svg>
          </span>
          China Journey Kit
        </Link>
        <button className="nav-toggle" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav className={`site-nav ${open ? "is-open" : ""}`}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <Link className="nav-cta" href="/company/contact">Plan My Trip</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>China Journey Kit</h3>
          <p>Independent planning help for China trips. Verify official rules before booking.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/destinations">Destinations</Link>
          <Link href="/itineraries">Itineraries</Link>
          <Link href="/experiences/culture-food">Culture & Food</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h4>Essentials</h4>
          <Link href="/essentials/payments">Payments</Link>
          <Link href="/essentials/transport">Transport</Link>
          <Link href="/essentials/visa">Visa</Link>
        </div>
        <div>
          <h4>Business</h4>
          <Link href="/deals/partner">Partner Plan</Link>
          <Link href="/company/contact">Contact</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link href="/company/privacy">Privacy</Link>
          <Link href="/company/terms">Terms</Link>
          <Link href="/company/sources">Sources</Link>
        </div>
      </div>
    </footer>
  );
}
