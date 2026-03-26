<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { reveal } from '$lib/actions/reveal';
  import { coverageAreas } from '$lib/data/areas';
  import type { CoverageArea } from '$lib/types/area';
  import GlowCard from '$lib/components/ui/GlowCard.svelte';

  let mapContainer: HTMLElement;
  let map: any = null;
  let markers: any[] = [];

  onMount(async () => {
    // Dynamic import of Leaflet to avoid SSR issues
    const L = await import('leaflet');
    await import('leaflet/dist/leaflet.css');

    // Initialize map centered on Johannesburg
    map = L.map(mapContainer, {
      zoomControl: false,
      attributionControl: true
    }).setView([-26.15, 28.05], 11);

    onDestroy(() => {
      if (map) {
        map.remove();
        map = null;
      }
    });

    // Add zoom control to bottom right
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    // Add dark-themed map tiles (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Custom marker icon
    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 24px;
          height: 24px;
          background-color: #EF4444;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          animation: pulse 2s infinite;
        "></div>
        <style>
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
          }
        </style>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });

    // HQ marker icon — larger, stronger glow, with star label
    const hqMarkerIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 32px;
          height: 32px;
          background-color: #EF4444;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(239,68,68,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s infinite;
          font-size: 11px;
          font-weight: 700;
          color: white;
          font-family: sans-serif;
        ">★</div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    // Add markers for each coverage area
    coverageAreas.forEach((area: CoverageArea) => {
      const isHQ = area.name === 'Houghton';
      const icon = isHQ ? hqMarkerIcon : markerIcon;
      const marker = L.marker([area.lat, area.lng], { icon }).addTo(map);

      const hqBadge = isHQ
        ? `<span style="display:inline-block;margin-left:6px;padding:1px 5px;background:#EF4444;color:white;font-size:10px;font-weight:700;border-radius:3px;vertical-align:middle;">HQ</span>`
        : '';

      const popupContent = `
        <div style="font-family: 'Inter', sans-serif; padding: 8px;">
          <h3 style="margin: 0 0 4px 0; color: #111; font-size: 14px; font-weight: 600;">${area.name}${hqBadge}</h3>
          <p style="margin: 0 0 8px 0; color: #71717A; font-size: 12px;">Protecting since ${area.activeSince}</p>
          <a href="/get-a-quote" style="color: #EF4444; text-decoration: none; font-size: 12px; font-weight: 500;">Get a quote →</a>
        </div>
      `;

      marker.bindPopup(popupContent);
      markers.push(marker);
    });

    // Add polygon for primary coverage area
    const primaryArea = L.polygon([
      [-26.10, 28.00],
      [-26.10, 28.10],
      [-26.20, 28.10],
      [-26.20, 28.00]
    ], {
      color: '#EF4444',
      fillColor: '#EF4444',
      fillOpacity: 0.1,
      weight: 2
    }).addTo(map);

  });
</script>

<svelte:head>
  <title>Coverage Areas | Vision Tactical | Johannesburg Security</title>
  <meta
    name="description"
    content="View Vision Tactical's security coverage areas across Johannesburg including Houghton, Sandton, Rosebank, Norwood, and surrounding suburbs."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl" use:reveal>
        <p class="overline mb-4">COVERAGE AREAS</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Where We Operate
        </h1>
        <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Comprehensive security coverage across greater Johannesburg, 
          from Houghton to Sandton and beyond.
        </p>
      </div>
    </div>
  </section>

  <!-- MAP SECTION -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      <div class="card overflow-hidden" use:reveal>
        <div class="aspect-[21/9] md:aspect-[21/10] relative">
          <div bind:this={mapContainer} class="absolute inset-0 z-10"></div>
          <!-- Loading state -->
          <div class="absolute inset-0 bg-[#0F0F12] flex items-center justify-center z-0">
            <div class="text-center">
              <svg class="animate-spin h-10 w-10 text-red-500 mx-auto mb-4" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p class="text-zinc-500">Loading map...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex items-center justify-center gap-6 mt-6" use:reveal={{ delay: 100 }}>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <span class="text-zinc-400 text-sm">Coverage Area</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <span class="text-zinc-400 text-sm">Active Patrol</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ACCESSIBLE TABLE ALTERNATIVE -->
  <section class="container mx-auto px-4 pb-6">
    <details class="sr-visible">
      <summary class="text-zinc-500 text-sm cursor-pointer hover:text-zinc-300 transition-colors">
        Coverage areas list (text alternative for screen readers)
      </summary>
      <div class="mt-4 overflow-x-auto rounded border border-zinc-800">
        <table class="w-full text-sm bg-[#0F0F12] text-zinc-400 border-collapse">
          <thead>
            <tr class="border-b border-zinc-800">
              <th class="text-left px-4 py-3 font-semibold text-zinc-300">Area</th>
              <th class="text-left px-4 py-3 font-semibold text-zinc-300">Description</th>
              <th class="text-left px-4 py-3 font-semibold text-zinc-300">Active Since</th>
            </tr>
          </thead>
          <tbody>
            {#each coverageAreas as area}
              <tr class="border-b border-zinc-800 last:border-0">
                <td class="px-4 py-3 font-medium text-zinc-300">{area.name}</td>
                <td class="px-4 py-3">{area.description}</td>
                <td class="px-4 py-3">{area.activeSince}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </details>
  </section>

  <!-- SUBURBS GRID -->
  <section class="pb-24 bg-[#0F0F12] border-y border-zinc-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12" use:reveal>
        <p class="overline mb-4">SUBURBS</p>
        <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">
          Our Coverage Areas
        </h2>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          We provide comprehensive security services to these Johannesburg suburbs 
          and surrounding areas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each coverageAreas as area, i}
          <GlowCard>
            <div class="card p-6" use:reveal={{ delay: i * 50 }}>
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-white font-semibold text-lg">{area.name}</h3>
                <span class="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium">
                  Active
                </span>
              </div>
              <p class="text-zinc-400 text-sm mb-4">{area.description}</p>
              <div class="flex items-center justify-between">
                <span class="text-zinc-500 text-xs">Protecting since {area.activeSince}</span>
                <a
                  href="/get-a-quote"
                  class="text-red-500 hover:text-red-400 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Get quote
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
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
          Don't See Your Area?
        </h2>
        <p class="text-zinc-400 mb-8">
          We're constantly expanding our coverage. Contact us to check if we can 
          service your location.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" class="btn btn-primary px-8 py-4">
            Contact Us
          </a>
          <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">
            Call: 084 222 2222
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
