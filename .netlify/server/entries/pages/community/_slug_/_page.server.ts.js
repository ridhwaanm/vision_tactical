import { error } from "@sveltejs/kit";
import { a as getPostBySlug, b as getRelatedPosts } from "../../../../chunks/blog.js";
import { a as getSanityPostBySlug, b as getSanityRelatedPosts, s as sanityImageUrl } from "../../../../chunks/sanityQueries.js";
async function load({ params }) {
  const { slug } = params;
  try {
    const sanityPost = await getSanityPostBySlug(slug);
    if (sanityPost) {
      const related = await getSanityRelatedPosts(sanityPost._id, sanityPost.tags || []);
      return {
        post: {
          title: sanityPost.title,
          slug: sanityPost.slug.current,
          date: sanityPost.publishedAt,
          excerpt: sanityPost.excerpt || "",
          image: sanityPost.mainImage ? sanityImageUrl(sanityPost.mainImage, 1200) : "/images/og-default.jpg",
          tags: sanityPost.tags || [],
          author: sanityPost.author || "Vision Tactical",
          content: "",
          body: sanityPost.body,
          source: "sanity"
        },
        relatedPosts: related.map((p) => ({
          title: p.title,
          slug: p.slug.current,
          date: p.publishedAt,
          excerpt: p.excerpt || "",
          image: p.mainImage ? sanityImageUrl(p.mainImage, 400) : "/images/og-default.jpg",
          tags: p.tags || [],
          author: p.author || "Vision Tactical"
        }))
      };
    }
  } catch {
  }
  const post = await getPostBySlug(slug);
  if (!post) throw error(404, "Post not found");
  const relatedPosts = await getRelatedPosts(slug);
  return { post: { ...post, source: "markdown", body: null }, relatedPosts };
}
export {
  load
};
