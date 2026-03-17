<script lang="ts">
  import { page } from '$app/stores';

  interface SEOProps {
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article' | 'business';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  }

  let {
    title,
    description,
    image = '/images/og-default.jpg',
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Vision Tactical',
    tags = []
  }: SEOProps = $props();

  const canonicalUrl = `https://visiontactical.co.za${$page.url.pathname}`;
  const siteName = 'Vision Tactical';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <link rel="canonical" href={canonicalUrl} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />
  {#if publishedTime}
    <meta property="article:published_time" content={publishedTime} />
  {/if}
  {#if modifiedTime}
    <meta property="article:modified_time" content={modifiedTime} />
  {/if}
  {#if tags.length > 0}
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="theme-color" content="#C0392B" />
</svelte:head>
