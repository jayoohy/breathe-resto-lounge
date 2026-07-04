import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "bg-gradient-to-r from-gold-light via-gold to-gold-deep text-ink shadow-[0_0_0_1px_rgba(205,165,83,0.4)] hover:shadow-[0_0_24px_rgba(205,165,83,0.35)] hover:brightness-110 active:scale-95",
  secondary:
    "border border-gold/50 text-cream hover:border-gold hover:bg-gold/10 active:scale-95",
};

export function Button({ href, variant = "primary", className = "", children, ...rest }: ButtonAsLink | ButtonAsButton) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const { onClick } = rest as { onClick?: () => void };
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
