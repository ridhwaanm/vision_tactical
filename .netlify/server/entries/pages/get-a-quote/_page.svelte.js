import { h as head, e as ensure_array_like, a as attr_class, d as stringify, c as escape_html } from "../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentStep = 1;
    let formData = {
      clientType: ""
    };
    let errors = {};
    head("1yk8up0", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Get a Quote | Vision Tactical | Free Security Quote</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Get a free, no-obligation quote for your security needs. Quick and easy online quote request for residential and commercial security services."/>`);
    });
    $$renderer2.push(`<div class="bg-[#09090B]"><section class="relative py-24 md:py-32 overflow-hidden"><div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-10"><div class="max-w-3xl"><p class="overline mb-4">GET A QUOTE</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">Request a Free Quote</h1> <p class="text-zinc-400 text-lg leading-relaxed">Tell us about your security needs and we'll provide a tailored 
          solution within 24 hours.</p></div></div></section> <section class="pb-24"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto"><div class="mb-12"><div class="flex items-center justify-between"><!--[-->`);
    const each_array = ensure_array_like([
      { step: 1, label: "Services" },
      { step: 2, label: "Property" },
      { step: 3, label: "Details" },
      { step: 4, label: "Confirm" }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="flex items-center flex-1"><div${attr_class(`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-colors ${stringify(currentStep >= item.step ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-500")}`)}>`);
      if (currentStep > item.step) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(item.step)}`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (item.step < 4) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div${attr_class(`flex-1 h-1 mx-4 ${stringify(currentStep > item.step ? "bg-red-500" : "bg-zinc-800")}`)}></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex justify-between mt-3"><!--[-->`);
    const each_array_1 = ensure_array_like(["Services", "Property", "Your Details", "Confirmation"]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let label = each_array_1[$$index_1];
      $$renderer2.push(`<span class="text-xs text-zinc-500 hidden sm:block">${escape_html(label)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="card p-8">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<form>`);
      {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div><h2 class="text-2xl font-bold text-white mb-2">What do you need?</h2> <p class="text-zinc-400 mb-8">Select your client type and services required.</p> <div class="mb-8"><p class="block text-sm font-medium text-zinc-300 mb-4">Client Type *</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><!--[-->`);
        const each_array_2 = ensure_array_like([
          { value: "residential", label: "Residential Security" },
          { value: "commercial", label: "Commercial Security" },
          { value: "corporate", label: "Corporate Security" },
          { value: "event", label: "Event Security" },
          { value: "vip", label: "VIP Protection" }
        ]);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let option = each_array_2[$$index_2];
          $$renderer2.push(`<button type="button"${attr_class(`p-4 rounded-lg border text-left transition-colors ${stringify(formData.clientType === option.value ? "border-red-500 bg-red-500/10 text-white" : "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600")}`)}>${escape_html(option.label)}</button>`);
        }
        $$renderer2.push(`<!--]--></div> `);
        if (errors.clientType) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-red-500 text-sm mt-2">${escape_html(errors.clientType)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex justify-between mt-8 pt-6 border-t border-zinc-800">`);
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button type="button" class="btn btn-primary px-6 py-3">Next</button>`);
      }
      $$renderer2.push(`<!--]--></div></form>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8 p-6 card bg-red-500/10 border-red-500/30 text-center"><p class="text-red-400 font-medium">For emergencies, call us directly: <a href="tel:0842222222" class="underline hover:text-red-300">084 222 2222</a></p></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
