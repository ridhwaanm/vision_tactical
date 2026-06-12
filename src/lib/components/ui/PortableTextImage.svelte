<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';

  interface Props {
    portableText: CustomBlockComponentProps<{
      url?: string;
      alt?: string;
      caption?: string;
    }>;
  }

  let { portableText }: Props = $props();
  let value = $derived(portableText.value);
</script>

{#if value.url}
  <figure class="my-8">
    <img src={value.url} alt={value.alt || ''} loading="lazy" class="w-full rounded-2xl" />
    {#if value.caption}
      <figcaption class="text-muted text-sm text-center mt-3">{value.caption}</figcaption>
    {/if}
  </figure>
{/if}
