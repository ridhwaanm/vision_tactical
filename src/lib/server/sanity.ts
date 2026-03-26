import { createClient } from '@sanity/client';

// These will be set via environment variables in production
// For now use placeholder values that can be swapped
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'REPLACE_WITH_PROJECT_ID',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-03-26',
  useCdn: true,
});

export type SanityBlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  body: any[]; // Portable text blocks
  tags?: string[];
  author?: string;
};
