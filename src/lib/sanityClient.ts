import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export type SanityPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  readTime?: number;
  publishedAt?: string;
  categories?: string[];
  mainImage?: string;
  mainImageAlt?: string;
};

export type SanityPostDetail = SanityPostSummary & {
  body?: any[];
};
