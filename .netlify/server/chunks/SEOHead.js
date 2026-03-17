import { f as store_get, h as head, u as unsubscribe_stores, c as escape_html, b as attr, e as ensure_array_like } from "./index.js";
import { p as page } from "./stores.js";
function SEOHead($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      title,
      description,
      image = "/images/og-default.jpg",
      type = "website",
      publishedTime,
      modifiedTime,
      author = "Vision Tactical",
      tags = []
    } = $$props;
    const canonicalUrl = `https://visiontactical.co.za${store_get($$store_subs ??= {}, "$page", page).url.pathname}`;
    const siteName = "Vision Tactical";
    head("1xg1a3p", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="title"${attr("content", title)}/> <meta name="description"${attr("content", description)}/> <meta name="author"${attr("content", author)}/> <link rel="canonical"${attr("href", canonicalUrl)}/> <meta property="og:type"${attr("content", type)}/> <meta property="og:url"${attr("content", canonicalUrl)}/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:image"${attr("content", image)}/> <meta property="og:site_name"${attr("content", siteName)}/> `);
      if (publishedTime) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="article:published_time"${attr("content", publishedTime)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (modifiedTime) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="article:modified_time"${attr("content", modifiedTime)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (tags.length > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(tags);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer3.push(`<meta property="article:tag"${attr("content", tag)}/>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:url"${attr("content", canonicalUrl)}/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="twitter:image"${attr("content", image)}/> <meta name="robots" content="index, follow"/> <meta name="language" content="English"/> <meta name="theme-color" content="#C0392B"/>`);
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  SEOHead as S
};
