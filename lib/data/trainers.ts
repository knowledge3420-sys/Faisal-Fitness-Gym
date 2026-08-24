import { site } from "@/lib/site";

export type Trainer = {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  socials: {
    label: string;
    href: string;
    type: "youtube" | "phone";
  }[];
};

/**
 * Trainer profiles are placeholders — real names, specializations and bios
 * are not public yet. Replace each entry in this array with the actual team
 * member details; the Trainers page (app/trainers/page.tsx) renders them
 * automatically. Set isPlaceholderProfile to false once real data is in.
 */
export const isPlaceholderProfile = true;

const placeholderSocials: Trainer["socials"] = [
  { label: "Watch on YouTube", href: site.youtubeUrl, type: "youtube" },
  { label: `Call ${site.phoneDisplay}`, href: site.phoneHref, type: "phone" },
];

export const trainers: Trainer[] = [
  {
    name: "Trainer Name",
    role: "Professional Fitness Trainer",
    specialization: "e.g. Strength & Conditioning",
    experience: "e.g. 5+ years on the floor",
    bio: "A short bio about training style, approach and focus goes here — ready to be replaced with the real profile.",
    image: "/images/trainer-1.jpg",
    socials: placeholderSocials,
  },
  {
    name: "Trainer Name",
    role: "Professional Fitness Trainer",
    specialization: "e.g. Women's Fitness & Mobility",
    experience: "e.g. 4+ years on the floor",
    bio: "A short bio about training style, approach and focus goes here — ready to be replaced with the real profile.",
    image: "/images/class-personal.jpg",
    socials: placeholderSocials,
  },
  {
    name: "Trainer Name",
    role: "Professional Fitness Trainer",
    specialization: "e.g. Cardio & Endurance",
    experience: "e.g. 3+ years on the floor",
    bio: "A short bio about training style, approach and focus goes here — ready to be replaced with the real profile.",
    image: "/images/class-fitness.jpg",
    socials: placeholderSocials,
  },
  {
    name: "Trainer Name",
    role: "Professional Fitness Trainer",
    specialization: "e.g. Personal Training",
    experience: "e.g. 6+ years on the floor",
    bio: "A short bio about training style, approach and focus goes here — ready to be replaced with the real profile.",
    image: "/images/about-1.jpg",
    socials: placeholderSocials,
  },
];
