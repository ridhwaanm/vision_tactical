<script lang="ts">
  import type { PageData } from './$types';
  import GlowCard from '$lib/components/ui/GlowCard.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { formatDate } from '$lib/utils/formatDate';

  let { data }: { data: PageData } = $props();

  let selectedTag = $state('All');
  const allTags = ['All', ...new Set(data.posts.flatMap(post => post.tags))];

  let filteredPosts = $derived(
    selectedTag === 'All'
      ? data.posts
      : data.posts.filter(post => post.tags.includes(selectedTag))
  );
</script>

<svelte:head>
  <title>Community & News | Vision Tactical | Johannesburg</title>
  <meta
    name="description"
    content="Latest news, updates, and community stories from Vision Tactical. Read about our operations, awards, and community safety initiatives."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl" use:reveal>
        <p class="overline mb-4">COMMUNITY & NEWS</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Stories from the Frontline
        </h1>
        <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Stay updated with our latest operations, community initiatives, 
          and industry insights.
        </p>
      </div>
    </div>
  </section>

  <!-- TAG FILTER -->
  <section class="pb-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap gap-2" use:reveal>
        {#each allTags as tag}
          <button
            onclick={() => selectedTag = tag}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {selectedTag === tag ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'}"
          >
            {tag}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- BLOG POSTS GRID -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      {#if filteredPosts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each filteredPosts as post, i}
            <GlowCard>
              <article class="card overflow-hidden" use:reveal={{ delay: i * 100 }}>
                <a href="/community/{post.slug}" class="block group">
                  <!-- Featured Image -->
                  <div class="relative aspect-[16/10] overflow-hidden">
                    <div class="absolute inset-0 bg-[url('{post.image}')] bg-cover bg-center transition-transform group-hover:scale-105"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent"></div>
                  </div>

                  <!-- Content -->
                  <div class="p-6">
                    <!-- Date & Tags -->
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-zinc-500 text-xs">{formatDate(post.date)}</span>
                      {#if post.tags && post.tags.length > 0}
                        <span class="px-2 py-1 rounded bg-red-500/10 text-red-500 text-xs">
                          {post.tags[0]}
                        </span>
                      {/if}
                    </div>

                    <!-- Title -->
                    <h2 class="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h2>

                    <!-- Excerpt -->
                    <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <!-- Read More -->
                    <span class="text-red-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            </GlowCard>
          {/each}
        </div>
      {:else}
        <div class="text-center py-24" use:reveal>
          <svg class="w-16 h-16 text-zinc-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p class="text-zinc-500">No posts found in this category.</p>
        </div>
      {/if}
    </div>
  </section>

  <!-- SUBSCRIBE CTA -->
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-red-600/5"></div>
    <div class="glow-ambient glow-ambient-bottom"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="card p-8 md:p-12 text-center max-w-3xl mx-auto" use:reveal>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay Informed
        </h2>
        <p class="text-zinc-400 mb-8">
          Subscribe to our newsletter for the latest security updates and 
          community news.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
          />
          <button type="submit" class="btn btn-primary px-6 py-3">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</div>
