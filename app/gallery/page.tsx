import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/gallery",
    title: "Gallery — Inside the Gym, Karachi",
    description:
      "Take a look inside Faisal Fitness Gym, Aziz Nagar Karachi — gym interior, training, equipment and the everyday workout environment. Male & female fitness center.",
  });
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        kicker="Gallery"
        title={
          <>
            Inside the <span className="text-volt-400">floor</span>
          </>
        }
        description="The equipment, the space, the atmosphere — a look at what training at Faisal Fitness Gym actually feels like. Filter by category, and click any photo to view it full screen."
        image="/images/about-2.jpg"
      />

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <Reveal>
            <GalleryGrid />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-mist/70">
              Imagery is for illustration — the real floor is even better. Come see it:{" "}
              {site.locationLine}.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="The best photo is the one you take there"
        text="Walk the floor, touch the equipment, feel the room. It's on Main Nishan-e-Haider Road — and it's easier to get to than you think."
        primaryLabel="Get Directions"
        primaryHref={site.mapsUrl}
        secondaryLabel="Call Now"
        secondaryHref={site.phoneHref}
        image="/images/class-cardio.jpg"
      />
    </>
  );
}
