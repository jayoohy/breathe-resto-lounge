"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages, type GalleryImage } from "@/lib/data/images";

const filters: Array<GalleryImage["category"] | "All"> = ["All", "Food", "Cocktails", "Ambiance", "Events"];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From the 'Gram"
          title="Gallery"
          description="A look at the food, drinks, and nights that make Breathe what it is."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`min-h-11 rounded-full border px-5 text-sm font-medium tracking-wide transition-colors ${
                filter === f
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-cream-muted hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {visible.map((image, i) => (
            <Reveal key={image.src} delay={Math.min(i, 6) * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={i % 3 === 0 ? 750 : 600}
                  sizes="(min-width: 640px) 30vw, 45vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-3 text-xs font-medium tracking-wide text-gold">{image.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream-muted">
          See more on Instagram{" "}
          <a
            href="https://www.instagram.com/breathe.resto.lounge"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            @breathe.resto.lounge
          </a>
        </p>
      </div>
    </section>
  );
}
