import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data/site";

export function LocationHours() {
  return (
    <section id="location" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Find Us" title="Location & Hours" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map to Breathe Restaurant & Lounge"
                src={site.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full sm:h-full sm:min-h-96"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-8 rounded-2xl border border-border bg-surface p-8">
              <div>
                <h3 className="font-display text-xl text-gold">Address</h3>
                <address className="mt-3 not-italic leading-relaxed text-cream-muted">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                  <br />
                  <span className="text-sm text-cream-muted/70">
                    Plus code: {site.address.plusCode} ({site.address.plusCodeNote})
                  </span>
                </address>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline underline-offset-4"
                >
                  Get directions
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="h-px w-full bg-border" />

              <div>
                <h3 className="font-display text-xl text-gold">Hours</h3>
                <ul className="mt-3 space-y-2">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 text-cream-muted">
                      <span>{h.days}</span>
                      <span className="text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-border" />

              <div>
                <h3 className="font-display text-xl text-gold">Contact</h3>
                <p className="mt-3 text-cream-muted">
                  <a href={site.phoneHref} className="hover:text-gold">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-1 text-cream-muted">
                  <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
