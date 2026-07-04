import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/data/images";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-center overflow-hidden">
      <Image
        src={images.heroBar.src}
        alt={images.heroBar.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 pt-28 pb-20 text-center sm:px-8">
        <Reveal>
          <Logo variant="mark" className="justify-center [&>svg]:h-20 [&>svg]:w-20 sm:[&>svg]:h-24 sm:[&>svg]:w-24" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="font-display text-4xl tracking-[0.2em] text-gradient-gold sm:text-5xl md:text-6xl">
            BREATHE
          </div>
          <div className="mt-2 text-xs tracking-[0.5em] text-cream-muted sm:text-sm">
            RESTAURANT · LOUNGE
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-balance text-lg leading-relaxed text-cream sm:text-xl">
            {site.bio}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#reservations">Reserve a Table</Button>
            <Button href="#menu" variant="secondary">
              View Menu
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold/70">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
