import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production';

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-03-26', useCdn: true })
  : null;

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
