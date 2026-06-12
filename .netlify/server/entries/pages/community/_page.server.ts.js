import { g as getAllPosts } from "../../../chunks/blog.js";
import { g as getSanityPosts, s as sanityImageUrl } from "../../../chunks/sanityQueries.js";
async function load() {
  try {
    const sanityPosts = await getSanityPosts();
    if (sanityPosts && sanityPosts.length > 0) {
      return {
        posts: sanityPosts.map((p) => ({
          title: p.title,
          slug: p.slug.current,
          date: p.publishedAt,
          excerpt: p.excerpt || "",
          image: p.mainImage ? sanityImageUrl(p.mainImage, 800, 500) : "/images/og-default.jpg",
          tags: p.tags || [],
          author: p.author || "Vision Tactical",
          source: "sanity"
        }))
      };
    }
  } catch {
  }
  const posts = await getAllPosts();
  return { posts: posts.map((p) => ({ ...p, source: "markdown" })) };
}
export {
  load
};
