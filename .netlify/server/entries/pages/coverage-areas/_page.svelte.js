import { h as head, e as ensure_array_like, c as escape_html } from "../../../chunks/index.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { c as coverageAreas } from "../../../chunks/areas.js";
import { G as GlowCard } from "../../../chunks/GlowCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    head("1qbp2s2", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Coverage Areas | Vision Tactical | Johannesburg Security</title>`);
      });
      $$renderer3.push(`<meta name="description" content="View Vision Tactical's security coverage areas across Johannesburg including Houghton, Sandton, Rosebank, Norwood, and surrounding suburbs." class="svelte-1qbp2s2"/>`);
    });
    $$renderer2.push(`<div class="bg-[#09090B] svelte-1qbp2s2"><section class="relative py-24 md:py-32 overflow-hidden svelte-1qbp2s2"><div class="glow-ambient glow-ambient-top svelte-1qbp2s2"></div> <div class="container mx-auto px-4 relative z-10 svelte-1qbp2s2"><div class="max-w-4xl svelte-1qbp2s2"><p class="overline mb-4 svelte-1qbp2s2">COVERAGE AREAS</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6 svelte-1qbp2s2">Where We Operate</h1> <p class="text-zinc-400 text-lg md:text-xl leading-relaxed svelte-1qbp2s2">Comprehensive security coverage across greater Johannesburg, 
          from Houghton to Sandton and beyond.</p></div></div></section> <section class="pb-24 svelte-1qbp2s2"><div class="container mx-auto px-4 svelte-1qbp2s2"><div class="card overflow-hidden svelte-1qbp2s2"><div class="aspect-[21/9] md:aspect-[21/10] relative svelte-1qbp2s2"><div class="absolute inset-0 z-10 svelte-1qbp2s2"></div> <div class="absolute inset-0 bg-[#0F0F12] flex items-center justify-center z-0 svelte-1qbp2s2"><div class="text-center svelte-1qbp2s2"><svg class="animate-spin h-10 w-10 text-red-500 mx-auto mb-4 svelte-1qbp2s2" viewBox="0 0 24 24"><circle class="opacity-25 svelte-1qbp2s2" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75 svelte-1qbp2s2" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <p class="text-zinc-500 svelte-1qbp2s2">Loading map...</p></div></div></div></div> <div class="flex items-center justify-center gap-6 mt-6 svelte-1qbp2s2"><div class="flex items-center gap-2 svelte-1qbp2s2"><div class="w-3 h-3 rounded-full bg-red-500 svelte-1qbp2s2"></div> <span class="text-zinc-400 text-sm svelte-1qbp2s2">Coverage Area</span></div> <div class="flex items-center gap-2 svelte-1qbp2s2"><div class="w-3 h-3 rounded-full bg-red-500 animate-pulse svelte-1qbp2s2"></div> <span class="text-zinc-400 text-sm svelte-1qbp2s2">Active Patrol</span></div></div></div></section> <section class="container mx-auto px-4 pb-6 svelte-1qbp2s2"><details class="sr-visible svelte-1qbp2s2"><summary class="text-zinc-500 text-sm cursor-pointer hover:text-zinc-300 transition-colors svelte-1qbp2s2">Coverage areas list (text alternative for screen readers)</summary> <div class="mt-4 overflow-x-auto rounded border border-zinc-800 svelte-1qbp2s2"><table class="w-full text-sm bg-[#0F0F12] text-zinc-400 border-collapse svelte-1qbp2s2"><thead class="svelte-1qbp2s2"><tr class="border-b border-zinc-800 svelte-1qbp2s2"><th class="text-left px-4 py-3 font-semibold text-zinc-300 svelte-1qbp2s2">Area</th><th class="text-left px-4 py-3 font-semibold text-zinc-300 svelte-1qbp2s2">Description</th><th class="text-left px-4 py-3 font-semibold text-zinc-300 svelte-1qbp2s2">Active Since</th></tr></thead><tbody class="svelte-1qbp2s2"><!--[-->`);
    const each_array = ensure_array_like(coverageAreas);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let area = each_array[$$index];
      $$renderer2.push(`<tr class="border-b border-zinc-800 last:border-0 svelte-1qbp2s2"><td class="px-4 py-3 font-medium text-zinc-300 svelte-1qbp2s2">${escape_html(area.name)}</td><td class="px-4 py-3 svelte-1qbp2s2">${escape_html(area.description)}</td><td class="px-4 py-3 svelte-1qbp2s2">${escape_html(area.activeSince)}</td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div></details></section> <section class="pb-24 bg-[#0F0F12] border-y border-zinc-800 svelte-1qbp2s2"><div class="container mx-auto px-4 svelte-1qbp2s2"><div class="text-center mb-12 svelte-1qbp2s2"><p class="overline mb-4 svelte-1qbp2s2">SUBURBS</p> <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4 svelte-1qbp2s2">Our Coverage Areas</h2> <p class="text-zinc-400 max-w-2xl mx-auto svelte-1qbp2s2">We provide comprehensive security services to these Johannesburg suburbs 
          and surrounding areas.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 svelte-1qbp2s2"><!--[-->`);
    const each_array_1 = ensure_array_like(coverageAreas);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let area = each_array_1[i];
      GlowCard($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="card p-6 svelte-1qbp2s2"><div class="flex items-start justify-between mb-3 svelte-1qbp2s2"><h3 class="text-white font-semibold text-lg svelte-1qbp2s2">${escape_html(area.name)}</h3> <span class="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium svelte-1qbp2s2">Active</span></div> <p class="text-zinc-400 text-sm mb-4 svelte-1qbp2s2">${escape_html(area.description)}</p> <div class="flex items-center justify-between svelte-1qbp2s2"><span class="text-zinc-500 text-xs svelte-1qbp2s2">Protecting since ${escape_html(area.activeSince)}</span> <a href="/get-a-quote" class="text-red-500 hover:text-red-400 text-sm font-medium inline-flex items-center gap-1 transition-colors svelte-1qbp2s2">Get quote <svg class="w-4 h-4 svelte-1qbp2s2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="svelte-1qbp2s2"></path></svg></a></div></div>`);
        }
      });
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="py-24 relative overflow-hidden svelte-1qbp2s2"><div class="absolute inset-0 bg-red-600/5 svelte-1qbp2s2"></div> <div class="glow-ambient glow-ambient-bottom svelte-1qbp2s2"></div> <div class="container mx-auto px-4 relative z-10 svelte-1qbp2s2"><div class="card p-8 md:p-12 text-center max-w-3xl mx-auto svelte-1qbp2s2"><h2 class="text-2xl md:text-3xl font-bold text-white mb-4 svelte-1qbp2s2">Don't See Your Area?</h2> <p class="text-zinc-400 mb-8 svelte-1qbp2s2">We're constantly expanding our coverage. Contact us to check if we can
          service your location.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 svelte-1qbp2s2"><a href="/contact" class="btn btn-primary px-8 py-4 svelte-1qbp2s2">Contact Us</a> <a href="tel:0842222222" class="btn btn-secondary px-8 py-4 svelte-1qbp2s2">Call: 084 222 2222</a></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
