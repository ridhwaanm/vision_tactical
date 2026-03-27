<script lang="ts">
  import GlowCard from '$lib/components/ui/GlowCard.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { getAllServices } from '$lib/data/services';

  const services = getAllServices();
</script>

<svelte:head>
  <title>Our Services | Vision Tactical | Johannesburg Security</title>
  <meta
    name="description"
    content="Comprehensive security services including armed response, manned guarding, drone surveillance, VIP protection, and emergency medical services."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto" use:reveal>
        <p class="overline mb-4">OUR SERVICES</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Complete Security Solutions
        </h1>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
          From armed response to drone surveillance, we provide comprehensive 
          security services tailored to residential, commercial, and corporate needs.
        </p>
      </div>
    </div>
  </section>

  <!-- BENTO GRID SECTION -->
  <section class="pb-24 md:pb-32">
    <div class="container mx-auto px-4">
      <!-- First row - Featured services (large cards) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <!-- Armed Response - Featured -->
        <GlowCard>
          <a href="/services/armed-response" class="block group">
            <div class="relative h-64 bg-gradient-to-br from-red-900/20 to-[#0F0F12] rounded-lg overflow-hidden mb-6">
              <div class="absolute inset-0 bg-[url('/images/services/armed-response.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center gap-2 text-red-500 mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span class="text-xs font-medium uppercase tracking-wider">Rapid Response</span>
                </div>
                <h2 class="text-2xl font-bold text-white">Armed Response</h2>
              </div>
            </div>
            <p class="text-zinc-400 mb-4">24/7 rapid reaction unit with average response time under 5 minutes. CCTV monitoring, alarm response, and patrol services.</p>
            <span class="text-red-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </GlowCard>

        <!-- Drone Surveillance - Featured -->
        <GlowCard>
          <a href="/services/drone-surveillance" class="block group">
            <div class="relative h-64 bg-gradient-to-br from-blue-900/20 to-[#0F0F12] rounded-lg overflow-hidden mb-6">
              <div class="absolute inset-0 bg-[url('/images/services/drone-surveillance.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center gap-2 text-red-500 mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="text-xs font-medium uppercase tracking-wider">Aerial Surveillance</span>
                </div>
                <h2 class="text-2xl font-bold text-white">Drone Surveillance</h2>
              </div>
            </div>
            <p class="text-zinc-400 mb-4">Pioneering aerial crime combat with thermal imaging, aerial reconnaissance, and real-time intelligence for ground teams.</p>
            <span class="text-red-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </GlowCard>
      </div>

      <!-- Second row - Standard services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {#each services.slice(2, 5) as service, i}
          <GlowCard>
            <a href="/services/{service.slug}" class="block p-6 group">
              <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{service.shortDescription}</p>
              <span class="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors inline-flex items-center gap-1">
                Learn more
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </GlowCard>
        {/each}
      </div>

      <!-- Third row - Remaining services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each services.slice(5) as service, i}
          <GlowCard>
            <a href="/services/{service.slug}" class="block p-6 group">
              <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{service.shortDescription}</p>
              <span class="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors inline-flex items-center gap-1">
                Learn more
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </GlowCard>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-red-600/5"></div>
    <div class="glow-ambient glow-ambient-bottom"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="card p-8 md:p-12 text-center max-w-3xl mx-auto" use:reveal>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Need Help Choosing the Right Service?
        </h2>
        <p class="text-zinc-400 mb-8">
          Our security experts will assess your needs and recommend the best solution 
          for your property or business.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/get-a-quote" class="btn btn-primary px-8 py-4">
            Get a Free Consultation
          </a>
          <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">
            Call Us: 084 222 2222
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
