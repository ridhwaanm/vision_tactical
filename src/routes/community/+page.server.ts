import { getAllPosts } from '$lib/server/blog';

export async function load() {
  const posts = await getAllPosts();
  return {
    posts
  };
}
