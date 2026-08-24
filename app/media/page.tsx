import type { Metadata } from "next";
import {
  CalendarCheck,
  Clapperboard,
  Flame,
  Play,
  Target,
  Youtube,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { channelVideos, youtubeChannel } from "@/lib/data/media";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/media",
    title: "Media & YouTube — Gym in Karachi",
    description:
      "Watch workout videos and gym motivation from Faisal Fitness Gym on YouTube — the official channel of the male & female gym in Aziz Nagar, Karachi. Subscribe today.",
  });
}

export default function MediaPage() {
  return (
    <>
      <PageHeader
        kicker="Media"
        title={
          <>
            Training, straight
            <br />
            <span className="text-volt-400">from the gym</span>
          </>
        }
        description="The official YouTube channel is where the floor comes to life — real workout videos, motivation, and energy from Faisal Fitness Gym in Karachi."
        image="/images/class-fitness.jpg"
      />

      {/* Channel hero */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl hairline bg-carbon-900/70">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-volt-400/[0.08] blur-[110px]"
              />
              <div className="grid items-center gap-10 p-8 md:p-14 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                    <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                    Official YouTube Channel
                  </p>
                  <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl">
                    {youtubeChannel.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">
                    {youtubeChannel.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href={youtubeChannel.url} external size="lg">
                      <Youtube className="size-5" aria-hidden />
                      Visit Channel
                    </Button>
                    <Button href={youtubeChannel.url} external variant="outline" size="lg">
                      <Play className="size-4" aria-hidden />
                      Subscribe
                    </Button>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mist/70">
                    {site.youtubeUrl}
                  </p>
                </div>

                <a
                  href={youtubeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-carbon-950/60"
                  aria-label="Open the Faisal Fitness Gym YouTube channel"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(205,245,58,0.1),transparent_65%)]"
                  />
                  <span className="relative grid size-28 place-items-center">
                    <span
                      aria-hidden
                      className="animate-pulse-ring absolute inset-0 rounded-full border border-volt-400/40"
                    />
                    <span
                      aria-hidden
                      className="grid size-22 place-items-center rounded-full bg-volt-400 text-carbon-950 shadow-[0_0_70px_-10px_rgba(205,245,58,0.65)] transition-transform duration-300 group-hover:scale-105"
                    >
                      <Play className="ml-1 size-9" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                  <span className="absolute bottom-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist transition-colors group-hover:text-volt-300">
                    Watch on YouTube
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video library */}
      <section className="border-y border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
        <div className="wrap">
          {channelVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {channelVideos.map((video) => (
                <Reveal key={video.id}>
                  <figure className="group overflow-hidden rounded-2xl hairline bg-carbon-950/50 transition-colors duration-500 hover:border-volt-400/40">
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                        title={video.title}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-3 p-5">
                      <span className="text-sm font-medium text-cream">{video.title}</span>
                      {video.duration && (
                        <span className="shrink-0 text-xs font-semibold text-mist">
                          {video.duration}
                        </span>
                      )}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-white/15 bg-carbon-950/50 px-8 py-20 text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-volt-400/10 text-volt-400">
                  <Clapperboard className="size-8" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-cream">
                  The video library is loading
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
                  New workout videos from the gym land here first. Follow the official channel so
                  you never miss a session — and check back for the growing library.
                </p>
                <div className="mt-8">
                  <Button href={youtubeChannel.url} external size="md">
                    <Youtube className="size-4" aria-hidden />
                    Follow on YouTube
                  </Button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Why follow */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                Why follow
                <span aria-hidden className="h-px w-8 bg-volt-400/60" />
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl">
                Motivation you can <span className="text-volt-400">do with</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: Flame,
                title: "Real gym energy",
                text: "Footage from the actual floor — not studio content shot for the algorithm.",
              },
              {
                icon: Target,
                title: "Workouts to follow",
                text: "Move along at home, then bring the same intensity back to the gym.",
              },
              {
                icon: CalendarCheck,
                title: "A reason to show up",
                text: "The channel keeps the community connected between sessions.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl hairline bg-carbon-900/50 p-7 text-center transition-colors duration-500 hover:border-volt-400/40">
                  <span className="mx-auto grid size-12 place-items-center rounded-xl bg-volt-400/10 text-volt-400">
                    <item.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-bold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Train with us in real life"
        text="The channel is the taste. The gym is the meal. Come to the floor in Aziz Nagar and feel the difference for yourself."
        primaryLabel="Start Your Fitness Journey"
        primaryHref="/membership"
        secondaryLabel="Call 03412257436"
        secondaryHref={site.phoneHref}
        image="/images/class-personal.jpg"
      />
    </>
  );
}
