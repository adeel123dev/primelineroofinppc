import Image from 'next/image'
import { ArrowRight, ShieldCheck, BadgeCheck, Wrench } from 'lucide-react'

export function VanGlassSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Full-bleed van photo */}
      <Image
        src="/primeline-van.png"
        alt="Primeline Roofing branded service van"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />

      {/* Soft dark vignette so text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-[520px]">
          {/* Glass card — dark, frosted, like the 247 Floors reference */}
          <div
            className="rounded-2xl px-8 py-10"
            style={{
              background: 'rgba(12, 16, 28, 0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 24px 64px -12px rgba(0,0,0,0.55)',
            }}
          >
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
              Highest Quality{' '}
              <span className="text-accent">Roofing Service</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              Primeline Roofing was founded to serve the Illawarra with expert Colorbond metal
              roofing — re-roofs, restorations, cladding and repairs. Our model is simple: fixed
              upfront pricing, our own trained crew, and a written 25-year workmanship warranty on
              every single job.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              With decades of combined experience across residential and commercial roofing, we
              leverage long-standing supplier relationships to deliver superior Colorbond products at
              highly competitive prices — every job, every time.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-3">
              {[
                { icon: ShieldCheck, text: '25-year written workmanship warranty' },
                { icon: BadgeCheck, text: 'Fully licensed & insured — NSW Fair Trading' },
                { icon: Wrench, text: 'Our own trained crew, never subcontracted' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-white/85">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#quote-form"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-extrabold text-accent-foreground transition-transform hover:scale-[1.03] hover:bg-accent/90"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
