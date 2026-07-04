import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/data/images";

const pillars = [
  {
    title: "Diverse Menu",
    description: "Delectable local & intercontinental dishes, crafted to indulge every craving.",
  },
  {
    title: "Complete Relaxation",
    description: "A cozy atmosphere built for slow evenings, good company, and easy conversation.",
  },
  {
    title: "Signature Cocktails",
    description: "A dedicated bar program pouring bold, colorful drinks made by hand.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="left"
            eyebrow="Welcome to Breathe"
            title="A complete relaxation experience"
            description="Come indulge in our diverse menu, in a cozy atmosphere — Breathe is where Enugu comes to slow down, eat well, and stay a while."
          />

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.1 * i}>
                <div className="border-l-2 border-gold/40 pl-5">
                  <h3 className="font-display text-xl text-gold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.relaxNeon.src}
                alt={images.relaxNeon.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.cozyDiner.src}
                alt={images.cozyDiner.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.chefPrep.src}
                alt={images.chefPrep.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
