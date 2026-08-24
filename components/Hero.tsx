"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "./Button";
import { Particles } from "./Particles";
import { Stars } from "./Stars";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINES = [
  { text: "TRAIN HARD.", className: "text-cream" },
  { text: "LIVE STRONG.", className: "text-volt-400 drop-shadow-[0_0_35px_rgba(205,245,58,0.35)]" },
  { text: "BECOME YOUR BEST.", className: "text-outline" },
];

/** Full-screen cinematic homepage hero. */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="Faisal Fitness Gym — gym in Karachi"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={reduce ? "object-cover" : "animate-[kenburns_16s_ease-out_forwards] object-cover"}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/95 via-carbon-950/55 to-carbon-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/15 to-carbon-950/50" />
        <div className="absolute -right-40 top-1/4 size-[480px] rounded-full bg-volt-400/[0.07] blur-[120px]" />
        <Particles />
      </div>

      {/* Content */}
      <div className="wrap relative z-10 flex flex-1 flex-col justify-end pb-16 pt-36 md:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-carbon-950/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/80 backdrop-blur-sm sm:text-[11px]">
            <span className="relative flex size-2" aria-hidden>
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-volt-400" />
              <span className="relative inline-flex size-2 rounded-full bg-volt-400" />
            </span>
            {site.locationLine}
          </span>
          <span className="inline-flex items-center gap-2.5 text-sm">
            <Stars value={site.googleReviews.value} className="size-4" />
            <span className="font-semibold text-cream">{site.googleReviews.label}</span>
            <span className="hidden text-mist sm:inline">· {site.googleReviews.suffix}</span>
          </span>
        </motion.div>

        <h1 className="mt-7 font-display uppercase leading-[0.92] tracking-tight">
          {LINES.map((line, i) => (
            <motion.span
              key={line.text}
              className={`block text-[clamp(2.5rem,10vw,7.5rem)] ${line.className}`}
              initial={reduce ? false : { y: "0.55em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: EASE }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
        >
          A premium training ground in Aziz Nagar, Karachi — built for{" "}
          <span className="font-semibold text-cream">men and women</span> who want to get
          stronger, fitter and more confident. Walk in, train hard, leave better.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.74, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact" size="lg">
            Join Faisal Fitness Gym
          </Button>
          <Button href="/membership" variant="outline" size="lg">
            Explore Membership
          </Button>
          <Button href={site.phoneHref} variant="ghost" size="lg" className="px-2">
            <span className="grid size-9 place-items-center rounded-full border border-white/20 text-volt-400 transition-colors group-hover/btn:border-volt-400/60">
              <Phone className="size-4" aria-hidden />
            </span>
            Call {site.phoneDisplay}
          </Button>
        </motion.div>

        {/* Bottom meta row */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex items-end justify-between border-t border-white/[0.08] pt-6"
        >
          <div className="flex items-center gap-3">
            <span className="relative block h-12 w-px overflow-hidden bg-white/15" aria-hidden>
              <span className="animate-scroll-cue absolute inset-0 bg-volt-400" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mist">
              Scroll
            </span>
          </div>
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-mist sm:block">
            Open to male &amp; female members
          </p>
        </motion.div>
      </div>
    </section>
  );
}
