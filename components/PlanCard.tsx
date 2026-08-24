import { Check, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Plan } from "@/lib/data/plans";
import { Button } from "./Button";
import { StaggerItem } from "./Reveal";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <StaggerItem className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
          plan.featured
            ? "border border-volt-400/50 bg-gradient-to-b from-volt-400/[0.07] to-carbon-900 glow-volt lg:scale-[1.03]"
            : "hairline bg-carbon-900/70 hover:border-white/20"
        }`}
      >
        {plan.featured && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-volt-400 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-carbon-950">
            Featured
          </span>
        )}

        <h3 className="font-display text-3xl uppercase tracking-wide text-cream">{plan.name}</h3>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-volt-400">
          {plan.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-mist">{plan.description}</p>

        {/* Pricing placeholder — swap for real pricing in lib/data/plans.ts */}
        <div className="mt-7 rounded-2xl border border-dashed border-white/20 bg-carbon-950/60 px-6 py-5 text-center">
          <p className="font-display text-2xl uppercase tracking-wide text-volt-300">
            Contact Gym for Pricing
          </p>
          <p className="mt-1.5 text-xs text-mist">Final pricing shared directly at the gym</p>
        </div>

        <ul className="mt-7 space-y-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-cream/85">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-volt-400/15 text-volt-400">
                <Check className="size-3" aria-hidden />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 pt-2">
          <Button href={site.phoneHref} size="md" className="w-full">
            <Phone className="size-4" aria-hidden />
            Call {site.phoneDisplay}
          </Button>
          <Button href={site.mapsUrl} external variant="outline" size="md" className="w-full">
            <MapPin className="size-4" aria-hidden />
            Visit the Gym
          </Button>
        </div>
      </article>
    </StaggerItem>
  );
}
