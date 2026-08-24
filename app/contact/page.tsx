import type { Metadata } from "next";
import {
  Clock,
  MapPin,
  Navigation,
  Phone,
  Play,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/contact",
    title: "Contact Us — Aziz Nagar, Karachi",
    description:
      `Contact Faisal Fitness Gym in Aziz Nagar, Karachi. Call ${site.phoneDisplay} or find us on Main Nishan-e-Haider Road, Islam Nagar Block G. Male & female gym — visit today.`,
  });
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title={
          <>
            Come say hello.
            <br />
            <span className="text-volt-400">Or call first.</span>
          </>
        }
        description={`Questions about plans, timings or your first visit? Call ${site.phoneDisplay}, send a message, or just walk in — we're on the main road in Islam Nagar, Aziz Nagar.`}
        image="/images/about-2.jpg"
      />

      <section className="pb-20 md:pb-28">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <a
                href={site.phoneHref}
                className="group block rounded-3xl hairline bg-carbon-900/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-volt-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-13 place-items-center rounded-2xl bg-volt-400/10 text-volt-400 transition-colors duration-500 group-hover:bg-volt-400 group-hover:text-carbon-950">
                    <Phone className="size-6" aria-hidden />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mist transition-colors group-hover:text-volt-300">
                    Tap to call
                  </span>
                </div>
                <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                  Call now
                </h2>
                <p className="mt-2 font-display text-4xl tracking-wide text-cream">
                  {site.phoneDisplay}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Fastest way to get answers about plans, pricing and your first visit.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl hairline bg-carbon-900/70 p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-volt-400/10 text-volt-400">
                    <MapPin className="size-6" aria-hidden />
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                    Visit the gym
                  </h2>
                </div>
                <address className="mt-5 text-lg leading-relaxed text-cream not-italic">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.cityLine}
                </address>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={site.mapsUrl} external size="sm">
                    <Navigation className="size-3.5" aria-hidden />
                    Get Directions
                  </Button>
                  <Button href={site.mapsEmbedUrl} external variant="outline" size="sm">
                    View Map
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={site.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl hairline bg-carbon-900/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-volt-400/50"
              >
                <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-volt-400/10 text-volt-400 transition-colors duration-500 group-hover:bg-volt-400 group-hover:text-carbon-950">
                  <Play className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                    Follow on YouTube
                  </span>
                  <span className="mt-1 block text-base font-semibold text-cream transition-colors group-hover:text-volt-300">
                    youtube.com/c/{site.youtubeHandle}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex items-start gap-4 rounded-3xl border border-dashed border-white/15 bg-carbon-900/40 p-7">
                <Sparkles className="mt-1 size-5 shrink-0 text-volt-400" aria-hidden />
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream">
                    First visit?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    Come as you are — comfortable shoes and a water bottle are all you need. The
                    team will walk you around the floor and show you where to start.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28" aria-label="Map location">
        <div className="wrap">
          <Reveal>
            <div className="overflow-hidden rounded-3xl hairline">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] bg-carbon-900/70 px-6 py-4">
                <p className="flex items-center gap-3 text-sm font-semibold text-cream">
                  <MapPin className="size-4 text-volt-400" aria-hidden />
                  {site.address.line1}, {site.address.line2}, Karachi
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-volt-400 transition-colors hover:text-volt-300"
                >
                  Open in Google Maps
                  <Navigation className="size-3.5" aria-hidden />
                </a>
              </div>
              <iframe
                src={site.mapsEmbedUrl}
                title="Map — Faisal Fitness Gym, Main Nishan-e-Haider Road, Islam Nagar, Aziz Nagar, Karachi"
                className="h-[420px] w-full border-0 grayscale-[0.3] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="border-t border-white/[0.06] bg-carbon-900/40 py-14">
        <div className="wrap flex flex-col items-center gap-6 text-center">
          <p className="flex items-center gap-3 text-sm text-mist">
            <Clock className="size-4 text-volt-400" aria-hidden />
            Not sure when to come in? Call ahead — we&rsquo;ll point you to the best time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={site.phoneHref} size="lg">
              <Phone className="size-4" aria-hidden />
              Call Now — {site.phoneDisplay}
            </Button>
            <Button href="/membership" variant="outline" size="lg">
              Explore Membership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
