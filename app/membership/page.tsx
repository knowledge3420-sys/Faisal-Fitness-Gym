import type { Metadata } from "next";
import { BadgeCheck, Dumbbell, MapPin, Phone, UserCheck } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { PlanCard } from "@/components/PlanCard";
import { plans } from "@/lib/data/plans";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/membership",
    title: "Membership Plans — Gym in Karachi",
    description:
      "Flexible, Fitness and Training memberships at Faisal Fitness Gym, Aziz Nagar Karachi — for male and female members. Contact the gym for current pricing. Call 03412257436.",
  });
}

const steps = [
  {
    icon: Phone,
    title: "Call or visit",
    text: `Ring ${site.phoneDisplay} or walk in. Ask about plans, and take a look around the floor at no pressure.`,
  },
  {
    icon: BadgeCheck,
    title: "Pick your plan",
    text: "Choose the level of structure that fits your goals — or let the team suggest what fits your schedule.",
  },
  {
    icon: Dumbbell,
    title: "Start training",
    text: "Sign up, get shown the floor, and begin. Your progress from day one is the point.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        kicker="Membership"
        title={
          <>
            Simple plans.
            <br />
            <span className="text-volt-400">Serious standards.</span>
          </>
        }
        description="Every plan is built around one idea — you show up, and we make sure it counts. Final plan details and pricing are shared directly at the gym, so you always get the current, honest number."
        image="/images/class-weights.jpg"
      />

      {/* Plans */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <Reveal>
            <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-volt-400/30 bg-volt-400/[0.07] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-volt-300">
                <BadgeCheck className="size-4" aria-hidden />
                Pricing shared directly at the gym
              </span>
              <p className="text-sm leading-relaxed text-mist">
                We keep membership details personal — final pricing is shared with you in person
                or over the phone, tailored to your chosen plan.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
            {plans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-sm text-mist">
              All memberships welcome <span className="font-semibold text-cream">male and female members</span>{" "}
              with full access to the same professional environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How to join */}
      <section className="border-y border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            align="center"
            kicker="How to join"
            title={
              <>
                Three steps. <span className="text-volt-400">That's it.</span>
              </>
            }
            description="No paperwork marathons, no complicated process. Getting started is deliberately easy."
          />
          <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <article className="relative h-full overflow-hidden rounded-2xl hairline bg-carbon-950/50 p-8">
                  <span
                    aria-hidden
                    className="absolute -right-3 -top-5 font-display text-8xl text-white/[0.05]"
                  >
                    0{i + 1}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-xl bg-volt-400/10 text-volt-400">
                    <step.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 font-display text-2xl uppercase tracking-wide text-cream">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button href={site.phoneHref} size="lg">
                <Phone className="size-4" aria-hidden />
                Call {site.phoneDisplay}
              </Button>
              <Button href={site.mapsUrl} external variant="outline" size="lg">
                <MapPin className="size-4" aria-hidden />
                Visit Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Personal training callout */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl hairline bg-carbon-900/60 lg:grid-cols-[1.2fr_1fr]">
              <div className="p-8 md:p-12">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                  <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                  Want more structure?
                </p>
                <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream">
                  Ask about <span className="text-volt-400">personal training</span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
                  If you'd rather have a coach in your corner — form guidance, a program built
                  around your goals, and someone checking in on your progress — ask the team
                  about 1-on-1 training when you call or visit.
                </p>
                <div className="mt-8">
                  <Button href={site.phoneHref} size="md">
                    <UserCheck className="size-4" aria-hidden />
                    Ask the Team
                  </Button>
                </div>
              </div>
              <div aria-hidden className="relative min-h-[280px] lg:min-h-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(205,245,58,0.12),transparent_60%)]" />
                <Dumbbell className="absolute bottom-10 right-10 size-40 text-volt-400/15" aria-hidden />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Your membership is one call away"
        text={`Call ${site.phoneDisplay} or visit us on Main Nishan-e-Haider Road — the team will walk you through every plan.`}
        primaryLabel="Start Your Fitness Journey"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={site.phoneHref}
        image="/images/hero.jpg"
      />
    </>
  );
}
