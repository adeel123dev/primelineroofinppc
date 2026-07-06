import Image from 'next/image'
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Get Free Quote', href: '#quote-form' },
]

const serviceLinks = [
  'Metal Roofing',
  'Architectural Cladding',
  'Roof Restorations',
  'Roof Repairs & Leak Detection',
  'Emergency Storm Response',
]

const serviceAreas = [
  'Wollongong',
  'Illawarra',
  'Shellharbour',
  'Oak Flats',
  'Kiama',
  'Nowra',
  'Ulladulla',
  'Moss Vale',
  'Bowral',
  'Mittagong',
  'Southern Highlands',
  'Camden',
  'Narellan',
  'Campbelltown',
  'Penrith',
  'Emu Plains',
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/primeline-logo.webp"
                alt="Primeline Roofing logo"
                width={40}
                height={40}
                className="h-9 w-9 rounded-md object-contain"
              />
              <span className="font-heading text-base font-extrabold text-foreground">
                Primeline Roofing
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
              South Coast owned &amp; operated. Premium metal roofing, cladding &amp; restorations.
              Licensed &amp; fully insured. We follow SafeWork NSW guidance and WHS requirements.
            </p>
            <p className="mt-4 inline-flex rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground">
              Licensed &amp; Fully Insured
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-sm font-bold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+61242177737"
                  className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" /> (02) 4217 7737
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@primelineroofing.com.au"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                  office@primelineroofing.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  PO Box 4016 Towradgi NSW 2518
                  <br />
                  Servicing Wollongong, Illawarra, South Coast NSW &amp; Western Sydney
                </span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
                Emergency: 24/7 Available
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Service Areas</h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-10 rounded-2xl border border-border bg-secondary/50 px-6 py-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              Payment Methods Accepted
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-end">
              {/* Visa */}
              <div className="flex h-9 w-14 items-center justify-center rounded-lg border border-border bg-card px-2 shadow-sm">
                <svg viewBox="0 0 48 16" fill="none" className="w-full" aria-label="Visa">
                  <text x="2" y="13" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#1A1F71">VISA</text>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="flex h-9 w-14 items-center justify-center rounded-lg border border-border bg-card px-1.5 shadow-sm" aria-label="Mastercard">
                <svg viewBox="0 0 38 24" fill="none" className="w-full">
                  <circle cx="14" cy="12" r="10" fill="#EB001B" />
                  <circle cx="24" cy="12" r="10" fill="#F79E1B" />
                  <path d="M19 6.8a10 10 0 0 1 0 10.4A10 10 0 0 1 19 6.8z" fill="#FF5F00" />
                </svg>
              </div>
              {/* AMEX */}
              <div className="flex h-9 w-14 items-center justify-center rounded-lg border border-border bg-[#016FD0] px-1.5 shadow-sm">
                <svg viewBox="0 0 48 16" fill="none" className="w-full" aria-label="American Express">
                  <text x="1" y="12" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="white">AMEX</text>
                </svg>
              </div>
              {/* Afterpay */}
              <div className="flex h-9 w-[72px] items-center justify-center rounded-lg border border-border bg-[#B2FCE4] px-2 shadow-sm">
                <svg viewBox="0 0 70 20" fill="none" className="w-full" aria-label="Afterpay">
                  <text x="2" y="14" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#000">Afterpay</text>
                </svg>
              </div>
              {/* Zip Pay */}
              <div className="flex h-9 w-[52px] items-center justify-center rounded-lg border border-border bg-[#AA8FFF] px-2 shadow-sm">
                <svg viewBox="0 0 44 20" fill="none" className="w-full" aria-label="Zip">
                  <text x="4" y="14" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="white">zip</text>
                </svg>
              </div>
              {/* Bank Transfer */}
              <div className="flex h-9 items-center justify-center rounded-lg border border-border bg-card px-3 shadow-sm">
                <span className="text-[11px] font-semibold text-muted-foreground">Bank Transfer</span>
              </div>
              {/* Cash */}
              <div className="flex h-9 items-center justify-center rounded-lg border border-border bg-card px-3 shadow-sm">
                <span className="text-[11px] font-semibold text-muted-foreground">Cash</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Primeline Roofing. Licensed &amp; Fully Insured (NSW Fair
            Trading). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-accent">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
