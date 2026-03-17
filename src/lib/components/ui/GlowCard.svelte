<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let cardEl: HTMLElement;
  let glowX = $state(50);
  let glowY = $state(50);
  let isHovered = $state(false);

  function handleMouseMove(e: MouseEvent) {
    const rect = cardEl.getBoundingClientRect();
    glowX = e.clientX - rect.left;
    glowY = e.clientY - rect.top;
  }
</script>

<div
  bind:this={cardEl}
  class="glow-card"
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  onmousemove={handleMouseMove}
  style="--glow-x: {glowX}px; --glow-y: {glowY}px;"
  class:is-hovered={isHovered}
  role="region"
  aria-label="Interactive card"
>
  {#if children}
    {@render children()}
  {/if}
</div>
