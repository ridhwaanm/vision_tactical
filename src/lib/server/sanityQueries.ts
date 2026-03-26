import { sanityClient } from './sanity';
import type { SanityBlogPost } from './sanity';

// Fetch all published blog posts, newest first
export async function getSanityPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage { asset, alt },
      tags,
      author
    }
  `);
}

// Fetch a single post by slug
export async function getSanityPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage { asset, alt },
      body,
      tags,
      author
    }
  `, { slug });
}

// Fetch related posts (same tag, excluding current)
export async function getSanityRelatedPosts(currentId: string, tags: string[]): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost" && _id != $currentId && count((tags[])[@ in $tags]) > 0] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage { asset, alt },
      tags,
      author
    }
  `, { currentId, tags });
}
