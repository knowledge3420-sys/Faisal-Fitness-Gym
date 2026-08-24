import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Phone, Users } from "lucide-react";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { gymClasses } from "@/lib/data/classes";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/classes",
    title: "Classes & Training — Strength, Cardio, Personal Training in Karachi",
    description:
      "Training areas at Faisal Fitness Gym, Aziz Nagar Karachi: strength, cardio, functional, weight training, fitness workouts and personal training. Contact us for current class timings.",
  });
}

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        kicker="Classes & training"
        title={
          <>
            Six ways to train.
            <br />
            <span className="text-volt-400">One standard.</span>
          </>
        }
        description="Every area on the floor has a purpose — and every one of them is open to male and female members, at every level. Come find the style that fits you."
        image="/images/class-strength.jpg"
      />

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gymClasses.map((gymClass) => (
              <StaggerItem key={gymClass.slug}>
                <article className="group relative h-[420px] overflow-hidden rounded-3xl">
                  <Image
                    src={gymClass.image}
                    alt={`${gymClass.name} at Faisal Fitness Gym`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/45 to-carbon-950/10"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 border border-white/[0.08] rounded-3xl transition-colors duration-500 group-hover:border-volt-400/40"
                  />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-carbon-950/60 px-3.5 py-1.5 backdrop-blur-sm">
                    <gymClass.icon className="size-3.5 text-volt-400" aria-hidden />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/85">
                      {gymClass.tagline}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h2 className="font-display text-3xl uppercase tracking-wide text-cream">
                      {gymClass.name}
                    </h2>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/75 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                      {gymClass.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {gymClass.levels.map((level) => (
                        <span
                          key={level}
                          className="rounded-full bg-volt-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-volt-300"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Timings note */}
          <div className="mt-14">
            <StaggerItem>
              <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-volt-400/30 bg-volt-400/[0.04] p-8 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-5">
                  <span className="hidden size-14 shrink-0 place-items-center rounded-2xl bg-volt-400/15 text-volt-400 sm:grid">
                    <Phone className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-wide text-cream">
                      Class timings? Call us.
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist">
                      Schedules change with seasons and demand — so we only publish them when
                      they're current. One call gets you the exact, up-to-date timings.
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap justify-center gap-3">
                  <Button href={site.phoneHref} size="md">
                    Contact Us for Timings
                  </Button>
                  <Button href="/contact" variant="outline" size="md">
                    Send a Message
                  </Button>
                </div>
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Small note band */}
      <section className="border-y border-white/[0.06] bg-carbon-900/40 py-16">
        <div className="wrap">
          <SectionHeading
            align="center"
            kicker="Good to know"
            title={
              <>
                First time here? <span className="text-volt-400">Bring nothing but intent.</span>
              </>
            }
            description="Come as you are — comfortable shoes and a water bottle are enough. The team will walk you through the floor, show you where to start, and match you with the right training area for your goals."
          />
          <Stagger className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "Every level welcome", text: "Beginner to advanced — programs scale to you." },
              { title: "Male & female members", text: "The same floor, the same standard, for everyone." },
              { title: "No empty sessions", text: "Structured areas mean every visit has a purpose." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl hairline bg-carbon-950/50 p-6 text-center">
                  <Users className="mx-auto size-5 text-volt-400" aria-hidden />
                  <h3 className="mt-3 text-sm font-bold text-cream">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-mist">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="See the classes in person"
        text="The best explanation is a visit. Walk the floor, see the equipment, feel the atmosphere — then decide."
        primaryLabel="Get Directions"
        primaryHref={site.mapsUrl}
        secondaryLabel="Call 03412257436"
        secondaryHref={site.phoneHref}
        image="/images/class-functional.jpg"
      />
    </>
  );
}
