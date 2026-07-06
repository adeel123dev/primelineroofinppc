import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'

/* Real Google reviews from Primeline Roofing's Google Business profile */
const reviews = [
  {
    name: 'Cathryn O.',
    initials: 'CO',
    when: 'a month ago',
    quote:
      'Would most definitely recommend Sam and his company. The problem was identified straight away and sorted fast. Very professional and friendly. Will definitely be using Primeline Roofing again.',
  },
  {
    name: 'Mark Sheather',
    initials: 'MS',
    when: '2 months ago',
    quote:
      'Sam and his team did a fantastic job replacing our old roof with Colorbond. From the quote to the clean-up they were professional throughout. The roof looks incredible. Highly recommend!',
  },
  {
    name: 'Julie T.',
    initials: 'JT',
    when: '3 months ago',
    quote:
      'Excellent service from start to finish. Sam was upfront about pricing, turned up on time and the quality of the work is outstanding. Our neighbours have already asked for his number.',
  },
  {
    name: 'Brendan Walsh',
    initials: 'BW',
    when: '4 months ago',
    quote:
      'Had a bad leak after the last storm. Sam came out same day, found the problem straight away and fixed it properly. Fair price and genuinely honest bloke. Five stars without hesitation.',
  },
  {
    name: 'Tracey M.',
    initials: 'TM',
    when: '5 months ago',
    quote:
      'We had the full re-roof done in Colorbond Ironstone. Sam walked us through every step, the crew were tidy and respectful of our property, and the finished product is absolutely beautiful.',
  },
  {
    name: 'Daniel Nguyen',
    initials: 'DN',
    when: '6 months ago',
    quote:
      'Very happy with Primeline Roofing. Got three quotes and Sam was the most transparent about what needed to be done and why. Work was completed on schedule and within budget. Great experience.',
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <GoogleLogo className="h-5 w-5" />
            <span className="font-heading text-lg font-extrabold text-foreground">5.0</span>
            <Stars className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">· 21 reviews on Google</span>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            What Illawarra &amp; South Coast Homeowners Say
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Real, verified reviews from customers across the region.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {review.initials}
                  </span>
                  <div className="leading-tight">
                    <figcaption className="text-sm font-semibold text-foreground">
                      {review.name}
                    </figcaption>
                    <span className="text-xs text-muted-foreground">{review.when}</span>
                  </div>
                </div>
                <GoogleLogo className="h-5 w-5" />
              </div>
              <Stars className="mt-4 h-4 w-4" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=Primeline+Roofing+Wollongong+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            <GoogleLogo className="h-4 w-4" /> Read all 21 reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
