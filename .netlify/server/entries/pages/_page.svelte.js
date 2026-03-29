import { g as attr_style, d as stringify, h as head, e as ensure_array_like, c as escape_html, b as attr } from "../../chunks/index.js";
import { G as GlowCard } from "../../chunks/GlowCard.js";
import { g as getAllServices } from "../../chunks/services.js";
import { p as partnerships } from "../../chunks/partnerships.js";
import { S as SEOHead } from "../../chunks/SEOHead.js";
function Spotlight($$renderer, $$props) {
  let { children } = $$props;
  let mouseX = 50;
  let mouseY = 50;
  $$renderer.push(`<div class="spotlight-container"${attr_style(`--spot-x: ${stringify(mouseX)}%; --spot-y: ${stringify(mouseY)}%;`)} role="region" aria-label="Interactive spotlight section"><div class="spotlight-layer"></div> <div class="relative z-10">`);
  if (children) {
    $$renderer.push("<!--[0-->");
    children($$renderer);
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div></div>`);
}
const testimonials = [
  {
    id: "1",
    quote: "Vision Tactical has been protecting our estate for over three years. Their professionalism and rapid response times give us peace of mind every day.",
    author: "Michael R.",
    location: "Dainfern Estate"
  },
  {
    id: "2",
    quote: "The Anti-Kidnapping Unit rescued my son within 48 hours. I cannot thank Yaseen and his team enough for their dedication and compassion.",
    author: "Sarah M.",
    location: "Sandton"
  },
  {
    id: "3",
    quote: "We use Vision Tactical for all our corporate events. Their team is professional, discreet, and highly effective. Highly recommended.",
    author: "David K.",
    location: "Rosebank"
  },
  {
    id: "4",
    quote: "After a break-in at our warehouse, Vision Tactical installed a comprehensive CCTV system and provided manned guards. No incidents since.",
    author: "Priya N.",
    location: "Midrand"
  },
  {
    id: "5",
    quote: "The drone surveillance service is incredible. They spotted suspects before they could even attempt a burglary. True innovation in security.",
    author: "James T.",
    location: "Houghton"
  }
];
const stats = {
  arrests: 168,
  kidnappingCases: 94,
  vehiclesSeized: 48
};
function JsonLd($$renderer, $$props) {
  head("tpukq0", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<script type="application/ld+json">
    {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }
  <\/script>`);
    $$renderer2.push(`<!---->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const services = getAllServices().slice(0, 6);
    const seoTitle = "Vision Tactical | Surveillance & Security Solutions | Johannesburg";
    const seoDescription = "Johannesburg's most trusted private security company. Armed response, manned guarding, drone surveillance, VIP protection, and emergency medical services.";
    ({
      services: getAllServices().map((s) => s.title)
    });
    SEOHead($$renderer2, { title: seoTitle, description: seoDescription });
    $$renderer2.push(`<!----> `);
    JsonLd($$renderer2);
    $$renderer2.push(`<!----> <div class="bg-[#09090B]"><section class="relative min-h-screen flex items-center justify-center overflow-hidden"><div class="absolute inset-0 z-0"><div class="absolute inset-0 bg-gradient-to-b from-[#09090B]/80 via-[#09090B]/60 to-[#09090B] z-10"></div> <picture class="absolute inset-0"><source srcset="/images/hero/main-1280.webp 1280w, /images/hero/main-2560.webp 2560w" sizes="100vw" type="image/webp"/> <img src="/images/hero/main-2560.webp" alt="Vision Tactical security operations" class="w-full h-full object-cover" loading="eager" fetchpriority="high" width="2560" height="1440"/></picture></div> <div class="glow-ambient glow-ambient-top"></div> `);
    Spotlight($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="container mx-auto px-4 py-32 relative z-20 text-center"><p class="overline mb-6">PROTECTING COMMUNITIES · PREVENTING CRIME</p> <h1 class="heading-gradient mb-6 max-w-4xl mx-auto">Security That Never Sleeps</h1> <p class="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Johannesburg's most trusted private security company.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="/get-a-quote" class="btn btn-primary px-8 py-4 text-base">Get Protected Today</a> <a href="/services" class="btn btn-secondary px-8 py-4 text-base">Our Services</a></div> <div class="mt-20 pt-10 border-t border-zinc-800"><p class="text-zinc-500 text-sm mb-6">TRUSTED BY 34,700+ COMMUNITY MEMBERS</p> <div class="flex flex-wrap items-center justify-center gap-8 text-zinc-400 text-sm"><span class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> 2025 Excellence Award</span> <span class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg> 168+ Arrests</span> <span class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> ER24 Partner</span> <span class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg> PSIRA Registered</span></div></div></div>`);
      }
    });
    $$renderer2.push(`<!----></section> <section class="section relative"><div class="container mx-auto px-4"><div class="text-center mb-16"><p class="overline mb-4">OUR SERVICES</p> <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Solutions</h2> <p class="text-zinc-400 max-w-2xl mx-auto">From armed response to drone surveillance, we provide end-to-end security
          services tailored to your needs.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    const each_array = ensure_array_like(services);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let service = each_array[i];
      GlowCard($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<a${attr("href", `/services/${stringify(service.slug)}`)} class="block p-6 h-full"><div class="text-red-500 mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h3 class="text-white font-semibold text-lg mb-2">${escape_html(service.title)}</h3> <p class="text-zinc-400 text-sm leading-relaxed mb-4">${escape_html(service.shortDescription)}</p> <span class="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors inline-flex items-center gap-1">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
        }
      });
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center mt-12"><a href="/services" class="btn btn-secondary">View All Services</a></div></div></section> <section class="section relative bg-[#0F0F12] border-y border-zinc-800"><div class="glow-ambient glow-ambient-bottom"></div> <div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-2 md:grid-cols-4 gap-8"><div class="text-center"><p class="text-4xl md:text-5xl font-bold text-white mb-2"><span>${escape_html(stats.arrests)}</span>+</p> <p class="text-zinc-500 text-sm uppercase tracking-wider">Arrests</p></div> <div class="text-center"><p class="text-4xl md:text-5xl font-bold text-white mb-2"><span>${escape_html(stats.kidnappingCases)}</span></p> <p class="text-zinc-500 text-sm uppercase tracking-wider">Kidnapping Cases</p></div> <div class="text-center"><p class="text-4xl md:text-5xl font-bold text-white mb-2"><span>${escape_html(stats.vehiclesSeized)}</span>+</p> <p class="text-zinc-500 text-sm uppercase tracking-wider">Vehicles Seized</p></div> <div class="text-center"><p class="text-4xl md:text-5xl font-bold text-white mb-2">R700M+</p> <p class="text-zinc-500 text-sm uppercase tracking-wider">Ransoms Prevented</p></div></div></div></section> <section class="section relative"><div class="container mx-auto px-4"><div class="text-center mb-12"><p class="overline mb-4">PARTNERSHIPS &amp; ACCREDITATIONS</p> <h2 class="heading-gradient text-2xl md:text-3xl font-bold mb-4">Trusted Network, Integrated Response</h2> <p class="text-zinc-400 max-w-2xl mx-auto text-sm">One call dispatches armed response, paramedics, and vehicle tracking. Our partnerships
          with leading medical, intelligence, and technology providers create a comprehensive safety net.</p></div> <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"><!--[-->`);
    const each_array_1 = ensure_array_like(partnerships);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let partner = each_array_1[i];
      $$renderer2.push(`<div class="card p-4 text-center group hover:border-zinc-600 transition-colors"><p class="text-white text-sm font-semibold mb-1">${escape_html(partner.name)}</p> <p class="text-zinc-500 text-[10px] uppercase tracking-wider leading-tight">${escape_html(partner.tagline)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center mt-8"><a href="/about#partnerships" class="text-zinc-500 hover:text-red-400 text-sm transition-colors inline-flex items-center gap-1">Learn more about our partnerships <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section> <section class="section relative"><div class="container mx-auto px-4"><div class="text-center mb-16"><p class="overline mb-4">TESTIMONIALS</p> <h2 class="heading-gradient text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
    const each_array_2 = ensure_array_like(testimonials);
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      let testimonial = each_array_2[i];
      $$renderer2.push(`<div class="card p-6"><div class="flex gap-1 mb-4"><!--[-->`);
      const each_array_3 = ensure_array_like([1, 2, 3, 4, 5]);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        each_array_3[$$index_2];
        $$renderer2.push(`<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
      }
      $$renderer2.push(`<!--]--></div> <p class="text-zinc-300 mb-6 leading-relaxed">"${escape_html(testimonial.quote)}"</p> <div><p class="text-white font-medium text-sm">${escape_html(testimonial.author)}</p> <p class="text-zinc-500 text-xs">${escape_html(testimonial.location)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section relative overflow-hidden"><div class="absolute inset-0 bg-red-600/5"></div> <div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-10"><div class="card p-8 md:p-12 text-center"><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Secure Your Property?</h2> <p class="text-zinc-400 mb-8 max-w-xl mx-auto">Get a free, no-obligation quote today. Our team will assess your security needs
          and provide a tailored solution.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="/get-a-quote" class="btn btn-primary px-8 py-4">Get a Free Quote</a> <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">Or Call Us: 084 222 2222</a></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
