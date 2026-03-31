import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production';

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-03-26', useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function sanityImageUrl(source: SanityImageSource, width = 1200): string {
  if (!builder) return '/images/og-default.jpg';
  return builder.image(source).width(width).auto('format').url();
}

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
