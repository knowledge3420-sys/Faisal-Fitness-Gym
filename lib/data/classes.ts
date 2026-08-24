import type { LucideIcon } from "lucide-react";
import { Activity, Dumbbell, Flame, HeartPulse, UserCheck, Weight } from "lucide-react";

export type GymClass = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  levels: string[];
  image: string;
};

/**
 * Training areas offered on the floor. No class timings are published here —
 * the page always directs members to call for the current schedule.
 */
export const gymClasses: GymClass[] = [
  {
    slug: "strength-training",
    name: "Strength Training",
    icon: Dumbbell,
    tagline: "Build real, lasting power",
    description:
      "Progressive barbell and dumbbell work to get undeniably stronger — from your first confident rep to your heaviest set yet.",
    levels: ["All levels"],
    image: "/images/class-strength.jpg",
  },
  {
    slug: "cardio-training",
    name: "Cardio Training",
    icon: HeartPulse,
    tagline: "Engine your stamina",
    description:
      "Treadmills and a dedicated cardio deck to build endurance, burn energy and keep your engine running at any age.",
    levels: ["All levels"],
    image: "/images/class-cardio.jpg",
  },
  {
    slug: "functional-training",
    name: "Functional Training",
    icon: Activity,
    tagline: "Move like an athlete",
    description:
      "Dynamic, full-body movement work that carries over into everything you do outside the gym — lifting, running, living.",
    levels: ["Beginner → Advanced"],
    image: "/images/class-functional.jpg",
  },
  {
    slug: "weight-training",
    name: "Weight Training",
    icon: Weight,
    tagline: "The free-weight zone",
    description:
      "A complete free-weight area with dumbbells, barbells and adjustable benches — everything you need for every muscle group.",
    levels: ["All levels"],
    image: "/images/class-weights.jpg",
  },
  {
    slug: "fitness-workouts",
    name: "Fitness Workouts",
    icon: Flame,
    tagline: "Condition the whole body",
    description:
      "High-energy conditioning that challenges strength, speed and heart rate in a single session — honest work, real results.",
    levels: ["Beginner friendly"],
    image: "/images/class-fitness.jpg",
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    icon: UserCheck,
    tagline: "One-on-one focus",
    description:
      "A coach in your corner — form guidance, program structure and accountability built around your goals and your pace.",
    levels: ["All levels"],
    image: "/images/class-personal.jpg",
  },
];
