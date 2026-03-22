'use client'

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
    </>
  )
}
