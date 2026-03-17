import { a as getPostBySlug, b as getRelatedPosts } from "../../../../chunks/blog.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    throw error(404, "Post not found");
  }
  const relatedPosts = await getRelatedPosts(params.slug);
  return {
    post,
    relatedPosts
  };
}
export {
  load
};
