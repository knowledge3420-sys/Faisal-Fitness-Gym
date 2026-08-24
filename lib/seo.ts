import type { Metadata } from "next";
import { headers } from "next/headers";
import { site } from "./site";

/**
 * Derives the request origin at runtime so canonical / Open Graph URLs are
 * always correct — on Vercel previews, custom domains, or production.
 * A fixed NEXT_PUBLIC_SITE_URL, when provided, takes precedence.
 */
export async function getOrigin(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  return `https://${host}`;
}

type PageMeta = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
};

export async function getPageMeta({ path, title, description, keywords }: PageMeta): Promise<Metadata> {
  const origin = await getOrigin();
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: new URL(path, origin),
    },
    openGraph: {
      url: `${origin}${path}`,
      siteName: site.name,
      locale: "en_PK",
      type: "website",
      title,
      description,
      images: [
        {
          url: "/images/hero.jpg",
          width: 1600,
          height: 900,
          alt: `${site.name} — gym in Karachi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
