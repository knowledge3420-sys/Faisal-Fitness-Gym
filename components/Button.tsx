import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLElement>;
  ariaLabel?: string;
  disabled?: boolean;
};

const base =
  "group/btn inline-flex cursor-pointer select-none items-center justify-center gap-2.5 font-semibold uppercase tracking-[0.14em] transition-all duration-300 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-volt-400 text-carbon-950 hover:-translate-y-0.5 hover:bg-volt-300 hover:shadow-[0_10px_40px_-10px_rgba(205,245,58,0.55)] active:translate-y-0",
  outline:
    "border border-white/20 text-cream hover:-translate-y-0.5 hover:border-volt-400/70 hover:bg-white/[0.04] hover:text-volt-300 active:translate-y-0",
  ghost: "text-cream/80 hover:text-volt-300",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "rounded-full px-5 py-2.5 text-[11px]",
  md: "rounded-full px-7 py-3.5 text-xs",
  lg: "rounded-full px-9 py-4 text-[13px]",
};

/**
 * Premium CTA button. Renders a Next.js <Link>, an external <a> or a
 * native <button> depending on props — one component for every CTA on the site.
 */
export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  );
}
