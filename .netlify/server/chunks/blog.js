import { marked } from "marked";
import matter from "gray-matter";
const BLOG_DIR = "./src/content/blog";
async function getAllPosts() {
  const fs = await import("fs");
  const path = await import("path");
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
  const posts = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title,
      slug: data.slug || file.replace(".md", ""),
      date: data.date,
      excerpt: data.excerpt,
      image: data.image || "/images/og-default.jpg",
      tags: data.tags || [],
      author: data.author || "Vision Tactical"
    };
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
async function getPostBySlug(slug) {
  const fs = await import("fs");
  const path = await import("path");
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const html = marked(content);
  return {
    title: data.title,
    slug: data.slug || slug,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image || "/images/og-default.jpg",
    tags: data.tags || [],
    author: data.author || "Vision Tactical",
    content: html
  };
}
async function getRelatedPosts(currentSlug, limit = 3) {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((post) => post.slug !== currentSlug && post.tags.some((tag) => currentPost.tags.includes(tag))).slice(0, limit);
  if (relatedPosts.length < limit) {
    const remaining = limit - relatedPosts.length;
    const recentPosts = allPosts.filter((post) => post.slug !== currentSlug && !relatedPosts.find((rp) => rp.slug === post.slug)).slice(0, remaining);
    relatedPosts.push(...recentPosts);
  }
  return relatedPosts;
}
export {
  getPostBySlug as a,
  getRelatedPosts as b,
  getAllPosts as g
};
