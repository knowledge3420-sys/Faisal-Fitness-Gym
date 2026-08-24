import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Particles } from "@/components/Particles";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt-400/[0.05] blur-[130px]" />
        <Particles count={14} />
      </div>

      <div className="relative z-10">
        <p className="font-display text-outline text-[7rem] leading-none sm:text-[10rem]">404</p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-cream sm:text-5xl">
          This rep doesn&rsquo;t <span className="text-volt-400">exist</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-mist">
          The page you&rsquo;re looking for moved, or never made it to the floor. Let&rsquo;s get
          you back to the workout.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            <ArrowLeft className="size-4" aria-hidden />
            Back to Home
          </Button>
          <Button href={site.phoneHref} variant="outline" size="lg">
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </Button>
        </div>
        <Link
          href="/membership"
          className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-mist transition-colors hover:text-volt-300"
        >
          or explore membership →
        </Link>
      </div>
    </section>
  );
}
