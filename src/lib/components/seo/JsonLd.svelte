<script lang="ts">
  interface LocalBusinessSchema {
    name: string;
    description: string;
    url: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      latitude: number;
      longitude: number;
    };
    openingHours?: string;
    priceRange?: string;
    image?: string;
    sameAs?: string[];
    services?: string[];
  }

  interface ServiceSchema {
    name: string;
    description: string;
    provider: LocalBusinessSchema;
    areaServed?: string;
  }

  interface ArticleSchema {
    headline: string;
    description: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    publisher: {
      name: string;
      logo: {
        type: string;
        url: string;
        width: number;
        height: number;
      };
    };
  }

  interface FAQPageSchema {
    mainEntity: {
      '@type': 'Question';
      name: string;
      acceptedAnswer: {
        '@type': 'Answer';
        text: string;
      };
    }[];
  }

  let {
    type,
    data
  }: {
    type: 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage';
    data: LocalBusinessSchema | ServiceSchema | ArticleSchema | FAQPageSchema;
  } = $props();
</script>

<svelte:head>
  <script type="application/ld+json">
    {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }
  </script>
</svelte:head>
