import { h as head, g as attr_style, d as stringify, c as escape_html, e as ensure_array_like, b as attr } from "../../../../chunks/index.js";
import { G as GlowCard } from "../../../../chunks/GlowCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1orga13", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.service?.seo.title ?? "Service Not Found")} | Vision Tactical</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.service?.seo.description ?? "")}/>`);
    });
    if (data.service) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="bg-[#09090B]"><section class="relative min-h-[60vh] flex items-center overflow-hidden"><div class="absolute inset-0 z-0"><div class="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B] z-10"></div> <div class="absolute inset-0 bg-cover bg-center"${attr_style(`background-image: url('/images/services/${stringify(data.service.slug)}.jpg')`)}></div></div> <div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-20 py-32"><div class="max-w-4xl"><p class="overline mb-4">OUR SERVICES</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">${escape_html(data.service.title)}</h1> <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">${escape_html(data.service.shortDescription)}</p></div></div></section> <section class="py-24"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="lg:col-span-2 space-y-16"><div><h2 class="text-2xl font-bold text-white mb-6">Overview</h2> <div class="prose prose-invert max-w-none"><!--[-->`);
      const each_array = ensure_array_like(data.service.content.intro.split("\n\n"));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let paragraph = each_array[$$index];
        $$renderer2.push(`<p class="text-zinc-400 leading-relaxed mb-4">${escape_html(paragraph)}</p>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div><h2 class="text-2xl font-bold text-white mb-6">Key Features</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      const each_array_1 = ensure_array_like(data.service.content.features);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let feature = each_array_1[$$index_1];
        GlowCard($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="p-6"><div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h3 class="text-white font-semibold mb-2">${escape_html(feature.title)}</h3> <p class="text-zinc-400 text-sm leading-relaxed">${escape_html(feature.description)}</p></div>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div> <div><h2 class="text-2xl font-bold text-white mb-6">How It Works</h2> <div class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(data.service.content.process);
      for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
        let step = each_array_2[i];
        $$renderer2.push(`<div class="flex gap-6"><div class="flex-shrink-0"><div class="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 font-bold">${escape_html(step.step)}</div></div> <div class="pt-2"><h3 class="text-white font-semibold mb-2">${escape_html(step.title)}</h3> <p class="text-zinc-400 text-sm leading-relaxed">${escape_html(step.description)}</p></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="card p-8"><h2 class="text-2xl font-bold text-white mb-4">Why Choose Vision Tactical?</h2> <p class="text-zinc-400 leading-relaxed">${escape_html(data.service.content.whyVisionTactical)}</p></div></div> <div class="lg:col-span-1"><div class="sticky top-24 space-y-6">`);
      GlowCard($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="card p-6 bg-gradient-to-br from-red-900/20 to-[#0F0F12]"><h3 class="text-white font-semibold mb-2">Get a Quote</h3> <p class="text-zinc-400 text-sm mb-6">Ready to secure your property? Get a free, no-obligation quote today.</p> <a${attr("href", data.service.cta.href)} class="btn btn-primary w-full justify-center">${escape_html(data.service.cta.text)}</a></div>`);
        }
      });
      $$renderer2.push(`<!----> <div class="card p-6 border-red-500/30"><div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg></div> <div><p class="text-zinc-400 text-xs uppercase tracking-wider">24/7 Emergency</p> <a href="tel:0842222222" class="text-white font-bold text-lg hover:text-red-500 transition-colors">084 222 2222</a></div></div> <p class="text-zinc-500 text-sm">For immediate assistance, call our emergency line any time, day or night.</p></div> `);
      if (data.relatedServices && data.relatedServices.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div><h3 class="text-white font-semibold mb-4">Related Services</h3> <div class="space-y-3"><!--[-->`);
        const each_array_3 = ensure_array_like(data.relatedServices.slice(0, 3));
        for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
          let related = each_array_3[$$index_3];
          $$renderer2.push(`<a${attr("href", `/services/${stringify(related.slug)}`)} class="block card p-4 hover:border-red-500/50 transition-colors group"><div class="flex items-center justify-between"><span class="text-zinc-400 group-hover:text-white transition-colors text-sm">${escape_html(related.title)}</span> <svg class="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></a>`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div></div></div></section> <section class="py-16 border-t border-zinc-800"><div class="container mx-auto px-4"><a href="/services" class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> Back to All Services</a></div></section></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="min-h-screen flex items-center justify-center bg-[#09090B]"><div class="text-center"><h1 class="text-4xl font-bold text-white mb-4">Service Not Found</h1> <p class="text-zinc-400 mb-8">The service you're looking for doesn't exist.</p> <a href="/services" class="btn btn-primary">View All Services</a></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
