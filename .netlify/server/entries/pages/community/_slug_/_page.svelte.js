import { h as head, e as ensure_array_like, b as attr, c as escape_html, a as attr_class, d as stringify, aa as derived } from "../../../../chunks/index.js";
import { f as formatDate } from "../../../../chunks/formatDate.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareTitle = derived(() => data.post?.title || "");
    function getShareUrl(platform) {
      const encodedUrl = encodeURIComponent(shareUrl);
      const encodedTitle = encodeURIComponent(shareTitle());
      switch (platform) {
        case "facebook":
          return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        case "twitter":
          return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        case "whatsapp":
          return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        default:
          return shareUrl;
      }
    }
    head("1mhvbjg", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.post?.title ?? "Post Not Found")} | Vision Tactical</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.post?.excerpt ?? "")}/> `);
      if (data.post?.image) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", data.post.image)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    if (data.post) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="bg-[#09090B]"><section class="relative py-24 md:py-32 overflow-hidden"><div class="glow-ambient glow-ambient-top"></div> <div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl mx-auto">`);
      if (data.post.tags && data.post.tags.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
        const each_array = ensure_array_like(data.post.tags);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer2.push(`<a${attr("href", `/community?tag=${stringify(tag)}`)} class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-wider hover:bg-red-500/20 transition-colors">${escape_html(tag)}</a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <h1 class="heading-gradient text-3xl md:text-5xl font-bold mb-6">${escape_html(data.post.title)}</h1> <div class="flex items-center gap-4 text-zinc-500 text-sm mb-8"><span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${escape_html(formatDate(data.post.date))}</span> <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> ${escape_html(data.post.author)}</span></div></div></div></section> `);
      if (data.post.image) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<section class="pb-12"><div class="container mx-auto px-4"><div class="aspect-[21/9] rounded-2xl overflow-hidden"><div${attr_class(`w-full h-full bg-[url('${stringify(data.post.image)}')] bg-cover bg-center`)}></div></div></div></section>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <section class="pb-24"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="lg:col-span-2"><article class="prose prose-invert prose-lg max-w-none">${html(data.post.content)}</article> <div class="mt-12 pt-8 border-t border-zinc-800"><h3 class="text-white font-semibold mb-4">Share this post</h3> <div class="flex gap-3"><a${attr("href", getShareUrl("facebook"))} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors" aria-label="Share on Facebook"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a> <a${attr("href", getShareUrl("twitter"))} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors" aria-label="Share on X"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a> <a${attr("href", getShareUrl("whatsapp"))} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors" aria-label="Share on WhatsApp"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></a></div></div></div> <div class="lg:col-span-1"><div class="sticky top-24 space-y-6">`);
      if (data.relatedPosts && data.relatedPosts.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div><h3 class="text-white font-semibold mb-4">Related Posts</h3> <div class="space-y-4"><!--[-->`);
        const each_array_1 = ensure_array_like(data.relatedPosts.slice(0, 3));
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let post = each_array_1[$$index_1];
          $$renderer2.push(`<a${attr("href", `/community/${stringify(post.slug)}`)} class="block group"><div class="flex gap-4"><div class="w-20 h-14 rounded-lg bg-zinc-800 overflow-hidden flex-shrink-0"><div${attr_class(`w-full h-full bg-[url('${stringify(post.image)}')] bg-cover bg-center`)}></div></div> <div><h4 class="text-white font-medium text-sm line-clamp-2 group-hover:text-red-400 transition-colors">${escape_html(post.title)}</h4> <p class="text-zinc-500 text-xs mt-1">${escape_html(formatDate(post.date))}</p></div></div></a>`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="card p-6 bg-gradient-to-br from-red-900/20 to-[#0F0F12]"><h3 class="text-white font-semibold mb-2">Need Security Services?</h3> <p class="text-zinc-400 text-sm mb-4">Get a free, no-obligation quote for your security needs.</p> <a href="/get-a-quote" class="btn btn-primary w-full justify-center">Get a Quote</a></div></div></div></div></div></section> <section class="py-16 border-t border-zinc-800"><div class="container mx-auto px-4"><a href="/community" class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> Back to All Posts</a></div></section></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="min-h-screen flex items-center justify-center bg-[#09090B]"><div class="text-center"><h1 class="text-4xl font-bold text-white mb-4">Post Not Found</h1> <p class="text-zinc-400 mb-8">The blog post you're looking for doesn't exist.</p> <a href="/community" class="btn btn-primary">Back to All Posts</a></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
