import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/anton";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageTransition } from "@/components/PageTransition";

const description =
  "Faisal Fitness Gym is a male & female fitness gym in Aziz Nagar, Karachi. Strength, cardio and personal training on Main Nishan-e-Haider Road, Islam Nagar. Rated 4.9/5 by 101+ Google reviews. Call 03412257436.";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const title = `${site.name} | Gym in Karachi — Male & Female Fitness Center`;
  return {
    metadataBase: new URL(`https://${host}`),
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    keywords: [
      "Faisal Fitness Gym",
      "gym in Karachi",
      "fitness gym Karachi",
      "male and female gym Karachi",
      "gym near Nishan-e-Haider Road",
      "fitness center Karachi",
      "Aziz Nagar gym",
      "Islam Nagar gym",
    ],
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: site.name,
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const origin = `https://${host}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.name,
    description,
    url: origin,
    telephone: site.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Karachi",
      postalCode: "75800",
      addressCountry: "PK",
    },
    areaServed: { "@type": "City", name: "Karachi" },
    sameAs: [site.youtubeUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.googleReviews.value),
      reviewCount: String(site.googleReviews.count),
      bestRating: "5",
    },
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-carbon-950 font-sans text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
