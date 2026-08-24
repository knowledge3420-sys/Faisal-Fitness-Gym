import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Check,
  GraduationCap,
  Phone,
  Youtube,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { isPlaceholderProfile, trainers, type Trainer } from "@/lib/data/trainers";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/trainers",
    title: "Our Trainers — Gym in Karachi",
    description:
      "Meet the training team at Faisal Fitness Gym in Aziz Nagar, Karachi — professional fitness trainers for male and female members. Call 03412257436 to meet them in person.",
  });
}

function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl hairline bg-carbon-900/70 transition-all duration-500 hover:-translate-y-1.5 hover:border-volt-400/40">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={trainer.image}
          alt={`${trainer.role} — placeholder profile image`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
          className="object-cover grayscale-[0.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/20 to-transparent" />
        {isPlaceholderProfile && (
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-carbon-950/70 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
            Profile coming soon
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-volt-300">
            {trainer.role}
          </p>
          <h3 className="mt-1.5 font-display text-3xl uppercase tracking-wide text-cream">
            {trainer.name}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <dl className="space-y-3">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-volt-400" aria-hidden />
            <div className="flex-1">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
                Specialization
              </dt>
              <dd className="mt-0.5 text-sm text-cream/85">{trainer.specialization}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="mt-0.5 size-4 shrink-0 text-volt-400" aria-hidden />
            <div className="flex-1">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
                Experience
              </dt>
              <dd className="mt-0.5 text-sm text-cream/85">{trainer.experience}</dd>
            </div>
          </div>
        </dl>
        <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm italic leading-relaxed text-mist">
          “{trainer.bio}”
        </p>
        <div className="mt-5 flex items-center gap-2.5">
          {trainer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.type === "youtube" ? "_blank" : undefined}
              rel={social.type === "youtube" ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              title={social.label}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-volt-400/60 hover:text-volt-300"
            >
              {social.type === "youtube" ? (
                <Youtube className="size-4" aria-hidden />
              ) : (
                <Phone className="size-4" aria-hidden />
              )}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        kicker="The team"
        title={
          <>
            Real coaching.
            <br />
            <span className="text-volt-400">Real accountability.</span>
          </>
        }
        description="The training team at Faisal Fitness Gym is here to make sure every session is safe, purposeful and effective. Team profiles are being finalized — the cards below show each role, ready for the real names and stories."
        image="/images/trainer-1.jpg"
      />

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          {isPlaceholderProfile && (
            <Reveal>
              <p className="mx-auto mb-10 max-w-2xl rounded-2xl border border-dashed border-white/15 bg-carbon-900/50 px-6 py-4 text-center text-sm leading-relaxed text-mist">
                <span className="font-semibold text-cream">Heads up:</span> trainer profiles are
                being finalized. Every card below is a placeholder — the moment the team&rsquo;s
                details go live, they&rsquo;ll appear right here.
              </p>
            </Reveal>
          )}
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer) => (
              <StaggerItem key={trainer.image} className="h-full">
                <TrainerCard trainer={trainer} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What every session includes */}
      <section className="border-y border-white/[0.06] bg-carbon-900/40 py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            kicker="Every session"
            title={
              <>
                What you get, <span className="text-volt-400">every single time</span>
              </>
            }
            description="Whatever your level, these are the standards you can count on on the floor."
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Warm-up guidance", text: "Start right — so your body works instead of works against you." },
              { title: "Form & technique cues", text: "Proper mechanics first. Heavier weights follow good movement." },
              { title: "A respectful floor", text: "Equipment shared, space respected, and no egos above your progress." },
              { title: "Male & female friendly", text: "The same coaching standard for every member, every session." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl hairline bg-carbon-950/50 p-7 transition-colors duration-500 hover:border-volt-400/40">
                  <span className="grid size-10 place-items-center rounded-full bg-volt-400/15 text-volt-400">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-bold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 text-sm text-mist">
                <BadgeCheck className="size-4 text-volt-400" aria-hidden />
                Want to meet the team in person?
              </span>
              <Button href={site.phoneHref} size="md">
                <Phone className="size-4" aria-hidden />
                {site.phoneDisplay}
              </Button>
              <Button href={site.mapsUrl} external variant="outline" size="md">
                Visit the Gym
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Your coach is waiting"
        text="Stop reading about training and start doing it. One call, one visit — that's all it takes to get on the floor."
        primaryLabel="Start Your Fitness Journey"
        primaryHref="/membership"
        secondaryLabel="Call Now"
        secondaryHref={site.phoneHref}
        image="/images/class-personal.jpg"
      />
    </>
  );
}
