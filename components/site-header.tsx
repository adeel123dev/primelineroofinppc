'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote-form' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5" onClick={closeMenu}>
            <Image
              src="/primeline-mark.png"
              alt="Primeline Roofing logo"
              width={96}
              height={96}
              className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
              priority
            />
            <div className="leading-tight">
              <p className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                Primeline Roofing
              </p>
              <p className="hidden text-[11px] text-muted-foreground sm:block">
                Metal Roofing Specialists
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Google rating — desktop only */}
            <div className="google-pill-wrapper hidden xl:block">
              <div className="google-pill-inner">
                <GoogleLogo className="h-5 w-5 shrink-0" />
                <div className="flex items-center gap-1">
                  <Stars className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm font-extrabold text-gray-900">5.0 Stars</span>
                  <span className="text-[11px] font-medium text-gray-500">21 Google Reviews</span>
                </div>
              </div>
            </div>

            {/* CTA phone — tablet+ */}
            <a
              href="tel:+61242177737"
              className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-border bg-card px-4 pb-5 pt-2" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-accent"
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA block */}
            <div className="mt-4 rounded-2xl bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Get in touch
              </p>
              <a
                href="tel:+61242177737"
                onClick={closeMenu}
                className="mt-2 flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-sm font-extrabold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                (02) 4217 7737
              </a>
              <a
                href="#quote-form"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Google rating row */}
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
              <GoogleLogo className="h-5 w-5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-blue-900">5.0 Stars on Google</p>
                <p className="text-xs text-blue-700">21 verified reviews</p>
              </div>
              <Stars className="ml-auto h-3.5 w-3.5 text-yellow-500" />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
