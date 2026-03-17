import { h as head, e as ensure_array_like, a as attr_class, c as escape_html, aa as derived, d as stringify } from "../../../chunks/index.js";
const faqItems = [
  // General
  {
    question: "What areas do you cover?",
    answer: "Vision Tactical primarily covers the greater Johannesburg area, including Houghton, Norwood, Killarney, Melrose, Rosebank, Sandton, Parktown, Illovo, Hyde Park, and Bryanston. Our Anti-Kidnapping Unit operates nationally in partnership with SAPS.",
    category: "General"
  },
  {
    question: "How do I become a client?",
    answer: "Contact us via phone, email, or our website quote form. We will conduct a free security assessment of your property and provide a tailored quote. Once you approve, we can typically deploy within 48-72 hours.",
    category: "General"
  },
  {
    question: "Are you PSIRA registered?",
    answer: "Yes, Vision Tactical and all our security officers are fully registered with the Private Security Industry Regulatory Authority (PSIRA). You can verify our registration on the PSIRA website.",
    category: "General"
  },
  {
    question: "Do you offer 24/7 services?",
    answer: "Yes, our armed response unit, control room, and emergency contact lines operate 24 hours a day, 7 days a week, 365 days a year. Office administrative functions operate Monday to Friday, 8am to 5pm.",
    category: "General"
  },
  // Armed Response
  {
    question: "What is your average response time?",
    answer: "In our core coverage areas, our average response time is under 5 minutes. Response times may vary based on traffic conditions, weather, and simultaneous incidents.",
    category: "Armed Response"
  },
  {
    question: "What happens when my alarm triggers?",
    answer: "When your alarm triggers, a signal is sent to our 24/7 control room. Our controllers will attempt to verify the alarm via CCTV or phone contact, then immediately dispatch the nearest available reaction vehicle. You will receive an SMS notification.",
    category: "Armed Response"
  },
  {
    question: "Do I need CCTV to subscribe to armed response?",
    answer: "No, CCTV is not required. However, we highly recommend it as it significantly improves our ability to verify alarms and respond appropriately. We offer integrated CCTV packages at competitive prices.",
    category: "Armed Response"
  },
  {
    question: "Can I use your armed response with my existing alarm system?",
    answer: "In most cases, yes. We work with all major alarm system manufacturers. We may need to install a communicator compatible with our control room systems. Our technicians will assess your existing equipment during the installation survey.",
    category: "Armed Response"
  },
  // Billing
  {
    question: "How much does security cost?",
    answer: "Pricing varies based on the services required, property size, risk profile, and location. We provide free, no-obligation quotes after conducting a thorough security assessment. Contact us for a personalised quote.",
    category: "Billing"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept EFT, credit card, debit order, and cash payments. Monthly subscriptions are typically paid via debit order or EFT. Corporate clients can arrange for monthly invoicing.",
    category: "Billing"
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, subscriptions can be cancelled with one calendar month written notice. Please note that installation fees and equipment may be subject to separate terms if cancelled within the first 12 months.",
    category: "Billing"
  },
  {
    question: "Do you offer discounts for estates or complexes?",
    answer: "Yes, we offer preferential rates for body corporates, home owners associations, and estate management. Group subscriptions allow us to deploy resources more efficiently, and we pass these savings on to clients.",
    category: "Billing"
  },
  // Technology
  {
    question: "Do you use drones for surveillance?",
    answer: "Yes, Vision Tactical pioneered drone surveillance in South African private security. Our SACAA-licensed drone unit provides aerial reconnaissance, thermal imaging, and real-time intelligence for operations.",
    category: "Technology"
  },
  {
    question: "Can I view my CCTV cameras remotely?",
    answer: "Yes, all our CCTV systems include smartphone and computer access. You can view live feeds and recorded footage from anywhere in the world with an internet connection.",
    category: "Technology"
  },
  {
    question: "Do you have a mobile app?",
    answer: "We offer remote access apps for CCTV systems and alarm control. Our control room also provides SMS and email notifications for alarm events. Ask our team about the latest app options during your consultation.",
    category: "Technology"
  }
];
function getAllFAQCategories() {
  const categories = faqItems.map((item) => item.category);
  return [...new Set(categories)];
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedCategory = "All";
    const categories = ["All", ...getAllFAQCategories()];
    let filteredItems = derived(
      () => faqItems
    );
    head("1bex8oj", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>FAQ | Vision Tactical | Frequently Asked Questions</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Find answers to common questions about Vision Tactical security services, coverage areas, billing, and technology."/> `);
      $$renderer3.push(`<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vision Tactical primarily covers the greater Johannesburg area, including Houghton, Norwood, Killarney, Melrose, Rosebank, Sandton, Parktown, Illovo, Hyde Park, and Bryanston. Our Anti-Kidnapping Unit operates nationally in partnership with SAPS."
          }
        },
        {
          "@type": "Question",
          "name": "How do I become a client?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact us via phone, email, or our website quote form. We will conduct a free security assessment and provide a tailored quote."
          }
        },
        {
          "@type": "Question",
          "name": "Are you PSIRA registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Vision Tactical and all our security officers are fully registered with the Private Security Industry Regulatory Authority (PSIRA)."
          }
        }
      ]
    }
  <\/script>`);
    });
    $$renderer2.push(`<div class="bg-[#09090B]"><section class="relative py-24 md:py-32 overflow-hidden"><div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-10"><div class="max-w-3xl"><p class="overline mb-4">FAQ</p> <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1> <p class="text-zinc-400 text-lg leading-relaxed">Find answers to common questions about our services, coverage, 
          billing, and technology.</p></div></div></section> <section class="pb-12"><div class="container mx-auto px-4"><div class="flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${stringify(selectedCategory === category ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700")}`)}>${escape_html(category)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="pb-24"><div class="container mx-auto px-4"><div class="max-w-3xl mx-auto space-y-4"><!--[-->`);
    const each_array_1 = ensure_array_like(filteredItems());
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let item = each_array_1[i];
      $$renderer2.push(`<details class="group card"><summary class="flex items-center justify-between p-6 cursor-pointer list-none"><h3 class="text-white font-medium pr-8">${escape_html(item.question)}</h3> <svg class="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary> <div class="px-6 pb-6"><p class="text-zinc-400 leading-relaxed">${escape_html(item.answer)}</p></div></details>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (filteredItems().length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-center py-12"><p class="text-zinc-500">No questions found in this category.</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></section> <section class="py-24 relative overflow-hidden"><div class="absolute inset-0 bg-red-600/5"></div> <div class="glow-ambient glow-ambient-bottom"></div> <div class="container mx-auto px-4 relative z-10"><div class="card p-8 md:p-12 text-center max-w-3xl mx-auto"><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2> <p class="text-zinc-400 mb-8">Our team is here to help. Contact us for any questions not covered 
          in our FAQ.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="/contact" class="btn btn-primary px-8 py-4">Contact Us</a> <a href="tel:0842222222" class="btn btn-secondary px-8 py-4">Call: 084 222 2222</a></div></div></div></section></div>`);
  });
}
export {
  _page as default
};
