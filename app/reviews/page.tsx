import type { Metadata } from "next";
import {
  BadgeCheck,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stars } from "@/components/Stars";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/reviews",
    title: "Reviews — Rated 4.9/5 by 101+ Members in Karachi",
    description:
      "Faisal Fitness Gym in Aziz Nagar, Karachi is rated 4.9/5 from 101 Google reviews by male and female members. See why members rate us so highly — and join them.",
  });
}

const trustCards = [
  {
    icon: BadgeCheck,
    title: "Verified on Google",
    text: `A ${site.googleReviews.label} average across ${site.googleReviews.count} reviews — earned one honest session at a time, by members of the gym.`,
  },
  {
    icon: Users,
    title: "Open to everyone",
    text: "Male and female members train side by side in a professional environment. The rating reflects a floor that works for both.",
  },
  {
    icon: MapPin,
    title: "Local and real",
    text: "On Main Nishan-e-Haider Road, Aziz Nagar. Ask anyone in the neighborhood — they've seen the members show up, week after week.",
  },
];

const expectations = [
  {
    title: "A professional environment",
    text: "Organized space, maintained equipment and a serious training atmosphere.",
  },
  {
    title: "Male & female members",
    text: "Full access for everyone — the same standard, the same respect.",
  },
  {
    title: "An honest approach",
    text: "Straight answers about plans, progress and what's realistic — no pressure.",
  },
  {
    title: "Easy to find",
    text: "On the main road in Islam Nagar, Aziz Nagar, with clear signage.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        kicker="Reviews"
        title={
          <>
            Rated by the people
            <br />
            <span className="text-volt-400">who train here</span>
          </>
        }
        description={`No stock quotes, no invented stories — just the verified rating members have left on Google: ${site.googleReviews.label}, across ${site.googleReviews.count} reviews.`}
        image="/images/class-weights.jpg"
      />

      {/* Big rating panel */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl hairline bg-carbon-900/70">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-volt-400/[0.07] blur-[100px]"
              />
              <div className="grid items-center gap-10 p-8 md:grid-cols-[auto_1fr] md:p-14">
                <div className="text-center md:text-left">
                  <div className="flex items-end justify-center gap-2 md:justify-start">
                    <Counter
                      to={site.googleReviews.value}
                      decimals={1}
                      className="font-display text-[6.5rem] leading-none text-volt-400 md:text-[8.5rem]"
                    />
                    <span className="pb-3 font-display text-3xl text-mist">/ 5</span>
                  </div>
                  <Stars value={site.googleReviews.value} className="size-8" />
                  <p className="mt-3 text-sm font-medium text-mist">
                    Based on {site.googleReviews.count} Google reviews
                  </p>
                </div>
                <div className="md:pl-10 md:border-l md:border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-volt-400/10 text-volt-400">
                      <BadgeCheck className="size-5" aria-hidden />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream">
                      Google Business Rating
                    </p>
                  </div>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
                    This is a real, public rating from members of the gym — not a marketing
                    number. It&rsquo;s the best summary of what the floor feels like: a place
                    people rate with their feet, coming back session after session.
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-volt-400 transition-colors hover:text-volt-300"
                  >
                    Read the reviews on Google
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trust cards */}
          <Stagger className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {trustCards.map((card) => (
              <StaggerItem key={card.title}>
                <article className="h-full rounded-2xl hairline bg-carbon-900/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-volt-400/40">
                  <span className="grid size-12 place-items-center rounded-xl bg-volt-400/10 text-volt-400">
                    <card.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-cream">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{card.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            align="center"
            kicker="What to expect"
            title={
              <>
                The same things that earn <span className="text-volt-400">the rating</span>
              </>
            }
            description="These aren&rsquo; promises printed on a wall — they&rsquo;re the reasons members give five stars. Come and check for yourself."
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-carbon-950/50 p-7">
                  <span className="grid size-10 place-items-center rounded-full bg-volt-400/15 text-volt-400">
                    <Sparkles className="size-4" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-bold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <figure className="mx-auto mt-14 max-w-2xl text-center">
              <Quote className="mx-auto size-8 text-volt-400/50" aria-hidden />
              <blockquote className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-cream">
                &ldquo;The rating is public. The floor is proof. Come see it.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-mist">
                {site.name} · {site.locationLine}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Join the members behind the rating"
        text={`Your first session is the easiest five-star review we could ever get — start it by calling ${site.phoneDisplay}.`}
        primaryLabel="Call Now"
        primaryHref={site.phoneHref}
        secondaryLabel="Explore Membership"
        secondaryHref="/membership"
        image="/images/class-cardio.jpg"
      />
    </>
  );
}
