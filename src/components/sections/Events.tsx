import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/data/images";
import { weeklyEvent, seasonalEvents, gamesNote } from "@/lib/data/events";

export function Events() {
  return (
    <section id="events" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ritual & Community"
          title="Events at Breathe"
          description="From our weekly signature night to seasonal celebrations, Breathe is where the calendar gets interesting."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30">
              <div className="relative aspect-4/3 sm:aspect-16/9">
                <Image
                  src={images.groupToast.src}
                  alt={images.groupToast.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
                <span className="w-fit rounded-full bg-gold px-4 py-1 text-xs font-semibold tracking-wide text-ink">
                  {weeklyEvent.cadence} · {weeklyEvent.time}
                </span>
                <h3 className="font-display text-2xl text-cream sm:text-3xl">{weeklyEvent.name}</h3>
                <p className="max-w-md text-sm leading-relaxed text-cream-muted sm:text-base">
                  {weeklyEvent.description}
                </p>
                <div className="mt-2">
                  <Button href="#reservations">Reserve Your Spot</Button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {seasonalEvents.map((event, i) => (
              <Reveal key={event.title} delay={0.1 * (i + 1)}>
                <div className="rounded-2xl border border-border bg-ink p-6">
                  <span className="font-script text-2xl text-gold">{event.window}</span>
                  <h3 className="mt-1 font-display text-xl text-cream">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">{event.description}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex items-start gap-4 rounded-2xl border border-dashed border-gold/40 p-6">
                <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
                <div>
                  <h3 className="font-display text-lg text-cream">Games Night, Every Night</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-muted">{gamesNote}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
