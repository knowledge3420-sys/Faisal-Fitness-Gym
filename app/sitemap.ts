import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getOrigin } from "@/lib/seo";
import { pageRoutes } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getOrigin();
  return pageRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
