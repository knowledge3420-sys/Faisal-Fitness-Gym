import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  image: string;
};

/** Cinematic header band shared by all interior pages. */
export function PageHeader({ kicker, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/80 via-carbon-950/85 to-carbon-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(205,245,58,0.08),transparent_55%)]" />
      </div>

      <div className="wrap relative">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
            <span aria-hidden className="h-px w-8 bg-volt-400/60" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
