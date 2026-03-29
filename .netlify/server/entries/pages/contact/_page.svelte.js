import { h as head, b as attr, c as escape_html } from "../../../chunks/index.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    let formState = {
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: ""
    };
    let errors = {};
    let isSubmitting = false;
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact Us | Vision Tactical | Johannesburg Security</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Get in touch with Vision Tactical. Emergency: 084 222 2222. Email: info@visiontactical.co.za. Office: 46 Central Street, Houghton, Johannesburg." class="svelte-1bv7ezn"/>`);
    });
    $$renderer2.push(`<div class="bg-[#09090B] svelte-1bv7ezn"><section class="relative py-24 md:py-32 overflow-hidden svelte-1bv7ezn"><div class="glow-ambient glow-ambient-top svelte-1bv7ezn"></div> <div class="container mx-auto px-4 relative z-10 svelte-1bv7ezn"><div class="max-w-3xl svelte-1bv7ezn"><p class="overline mb-4 svelte-1bv7ezn">CONTACT US</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6 svelte-1bv7ezn">Get in Touch</h1> <p class="text-zinc-400 text-lg leading-relaxed svelte-1bv7ezn">Have a question or need security services? We're here to help.</p></div></div></section> <section class="pb-24 svelte-1bv7ezn"><div class="container mx-auto px-4 svelte-1bv7ezn"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12 svelte-1bv7ezn"><div class="lg:col-span-1 space-y-8 svelte-1bv7ezn"><div class="svelte-1bv7ezn"><h2 class="text-xl font-bold text-white mb-6 svelte-1bv7ezn">Contact Information</h2> <div class="space-y-6 svelte-1bv7ezn"><div class="flex items-start gap-4 svelte-1bv7ezn"><div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 svelte-1bv7ezn"><svg class="w-6 h-6 svelte-1bv7ezn" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" class="svelte-1bv7ezn"></path></svg></div> <div class="svelte-1bv7ezn"><p class="text-zinc-500 text-sm mb-1 svelte-1bv7ezn">Phone</p> <a href="tel:0842222222" class="text-white hover:text-red-500 transition-colors font-medium svelte-1bv7ezn">084 222 2222</a></div></div> <div class="flex items-start gap-4 svelte-1bv7ezn"><div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 svelte-1bv7ezn"><svg class="w-6 h-6 svelte-1bv7ezn" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" class="svelte-1bv7ezn"></path></svg></div> <div class="svelte-1bv7ezn"><p class="text-zinc-500 text-sm mb-1 svelte-1bv7ezn">Email</p> <a href="mailto:info@visiontactical.co.za" class="text-white hover:text-red-500 transition-colors font-medium svelte-1bv7ezn">info@visiontactical.co.za</a></div></div> <div class="flex items-start gap-4 svelte-1bv7ezn"><div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 svelte-1bv7ezn"><svg class="w-6 h-6 svelte-1bv7ezn" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" class="svelte-1bv7ezn"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" class="svelte-1bv7ezn"></path></svg></div> <div class="svelte-1bv7ezn"><p class="text-zinc-500 text-sm mb-1 svelte-1bv7ezn">Address</p> <p class="text-white svelte-1bv7ezn">46 Central Street, Houghton<br class="svelte-1bv7ezn"/>Johannesburg, South Africa</p></div></div> <div class="flex items-start gap-4 svelte-1bv7ezn"><div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 svelte-1bv7ezn"><svg class="w-6 h-6 svelte-1bv7ezn" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1bv7ezn"></path></svg></div> <div class="svelte-1bv7ezn"><p class="text-zinc-500 text-sm mb-1 svelte-1bv7ezn">Operating Hours</p> <p class="text-white text-sm svelte-1bv7ezn">Armed Response: 24/7</p> <p class="text-zinc-400 text-sm svelte-1bv7ezn">Office: Mon-Fri, 8am-5pm</p></div></div></div></div> <div class="p-6 card bg-red-500/10 border-red-500/30 svelte-1bv7ezn"><div class="flex items-center gap-3 mb-3 svelte-1bv7ezn"><svg class="w-6 h-6 text-red-500 svelte-1bv7ezn" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" class="svelte-1bv7ezn"></path></svg> <h3 class="text-white font-semibold svelte-1bv7ezn">Emergency?</h3></div> <p class="text-zinc-400 text-sm mb-4 svelte-1bv7ezn">For immediate assistance, call our 24/7 emergency line.</p> <a href="tel:0842222222" class="block text-center btn btn-primary svelte-1bv7ezn">Call 084 222 2222</a></div></div> <div class="lg:col-span-2 svelte-1bv7ezn"><div class="card p-8 svelte-1bv7ezn">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<form class="svelte-1bv7ezn"><h2 class="text-2xl font-bold text-white mb-6 svelte-1bv7ezn">Send us a Message</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 svelte-1bv7ezn"><div class="svelte-1bv7ezn"><label for="contactName" class="block text-sm font-medium text-zinc-300 mb-2 svelte-1bv7ezn">Full Name *</label> <input id="contactName" type="text"${attr("value", formState.name)} class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors svelte-1bv7ezn" placeholder="John Doe"/> `);
      if (errors.name) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1 svelte-1bv7ezn">${escape_html(errors.name)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="svelte-1bv7ezn"><label for="contactEmail" class="block text-sm font-medium text-zinc-300 mb-2 svelte-1bv7ezn">Email *</label> <input id="contactEmail" type="email"${attr("value", formState.email)} class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors svelte-1bv7ezn" placeholder="john@example.com"/> `);
      if (errors.email) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1 svelte-1bv7ezn">${escape_html(errors.email)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 svelte-1bv7ezn"><div class="svelte-1bv7ezn"><label for="contactPhone" class="block text-sm font-medium text-zinc-300 mb-2 svelte-1bv7ezn">Phone Number *</label> <input id="contactPhone" type="tel"${attr("value", formState.phone)} class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors svelte-1bv7ezn" placeholder="084 123 4567"/> `);
      if (errors.phone) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1 svelte-1bv7ezn">${escape_html(errors.phone)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="svelte-1bv7ezn"><label for="contactSubject" class="block text-sm font-medium text-zinc-300 mb-2 svelte-1bv7ezn">Subject *</label> `);
      $$renderer2.select(
        {
          id: "contactSubject",
          value: formState.subject,
          class: "w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
        },
        ($$renderer3) => {
          $$renderer3.option(
            { value: "general", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`General Inquiry`);
            },
            "svelte-1bv7ezn"
          );
          $$renderer3.option(
            { value: "quote", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`Request a Quote`);
            },
            "svelte-1bv7ezn"
          );
          $$renderer3.option(
            { value: "complaint", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`Complaint`);
            },
            "svelte-1bv7ezn"
          );
          $$renderer3.option(
            { value: "partnership", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`Partnership`);
            },
            "svelte-1bv7ezn"
          );
          $$renderer3.option(
            { value: "media", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`Media Inquiry`);
            },
            "svelte-1bv7ezn"
          );
          $$renderer3.option(
            { value: "other", class: "" },
            ($$renderer4) => {
              $$renderer4.push(`Other`);
            },
            "svelte-1bv7ezn"
          );
        },
        "svelte-1bv7ezn"
      );
      $$renderer2.push(`</div></div> <div class="mb-6 svelte-1bv7ezn"><label for="contactMessage" class="block text-sm font-medium text-zinc-300 mb-2 svelte-1bv7ezn">Message *</label> <textarea id="contactMessage" rows="5" class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors resize-none svelte-1bv7ezn" placeholder="How can we help you?">`);
      const $$body = escape_html(formState.message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea> `);
      if (errors.message) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1 svelte-1bv7ezn">${escape_html(errors.message)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (errors.form) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg svelte-1bv7ezn"><p class="text-red-400 text-sm svelte-1bv7ezn">${escape_html(errors.form)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <button type="submit"${attr("disabled", isSubmitting, true)} class="btn btn-primary px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto svelte-1bv7ezn">`);
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`Send Message`);
      }
      $$renderer2.push(`<!--]--></button></form>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></section> <section class="pb-24 svelte-1bv7ezn"><div class="container mx-auto px-4 svelte-1bv7ezn"><div class="card overflow-hidden svelte-1bv7ezn"><div class="aspect-[21/9] relative svelte-1bv7ezn"><div class="absolute inset-0 z-10 svelte-1bv7ezn"></div> <div class="absolute inset-0 bg-[#0F0F12] flex items-center justify-center z-0 svelte-1bv7ezn"><div class="animate-spin h-8 w-8 border-2 border-red-500 border-t-transparent rounded-full svelte-1bv7ezn"></div></div></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
