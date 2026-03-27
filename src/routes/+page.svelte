<script lang="ts">
  import type { PageData } from './$types';
  import Spotlight from '$lib/components/ui/Spotlight.svelte';
  import GlowCard from '$lib/components/ui/GlowCard.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { getAllServices } from '$lib/data/services';
  import { testimonials } from '$lib/data/testimonials';
  import { stats } from '$lib/data/stats';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import JsonLd from '$lib/components/seo/JsonLd.svelte';

  let { data }: { data: PageData } = $props();
  const services = getAllServices().slice(0, 6);

  const seoTitle = 'Vision Tactical | Surveillance & Security Solutions | Johannesburg';
  const seoDescription = "Johannesburg's most trusted private security company. Armed response, manned guarding, drone surveillance, VIP protection, and emergency medical services.";

  const localBusinessData = {
    '@type': 'LocalBusiness',
    name: 'Vision Tactical',
    description: seoDescription,
    url: 'https://visiontactical.co.za',
    telephone: '+27842222222',
    email: 'info@visiontactical.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '46 Central Street',
      addressLocality: 'Houghton',
      addressRegion: 'Gauteng',
      postalCode: '2198',
      addressCountry: 'ZA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.1617,
      longitude: 28.0584
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$',
    image: 'https://visiontactical.co.za/images/og-default.jpg',
    sameAs: [
      'https://www.facebook.com/visiontacticalZA/',
      'https://x.com/visiontactical',
      'https://www.instagram.com/visiontactical',
      'https://www.linkedin.com/company/vision-tactical',
      'https://www.youtube.com/@VisionTacticalZA'
    ],
    services: getAllServices().map(s => s.title)
  };
</script>

<SEOHead title={seoTitle} description={seoDescription} />
<JsonLd type="LocalBusiness" data={localBusinessData} />

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-[#09090B]/80 via-[#09090B]/60 to-[#09090B] z-10"></div>
      <picture class="absolute inset-0">
        <source
          srcset="/images/hero/main-1280.webp 1280w, /images/hero/main-2560.webp 2560w"
          sizes="100vw"
          type="image/webp"
        />
        <img
          src="/images/hero/main-2560.webp"
          alt="Vision Tactical security operations"
          class="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width="2560"
          height="1440"
        />
      </picture>
    </div>

    <!-- Ambient glow -->
    <div class="glow-ambient glow-ambient-top"></div>

    <!-- Spotlight effect -->
    <Spotlight>
      <!-- Content -->
      <div class="container mx-auto px-4 py-32 relative z-20 text-center">
        <p class="overline mb-6" use:reveal={{ delay: 0 }}>
          PROTECTING COMMUNITIES · PREVENTING CRIME
        </p>

        <h1 class="heading-gradient mb-6 max-w-4xl mx-auto" use:reveal={{ delay: 100 }}>
          Security That Never Sleeps
        </h1>

        <p class="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10" use:reveal={{ delay: 200 }}>
          Johannesburg's most trusted private security company. Armed response, manned guarding,
          drone surveillance, and emergency medical services.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4" use:reveal={{ delay: 300 }}>
          <a href="/get-a-quote" class="btn btn-primary px-8 py-4 text-base">
            Get Protected Today
          </a>
          <a href="/services" class="btn btn-secondary px-8 py-4 text-base">
            Our Services
          </a>
        </div>

        <!-- Trust indicators -->
        <div class="mt-20 pt-10 border-t border-zinc-800" use:reveal={{ delay: 500 }}>
          <p class="text-zinc-500 text-sm mb-6">TRUSTED BY 34,700+ COMMUNITY MEMBERS</p>
          <div class="flex flex-wrap items-center justify-center gap-8 text-zinc-400 text-sm">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              2025 Excellence Award
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              168+ Arrests
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              ER24 Partner
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Drone Pioneers
            </span>
          </div>
        </div>
      </div>
    </Spotlight>
  </section>

  <!-- SERVICES SECTION -->
  <section class="section relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" use:reveal>
        <p class="overline mb-4">OUR SERVICES</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Security Solutions
        </h2>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          From armed response to drone surveillance, we provide end-to-end security
          services tailored to your needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each services as service, i}
          <GlowCard>
            <a href="/services/{service.slug}" class="block p-6 h-full">
              <div class="text-red-500 mb-4">
                <!-- Icon placeholder - will be replaced with Lucide icons -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
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

      <div class="text-center mt-12" use:reveal>
        <a href="/services" class="btn btn-secondary">
          View All Services
        </a>
      </div>
    </div>
  </section>

  <!-- STATS SECTION -->
  <section class="section relative bg-[#0F0F12] border-y border-zinc-800">
    <div class="glow-ambient glow-ambient-bottom"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center" use:reveal={{ delay: 0 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span use:countUp={stats.arrests}>{stats.arrests}</span>+
          </p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Arrests</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 100 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span use:countUp={stats.kidnappingCases}>{stats.kidnappingCases}</span>
          </p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Kidnapping Cases</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 200 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span use:countUp={stats.vehiclesSeized}>{stats.vehiclesSeized}</span>+
          </p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Vehicles Seized</p>
        </div>
        <div class="text-center" use:reveal={{ delay: 300 }}>
          <p class="text-4xl md:text-5xl font-bold text-white mb-2">R700M+</p>
          <p class="text-zinc-500 text-sm uppercase tracking-wider">Ransoms Prevented</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS SECTION -->
  <section class="section relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" use:reveal>
        <p class="overline mb-4">TESTIMONIALS</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each testimonials as testimonial, i}
          <div class="card p-6" use:reveal={{ delay: i * 100 }}>
            <div class="flex gap-1 mb-4">
              {#each [1, 2, 3, 4, 5] as _}
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
            </div>
            <p class="text-zinc-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div>
              <p class="text-white font-medium text-sm">{testimonial.author}</p>
              <p class="text-zinc-500 text-xs">{testimonial.location}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="section relative overflow-hidden">
    <div class="absolute inset-0 bg-red-600/5"></div>
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="card p-8 md:p-12 text-center" use:reveal>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Secure Your Property?
        </h2>
        <p class="text-zinc-400 mb-8 max-w-xl mx-auto">
          Get a free, no-obligation quote today. Our team will assess your security needs
          and provide a tailored solution.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/get-a-quote" class="btn btn-primary px-8 py-4">
            Get a Free Quote
          </a>
          <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">
            Or Call Us: 084 222 2222
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
