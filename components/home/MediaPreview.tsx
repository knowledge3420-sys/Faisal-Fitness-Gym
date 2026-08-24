import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { channelVideos, youtubeChannel } from "@/lib/data/media";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

/** YouTube channel teaser — shows a live embed when videos are listed. */
export function MediaPreview() {
  const first = channelVideos[0];
  return (
    <section className="pb-20 md:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl hairline bg-carbon-900/60 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-volt-400">
                <span aria-hidden className="h-px w-8 bg-volt-400/60" />
                Official YouTube Channel
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream md:text-5xl">
                The training, on <span className="text-volt-400">YouTube</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
                Workout videos and gym motivation straight from the floor at {site.name} — follow
                along at home and bring the energy back to the gym.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={site.youtubeUrl} external size="md">
                  <Play className="size-4" aria-hidden />
                  Visit Channel
                </Button>
                <Button href="/media" variant="outline" size="md">
                  Explore Media
                  <ArrowUpRight className="size-4" aria-hidden />
                </Button>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mist/70">
                youtube.com/c/{site.youtubeHandle}
              </p>
            </div>

            <div className="relative min-h-[300px] border-t border-white/[0.06] lg:min-h-0 lg:border-l lg:border-t-0">
              {first ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${first.id}`}
                  title={first.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Link
                  href={site.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(205,245,58,0.08),transparent_65%)]"
                  aria-label="Open the Faisal Fitness Gym YouTube channel"
                >
                  <span className="relative grid size-24 place-items-center">
                    <span
                      aria-hidden
                      className="animate-pulse-ring absolute inset-0 rounded-full border border-volt-400/40"
                    />
                    <span
                      aria-hidden
                      className="grid size-20 place-items-center rounded-full bg-volt-400 text-carbon-950 shadow-[0_0_60px_-10px_rgba(205,245,58,0.6)] transition-transform duration-300 group-hover:scale-105"
                    >
                      <Play className="ml-1 size-8" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                  <span className="absolute bottom-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist transition-colors group-hover:text-volt-300">
                    Watch on YouTube
                  </span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
