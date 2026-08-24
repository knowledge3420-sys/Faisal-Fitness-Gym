import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span
        aria-hidden
        className="glow-volt grid size-10 shrink-0 place-items-center rounded-xl bg-volt-400 font-display text-xl text-carbon-950 transition-transform duration-300 group-hover:scale-105"
      >
        F
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-[0.06em] text-cream">FAISAL</span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.4em] text-mist transition-colors duration-300 group-hover:text-volt-300">
          Fitness Gym
        </span>
      </span>
    </Link>
  );
}
