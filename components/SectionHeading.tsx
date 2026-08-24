import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <Reveal>
        <p
          className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="h-px w-8 bg-volt-400/60" />
          {kicker}
          {centered && <span aria-hidden className="h-px w-8 bg-volt-400/60" />}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
