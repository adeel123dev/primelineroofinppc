'use client'

import Image from 'next/image'
import { GoogleLogo } from '@/components/google-logo'

export function FloatingGoogleRating() {
  return (
    <>
      {/* ── Mobile: compact Google Reviews badge, stuck bottom-right so it never gets cut ── */}
      <a
        href="https://maps.app.goo.gl/primeline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Primeline Roofing on Google — 5.0 Stars, 21 Reviews"
        className="fixed bottom-24 right-3 z-40 flex items-center rounded-xl border border-white/15 bg-foreground/95 px-2.5 py-1.5 shadow-lg shadow-black/40 backdrop-blur animate-in fade-in slide-in-from-right-4 duration-500 sm:hidden"
      >
        <Image
          src="/google-reviews-badge.png"
          alt="5.0 stars on Google Reviews"
          width={1382}
          height={780}
          className="h-8 w-auto"
          priority
        />
      </a>

      {/* ── Desktop / tablet: animated Google-colour pill, bottom-left ── */}
      <div className="fixed bottom-10 left-6 z-40 hidden animate-in fade-in slide-in-from-left-4 duration-500 sm:block">
        <div className="google-pill-wrapper">
          <a
            href="https://maps.app.goo.gl/primeline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Primeline Roofing on Google — 5.0 Stars, 21 Reviews"
            className="google-pill-inner"
          >
            {/* Google G */}
            <GoogleLogo className="h-5 w-5 shrink-0" />

            {/* Stars */}
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4" viewBox="0 0 20 20">
                  <path
                    fill="#FBBC05"
                    d="M10 1.6l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.84l-4.77 2.57.91-5.32L2.27 7.22l5.34-.78L10 1.6z"
                  />
                </svg>
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col leading-none">
              <span className="text-sm font-extrabold text-gray-900">5.0 Stars</span>
              <span className="text-[11px] font-medium text-gray-500">21 Google Reviews</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
