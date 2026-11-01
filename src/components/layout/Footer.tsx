import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/data/site";
import { disclaimer } from "@/lib/data/disclaimer";

const exploreLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "The Bar" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Reservations" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-muted">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Breathe Restaurant & Lounge on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={site.threads}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Breathe Restaurant & Lounge on Threads"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3c4 0 7 2.5 7 7.2 0 4.6-2.6 7.8-7 7.8s-7.2-3-7.2-6.6c0-2.7 1.7-4.4 4.3-4.4 2.3 0 3.7 1.3 3.9 3.2.1 1.4-.6 2.6-2.2 2.6-1 0-1.6-.5-1.7-1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Explore</h3>
          <ul className="mt-4 space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream-muted transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream-muted">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>{site.address.line1}</li>
            <li>{site.address.line2}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Stay in the loop</h3>
          <p className="mt-4 text-sm text-cream-muted">
            Monthly specials, holiday drops, and Ladies Monday reminders — straight to your inbox.
          </p>
          <form
            className="mt-4 flex gap-2"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="min-h-11 w-full min-w-0 rounded-full border border-border bg-ink px-4 text-sm text-cream placeholder:text-cream-muted/60 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-11 shrink-0 rounded-full bg-gold px-5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-cream-muted/70 sm:px-8">
        <p>
          {disclaimer.label} {disclaimer.message}
        </p>
      </div>
    </footer>
  );
}
