import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex flex-col gap-3 ${alignment}`}>
        {eyebrow && (
          <span className="font-script text-3xl text-gold sm:text-4xl">{eyebrow}</span>
        )}
        <h2 className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">{title}</h2>
        {description && (
          <p className="max-w-2xl text-base text-cream-muted sm:text-lg">{description}</p>
        )}
        <span aria-hidden className="mt-1 h-px w-16 bg-gold/60" />
      </div>
    </Reveal>
  );
}
