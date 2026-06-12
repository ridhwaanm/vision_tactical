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
          image: sanityPost.mainImage ? sanityImageUrl(sanityPost.mainImage, 2100, 900) : "/images/og-default.jpg",
          ogImage: sanityPost.mainImage ? sanityImageUrl(sanityPost.mainImage, 1200, 630) : "/images/og-default.jpg",
          tags: sanityPost.tags || [],
          author: sanityPost.author || "Vision Tactical",
          content: "",
          // Image blocks in the body only carry an asset ref; resolve the CDN
          // URL here so the client never needs the Sanity client.
          body: (sanityPost.body || []).map(
            (block) => block._type === "image" && block.asset ? { ...block, url: sanityImageUrl(block, 1200) } : block
          ),
          source: "sanity"
        },
        relatedPosts: related.map((p) => ({
          title: p.title,
          slug: p.slug.current,
          date: p.publishedAt,
          excerpt: p.excerpt || "",
          image: p.mainImage ? sanityImageUrl(p.mainImage, 400, 280) : "/images/og-default.jpg",
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
  return { post: { ...post, source: "markdown", body: null, ogImage: null }, relatedPosts };
}
export {
  load
};
