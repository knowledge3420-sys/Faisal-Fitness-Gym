import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { CtaBanner } from "@/components/CtaBanner";
import { TrustBand } from "@/components/home/TrustBand";
import { HomeHighlights } from "@/components/home/HomeHighlights";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClassesPreview } from "@/components/home/ClassesPreview";
import { MediaPreview } from "@/components/home/MediaPreview";
import { getPageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    path: "/",
    title: "Faisal Fitness Gym | Gym in Karachi — Male & Female Fitness Center",
    description:
      "Faisal Fitness Gym in Aziz Nagar, Karachi — a premium male & female gym on Main Nishan-e-Haider Road. Strength, cardio, personal training. Rated 4.9/5 by 101+ reviews. Call 03412257436.",
  });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <HomeHighlights />
      <Marquee />
      <WhyChooseUs />
      <ClassesPreview />
      <MediaPreview />
      <CtaBanner
        title="Ready to get stronger?"
        text="Your first step is one call or one visit away. The floor is set, the weights are ready, and the team is waiting in Aziz Nagar."
        primaryLabel="Start Your Fitness Journey"
        primaryHref="/membership"
        secondaryLabel="Call 03412257436"
        secondaryHref="tel:03412257436"
      />
    </>
  );
}
