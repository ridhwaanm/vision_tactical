import { marked } from 'marked';
import matter from 'gray-matter';
import type { BlogPost, BlogPostMeta } from '$lib/types/blogPost';

const BLOG_DIR = './src/content/blog';

/**
 * Get all blog posts sorted by date (newest first)
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const fs = await import('fs');
  const path = await import('path');

  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'));

  const posts = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      slug: data.slug || file.replace('.md', ''),
      date: data.date,
      excerpt: data.excerpt,
      image: data.image || '/images/og-default.jpg',
      tags: data.tags || [],
      author: data.author || 'Vision Tactical'
    } as BlogPostMeta;
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fs = await import('fs');
  const path = await import('path');

  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const html = marked(content) as string;

  return {
    title: data.title,
    slug: data.slug || slug,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image || '/images/og-default.jpg',
    tags: data.tags || [],
    author: data.author || 'Vision Tactical',
    content: html
  } as BlogPost;
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get related posts by tags
 */
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPostMeta[]> {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = await getAllPosts();
  
  // Find posts with matching tags
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug && post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit);

  // If not enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const remaining = limit - relatedPosts.length;
    const recentPosts = allPosts
      .filter((post) => post.slug !== currentSlug && !relatedPosts.find((rp) => rp.slug === post.slug))
      .slice(0, remaining);
    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}
