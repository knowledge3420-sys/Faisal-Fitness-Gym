import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { Stars } from "@/components/Stars";

/** Verified-rating trust strip under the hero. */
export function TrustBand() {
  return (
    <section aria-label="Ratings and location" className="border-b border-white/[0.06] bg-carbon-900">
      <div className="wrap grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
        <Reveal className="flex items-center gap-6 px-2 py-9 md:py-11">
          <Counter
            to={site.googleReviews.value}
            decimals={1}
            className="font-display text-6xl leading-none text-volt-400"
          />
          <div>
            <Stars value={site.googleReviews.value} className="size-4" />
            <p className="mt-2 text-sm text-mist">
              Google rating ·{" "}
              <Link href="/reviews" className="text-cream underline-offset-4 hover:text-volt-300 hover:underline">
                read the reviews
              </Link>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex items-center gap-6 px-2 py-9 md:py-11">
          <Counter to={site.googleReviews.count} suffix="+" className="font-display text-6xl leading-none text-cream" />
          <p className="text-sm leading-relaxed text-mist">
            Member reviews on Google,
            <br className="hidden sm:block" /> earned one session at a time.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="flex items-center gap-6 px-2 py-9 md:py-11">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-volt-400/10 text-volt-400">
            <MapPin className="size-6" aria-hidden />
          </span>
          <div>
            <p className="font-display text-2xl uppercase tracking-wide text-cream">
              Aziz Nagar, Karachi
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-volt-300"
            >
              Main Nishan-e-Haider Road
              <Navigation className="size-3.5" aria-hidden />
              <span className="sr-only">Get directions</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
