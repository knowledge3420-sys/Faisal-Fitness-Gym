import { site } from "@/lib/site";

export type MediaVideo = {
  /** YouTube video ID (the 11-character ID from the watch URL). */
  id: string;
  title: string;
  duration?: string;
};

export const youtubeChannel = {
  url: site.youtubeUrl,
  handle: site.youtubeHandle,
  name: `${site.name} on YouTube`,
  description:
    "Workout videos and gym motivation straight from the floor at Faisal Fitness Gym — follow along from anywhere.",
};

/**
 * Video library for the /media page.
 *
 * Add entries from the official channel to populate the grid, e.g.:
 * { id: "dQw4w9WgXcQ", title: "Full Body Strength Session", duration: "12:34" }
 *
 * To list videos automatically in the future, plug NEXT_PUBLIC_YOUTUBE_API_KEY
 * into a route handler (YouTube Data API v3, videos?channelId=...) and feed
 * the result into this array.
 */
export const channelVideos: MediaVideo[] = [];
