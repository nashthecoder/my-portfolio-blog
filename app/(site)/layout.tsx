// app/(site)/layout.tsx
// SHARED LAYOUT — nav + footer wraps every public page.

import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import NavLinks from './NavLinks'

export const metadata = {
  title: 'Naijeria Toweett — Systems Architect · Fractional Product CTO · FemTech Founder',
  description: "Building Africa's digital infrastructure for impact. Founder of Mama Tech / TichLabs. Creator of DADA.",
  openGraph: {
    url: 'https://www.naijeriatoweett.com',
    siteName: 'Naijeria Toweett',
    locale: 'en_KE',
    type: 'website',
  },
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">

      {/* ── Skip link ── */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* ── Navigation ── */}
      <header className="site-nav">
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Naijeria Toweett home">
            <span className="logo-primary">Naijeria Toweett</span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Main navigation">
            <ul className="nav-links">
              <NavLinks />
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Page content ── */}
      <main id="main-content" className="site-main">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">

          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-wordmark">
              <span className="fw-primary">Naijeria Toweett</span>
              <span className="fw-sep">|</span>
              <a href="https://mamatechafrica.github.io" target="_blank" rel="noopener noreferrer"
                className="fw-venture">
                Mama Tech
              </a>
              <span className="fw-sep">|</span>
              <span className="fw-venture">TichLabs</span>
            </div>
            <p className="footer-tagline">
              Systems architect · Fractional Product CTO · FemTech founder
            </p>
            <p className="footer-location">Nairobi, Kenya</p>
          </div>

          {/* Work column */}
          <div className="footer-col">
            <p className="footer-col-label">Work</p>
            <ul>
              <li><Link href="/work" className="footer-link">Case studies</Link></li>
              <li><Link href="/ventures" className="footer-link">Ventures</Link></li>
              <li>
                <a href="https://quickjobs.naijeriatoweett.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Product sprints
                </a>
              </li>
              <li>
                <a href="https://askrafikey.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  AskRafikey ↗
                </a>
              </li>
            </ul>
          </div>

          {/* About column */}
          <div className="footer-col">
            <p className="footer-col-label">About</p>
            <ul>
              <li><Link href="/cv" className="footer-link">CV / Résumé</Link></li>
              <li><Link href="/blog" className="footer-link">Writing</Link></li>
            </ul>
          </div>

          {/* Connect column */}
          <div className="footer-col">
            <p className="footer-col-label">Connect</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/naijeriatoweett/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/NaijeriaToweett" target="_blank" rel="noopener noreferrer" className="footer-link">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/nashthecoder" target="_blank" rel="noopener noreferrer" className="footer-link">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">© {new Date().getFullYear()} Naijeria Toweett · All rights reserved</p>
            <p className="footer-built">
              Built with Next.js · Sanity CMS · Open source
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
