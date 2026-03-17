<script lang="ts">
  import GlowCard from '$lib/components/ui/GlowCard.svelte';
  import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
  <title>About Us | Vision Tactical | Johannesburg Security Company</title>
  <meta
    name="description"
    content="Learn about Vision Tactical's mission, values, and commitment to community safety in Johannesburg. Founded on principles of excellence and innovation."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl" use:reveal>
        <p class="overline mb-4">ABOUT US</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Protecting Communities, Preventing Crime
        </h1>
        <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Vision Tactical is Johannesburg's most trusted private security company, 
          combining cutting-edge technology with highly trained personnel to deliver 
          exceptional security solutions.
        </p>
      </div>
    </div>
  </section>

  <!-- STORY SECTION -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative" use:reveal>
          <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div class="absolute inset-0 bg-[url('/images/team/operations.jpg')] bg-cover bg-center opacity-60"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent"></div>
          </div>
          <!-- Stats overlay -->
          <div class="absolute -bottom-6 -right-6 card p-6 bg-gradient-to-br from-red-900/20 to-[#0F0F12]">
            <p class="text-3xl font-bold text-white mb-1">34,700+</p>
            <p class="text-zinc-400 text-sm">Community Members Protected</p>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="space-y-6" use:reveal={{ delay: 100 }}>
          <h2 class="text-2xl font-bold text-white">Our Story</h2>
          <p class="text-zinc-400 leading-relaxed">
            Vision Tactical was founded with a simple mission: to provide Johannesburg communities 
            with security services that truly make a difference. We saw a need for a company that 
            combines operational excellence with genuine community commitment.
          </p>
          <p class="text-zinc-400 leading-relaxed">
            From our headquarters in Houghton, we've grown to become one of the region's most 
            respected security providers. Our innovative approach—including pioneering the use 
            of drone surveillance in private security—has set new industry standards.
          </p>
          <p class="text-zinc-400 leading-relaxed">
            Every security contract we undertake is personally overseen by one of our Directors, 
            ensuring the highest level of accountability and service delivery. This hands-on 
            approach has earned us the trust of thousands of clients across Johannesburg.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES SECTION -->
  <section class="py-24 bg-[#0F0F12] border-y border-zinc-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" use:reveal>
        <p class="overline mb-4">OUR VALUES</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          What Drives Us
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlowCard>
          <div class="p-6">
            <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Innovation</h3>
            <p class="text-zinc-400 text-sm">Pioneering new technologies and methods to stay ahead of threats.</p>
          </div>
        </GlowCard>

        <GlowCard>
          <div class="p-6">
            <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Community</h3>
            <p class="text-zinc-400 text-sm">Deep commitment to the neighborhoods we serve and protect.</p>
          </div>
        </GlowCard>

        <GlowCard>
          <div class="p-6">
            <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Excellence</h3>
            <p class="text-zinc-400 text-sm">Uncompromising standards in training, equipment, and service delivery.</p>
          </div>
        </GlowCard>

        <GlowCard>
          <div class="p-6">
            <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Trust</h3>
            <p class="text-zinc-400 text-sm">Building lasting relationships through reliability and integrity.</p>
          </div>
        </GlowCard>
      </div>
    </div>
  </section>

  <!-- DIRECTOR SECTION -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div class="order-2 lg:order-1" use:reveal>
          <p class="overline mb-4">LEADERSHIP</p>
          <h2 class="text-2xl font-bold text-white mb-6">Yaseen Theba — Director</h2>
          <div class="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Yaseen Theba is the driving force behind Vision Tactical's innovative approach 
              to private security. With extensive experience in the security industry, Yaseen 
              has built a reputation for combining operational excellence with community-focused 
              initiatives.
            </p>
            <p>
              Under his leadership, Vision Tactical has pioneered the use of drone technology 
              in private security operations, becoming the first company in South Africa to 
              successfully integrate aerial surveillance into routine security services.
            </p>
            <p>
              Yaseen is actively involved in community safety initiatives and maintains close 
              partnerships with SAPS and other law enforcement agencies. His commitment to 
              fighting crime extends beyond business—Vision Tactical's Anti-Kidnapping Unit 
              operates pro-bono, providing free rescue services to kidnapping victims regardless 
              of their ability to pay.
            </p>
          </div>

          <!-- Affiliations -->
          <div class="mt-8 pt-8 border-t border-zinc-800">
            <h3 class="text-white font-semibold mb-4">Community Involvement</h3>
            <ul class="space-y-2 text-zinc-400 text-sm">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Mandela Legacy Member
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                #OperationHydrate Supporter
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Houghton Muslim Association
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="order-1 lg:order-2" use:reveal={{ delay: 100 }}>
          <div class="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div class="absolute inset-0 bg-[url('/images/team/yaseen-theba.jpg')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTNERS SECTION -->
  <section class="py-24 bg-[#0F0F12] border-y border-zinc-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12" use:reveal>
        <p class="overline mb-4">PARTNERSHIPS</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          Working Together for Safety
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- ER24 Partnership -->
        <GlowCard>
          <div class="p-8">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">ER24 Partnership</h3>
                <p class="text-zinc-500 text-sm">Medical Emergency Services</p>
              </div>
            </div>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Through our strategic partnership with ER24, we provide comprehensive emergency 
              medical services with access to 280+ vehicles across South Africa.
            </p>
          </div>
        </GlowCard>

        <!-- SAPS Partnership -->
        <GlowCard>
          <div class="p-8">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">SAPS Collaboration</h3>
                <p class="text-zinc-500 text-sm">Law Enforcement Partnership</p>
              </div>
            </div>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Our Anti-Kidnapping Unit operates in official partnership with SAPS, providing 
              pro-bono rescue services and intelligence sharing.
            </p>
          </div>
        </GlowCard>
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
          Join Our Community
        </h2>
        <p class="text-zinc-400 mb-8">
          Whether you need security services or want to join our team, 
          we'd love to hear from you.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/get-a-quote" class="btn btn-primary px-8 py-4">
            Get Protected Today
          </a>
          <a href="/careers" class="btn btn-secondary px-8 py-4">
            View Careers
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
