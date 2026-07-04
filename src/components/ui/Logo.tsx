// Placeholder recreation of the brand crest (gold circular "B" monogram + wordmark).
// TODO(client): swap for the official logo file/SVG export once provided.
type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
        role="img"
        aria-label="Breathe Restaurant & Lounge crest"
      >
        <circle cx="32" cy="32" r="30" fill="var(--color-ink)" stroke="url(#goldRing)" strokeWidth="2" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="var(--color-gold-deep)" strokeWidth="1" />
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="28"
          fill="url(#goldRing)"
        >
          B
        </text>
        <defs>
          <linearGradient id="goldRing" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-gold-light)" />
            <stop offset="50%" stopColor="var(--color-gold)" />
            <stop offset="100%" stopColor="var(--color-gold-deep)" />
          </linearGradient>
        </defs>
      </svg>
      {variant === "full" && (
        <div className="leading-none">
          <div className="font-display text-xl tracking-[0.18em] text-gradient-gold sm:text-2xl">
            BREATHE
          </div>
          <div className="mt-1 text-[0.6rem] tracking-[0.35em] text-cream-muted sm:text-xs">
            RESTAURANT · LOUNGE
          </div>
        </div>
      )}
    </div>
  );
}
