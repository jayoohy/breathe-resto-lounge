import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/data/images";

const highlights = [
  "Hand-crafted signature cocktails",
  "Premium spirits & an extensive liquor shelf",
  "Mixologists trained to build a drink to your taste",
  "Non-alcoholic mocktails, just as indulgent",
];

export function Bar() {
  return (
    <section id="bar" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.barShelf.src}
                alt={images.barShelf.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.oldFashionedPour.src}
                alt={images.oldFashionedPour.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={images.ginTonic.src}
                alt={images.ginTonic.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Mixology"
            title="The Bar at Breathe"
            description="Our bar program is built around bold, colorful, hand-crafted drinks — poured by mixologists who treat every glass like a small performance."
          />

          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-cream-muted">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <Button href="#menu" variant="secondary">
              See Cocktail Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
