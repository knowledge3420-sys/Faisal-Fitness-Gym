import type { MetadataRoute } from "next";
import { getOrigin } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
