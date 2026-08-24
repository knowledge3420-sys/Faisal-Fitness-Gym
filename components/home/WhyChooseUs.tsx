import {
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    icon: Users,
    title: "Built for everyone",
    text: "Male and female members train side by side with full access to the same equipment and the same professional environment.",
  },
  {
    icon: ShieldCheck,
    title: "A serious environment",
    text: "Organized floors, maintained equipment and an atmosphere designed for focus — not distractions.",
  },
  {
    icon: MapPin,
    title: "Right in Aziz Nagar",
    text: "On Main Nishan-e-Haider Road, opposite Kiran Mehal — easy to reach from across Islam Nagar and the rest of Karachi.",
  },
  {
    icon: Star,
    title: "A community you can verify",
    text: "A 4.9 / 5 rating from 101+ Google reviews and a YouTube channel showing real training from the floor.",
  },
  {
    icon: Phone,
    title: "Easy to start",
    text: `One call — ${site.phoneDisplay} — and you're in. A straightforward conversation, a tour of the floor, and a plan that fits you.`,
  },
];

/** Split "why choose us" section — sticky intro column + editorial list. */
export function WhyChooseUs() {
  return (
    <section className="border-y border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
              <span aria-hidden className="h-px w-8 bg-volt-400/60" />
              Why Faisal Fitness Gym
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              A gym that respects <span className="text-volt-400">your time</span> and your
              goals
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
              No empty promises, no pressure. Just a well-run training ground in Karachi where
              consistency is rewarded — for men and women alike.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/membership" size="md">
                Start Your Fitness Journey
              </Button>
              <Button href={site.phoneHref} variant="ghost" size="md">
                Call {site.phoneDisplay}
                <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="relative mt-10 hidden h-64 overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/about-2.jpg"
                alt="The training floor at Faisal Fitness Gym"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon-950/70 to-transparent" />
              <p className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/80">
                The floor · Aziz Nagar, Karachi
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.05}>
              <div className="group flex gap-5 border-t border-white/[0.07] py-7 transition-colors duration-300 first:border-t-0 hover:bg-white/[0.02] sm:gap-7 sm:px-4">
                <span className="font-display text-sm tracking-widest text-mist/50">
                  0{i + 1}
                </span>
                <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl bg-volt-400/10 text-volt-400 transition-all duration-300 group-hover:bg-volt-400 group-hover:text-carbon-950">
                  <reason.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-cream">{reason.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-mist">{reason.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
