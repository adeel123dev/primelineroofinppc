'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    src: '/gallery/roof-1.png',
    alt: 'New charcoal Colorbond steel roof installed on a modern Wollongong home',
    label: 'Full Re-Roof — Wollongong',
    tag: 'Metal Roofing',
  },
  {
    src: '/gallery/roof-2.png',
    alt: 'Aerial view of completed Colorbond roof replacement, Illawarra suburb',
    label: 'Colorbond Re-Roof — Illawarra',
    tag: 'Metal Roofing',
  },
  {
    src: '/gallery/roof-3.png',
    alt: 'Close-up of crisp Colorbond ridgeline and panel installation detail',
    label: 'Ridge Detail — Shellharbour',
    tag: 'Roof Repair',
  },
  {
    src: '/gallery/roof-4.png',
    alt: 'Modern home with grey architectural metal cladding facade',
    label: 'Architectural Cladding — Kiama',
    tag: 'Cladding',
  },
  {
    src: '/gallery/roof-5.png',
    alt: 'Primeline Roofing crew installing Colorbond panels on site',
    label: 'Installation in Progress — Oak Flats',
    tag: 'Metal Roofing',
  },
  {
    src: '/gallery/roof-6.png',
    alt: 'Freshly restored and recoated metal roof on a brick Australian home',
    label: 'Roof Restoration — Nowra',
    tag: 'Restoration',
  },
]

const tagColors: Record<string, string> = {
  'Metal Roofing': 'bg-primary text-primary-foreground',
  Cladding: 'bg-accent/15 text-accent',
  'Roof Repair': 'bg-secondary text-secondary-foreground',
  Restoration: 'bg-secondary text-secondary-foreground',
}

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  function prev() {
    setLightbox((i) => (i === null ? null : (i - 1 + projects.length) % projects.length))
  }
  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % projects.length))
  }

  return (
    <>
      <section id="gallery" className="scroll-mt-20 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Recent Projects
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
              Our Work Speaks for Itself
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A selection of completed roofing, cladding and restoration projects across Wollongong,
              Illawarra and the South Coast.
            </p>
          </div>

          {/* Auto-scrolling marquee — pauses on hover, click any card to open the lightbox */}
          <div className="marquee-viewport relative mt-10 overflow-hidden">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16" />

            <div className="marquee-track gap-4">
              {[...projects, ...projects].map((project, i) => (
                <button
                  key={`${project.src}-${i}`}
                  type="button"
                  onClick={() => setLightbox(i % projects.length)}
                  aria-hidden={i >= projects.length}
                  tabIndex={i >= projects.length ? -1 : 0}
                  className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[320px]"
                  aria-label={`View larger: ${project.label}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{project.label}</p>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${tagColors[project.tag] ?? 'bg-secondary text-secondary-foreground'}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-extrabold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              Get a Free Quote for Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project photo lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-14 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={projects[lightbox].src}
                alt={projects[lightbox].alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between gap-3 px-5 py-3">
              <p className="text-sm font-semibold text-foreground">
                {projects[lightbox].label}
              </p>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${tagColors[projects[lightbox].tag] ?? 'bg-secondary text-secondary-foreground'}`}
              >
                {projects[lightbox].tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
