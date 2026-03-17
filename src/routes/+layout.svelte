<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import WhatsAppFloat from '$lib/components/layout/WhatsAppFloat.svelte';

  let { data, children }: { data: { nav: typeof import('$lib/data/navigation').mainNav }; children: import('svelte').Snippet } = $props();
</script>

<!-- Skip to Content Link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<div class="min-h-screen flex flex-col bg-[#09090B]">
  <Navbar nav={data.nav} />

  <main id="main-content" class="flex-grow" tabindex="-1">
    {@render children()}
  </main>

  <Footer />
  <WhatsAppFloat />
</div>
