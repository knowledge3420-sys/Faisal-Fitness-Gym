import { highlights } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

/** Eight training-pillar cards with staggered entrances. */
export function HomeHighlights() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-volt-400/[0.04] blur-[140px]"
      />
      <div className="wrap relative">
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Everything you need, <span className="text-volt-400">under one roof</span>
            </>
          }
          description="From your first dumbbell session to serious strength work — the floor at Faisal Fitness Gym is built for every goal, at every level."
        />
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-2xl hairline bg-carbon-900/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-volt-400/40 hover:bg-carbon-900">
                <span className="grid size-12 place-items-center rounded-xl bg-volt-400/10 text-volt-400 transition-all duration-500 group-hover:bg-volt-400 group-hover:text-carbon-950">
                  <item.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-cream">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
