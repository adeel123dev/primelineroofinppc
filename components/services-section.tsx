import { ArrowRight, Wrench, Home, Layers, CloudRain } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'ROOF REPAIRS',
    description: 'From minor leaks to damaged sheets, flashing and loose fixings — repairs that stop water entry',
  },
  {
    icon: Home,
    title: 'ROOF REPLACEMENT',
    description: 'Full re-roofing and roof replacement, including tile-to-metal conversions',
  },
  {
    icon: Layers,
    title: 'METAL & COLORBOND ROOFING',
    description: 'BlueScope-grade metal and Colorbond roofing built to last in Australian conditions',
  },
  {
    icon: CloudRain,
    title: 'STORM DAMAGE & LEAK REPAIRS',
    description: 'Storm damage inspections, make-safe and leak repairs with insurance reports',
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
                <service.icon
                  className="mb-4 h-12 w-12 text-foreground"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

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
