import { g as getAllPosts } from "../../../chunks/blog.js";
import { g as getAllServices } from "../../../chunks/services.js";
import { c as coverageAreas } from "../../../chunks/areas.js";
const GET = async ({ url }) => {
  const posts = await getAllPosts();
  const services = getAllServices();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/coverage-areas",
    "/community",
    "/awards",
    "/careers",
    "/contact",
    "/get-a-quote",
    "/faq",
    "/privacy-policy",
    "/terms-of-service"
  ];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const postRoutes = posts.map((post) => `/community/${post.slug}`);
  coverageAreas.map((area) => `/coverage-areas#${area.slug}`);
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...postRoutes];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(
    (route) => `
  <url>
    <loc>${url.origin}${route}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>${route === "" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`
  ).join("")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
export {
  GET
};
