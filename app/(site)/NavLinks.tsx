'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/about',    label: 'About'    },
  { href: '/work',     label: 'Work'     },
  { href: '/ventures', label: 'Ventures' },
  { href: '/blog',     label: 'Writing'  },
  { href: '/cv',       label: 'CV'       },
]

export default function NavLinks() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {NAV_LINKS.map(({ href, label }) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
        return (
          <li key={href}>
            <Link href={href} className={`nav-link${isActive ? ' nav-link--active' : ''}`}>
              {label}
            </Link>
          </li>
        )
      })}
      <li>
        <a
          href="https://quickjobs.naijeriatoweett.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Brief me
        </a>
      </li>

      {/* Mobile menu button */}
      <li className="mobile-menu-btn">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </li>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`mobile-nav-link${isActive ? ' mobile-nav-link--active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
              <li>
                <a
                  href="https://quickjobs.naijeriatoweett.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-cta"
                >
                  Brief me →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
