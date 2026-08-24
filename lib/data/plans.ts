export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  featured?: boolean;
};

/**
 * Membership plans. Pricing is intentionally NOT hardcoded — final pricing
 * is shared directly at the gym. To add real prices later, extend this type
 * with a `price` field and render it in components/PlanCard.tsx.
 */
export const plans: Plan[] = [
  {
    slug: "flexible",
    name: "Flexible Membership",
    tagline: "Freedom to train your way",
    description:
      "Essential floor access for people who like to run the show. Show up when it suits you and train at your own pace.",
    features: [
      "Full gym floor access",
      "Self-guided training",
      "Train at your own pace",
      "Straightforward sign-up",
      "Male & female members welcome",
      "Talk to us about start timing",
    ],
  },
  {
    slug: "fitness",
    name: "Fitness Membership",
    tagline: "Structure that gets results",
    description:
      "Full access plus guided training programs, so every visit has a plan behind it and your progress has a direction.",
    features: [
      "Everything in Flexible",
      "Guided workout programs",
      "Fitness tracking & check-ins",
      "Structured progress plan",
      "Floor-wide training energy",
      "Male & female members welcome",
    ],
    featured: true,
  },
  {
    slug: "training",
    name: "Training Membership",
    tagline: "Your coach in your corner",
    description:
      "A personal-training focused plan for members who want one-on-one guidance, technique work and a program built around their goals.",
    features: [
      "Everything in Fitness",
      "1-on-1 coaching sessions",
      "Personalized training program",
      "Form & technique coaching",
      "Goal-based planning",
      "Priority coach schedule",
    ],
  },
];
