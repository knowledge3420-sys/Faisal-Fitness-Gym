import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  UserCheck,
  Users,
  Weight,
} from "lucide-react";

/**
 * Single source of truth for Faisal Fitness Gym business information.
 * Update values here and they propagate across the entire site.
 */
export const site = {
  name: "Faisal Fitness Gym",
  shortName: "Faisal Fitness",
  tagline: "Train Hard. Live Strong. Become Your Best.",
  locationLine: "Islam Nagar, Aziz Nagar, Karachi",
  phoneDisplay: "03412257436",
  phoneHref: "tel:03412257436",
  phoneIntl: "+92 341 2257436",
  address: {
    line1: "Main Nishan-e-Haider Road, opposite Kiran Mehal",
    line2: "Islam Nagar Block G, Aziz Nagar",
    cityLine: "Karachi, 75800, Pakistan",
    full: "Main Nishan-e-Haider Road, opposite Kiran Mehal, Islam Nagar Block G, Aziz Nagar, Karachi, 75800, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Faisal%20Fitness%20Gym%2C%20Aziz%20Nagar%2C%20Karachi",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Faisal%20Fitness%20Gym%2C%20Islam%20Nagar%2C%20Aziz%20Nagar%2C%20Karachi&z=16&output=embed",
  googleReviews: {
    value: 4.9,
    count: 101,
    label: "4.9 / 5",
    suffix: "101+ reviews on Google",
  },
  youtubeUrl: "https://youtube.com/c/FaisalFitnessGym",
  youtubeHandle: "FaisalFitnessGym",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

/** All public routes — used by the sitemap and global navigation. */
export const pageRoutes = [
  "/",
  "/about",
  "/membership",
  "/classes",
  "/trainers",
  "/gallery",
  "/reviews",
  "/media",
  "/contact",
] as const;

export type Highlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const highlights: Highlight[] = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    text: "Progressive strength work on modern racks and bars to build power you can actually feel.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Training",
    text: "A dedicated cardio deck to build stamina, burn energy and keep your engine running.",
  },
  {
    icon: Activity,
    title: "Fitness Training",
    text: "Structured conditioning that meets you where you are — first session or fiftieth.",
  },
  {
    icon: Weight,
    title: "Weight Training",
    text: "A full free-weight zone with dumbbells, barbells and adjustable benches for every goal.",
  },
  {
    icon: UserCheck,
    title: "Personal Fitness",
    text: "One-on-one attention from the coaching team when you want a plan built around you.",
  },
  {
    icon: ClipboardList,
    title: "Workout Programs",
    text: "Clear, guided programs so every visit has a purpose — and every week shows it.",
  },
  {
    icon: Users,
    title: "Male & Female Members",
    text: "The floor welcomes everyone. Same equipment, same standards, same respect for every member.",
  },
  {
    icon: Building2,
    title: "Professional Environment",
    text: "An organized space, maintained equipment and a serious atmosphere that keeps you focused.",
  },
];
