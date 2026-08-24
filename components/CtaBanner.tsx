import Image from "next/image";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

type CtaBannerProps = {
  title?: string;
  text?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  image?: string;
};

/** Full-bleed conversion band used at the end of pages. */
export function CtaBanner({
  title = "Ready to get stronger?",
  text = "Your first step is one call or one visit away. The floor is set, the weights are ready, and the team is waiting.",
  primaryLabel = "Start Your Fitness Journey",
  primaryHref = "/membership",
  secondaryLabel,
  secondaryHref,
  secondaryExternal,
  image = "/images/class-fitness.jpg",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-carbon-950/80 to-carbon-950" />
        <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt-400/[0.06] blur-[110px]" />
      </div>

      <div className="wrap relative py-24 text-center md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl">
            {title.split(" ").map((word, i, arr) =>
              word.toLowerCase() === "stronger" || word.toLowerCase() === "journey" ? (
                <span key={word + i} className="text-volt-400">
                  {word}{" "}
                </span>
              ) : (
                <span key={word + i}>
                  {word}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              )
            )}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline" size="lg" external={secondaryExternal}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
