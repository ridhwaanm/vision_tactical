<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let mouseX = $state(50);
  let mouseY = $state(50);

  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    mouseY = ((e.clientY - rect.top) / rect.height) * 100;
  }
</script>

<div
  class="spotlight-container"
  onmousemove={handleMouseMove}
  style="--spot-x: {mouseX}%; --spot-y: {mouseY}%;"
  role="region"
  aria-label="Interactive spotlight section"
>
  <div class="spotlight-layer"></div>
  <div class="relative z-10">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
