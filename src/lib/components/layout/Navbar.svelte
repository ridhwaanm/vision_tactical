<script lang="ts">
  import { page } from '$app/stores';
  import type { NavigationItem } from '$lib/data/navigation';

  let { nav }: { nav: NavigationItem[] } = $props();

  let mobileMenuOpen = $state(false);
  let servicesDropdownOpen = $state(false);
  let scrolled = $state(false);

  // Handle scroll effect
  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  const emergencyPhone = '084 222 2222';
  const whatsappNumber = '27842222222';
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled || mobileMenuOpen ? 'glass' : 'bg-transparent'}"
>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 group">
        <img src="/images/logo.svg" alt="Vision Tactical" class="h-10 w-auto transition-opacity group-hover:opacity-80" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-1">
        {#each nav as item}
          {#if item.children}
            <div class="relative">
              <button
                class="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-colors {servicesDropdownOpen ? 'text-white bg-white/[0.05]' : 'text-zinc-400'}"
                onmouseenter={() => (servicesDropdownOpen = true)}
                onmouseleave={() => (servicesDropdownOpen = false)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>{item.label}</span>
                <svg
                  class="w-4 h-4 transition-transform {servicesDropdownOpen ? 'rotate-180' : ''}"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Services Dropdown -->
              {#if servicesDropdownOpen}
                <div
                  class="absolute top-full left-0 mt-2 w-[600px] glass-surface shadow-2xl"
                  onmouseenter={() => (servicesDropdownOpen = true)}
                  onmouseleave={() => (servicesDropdownOpen = false)}
                  role="menu"
                  aria-label="Services menu"
                >
                  <div class="p-4 grid grid-cols-3 gap-2">
                    {#each item.children as child}
                      <a
                        href={child.href}
                        class="block p-3 rounded-lg transition-colors group {$page.url.pathname === child.href ? 'bg-white/[0.05]' : 'hover:bg-white/[0.10]'}"
                      >
                        <span class="text-sm font-medium text-white">{child.label}</span>
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          {:else}
            <a
              href={item.href}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {$page.url.pathname === item.href ? 'text-white' : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'}"
            >
              {item.label}
            </a>
          {/if}
        {/each}
      </nav>

      <!-- Right Side -->
      <div class="hidden lg:flex items-center space-x-4">
        <a
          href="tel:{emergencyPhone}"
          class="flex items-center space-x-2 text-red-500 font-medium text-sm hover:text-red-400 transition-colors"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          <span>{emergencyPhone}</span>
        </a>
        <a
          href="/get-a-quote"
          class="btn btn-primary text-sm"
        >
          Get a Quote
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden text-zinc-400 hover:text-white p-2 transition-colors"
        onclick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {#if mobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden fixed inset-0 top-20 bg-[#09090B] z-40 overflow-y-auto border-t border-zinc-800">
      <div class="container mx-auto px-4 py-6">
        <nav class="space-y-1">
          {#each nav as item}
            {#if item.children}
              <div>
                <details class="group">
                  <summary class="flex items-center justify-between text-white py-4 cursor-pointer list-none border-b border-zinc-800">
                    <span class="font-medium">{item.label}</span>
                    <svg
                      class="w-5 h-5 transition-transform group-open:rotate-180 text-zinc-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div class="pl-4 space-y-1 py-2">
                    {#each item.children as child}
                      <a
                        href={child.href}
                        class="block text-zinc-400 hover:text-white py-3 transition-colors border-l-2 border-transparent hover:border-red-500 pl-4 {$page.url.pathname === child.href ? 'text-red-500 border-red-500' : ''}"
                        onclick={closeMobileMenu}
                      >
                        {child.label}
                      </a>
                    {/each}
                  </div>
                </details>
              </div>
            {:else}
              <a
                href={item.href}
                class="block text-white py-4 border-b border-zinc-800 font-medium {$page.url.pathname === item.href ? 'text-red-500' : ''}"
                onclick={closeMobileMenu}
              >
                {item.label}
              </a>
            {/if}
          {/each}
        </nav>

        <div class="mt-8 pt-8 border-t border-zinc-800 space-y-4">
          <a
            href="tel:{emergencyPhone}"
            class="flex items-center space-x-2 text-red-500 font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span>Emergency: {emergencyPhone}</span>
          </a>
          <a
            href="/get-a-quote"
            class="block btn btn-primary text-center"
            onclick={closeMobileMenu}
          >
            Get a Quote
          </a>
          <a
            href="https://wa.me/{whatsappNumber}"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-[#25D366] hover:bg-[#20BA5A] text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
            onclick={closeMobileMenu}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  {/if}
</header>
