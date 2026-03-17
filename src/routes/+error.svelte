<script lang="ts">
  import { page } from '$app/stores';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
</script>

<svelte:head>
  <title>Page Not Found | Vision Tactical</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<SEOHead
  title="Page Not Found | Vision Tactical"
  description="The page you're looking for doesn't exist. Return to homepage or contact us for assistance."
/>

<div class="min-h-screen flex items-center justify-center bg-[#09090B] px-4">
  <div class="text-center max-w-lg">
    <!-- Animated Error Number -->
    <div class="relative mb-8">
      <h1 class="text-[120px] md:text-[200px] font-bold text-zinc-800 leading-none">
        404
      </h1>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-32 h-32 rounded-full bg-red-500/10 animate-pulse"></div>
      </div>
    </div>

    <!-- Error Message -->
    <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
      Page Not Found
    </h2>
    <p class="text-zinc-400 mb-8 leading-relaxed">
      The page you're looking for doesn't exist or has been moved. 
      Let's get you back on track.
    </p>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <a href="/" class="btn btn-primary px-8 py-4 w-full sm:w-auto">
        Return Home
      </a>
      <a href="/contact" class="btn btn-secondary px-8 py-4 w-full sm:w-auto">
        Contact Us
      </a>
    </div>

    <!-- Emergency Contact -->
    <div class="p-6 card bg-red-500/10 border-red-500/30">
      <div class="flex items-center justify-center gap-2 mb-2">
        <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span class="text-red-400 font-semibold">Emergency?</span>
      </div>
      <p class="text-zinc-400 text-sm mb-2">
        For immediate assistance, call our 24/7 emergency line:
      </p>
      <a href="tel:0842222222" class="text-2xl font-bold text-white hover:text-red-500 transition-colors">
        084 222 2222
      </a>
    </div>
  </div>
</div>
