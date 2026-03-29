import "clsx";
import { a as attr_class, e as ensure_array_like, b as attr, c as escape_html, d as stringify, f as store_get, u as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { nav } = $$props;
    let mobileMenuOpen = false;
    let servicesDropdownOpen = false;
    const emergencyPhone = "084 222 2222";
    $$renderer2.push(`<header${attr_class(`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stringify("bg-transparent")}`)}><div class="container mx-auto px-4"><div class="flex items-center justify-between h-20"><a href="/" class="flex items-center space-x-2 group"><img src="/images/logo-navbar.svg" alt="Vision Tactical" class="h-10 w-auto transition-opacity group-hover:opacity-80"/></a> <nav class="hidden lg:flex items-center space-x-1"><!--[-->`);
    const each_array = ensure_array_like(nav);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array[$$index_1];
      if (item.children) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="relative"><button${attr_class(`nav-link-gradient flex items-center space-x-1 px-4 py-2 rounded-md text-sm ${stringify("")}`)}${attr("aria-expanded", servicesDropdownOpen)}><span>${escape_html(item.label)}</span> <svg${attr_class(`w-4 h-4 transition-transform ${stringify("")}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
        {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`nav-link-gradient px-4 py-2 rounded-md text-sm ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "active" : "")}`)}>${escape_html(item.label)}</a>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="hidden lg:flex items-center space-x-4"><a${attr("href", `tel:${stringify(emergencyPhone)}`)} class="flex items-center space-x-2 text-red-500 font-medium text-sm hover:text-red-400 transition-colors"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> <span>084 222 2222</span></a> <a href="/get-a-quote" class="btn btn-primary text-sm">Get a Quote</a></div> <button class="lg:hidden text-zinc-400 hover:text-white p-2 transition-colors" aria-label="Toggle menu"${attr("aria-expanded", mobileMenuOpen)}>`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const socialLinks = [
      {
        name: "Facebook",
        href: "https://www.facebook.com/visiontacticalZA/",
        icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      },
      {
        name: "X (Twitter)",
        href: "https://x.com/visiontactical",
        icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/visiontactical",
        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@VisionTacticalZA",
        icon: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/vision-tactical/?originalSubdomain=za",
        icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      }
    ];
    $$renderer2.push(`<footer class="bg-[#09090B] border-t border-zinc-800"><div class="container mx-auto px-4 py-16"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"><div><img src="/images/logo-navbar.svg" alt="Vision Tactical" class="h-10 w-auto mb-6"/> <p class="text-zinc-400 text-sm leading-relaxed mb-6">Vision Tactical is Johannesburg's trusted private security company, providing comprehensive
          security solutions including armed response, manned guarding, drone surveillance, and
          VIP protection.</p> <div class="flex space-x-4"><!--[-->`);
    const each_array = ensure_array_like(socialLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="text-zinc-500 hover:text-red-500 transition-colors"${attr("aria-label", link.name)} target="_blank" rel="noopener noreferrer"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path${attr("d", link.icon)}></path></svg></a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h3 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3> <ul class="space-y-3"><li><a href="/about" class="text-zinc-400 hover:text-white transition-colors text-sm">About</a></li> <li><a href="/services" class="text-zinc-400 hover:text-white transition-colors text-sm">Services</a></li> <li><a href="/community" class="text-zinc-400 hover:text-white transition-colors text-sm">Community</a></li> <li><a href="/awards" class="text-zinc-400 hover:text-white transition-colors text-sm">Awards</a></li> <li><a href="/careers" class="text-zinc-400 hover:text-white transition-colors text-sm">Careers</a></li> <li><a href="/contact" class="text-zinc-400 hover:text-white transition-colors text-sm">Contact</a></li></ul></div> <div><h3 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3> <ul class="space-y-3"><li><a href="/services/manned-guarding" class="text-zinc-400 hover:text-white transition-colors text-sm">Manned Guarding</a></li> <li><a href="/services/armed-response" class="text-zinc-400 hover:text-white transition-colors text-sm">Armed Response</a></li> <li><a href="/services/vip-protection" class="text-zinc-400 hover:text-white transition-colors text-sm">VIP Protection</a></li> <li><a href="/services/emergency-medical" class="text-zinc-400 hover:text-white transition-colors text-sm">Emergency Medical</a></li> <li><a href="/services/drone-surveillance" class="text-zinc-400 hover:text-white transition-colors text-sm">Drone Surveillance</a></li> <li><a href="/services/cctv-alarms" class="text-zinc-400 hover:text-white transition-colors text-sm">CCTV &amp; Alarms</a></li> <li><a href="/services/event-security" class="text-zinc-400 hover:text-white transition-colors text-sm">Event Security</a></li> <li><a href="/services/dog-handling" class="text-zinc-400 hover:text-white transition-colors text-sm">Dog Handling</a></li></ul></div> <div><h3 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact Us</h3> <ul class="space-y-4"><li class="flex items-start space-x-3"><svg class="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span class="text-zinc-400 text-sm">46 Central Street, Houghton, Johannesburg</span></li> <li class="flex items-center space-x-3"><svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <a href="tel:0842222222" class="text-zinc-400 hover:text-white text-sm transition-colors">084 222 2222</a></li> <li class="flex items-center space-x-3"><svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <a href="mailto:info@visiontactical.co.za" class="text-zinc-400 hover:text-white text-sm transition-colors">info@visiontactical.co.za</a></li> <li class="flex items-center space-x-3"><svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="text-zinc-400 text-sm">24/7 Emergency Response</span></li></ul></div></div> <div class="mt-16 pt-8 border-t border-zinc-800"><div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><p class="text-zinc-500 text-sm">© ${escape_html(currentYear)} Vision Tactical. All rights reserved.</p> <div class="flex space-x-6 text-sm"><a href="/privacy-policy" class="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a> <a href="/terms-of-service" class="text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a></div> <p class="text-zinc-500 text-sm">PSIRA Reg No: 2464883</p></div></div></div></footer>`);
  });
}
function WhatsAppFloat($$renderer) {
  const whatsappNumber = "27842222222";
  $$renderer.push(`<a${attr("href", `https://wa.me/${stringify(whatsappNumber)}`)} target="_blank" rel="noopener noreferrer" style="background: radial-gradient(circle, #6b7280 0%, #7f1d1d 100%);" class="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-[#09090B]" aria-label="Chat on WhatsApp"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></a>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    $$renderer2.push(`<a href="#main-content" class="skip-link">Skip to main content</a> <div class="min-h-screen flex flex-col bg-[#09090B]">`);
    Navbar($$renderer2, { nav: data.nav });
    $$renderer2.push(`<!----> <main id="main-content" class="flex-grow" tabindex="-1">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    WhatsAppFloat($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
