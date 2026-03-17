export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  author: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
