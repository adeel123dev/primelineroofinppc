import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: 'M8 3l2 4h3l-2.5 2 1 3-2.5-2-2.5 2 1-3L3 7h3l2-4z',
    title: 'ROOFING',
    description: 'Only the best quality roofing materials are sourced for every job',
  },
  {
    icon: 'M3 8l1-1h2l-1 1v3l1 1H3l1-1V8zm6 0l1-1h2l-1 1v3l1 1H9l1-1V8z',
    title: 'ROOF REPAIRS',
    description: 'Replacement roof tiles through to leaking roofs',
  },
  {
    icon: 'M2 4h10v8H2z',
    title: 'FLAT ROOFING',
    description: 'Quality flat roofing in felt, GRP or EPDM',
  },
  {
    icon: 'M2 6h10v2H2z',
    title: 'FASCIAS, SOFFITS & GUTTERING',
    description: 'Roofline products installed or repaired',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-balance text-foreground sm:text-4xl">
            What we do?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
            We cover all aspects of roofing from new installations through to minor roofing repairs, 
            call our team today to discuss your individual roofing requirements
          </p>
        </div>

        {/* Services grid with skew effect */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Curved skew card using transform */}
              <div
                className="flex flex-col items-center justify-between rounded-2xl bg-secondary/40 px-6 py-8 text-center transition-all duration-300 hover:bg-secondary/60"
                style={{
                  transform: `skewY(-3deg) rotateX(${idx % 2 === 0 ? '-2' : '2'}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-foreground mb-4"
                  aria-hidden="true"
                >
                  <path d={service.icon} />
                </svg>

                {/* Title */}
                <h3 className="font-heading text-base font-bold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-muted-foreground">
                  {service.description}
                </p>

                {/* Orange arrow button */}
                <button
                  className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-110 active:scale-95 group-hover:-translate-y-1"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
