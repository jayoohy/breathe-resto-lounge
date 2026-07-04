"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "The Bar" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* backdrop-blur must stay off the fixed <header> itself — a filter on a fixed
          ancestor becomes the containing block for fixed descendants, which broke the
          full-screen mobile nav below. Applying it to this inner bar instead avoids that. */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-colors duration-300 ${
            scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-border" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
            <a href="#top" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md">
              <Logo />
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-cream-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#reservations">Reserve a Table</Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto border-t border-border bg-ink px-5 pb-6 pt-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-cream-muted transition-colors hover:bg-surface hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Button href="#reservations" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Reserve a Table
          </Button>
        </nav>
      )}
    </>
  );
}
