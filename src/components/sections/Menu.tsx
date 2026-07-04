"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menu } from "@/lib/data/menu";

export function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Diverse & Delectable"
          title="The Menu"
          description="A sample of what's on offer — full menu, prices, and seasonal specials available in house."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {menu.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              aria-pressed={activeId === category.id}
              className={`min-h-11 rounded-full border px-5 text-sm font-medium tracking-wide transition-colors ${
                activeId === category.id
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-cream-muted hover:border-gold/50 hover:text-gold"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <Reveal key={active.id} className="mt-12">
          <p className="text-center font-script text-2xl text-gold sm:text-3xl">{active.subtitle}</p>
          <ul className="mt-8 divide-y divide-border">
            {active.items.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 sm:hidden">
                    <h3 className="font-display text-lg text-cream">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-border" aria-hidden />
                    <span className="font-display text-lg text-gold">{item.price}</span>
                  </div>
                  <h3 className="hidden font-display text-lg text-cream sm:block">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-muted">{item.description}</p>
                </div>
                <span className="hidden shrink-0 font-display text-lg text-gold sm:block">{item.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
