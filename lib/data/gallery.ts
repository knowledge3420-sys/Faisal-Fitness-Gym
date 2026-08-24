export type GalleryCategory =
  | "Gym Interior"
  | "Training"
  | "Equipment"
  | "Fitness Lifestyle"
  | "Workout Environment";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: "tall" | "wide";
};

/**
 * Gallery imagery. All photos are original/generic training visuals —
 * safe to use. Swap any `src` for new licensed photography later.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/hero.jpg",
    alt: "Training floor at Faisal Fitness Gym",
    category: "Workout Environment",
    span: "wide",
  },
  {
    src: "/images/about-2.jpg",
    alt: "Gym floor with the full equipment lineup",
    category: "Gym Interior",
    span: "tall",
  },
  {
    src: "/images/class-strength.jpg",
    alt: "Heavy day on the barbell",
    category: "Training",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Barbell rack detail in the strength zone",
    category: "Equipment",
  },
  {
    src: "/images/about-1.jpg",
    alt: "Personal coaching session on the floor",
    category: "Training",
    span: "tall",
  },
  {
    src: "/images/class-cardio.jpg",
    alt: "Cardio deck in session",
    category: "Workout Environment",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Cooling down after a hard session",
    category: "Fitness Lifestyle",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Modern cardio equipment row",
    category: "Gym Interior",
  },
  {
    src: "/images/class-functional.jpg",
    alt: "Functional training in motion",
    category: "Training",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Members training across the floor",
    category: "Gym Interior",
    span: "wide",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Chalked grip, ready to pull",
    category: "Equipment",
    span: "tall",
  },
  {
    src: "/images/class-fitness.jpg",
    alt: "High-energy conditioning on the floor",
    category: "Fitness Lifestyle",
  },
  {
    src: "/images/class-personal.jpg",
    alt: "Coach guiding a barbell squat",
    category: "Training",
  },
  {
    src: "/images/class-weights.jpg",
    alt: "Free-weight zone, dumbbells racked and ready",
    category: "Equipment",
  },
  {
    src: "/images/trainer-1.jpg",
    alt: "Loading the bar — pre-workout focus",
    category: "Fitness Lifestyle",
  },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Gym Interior",
  "Training",
  "Equipment",
  "Fitness Lifestyle",
  "Workout Environment",
];
