import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production';

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: '2026-03-26', useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// When height is given the CDN crops to that exact ratio around the
// image's hotspot (set by the author in Studio); without it the full
// image is returned at the requested width.
export function sanityImageUrl(source: SanityImageSource, width = 1200, height?: number): string {
  if (!builder) return '/images/og-default.jpg';
  let image = builder.image(source).width(width).auto('format');
  if (height) image = image.height(height).fit('crop');
  return image.url();
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
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
  body: any[]; // Portable text blocks
  tags?: string[];
  author?: string;
};
