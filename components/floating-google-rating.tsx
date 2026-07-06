'use client'

import { GoogleLogo } from '@/components/google-logo'

// Google brand colours used for the animated border
// Red #EA4335  Yellow #FBBC05  Green #34A853  Blue #4285F4
const GOOGLE_GRADIENT =
  'conic-gradient(from var(--angle), #EA4335 0%, #FBBC05 25%, #34A853 50%, #4285F4 75%, #EA4335 100%)'

export function FloatingGoogleRating() {
  return (
    <div className="fixed bottom-28 left-4 z-40 animate-in fade-in slide-in-from-left-4 duration-500 sm:bottom-10 sm:left-6">
      {/*
        Outer wrapper — holds the spinning Google-colour border.
        @property is used for the conic-gradient angle so we can
        animate it with a pure-CSS @keyframes.
      */}
      <div className="google-pill-wrapper">
        {/* Inner pill — the actual visible badge */}
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
  )
}
