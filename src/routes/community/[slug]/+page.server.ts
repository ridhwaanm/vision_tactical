import { getPostBySlug, getRelatedPosts } from '$lib/server/blog';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    throw error(404, 'Post not found');
  }

  const relatedPosts = await getRelatedPosts(params.slug);

  return {
    post,
    relatedPosts
  };
}
