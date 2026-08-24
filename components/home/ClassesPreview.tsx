import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gymClasses } from "@/lib/data/classes";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

const featured = ["strength-training", "cardio-training", "personal-training"];
const preview = featured
  .map((slug) => gymClasses.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

/** Three featured training areas with image cards. */
export function ClassesPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <SectionHeading
            className="mb-0"
            kicker="Training areas"
            title={
              <>
                Pick your <span className="text-volt-400">battlefield</span>
              </>
            }
          />
          <Link
            href="/classes"
            className="group mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-volt-400 transition-colors hover:text-volt-300"
          >
            All classes
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {preview.map((gymClass) => (
            <StaggerItem key={gymClass.slug}>
              <Link
                href="/classes"
                className="group relative block h-[380px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={gymClass.image}
                  alt={gymClass.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-volt-300">
                    {gymClass.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-wide text-cream">
                    {gymClass.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 group-hover:text-volt-300">
                    Explore
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
