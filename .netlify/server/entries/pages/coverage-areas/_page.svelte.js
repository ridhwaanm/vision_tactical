import { h as head, e as ensure_array_like, c as escape_html } from "../../../chunks/index.js";
import { c as coverageAreas } from "../../../chunks/areas.js";
import { G as GlowCard } from "../../../chunks/GlowCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1qbp2s2", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Coverage Areas | Vision Tactical | Johannesburg Security</title>`);
      });
      $$renderer3.push(`<meta name="description" content="View Vision Tactical's security coverage areas across Johannesburg including Houghton, Sandton, Rosebank, Norwood, and surrounding suburbs."/>`);
    });
    $$renderer2.push(`<div class="bg-[#09090B]"><section class="relative py-24 md:py-32 overflow-hidden"><div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl"><p class="overline mb-4">COVERAGE AREAS</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">Where We Operate</h1> <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">Comprehensive security coverage across greater Johannesburg, 
          from Houghton to Sandton and beyond.</p></div></div></section> <section class="pb-24"><div class="container mx-auto px-4"><div class="card overflow-hidden"><div class="aspect-[21/9] md:aspect-[21/10] relative"><div class="absolute inset-0 z-10"></div> <div class="absolute inset-0 bg-[#0F0F12] flex items-center justify-center z-0"><div class="text-center"><svg class="animate-spin h-10 w-10 text-red-500 mx-auto mb-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <p class="text-zinc-500">Loading map...</p></div></div></div></div> <div class="flex items-center justify-center gap-6 mt-6"><div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-red-500"></div> <span class="text-zinc-400 text-sm">Coverage Area</span></div> <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div> <span class="text-zinc-400 text-sm">Active Patrol</span></div></div></div></section> <section class="pb-24 bg-[#0F0F12] border-y border-zinc-800"><div class="container mx-auto px-4"><div class="text-center mb-12"><p class="overline mb-4">SUBURBS</p> <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">Our Coverage Areas</h2> <p class="text-zinc-400 max-w-2xl mx-auto">We provide comprehensive security services to these Johannesburg suburbs 
          and surrounding areas.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    const each_array = ensure_array_like(coverageAreas);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let area = each_array[i];
      GlowCard($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="card p-6"><div class="flex items-start justify-between mb-3"><h3 class="text-white font-semibold text-lg">${escape_html(area.name)}</h3> <span class="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-medium">Active</span></div> <p class="text-zinc-400 text-sm mb-4">${escape_html(area.description)}</p> <div class="flex items-center justify-between"><span class="text-zinc-500 text-xs">Protecting since ${escape_html(area.activeSince)}</span> <a href="/get-a-quote" class="text-red-500 hover:text-red-400 text-sm font-medium inline-flex items-center gap-1 transition-colors">Get quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div>`);
        }
      });
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="py-24 relative overflow-hidden"><div class="absolute inset-0 bg-red-600/5"></div> <div class="glow-ambient glow-ambient-bottom"></div> <div class="container mx-auto px-4 relative z-10"><div class="card p-8 md:p-12 text-center max-w-3xl mx-auto"><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Don't See Your Area?</h2> <p class="text-zinc-400 mb-8">We're constantly expanding our coverage. Contact us to check if we can 
          service your location.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="/contact" class="btn btn-primary px-8 py-4">Contact Us</a> <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">Call: 084 222 2222</a></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
