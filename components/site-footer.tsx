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

        {/* Payment methods — single row */}
        <div className="mt-10 rounded-2xl border border-border bg-secondary/50 px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground shrink-0">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              Payment Methods Accepted
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Visa */}
              <div className="flex h-9 w-[54px] items-center justify-center rounded-lg border border-border bg-white px-2 shadow-sm" aria-label="Visa">
                <svg viewBox="0 0 750 471" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
                  <rect width="750" height="471" rx="40" fill="white"/>
                  <path d="M278.2 334.5 316.3 136.6H376.2L338.1 334.5H278.2Z" fill="#1A1F71"/>
                  <path d="M524.3 141.3C512.1 136.5 492.5 131.3 468.3 131.3 409.8 131.3 368.3 161.4 368 204.2 367.7 236.1 397.2 253.8 419.5 264.3 442.4 275.1 450.2 282.1 450.1 291.8 449.9 306.6 431.6 313.4 414.5 313.4 390.7 313.4 378 310 357.4 301.3L349.7 297.8 341.4 344.9C355.6 351.2 381.9 356.7 409.2 357 471.3 357 512 327.3 512.5 281.7 512.7 256.7 496.5 237.5 461.6 221.4 441 211.1 428.8 204.3 428.9 193.9 428.9 184.7 439.1 174.9 461.2 174.9 479.8 174.6 493.3 178.8 503.9 183.1L509.1 185.5 524.3 141.3Z" fill="#1A1F71"/>
                  <path d="M657.8 136.6H611.3C597.1 136.6 586.3 140.7 580 155.2L493.6 334.5H555.6C555.6 334.5 565.9 306.6 568.2 300.5 575 300.5 635.2 300.6 643.8 300.6 645.6 308.4 651.2 334.5 651.2 334.5H706L657.8 136.6ZM584.9 256.1C589.5 244.2 607.8 196.5 607.8 196.5 607.5 197 612.3 184.3 615 176.8L618.6 194.8C618.6 194.8 629.8 248.5 632.1 256.1H584.9Z" fill="#1A1F71"/>
                  <path d="M232.8 136.6L175.5 273.8 169.3 243.3C158.4 208.3 125.6 170.2 88.9 151.1L141.4 334.3 203.9 334.2 295.4 136.6H232.8Z" fill="#1A1F71"/>
                  <path d="M120.9 136.6H26.6L25.9 140.9C100 158.9 150.4 201 169.3 243.3L150.1 155.5C146.8 141.3 136.2 137.1 120.9 136.6Z" fill="#F9A533"/>
                </svg>
              </div>

              {/* Mastercard */}
              <div className="flex h-9 w-[54px] items-center justify-center rounded-lg border border-border bg-white px-1.5 shadow-sm" aria-label="Mastercard">
                <svg viewBox="0 0 152 95" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
                  <circle cx="55" cy="47.5" r="47.5" fill="#EB001B"/>
                  <circle cx="97" cy="47.5" r="47.5" fill="#F79E1B"/>
                  <path d="M76 13.7C85.5 21.1 91.7 32.5 91.7 47.5 91.7 62.5 85.5 73.9 76 81.3 66.5 73.9 60.3 62.5 60.3 47.5 60.3 32.5 66.5 21.1 76 13.7Z" fill="#FF5F00"/>
                </svg>
              </div>

              {/* AMEX */}
              <div className="flex h-9 w-[54px] items-center justify-center rounded-lg border border-transparent bg-[#016FD0] px-1.5 shadow-sm" aria-label="American Express">
                <svg viewBox="0 0 48 18" className="h-4 w-auto">
                  <text x="3" y="13" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="white" letterSpacing="0.5">AMEX</text>
                </svg>
              </div>

              {/* Afterpay */}
              <div className="flex h-9 w-[76px] items-center justify-center rounded-lg border border-border bg-[#B2FCE4] px-2 shadow-sm" aria-label="Afterpay">
                <svg viewBox="0 0 80 22" className="h-4 w-auto">
                  <text x="2" y="15" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#000000">Afterpay</text>
                </svg>
              </div>

              {/* Zip */}
              <div className="flex h-9 w-[50px] items-center justify-center rounded-lg border border-transparent bg-[#AA8FFF] px-2 shadow-sm" aria-label="Zip">
                <svg viewBox="0 0 40 22" className="h-4 w-auto">
                  <text x="4" y="16" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" fill="white">zip</text>
                </svg>
              </div>

              {/* Bank Transfer */}
              <div className="flex h-9 items-center justify-center rounded-lg border border-border bg-white px-3 shadow-sm">
                <span className="text-[11px] font-semibold text-gray-600">Bank Transfer</span>
              </div>

              {/* Cash */}
              <div className="flex h-9 items-center justify-center rounded-lg border border-border bg-white px-3 shadow-sm">
                <span className="text-[11px] font-semibold text-gray-600">Cash</span>
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
