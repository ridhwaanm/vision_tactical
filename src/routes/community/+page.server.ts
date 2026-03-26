import { getAllPosts } from '$lib/server/blog';
import { getSanityPosts } from '$lib/server/sanityQueries';

export async function load() {
  // Try Sanity first; fall back to local markdown
  try {
    const sanityPosts = await getSanityPosts();
    if (sanityPosts && sanityPosts.length > 0) {
      return {
        posts: sanityPosts.map((p) => ({
          title: p.title,
          slug: p.slug.current,
          date: p.publishedAt,
          excerpt: p.excerpt || '',
          image: p.mainImage?.asset?._ref ? `sanity:${p.mainImage.asset._ref}` : '/images/blog/placeholder.jpg',
          tags: p.tags || [],
          author: p.author || 'Vision Tactical',
          source: 'sanity' as const,
        })),
      };
    }
  } catch {
    // Sanity not configured yet — use local markdown
  }

  const posts = await getAllPosts();
  return { posts: posts.map((p) => ({ ...p, source: 'markdown' as const })) };
};
