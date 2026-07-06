'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { GoogleLogo } from '@/components/google-logo'
import { Stars } from '@/components/stars'

export function FloatingGoogleRating() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-28 left-4 z-40 animate-in fade-in slide-in-from-left-4 duration-500 sm:bottom-10 sm:left-6">
      {/* Card */}
      <div
        className="relative w-44 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/8"
        style={{ boxShadow: '0 8px 32px -4px rgba(0,0,0,0.18), 0 2px 8px -2px rgba(0,0,0,0.10)' }}
      >
        {/* Back button tab */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close Google rating widget"
          className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-400 transition-colors hover:bg-orange-100"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center px-4 pb-4 pt-12">
          {/* Google G logo */}
          <GoogleLogo className="h-8 w-8" />

          {/* Rating number + stars */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="font-heading text-3xl font-extrabold leading-none text-gray-900">
              4.9
            </span>
            <Stars className="h-5 w-5" />
          </div>

          {/* Review count */}
          <p className="mt-1 text-sm text-gray-400">147 reviews</p>
        </div>
      </div>
    </div>
  )
}
