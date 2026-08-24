import type { Metadata } from "next";
import Image from "next/image";
import {
  Dumbbell,
  HeartHandshake,
  MapPin,
  Navigation,
  Repeat,
  Target,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/about",
    title: "About Us — Male & Female Gym in Aziz Nagar, Karachi",
    description:
      "Get to know Faisal Fitness Gym — a male and female fitness center on Main Nishan-e-Haider Road, Islam Nagar, Aziz Nagar, Karachi. Our mission, environment and location.",
  });
}

const pillars = [
  {
    icon: Target,
    title: "Purpose in every rep",
    text: "Training with a plan beats training with a scroll. Every session here is built to move you toward something.",
  },
  {
    icon: Repeat,
    title: "Consistency over intensity",
    text: "Showing up is the real workout. We build habits that survive busy schedules and tough weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for every member",
    text: "Men and women train in the same professional environment — with the same equipment, standards and courtesy.",
  },
  {
    icon: Users,
    title: "A floor that lifts you",
    text: "There's energy in a room where everyone's working toward something. That's the everyday atmosphere here.",
  },
];

const whoFor = [
  {
    title: "New to the gym",
    text: "Never lifted before? Start here. You'll be shown the ropes, pointed at the right place to start, and never made to feel out of place.",
  },
  {
    title: "Consistent lifters",
    text: "Already training elsewhere? You'll find a well-kept free-weight zone, a proper cardio deck and a floor that respects hard work.",
  },
  {
    title: "Anyone who wants more energy",
    text: "Tired of low energy and slow mornings? Structured conditioning is the cheapest, most honest upgrade available.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About the gym"
        title={
          <>
            More than a gym.
            <br />
            <span className="text-volt-400">A training ground.</span>
          </>
        }
        description="Faisal Fitness Gym sits on Main Nishan-e-Haider Road in Islam Nagar, Aziz Nagar — a dedicated space in Karachi for men and women who want to get stronger, with no shortcuts and no gimmicks."
        image="/images/about-1.jpg"
      />

      {/* Story */}
      <section className="pb-20 md:pb-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative h-[380px] overflow-hidden rounded-3xl md:h-[460px]">
              <Image
                src="/images/about-1.jpg"
                alt="A coaching session on the floor at Faisal Fitness Gym"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon-950/50 to-transparent" />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 p-5">
                <p className="font-display text-2xl uppercase tracking-wide text-cream">
                  Our mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Make serious, quality fitness accessible and welcoming to everyone in Aziz
                  Nagar and beyond — whether it's your first lift or your fiftieth.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                Who we are
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl">
                A straightforward promise: <span className="text-volt-400">train better, stay longer</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
                Faisal Fitness Gym exists for one simple reason — to give the people of Islam
                Nagar and Aziz Nagar a place where fitness is taken seriously, and where being
                new, being a woman, or being far from your goals is never a reason to feel out of
                place.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-base leading-relaxed text-mist">
                No dark corners, no neglected equipment, no noise without purpose. Just a
                well-organized floor, a professional atmosphere, and a team that prefers results
                over small talk.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band — real numbers only */}
      <section className="border-y border-white/[0.06] bg-carbon-900">
        <div className="wrap grid grid-cols-2 divide-x divide-white/[0.06] lg:grid-cols-4">
          <div className="px-4 py-10 text-center md:py-12">
            <Counter to={site.googleReviews.value} decimals={1} className="font-display text-5xl text-volt-400" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Google rating
            </p>
          </div>
          <div className="px-4 py-10 text-center md:py-12">
            <Counter to={site.googleReviews.count} suffix="+" className="font-display text-5xl text-cream" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Member reviews
            </p>
          </div>
          <div className="px-4 py-10 text-center md:py-12">
            <span className="font-display text-5xl text-cream">M&nbsp;&amp;&nbsp;F</span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Members welcome
            </p>
          </div>
          <div className="px-4 py-10 text-center md:py-12">
            <span className="font-display text-5xl text-cream">Karachi</span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
              Aziz Nagar, Islam Nagar
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            align="center"
            kicker="What we stand for"
            title={
              <>
                The values on the <span className="text-volt-400">floor</span>
              </>
            }
            description="Four principles shape everything — from how the space is run to how a first-time visitor is welcomed."
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <article className="group h-full rounded-2xl hairline bg-carbon-900/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-volt-400/40">
                  <span className="grid size-12 place-items-center rounded-xl bg-volt-400/10 text-volt-400 transition-all duration-500 group-hover:bg-volt-400 group-hover:text-carbon-950">
                    <pillar.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-cream">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{pillar.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            kicker="Who it's for"
            title={
              <>
                Whatever stage you're at, <span className="text-volt-400">there's room here</span>
              </>
            }
          />
          <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {whoFor.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-white/[0.08] bg-carbon-950/50 p-8 transition-colors duration-500 hover:border-volt-400/40">
                  <span aria-hidden className="block h-1 w-10 rounded-full bg-volt-400" />
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                Find us
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl">
                Right where the <span className="text-volt-400">neighborhood trains</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                We're on the main road, impossible to miss — and a short ride away for most of
                the surrounding area. Come in, look around, and see the floor for yourself.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <address className="mt-7 flex items-start gap-4 not-italic">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-volt-400/10 text-volt-400">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span className="text-base leading-relaxed text-cream">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.cityLine}
                </span>
              </address>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={site.mapsUrl} external size="md">
                  <Navigation className="size-4" aria-hidden />
                  Get Directions
                </Button>
                <Button href={site.phoneHref} variant="outline" size="md">
                  Call {site.phoneDisplay}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative h-[360px] overflow-hidden rounded-3xl md:h-[440px]">
              <Image
                src="/images/gallery-5.jpg"
                alt="Members training across the gym floor"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon-950/60 to-transparent" />
              <div className="glass absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-4">
                <Dumbbell className="size-5 text-volt-400" aria-hidden />
                <span className="text-sm font-semibold text-cream">
                  {site.name} · {site.locationLine}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Come see the floor for yourself"
        text="The easiest way to decide is to walk through the door. Call ahead, or just show up — we're on Main Nishan-e-Haider Road."
        primaryLabel="Plan Your First Visit"
        primaryHref="/contact"
        secondaryLabel="Explore Membership"
        secondaryHref="/membership"
        image="/images/about-2.jpg"
      />
    </>
  );
}
