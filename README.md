# Faisal Fitness Gym — Official Website

A premium, high-converting multi-page website for **Faisal Fitness Gym**, a male & female
fitness gym on Main Nishan-e-Haider Road, Islam Nagar Block G, Aziz Nagar, Karachi, Pakistan.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion +
Lucide icons** — production-ready for [Vercel](https://vercel.com).

---

## Business details (single source of truth)

All business information lives in **[`lib/site.ts`](lib/site.ts)** — phone, address,
rating (4.9 / 5 from 101 Google reviews) and the YouTube channel. Update it there and
it propagates across the whole site (navbar, footer, forms, structured data, sitemap).

| Field | Value |
| --- | --- |
| Name | Faisal Fitness Gym |
| Phone | 03412257436 (`tel:03412257436`) |
| Address | Main Nishan-e-Haider Road, opposite Kiran Mehal, Islam Nagar Block G, Aziz Nagar, Karachi, 75800, Pakistan |
| Rating | 4.9 / 5 — 101 Google reviews |
| YouTube | https://youtube.com/c/FaisalFitnessGym |

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before deploy)
npm start        # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — cinematic hero, trust band, highlights, why-us, classes & media previews, CTA |
| `/about` | Mission, pillars, stats, audience, location |
| `/membership` | Three plans (Flexible / Fitness / Training) — **no invented pricing** |
| `/classes` | Six training areas with image cards + "contact for timings" CTA |
| `/trainers` | Placeholder-ready trainer profiles (structured for real data) |
| `/gallery` | Filterable masonry gallery with lightbox, lazy loading, empty states |
| `/reviews` | Verified 4.9 / 101 rating presentation — no fabricated testimonials |
| `/contact` | Validated contact form, call CTA, address, Google Maps embed |
| `/media` | Official YouTube channel page with video-library structure |
| `404` | Custom on-brand not-found page |

Plus: `sitemap.xml`, `robots.txt`, JSON-LD (`SportsActivityLocation` + `AggregateRating`),
Open Graph / Twitter cards, canonical URLs (derived from the request host at runtime, so
Vercel previews and custom domains work without env config).

## Adding real data later

- **Pricing** — add a `price` field to `plans` in [`lib/data/plans.ts`](lib/data/plans.ts)
  and render it in [`components/PlanCard.tsx`](components/PlanCard.tsx) (the dashed
  "Contact Gym for Pricing" block is the swap point).
- **Trainers** — replace the placeholder entries in
  [`lib/data/trainers.ts`](lib/data/trainers.ts) (name, specialization, experience, bio,
  image, socials) and set `isPlaceholderProfile = false`.
- **YouTube videos** — add video IDs to `channelVideos` in
  [`lib/data/media.ts`](lib/data/media.ts); the `/media` grid and home preview
  render them automatically. The layout is data-driven, so an API-key route handler can
  feed the same array later (`NEXT_PUBLIC_YOUTUBE_API_KEY` is reserved in `.env.example`).
- **Contact form** — currently validates and confirms client-side. To wire a backend,
  point the submit handler in [`components/ContactForm.tsx`](components/ContactForm.tsx)
  at a route handler (e.g. `app/api/contact/route.ts`).

## Design system

- **Dark premium theme** — deep carbon/charcoal surfaces, off-white type, electric lime
  (`volt`) accent used with restraint, film-grain overlay, soft glows.
- **Type** — `Anton` (display) + `Inter` (body), self-hosted via Fontsource
  (no external CDN dependency).
- **Motion** — Framer Motion scroll reveals, staggered card entrances, page transitions,
  counters, marquee band, hero particles — all honoring `prefers-reduced-motion`.
- **Images** — locally generated/royalty-free assets in `public/images`, served through
  `next/image` with lazy loading and responsive `sizes`.

## Deployment (Vercel)

1. Push the branch / open a PR from it.
2. Import the repository in Vercel (framework preset: Next.js — auto-detected).
3. No environment variables required. Optional: set `NEXT_PUBLIC_SITE_URL` to lock
   canonical/OG URLs to a custom domain.
4. Deploy. `npm run build` is the Vercel build command; it must pass (it does).

No hardcoded localhost URLs, no local-only server config, no browser APIs used during SSR.
