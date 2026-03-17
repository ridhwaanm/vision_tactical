<script lang="ts">
  import GlowCard from '$lib/components/ui/GlowCard.svelte';
  import { reveal } from '$lib/actions/reveal';

  const awards = [
    {
      year: '2025',
      title: "Provincial Commissioner's Excellence Award",
      issuer: 'South African Police Service',
      description: 'Recognised for outstanding contribution to community safety and the Anti-Kidnapping Unit exceptional work in victim rescue operations.',
      image: '/images/awards/excellence-award-2025.jpg'
    },
    {
      year: '2022',
      title: '5 Best Security Services of the Year',
      issuer: 'CIO Bulletin',
      description: 'Named among South Africa top security service providers for innovation in drone surveillance and operational excellence.',
      image: '/images/awards/cio-bulletin-2022.jpg'
    },
    {
      year: '2024',
      title: 'G20 Community Safety Partner',
      issuer: 'G20 South Africa',
      description: 'Selected as a community safety partner for G20-related events, demonstrating our commitment to large-scale security operations.',
      image: '/images/awards/g20-partner-2024.jpg'
    }
  ];

  const mediaFeatures = [
    { name: 'Sunday Times', description: 'Feature on Anti-Kidnapping Unit operations' },
    { name: 'TimesLive', description: 'Interview on drone surveillance innovation' },
    { name: 'Rosebank Killarney Gazette', description: 'Community safety initiatives coverage' },
    { name: 'CIO Bulletin', description: 'Technology innovation in security' }
  ];
</script>

<svelte:head>
  <title>Awards & Recognition | Vision Tactical | Johannesburg</title>
  <meta
    name="description"
    content="Vision Tactical awards and industry recognition including the 2025 Provincial Commissioner's Excellence Award and CIO Bulletin recognition."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl" use:reveal>
        <p class="overline mb-4">AWARDS & RECOGNITION</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Industry Leadership Recognised
        </h1>
        <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Our commitment to excellence in security services has been recognised 
          by industry bodies, law enforcement, and the communities we serve.
        </p>
      </div>
    </div>
  </section>

  <!-- AWARDS GRID -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="space-y-6">
        {#each awards as award, i}
          <GlowCard>
            <div class="card p-6 md:p-8" use:reveal={{ delay: i * 100 }}>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Image -->
                <div class="md:col-span-1">
                  <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <div class="absolute inset-0 bg-[url('{award.image}')] bg-cover bg-center opacity-60"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent"></div>
                  </div>
                </div>

                <!-- Content -->
                <div class="md:col-span-2">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-wider">
                      {award.year}
                    </span>
                    <span class="text-zinc-500 text-sm">{award.issuer}</span>
                  </div>
                  <h2 class="text-xl font-bold text-white mb-3">{award.title}</h2>
                  <p class="text-zinc-400 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          </GlowCard>
        {/each}
      </div>
    </div>
  </section>

  <!-- STATS SECTION -->
  <section class="py-24 bg-[#0F0F12] border-y border-zinc-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12" use:reveal>
        <p class="overline mb-4">IMPACT</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          By The Numbers
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center" use:reveal={{ delay: 0 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">168+</p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Arrests Made</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 100 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">94</p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Kidnapping Cases Resolved</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 200 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">48+</p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Vehicles Seized</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 300 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">R700M+</p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Ransoms Prevented</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MEDIA SECTION -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12" use:reveal>
        <p class="overline mb-4">MEDIA COVERAGE</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          As Seen In
        </h2>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          Our innovative approach to security and community safety has been 
          featured in leading publications across South Africa.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {#each mediaFeatures as feature, i}
          <GlowCard>
            <div class="card p-6 text-center" use:reveal={{ delay: i * 100 }}>
              <div class="h-16 flex items-center justify-center mb-4">
                <!-- Placeholder for media logo -->
                <div class="text-zinc-600 hover:text-zinc-400 transition-colors">
                  <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <h3 class="text-white font-medium mb-2">{feature.name}</h3>
              <p class="text-zinc-500 text-xs">{feature.description}</p>
            </div>
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
          Experience Award-Winning Security
        </h2>
        <p class="text-zinc-400 mb-8">
          Join the thousands of clients who trust Vision Tactical for their 
          security needs.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/get-a-quote" class="btn btn-primary px-8 py-4">
            Get a Free Quote
          </a>
          <a href="/services" class="btn btn-secondary px-8 py-4">
            View Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
