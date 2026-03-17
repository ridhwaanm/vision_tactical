<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { faqItems, getAllFAQCategories } from '$lib/data/faq';

  let selectedCategory = $state('All');
  const categories = ['All', ...getAllFAQCategories()];

  let filteredItems = $derived(
    selectedCategory === 'All'
      ? faqItems
      : faqItems.filter(item => item.category === selectedCategory)
  );
</script>

<svelte:head>
  <title>FAQ | Vision Tactical | Frequently Asked Questions</title>
  <meta
    name="description"
    content="Find answers to common questions about Vision Tactical security services, coverage areas, billing, and technology."
  />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vision Tactical primarily covers the greater Johannesburg area, including Houghton, Norwood, Killarney, Melrose, Rosebank, Sandton, Parktown, Illovo, Hyde Park, and Bryanston. Our Anti-Kidnapping Unit operates nationally in partnership with SAPS."
          }
        },
        {
          "@type": "Question",
          "name": "How do I become a client?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact us via phone, email, or our website quote form. We will conduct a free security assessment and provide a tailored quote."
          }
        },
        {
          "@type": "Question",
          "name": "Are you PSIRA registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Vision Tactical and all our security officers are fully registered with the Private Security Industry Regulatory Authority (PSIRA)."
          }
        }
      ]
    }
  </script>
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl" use:reveal>
        <p class="overline mb-4">FAQ</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h1>
        <p class="text-zinc-400 text-lg leading-relaxed">
          Find answers to common questions about our services, coverage, 
          billing, and technology.
        </p>
      </div>
    </div>
  </section>

  <!-- CATEGORY TABS -->
  <section class="pb-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap gap-2" use:reveal>
        {#each categories as category}
          <button
            onclick={() => selectedCategory = category}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {selectedCategory === category ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'}"
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- FAQ ITEMS -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto space-y-4">
        {#each filteredItems as item, i}
          <details
            class="group card"
            use:reveal={{ delay: i * 50 }}
          >
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 class="text-white font-medium pr-8">{item.question}</h3>
              <svg
                class="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6">
              <p class="text-zinc-400 leading-relaxed">{item.answer}</p>
            </div>
          </details>
        {/each}
      </div>

      {#if filteredItems.length === 0}
        <div class="text-center py-12" use:reveal>
          <p class="text-zinc-500">No questions found in this category.</p>
        </div>
      {/if}
    </div>
  </section>

  <!-- CONTACT CTA -->
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-red-600/5"></div>
    <div class="glow-ambient glow-ambient-bottom"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="card p-8 md:p-12 text-center max-w-3xl mx-auto" use:reveal>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Still Have Questions?
        </h2>
        <p class="text-zinc-400 mb-8">
          Our team is here to help. Contact us for any questions not covered 
          in our FAQ.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" class="btn btn-primary px-8 py-4">
            Contact Us
          </a>
          <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">
            Call: 084 222 2222
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
