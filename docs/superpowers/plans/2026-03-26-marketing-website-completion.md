# Vision Tactical — Marketing Website Completion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the Vision Tactical marketing website to a production-ready standard — real content, working email forms, coverage map, Sanity CMS, optimised images, analytics, and live on visiontactical.co.za via Netlify + Cloudflare.

**Architecture:** SvelteKit (frontend + API routes) deployed on Netlify, Sanity as the managed headless CMS for blog and editable content, Resend for transactional email, Cloudflare for CDN/WAF/DNS. No database required at this phase — all content is either file-based markdown migrated to Sanity, or static TypeScript data files.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS v4, Sanity v3, Resend, Leaflet (map), Netlify, Cloudflare, Google Analytics 4, Google Search Console.

---

## Current State (as of 2026-03-26)

The site is live at `visiontactical.netlify.app`. The following is already complete:

- All routes and page shells (home, about, 9 service pages, blog, contact, quote, coverage, FAQ, awards, careers, privacy, terms)
- Full design system (dark/tactical Linear look, glow cards, spotlight, animations)
- 21 blog posts as markdown files in `src/content/blog/`
- Contact form and quote wizard (forms exist; email delivery disabled)
- Coverage area data (10 Johannesburg locations with lat/lng)
- SEO components (`SEOHead`, `JsonLd`)
- WhatsApp floating button
- Svelte actions: reveal (scroll fade-in), countUp (animated stats)
- Leaflet installed but map page status unverified
- Resend dependency installed but API calls commented out

**What remains:** email delivery, hero image, map verification, content accuracy, photography, Sanity CMS, careers form, SEO audit, GA4, Search Console, Cloudflare, domain cutover, and a 15 minute post-launch check.

---

## File Map

Files that will be created or significantly modified:

| File | Action | Purpose |
|------|---------|---------|
| `src/lib/server/email.ts` | Modify | Enable Resend API calls (currently disabled/demo mode) |
| `src/lib/server/sanity.ts` | Create | Sanity client singleton for server-side queries |
| `src/lib/server/sanity.client.ts` | Create | Sanity client for browser-side preview (optional) |
| `sanity/` (project root) | Create | Sanity Studio monorepo (schemas, desk structure, config) |
| `sanity/schemas/blogPost.ts` | Create | Blog post schema (title, slug, body, excerpt, image, tags, date) |
| `sanity/schemas/testimonial.ts` | Create | Testimonial schema (quote, author, location, verified flag) |
| `sanity/schemas/team.ts` | Create | Team member schema (name, role, bio, photo) |
| `sanity/schemas/index.ts` | Create | Schema export barrel |
| `sanity/sanity.config.ts` | Create | Studio configuration (project ID, dataset, desk structure) |
| `src/routes/community/+page.server.ts` | Modify | Query Sanity instead of local markdown files |
| `src/routes/community/[slug]/+page.server.ts` | Modify | Fetch single post from Sanity by slug |
| `src/routes/careers/+page.svelte` | Modify | Add application form section |
| `src/routes/careers/+server.ts` | Create | POST handler for job applications → email |
| `src/lib/data/testimonials.ts` | Modify | Replace placeholder testimonials with real ones (from Yaseen) |
| `src/lib/data/stats.ts` | Verify | Confirm stats are current and accurate |
| `src/lib/components/layout/Footer.svelte` | Modify | Update PSIRA number, address, social links |
| `static/images/hero/main.jpg` | Replace | Swap with final AI-generated hero image (WebP preferred) |
| `static/images/services/*.jpg` | Replace | Swap Unsplash watermarked images with real VT photography |
| `static/images/team/yaseen-theba.jpg` | Replace | Real headshot from Yaseen |
| `src/routes/coverage-areas/+page.svelte` | Verify/fix | Confirm Leaflet map renders correctly (SSR guard required) |
| `src/app.html` | Modify | Add GA4 script tag |
| `.env.production` | Create | Resend API key, Sanity project ID/dataset, GA4 measurement ID |
| `netlify.toml` | Verify/create | Environment variable configuration for production |

---

## Task 1 — Enable Email Delivery (Resend)

**Prerequisite:** Yaseen must have confirmed the reply-to address and you must have a Resend API key for the `visiontactical.co.za` domain.

**Files:**
- Modify: `src/lib/server/email.ts`
- Modify: `.env` (add `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_ADMIN_TO`)
- Add: `.env.example` entry for documentation

**Steps:**

- [ ] Create a Resend account at resend.com and verify the `visiontactical.co.za` domain by adding the required DNS TXT record in Cloudflare/domain registrar
- [ ] Obtain the Resend API key from the Resend dashboard and add it to `.env` as `RESEND_API_KEY`
- [ ] Add `EMAIL_FROM=noreply@visiontactical.co.za` and `EMAIL_ADMIN_TO=info@visiontactical.co.za` to `.env`
- [ ] In `src/lib/server/email.ts`, uncomment or re-enable the Resend client instantiation and all four email functions (`sendEmail`, `sendContactEmail`, `sendQuoteRequestEmail`, `sendQuoteConfirmationEmail`)
- [ ] Run the dev server and submit the contact form — verify the admin receives the email and the sender sees the confirmation
- [ ] Submit the quote wizard through all 4 steps — verify admin receives the quote email with reference number (format: `VT-{timestamp}`) and client receives confirmation
- [ ] Check email renders correctly on mobile (Gmail app and Apple Mail)
- [ ] Commit: `feat: enable Resend email delivery for contact and quote forms`

---

## Task 2 — Hero Image Integration

**Prerequisite:** Final hero image approved and available (1920×1080 or 2560×1440 minimum, WebP format preferred).

**Files:**
- Replace: `static/images/hero/main.jpg` (or add `main.webp`)
- Modify: `src/routes/+page.svelte` (update img src, add `srcset` for responsive loading)

**Steps:**

- [ ] Convert the hero image to WebP if not already — use `cwebp` CLI or an online converter. Target: < 400 KB at 2560×1440.
- [ ] Generate a 1280px-wide variant for mobile: `main-1280.webp`
- [ ] Place both files in `static/images/hero/`
- [ ] In `src/routes/+page.svelte`, locate the hero `<img>` or background element and update `src` to `/images/hero/main.webp`, add `srcset="/images/hero/main-1280.webp 1280w, /images/hero/main.webp 2560w"`, and set `sizes="100vw"`
- [ ] Add `loading="eager"` and `fetchpriority="high"` to the hero image (it is above-the-fold — do not lazy-load it)
- [ ] Add a 20px blurred placeholder using a tiny base64-encoded version of the image as the CSS `background-image` while the main image loads (optional but improves perceived performance)
- [ ] Verify the image does not cause layout shift (CLS) — check that explicit `width` and `height` attributes or `aspect-ratio` CSS is set on the container
- [ ] Run Lighthouse on the homepage and confirm LCP score does not regress
- [ ] Commit: `feat: replace hero placeholder with final AI-generated hero image`

---

## Task 3 — Coverage Areas Map (Leaflet Verification & Fix)

**Files:**
- Verify/fix: `src/routes/coverage-areas/+page.svelte`

**Steps:**

- [ ] Open `src/routes/coverage-areas/+page.svelte` and read the current implementation — check whether Leaflet is imported and initialised
- [ ] If Leaflet is imported at the module level (not inside `onMount` or a browser check), it will crash during SSR. Fix: wrap the import in `if (browser) { ... }` using SvelteKit's `import { browser } from '$app/environment'` and initialise the map inside `onMount`
- [ ] Verify the 10 area coordinates from `src/lib/data/areas.ts` are being rendered as map markers with popups showing area name and "active since" year
- [ ] Add a polygon or circle overlay around each area to visually indicate coverage radius (approximately 3km radius per area)
- [ ] Ensure the map container has an explicit height set in CSS (Leaflet requires this — a container with `height: 0` renders a blank map)
- [ ] Test on mobile: the map must be touch-zoomable and not break the page scroll
- [ ] Verify the Houghton marker is styled differently (larger icon or different colour) since it is the HQ location
- [ ] Commit: `fix: ensure Leaflet map renders correctly server-side and on mobile`

---

## Task 4 — Content Accuracy Updates

**Prerequisite:** Yaseen must supply: PSIRA registration number, confirmed office address, real social media URLs, real testimonials.

**Files:**
- Modify: `src/lib/components/layout/Footer.svelte`
- Modify: `src/lib/data/testimonials.ts`
- Modify: `src/lib/data/stats.ts` (verify accuracy)
- Modify: `src/lib/data/areas.ts` (verify coverage list)

**Steps:**

- [ ] In `Footer.svelte`, replace `PSIRA Registration: Pending` with the real registration number in the format `PSIRA Reg: {number}`
- [ ] In `Footer.svelte`, confirm the office address is `46 Central St, Houghton Estate, Johannesburg` (verify with Yaseen before changing)
- [ ] In `Footer.svelte`, update all four social media `href` values with the confirmed VT URLs (Facebook, X/Twitter, Instagram, LinkedIn)
- [ ] In `src/lib/data/testimonials.ts`, replace all five placeholder testimonials with real ones supplied by Yaseen. Each should have: `quote` (verbatim), `author` (first name + last initial), `location` (suburb only, not full address), `service` (which VT service they use). Do NOT fabricate testimonials.
- [ ] In `src/lib/data/stats.ts`, confirm the four statistics (`arrests: 168`, `kidnappingCases: 94`, `vehiclesSeized: 48`, `ransomsPrevented: 700000000`) with Yaseen — these appear on the homepage and are marketing claims. Update if figures have changed.
- [ ] In `src/lib/data/areas.ts`, confirm the 10 coverage areas list against Yaseen's confirmed service areas — add or remove areas as needed
- [ ] Commit: `content: update PSIRA number, address, social links, real testimonials, verified stats`

---

## Task 5 — Photography Replacement

**Prerequisite:** Real VT photography supplied by Yaseen (ideally from a professional half-day shoot). Minimum: 1 image per service, hero images, team photo, branded vehicle shots.

**Files:**
- Replace: `static/images/services/*.jpg` (9 files)
- Replace: `static/images/hero/*.jpg`
- Replace: `static/images/team/yaseen-theba.jpg`
- Verify: `static/images/blog/*.jpg`
- Verify: `static/images/awards/*.jpg`

**Steps:**

- [ ] For each real photo received, convert to WebP using `cwebp` or an online tool. Resize service images to 1200px wide max. Resize hero images to 2560px wide max.
- [ ] Name files to match existing filenames exactly so no code changes are required: `manned-guarding.jpg → manned-guarding.webp`, `armed-response.jpg → armed-response.webp`, etc.
- [ ] Update all `<img>` src references from `.jpg` to `.webp` throughout the codebase — search for `/images/services/` and `/images/team/` and update file extensions. Use `grep -r "images/services" src/` to find all references.
- [ ] Add `loading="lazy"` to all service and team images that appear below the fold
- [ ] Verify no Unsplash watermarks remain visible by opening each page on the live dev server and inspecting images
- [ ] If real photography is delayed, source licence-free alternatives from Pexels or Pixabay (NOT Unsplash) as temporary placeholders — document which images are still placeholders in a `CONTENT-TODO.md` file
- [ ] Commit: `feat: replace all Unsplash stock images with real VT photography`

---

## Task 6 — Sanity CMS Setup

**Why Sanity over continuing with file-based markdown:** Yaseen's team needs to add blog posts, update service descriptions, and manage news items without touching the codebase. Sanity provides a hosted Studio UI (free tier: 20 seats, unlimited reads) that non-developers can use.

**Files:**
- Create: `sanity/` (Sanity Studio project at repo root — separate package)
- Create: `sanity/sanity.config.ts`
- Create: `sanity/schemas/blogPost.ts`
- Create: `sanity/schemas/testimonial.ts`
- Create: `sanity/schemas/team.ts`
- Create: `sanity/schemas/index.ts`
- Create: `src/lib/server/sanity.ts`
- Modify: `src/routes/community/+page.server.ts`
- Modify: `src/routes/community/[slug]/+page.server.ts`

**Steps:**

- [ ] Create a new Sanity project at sanity.io — project name "Vision Tactical", dataset name "production". Note the `projectId` and `dataset` values.
- [ ] In the repo root, run `npm create sanity@latest -- --project {projectId} --dataset production --template clean` and choose the `sanity/` output directory. This scaffolds the Studio package.
- [ ] Define the `blogPost` schema in `sanity/schemas/blogPost.ts` with fields: `title` (string, required), `slug` (slug, source from title), `publishedAt` (datetime), `excerpt` (text, 200 chars max), `mainImage` (image with alt), `body` (array of block content — Sanity's portable text), `tags` (array of strings), `author` (string)
- [ ] Define the `testimonial` schema in `sanity/schemas/testimonial.ts` with fields: `quote` (text), `author` (string), `location` (string), `service` (string), `verified` (boolean, default false)
- [ ] Define the `team` schema in `sanity/schemas/team.ts` with fields: `name` (string), `role` (string), `bio` (text), `photo` (image with alt), `order` (number, for sorting)
- [ ] Export all schemas from `sanity/schemas/index.ts` and register them in `sanity/sanity.config.ts`
- [ ] In `sanity/sanity.config.ts`, configure a custom desk structure that groups: Blog Posts, Testimonials, Team — in that order
- [ ] Run the Sanity Studio locally with `cd sanity && npx sanity dev` and verify all three document types appear and are editable
- [ ] Deploy the Studio to Sanity's hosted environment: `npx sanity deploy` — choose studio URL slug `vision-tactical`. Share the Studio URL with Yaseen.
- [ ] Create `src/lib/server/sanity.ts` — a Sanity client configured with the `projectId`, `dataset`, `apiVersion` (today's date in YYYY-MM-DD format), and `useCdn: true` for production reads. Read project ID and dataset from environment variables `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET`.
- [ ] Add environment variables to `.env`: `PUBLIC_SANITY_PROJECT_ID={id}` and `PUBLIC_SANITY_DATASET=production`
- [ ] Migrate the 21 existing markdown blog posts into Sanity: for each file in `src/content/blog/`, create a corresponding Sanity document via the Studio UI (or write a one-time migration script). The markdown body content must be converted to Sanity's portable text format — use the `@sanity/block-content-to-html` package if scripting.
- [ ] Update `src/routes/community/+page.server.ts` to fetch all published blog posts from Sanity using a GROQ query, ordered by `publishedAt` descending, selecting: `title`, `slug.current`, `publishedAt`, `excerpt`, `mainImage`, `tags`
- [ ] Update `src/routes/community/[slug]/+page.server.ts` to fetch a single post from Sanity by slug, plus 3 related posts (same tags), returning full portable text body
- [ ] In `src/routes/community/[slug]/+page.svelte`, replace the existing `marked`/gray-matter HTML rendering with Sanity's `@portabletext/svelte` component for the post body
- [ ] Verify: create a test blog post in the Studio, confirm it appears on the community page and the detail page renders correctly
- [ ] Add the `src/content/blog/` directory to `.gitignore` after confirming all content is in Sanity (or keep it as a read-only archive — do not delete until migration is verified)
- [ ] Commit: `feat: add Sanity CMS for blog, testimonials, and team content`

---

## Task 7 — Careers Application Form

**Files:**
- Modify: `src/routes/careers/+page.svelte`
- Create: `src/routes/careers/+server.ts`
- Create: `src/lib/types/careerApplication.ts`

**Steps:**

- [ ] In `src/lib/types/careerApplication.ts`, define a Zod schema for job applications: `name` (string, min 2), `email` (email format), `phone` (SA phone regex), `position` (enum of the 4 listed roles), `message` (string, optional cover letter), `cvFileName` (string, optional — file upload is out of scope at this phase; applicant submits CV separately via email)
- [ ] In `src/routes/careers/+page.svelte`, read the existing job listings section and add an application form below the listings — using the same form styling as the contact page. Fields: Full Name, Email, Phone (SA format), Position (dropdown — prepopulated when clicking "Apply" on a specific listing), Cover note (optional textarea)
- [ ] Add per-field validation matching the contact form pattern (blur-triggered, red border + error message below field)
- [ ] On form submit, POST to `/careers` with JSON body
- [ ] Create `src/routes/careers/+server.ts` with a POST handler that: validates the request body using the Zod schema, sends an email to the careers address (use `CAREERS_EMAIL_TO` env variable, default to `info@visiontactical.co.za`), returns a JSON success/error response
- [ ] In the form component, handle the success state by replacing the form with a confirmation message: "Application received. We'll be in touch within 5 business days."
- [ ] Confirm the correct careers email address with Yaseen before deploying
- [ ] Commit: `feat: add careers application form with email delivery`

---

## Task 8 — SEO Audit & Structured Data

**Files:**
- Modify: `src/lib/components/seo/JsonLd.svelte`
- Modify: `src/routes/+page.svelte` (LocalBusiness schema)
- Modify: `src/routes/services/[slug]/+page.svelte` (Service schema)
- Modify: `src/routes/faq/+page.svelte` (FAQPage schema)
- Modify: `src/routes/community/[slug]/+page.svelte` (Article schema)
- Verify: `src/routes/sitemap.xml/+server.ts`

**Steps:**

- [ ] Open Google's Rich Results Test tool and test the homepage URL on the Netlify staging URL — note which schemas are present and which have errors
- [ ] On the homepage, verify the `LocalBusiness` JSON-LD includes: `name`, `url`, `telephone`, `address` (with `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry: ZA`), `geo` (lat/lng of Houghton HQ), `openingHours`, `priceRange`, `image`, `sameAs` (social profile URLs)
- [ ] On each service page, verify the `Service` JSON-LD includes: `name`, `description`, `provider` (the LocalBusiness), `areaServed` (the 10 coverage areas), `url`
- [ ] On the FAQ page, verify `FAQPage` JSON-LD is present with all 22 questions and answers — test at rich-results-test.google.com
- [ ] On blog post pages, verify `Article` JSON-LD includes: `headline`, `image`, `datePublished`, `author`, `publisher`
- [ ] Check `src/routes/sitemap.xml/+server.ts` — confirm it outputs all routes including dynamic service pages and blog posts. Add the community/blog URLs from Sanity to the sitemap generator by fetching slugs from the Sanity client.
- [ ] Add `<link rel="canonical" href="{currentUrl}">` in `SEOHead.svelte` if not already present — prevents duplicate content issues
- [ ] Verify `robots.txt` at `/robots.txt` allows all crawlers and references the sitemap URL
- [ ] Commit: `seo: audit and fix structured data, sitemap, canonical tags`

---

## Task 9 — Google Analytics 4 & Search Console

**Prerequisite:** Yaseen's Google account email address (or a VT-specific Google account).

**Files:**
- Modify: `src/app.html`
- Create: `src/lib/components/analytics/GoogleAnalytics.svelte` (optional component)

**Steps:**

- [ ] Log into Google Analytics using the VT Google account. Create a new GA4 property: property name "Vision Tactical", time zone "Africa/Johannesburg", currency "South African Rand (ZAR)". Note the `Measurement ID` (format: `G-XXXXXXXXXX`).
- [ ] Add `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to `.env`
- [ ] In `src/app.html`, add the GA4 gtag.js script in the `<head>` section, reading the measurement ID from the env variable. Use the standard Google Tag implementation — one `<script async>` tag loading gtag.js and one `<script>` initialising it. Wrap in a conditional: only render in production (check `%sveltekit.env.PUBLIC_GA_MEASUREMENT_ID%`).
- [ ] Verify in the GA4 Realtime report that a page view event fires when loading the Netlify staging URL
- [ ] Set up a GA4 conversion event: mark the `generate_lead` event (fired when quote form is submitted) as a key event
- [ ] In Google Search Console, add `visiontactical.co.za` as a property. Verify ownership via the DNS TXT record method (add TXT record in Cloudflare).
- [ ] After domain cutover, submit the sitemap URL `https://visiontactical.co.za/sitemap.xml` in Search Console → Sitemaps
- [ ] Commit: `feat: add GA4 analytics and Search Console verification`

---

## Task 10 — Performance Optimisation

**Files:**
- Modify: Various image `<img>` tags across page components
- Modify: `src/app.css` (verify no unused heavy animations)

**Steps:**

- [ ] Run Lighthouse on the Netlify URL (in incognito, on mobile preset) for: homepage, one service page, blog listing, blog post. Record baseline scores for Performance, Accessibility, Best Practices, SEO.
- [ ] Address any LCP issues: the hero image must have `loading="eager"` and `fetchpriority="high"`. All images below the fold must have `loading="lazy"`.
- [ ] Ensure all `<img>` tags have explicit `width` and `height` attributes to prevent layout shift (CLS). SvelteKit does not add these automatically.
- [ ] Check for render-blocking resources: the Leaflet CSS (`leaflet.css`) on the coverage page should only load on that route, not globally. If it is currently in `app.html` or `+layout.svelte`, move it to `coverage-areas/+page.svelte` as a scoped import.
- [ ] Verify `prefers-reduced-motion` media query in `src/app.css` disables all CSS animations and transitions for users who have requested reduced motion — this is already in the design system but confirm it covers the `fadeInUp` animation and glow card effects.
- [ ] Run the SvelteKit build (`npm run build`) and check the bundle sizes reported — if any route chunk exceeds 150 KB parsed, identify and lazy-load the responsible import.
- [ ] Re-run Lighthouse after fixes — target: Performance ≥ 90 on mobile, all other categories ≥ 95.
- [ ] Commit: `perf: optimise images, lazy loading, LCP, and CLS across all pages`

---

## Task 11 — Accessibility Audit

**Steps:**

- [ ] Run axe DevTools (browser extension) on: homepage, one service page, contact page, quote wizard, blog post, coverage map. Note all critical and serious violations.
- [ ] Fix all critical violations (Level A WCAG): missing alt text, missing form labels, missing ARIA roles on interactive elements, colour contrast failures.
- [ ] The quote wizard must be fully keyboard-navigable: Tab to advance between fields, Enter to submit, Escape to close any modal. Verify the step progress indicator announces correctly to screen readers.
- [ ] The Leaflet map requires a text-based alternative for screen readers — add a table below the map listing all 10 coverage areas with address and active-since year, wrapped in a `<details>` element labelled "Coverage areas list (accessible alternative)".
- [ ] Verify the navbar mobile menu: when the hamburger button is activated, focus must move to the first menu item. When the menu is closed, focus must return to the hamburger button.
- [ ] All icon-only buttons (WhatsApp float, social icons in footer) must have `aria-label` attributes.
- [ ] Commit: `a11y: fix keyboard navigation, ARIA labels, alt text, and contrast issues`

---

## Task 12 — Favicon & App Icons

**Source assets:** `static/images/logo/Vision Tactical Logo_dark.svg` (for light backgrounds) and `Vision Tactical Logo_light.svg` (for dark backgrounds).

**Files:**
- Replace: `static/favicon.ico`
- Replace: `static/favicon-16x16.png`, `static/favicon-32x32.png`
- Create: `static/favicon.svg` (adaptive SVG favicon — switches between dark/light logo via `prefers-color-scheme`)
- Create: `static/apple-touch-icon.png` (180×180, on white or brand-dark background)
- Create: `static/favicon-192x192.png`, `static/favicon-512x512.png` (PWA icons, optional)
- Modify: `src/app.html` (update `<head>` favicon link tags)

**Steps:**

- [ ] Copy `static/images/logo/Vision Tactical Logo_dark.svg` to `static/favicon-dark.svg` and `Vision Tactical Logo_light.svg` to `static/favicon-light.svg`
- [ ] Create `static/favicon.svg` — an SVG favicon that uses a `<style>` block with `@media (prefers-color-scheme: dark)` to swap between the two logo SVG contents (embed both inline, show/hide with CSS). Modern browsers (Chrome 80+, Firefox 84+, Safari 12+) support SVG favicons with `prefers-color-scheme`.
- [ ] Generate `favicon-32x32.png` and `favicon-16x16.png` from the dark logo SVG using `magick` CLI: `magick -background none static/images/logo/"Vision Tactical Logo_dark.svg" -resize 32x32 static/favicon-32x32.png`
- [ ] Generate `apple-touch-icon.png` at 180×180 with a `#09090B` background (matches site dark theme): `magick -background "#09090B" static/images/logo/"Vision Tactical Logo_light.svg" -resize 160x160 -gravity center -extent 180x180 static/apple-touch-icon.png`
- [ ] Regenerate `favicon.ico` as a multi-resolution ICO containing 16×16 and 32×32 layers: `magick static/favicon-16x16.png static/favicon-32x32.png static/favicon.ico`
- [ ] In `src/app.html`, replace existing favicon link tags with:
  ```html
  <link rel="icon" href="%sveltekit.assets%/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="%sveltekit.assets%/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="%sveltekit.assets%/apple-touch-icon.png">
  ```
- [ ] Test in browser: verify favicon appears in the tab, bookmark bar, and mobile home screen shortcut. Toggle OS dark/light mode and confirm the favicon switches correctly.
- [ ] Commit: `feat: add adaptive dark/light favicon and apple-touch-icon`

---

## Task 13 — Cloudflare Setup

**Prerequisite:** Access to the domain registrar for `visiontactical.co.za` (whoever manages DNS for the domain).

**Steps:**

- [ ] Create a free Cloudflare account and add `visiontactical.co.za` as a site. Cloudflare will scan existing DNS records.
- [ ] At the domain registrar, update the nameservers to the two Cloudflare nameservers provided (format: `xxx.ns.cloudflare.com`)
- [ ] Wait for nameserver propagation (up to 24 hours, usually under 2 hours). Verify in Cloudflare dashboard that the site shows "Active".
- [ ] SSL/TLS: set encryption mode to "Full (strict)". Enable "Always Use HTTPS" and "Automatic HTTPS Rewrites".
- [ ] Configure page rules or Transform Rules: redirect all `www.visiontactical.co.za` traffic to `visiontactical.co.za` (apex domain, no www).
- [ ] Enable Cloudflare's "Bot Fight Mode" under Security → Bots for basic bot protection.
- [ ] Under Caching → Cache Rules, set browser TTL to 1 year for `/images/*`, `/fonts/*`, and `/_app/immutable/*` (SvelteKit hashes these file names so cache-busting is automatic).
- [ ] Enable "Rocket Loader" OFF (it can interfere with SvelteKit's hydration). Enable "Minify" for HTML, CSS, JS.
- [ ] Add Resend's SPF and DKIM DNS records in Cloudflare for `visiontactical.co.za` email authentication (these will be provided by Resend during domain verification in Task 1).
- [ ] Commit (this is an infrastructure step — no code commit, but document the Cloudflare settings in a `docs/infrastructure.md` file for future reference)

---

## Task 13 — Netlify Production Configuration

**Files:**
- Create/verify: `netlify.toml`
- Confirm: Environment variables in Netlify dashboard

**Steps:**

- [ ] In the Netlify dashboard, link the GitHub repository to the Vision Tactical site if not already done. Verify build command is `npm run build` and publish directory is `.svelte-kit/netlify/` (or whatever the adapter-netlify outputs).
- [ ] In Netlify → Site Configuration → Environment Variables, add all production environment variables: `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_ADMIN_TO`, `CAREERS_EMAIL_TO`, `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_GA_MEASUREMENT_ID`.
- [ ] In `netlify.toml`, configure: `[build]` command, `publish` directory, and `[context.production]` environment. Add a `[[redirects]]` rule to redirect `/blog/*` to `/community/*` if the old WordPress URLs need redirecting (check with Yaseen whether the old site had a `/blog/` path).
- [ ] Add a custom domain in Netlify: `visiontactical.co.za`. Netlify will provide a CNAME or A record value.
- [ ] In Cloudflare DNS, add the CNAME record pointing `visiontactical.co.za` to the Netlify URL (or A record to Netlify's load balancer IP). Proxy through Cloudflare (orange cloud enabled).
- [ ] Enable Netlify's "Deploy Previews" for all pull requests — this gives Yaseen or reviewers a preview URL before any change goes live.
- [ ] Set the Netlify branch deploy: `main` branch → production. Any other branch → preview only.
- [ ] Trigger a production deploy and verify the build completes without errors. Check the deploy log for warnings.
- [ ] Commit: `chore: configure netlify.toml for production environment`

---

## Task 14 — Domain Cutover & Go-Live

**Prerequisite:** Tasks 1–13 complete. Test deployment passing on Netlify preview URL. Yaseen has reviewed and approved the site.

**Steps:**

- [ ] Confirm the cutover window with Yaseen — choose a low-traffic time (early morning weekday). The cutover will cause the old site to be temporarily inaccessible during DNS propagation.
- [ ] Take a full export of the old WordPress site before cutover (backup, not for migration — just safety).
- [ ] In Cloudflare, update the DNS A/CNAME record for `visiontactical.co.za` to point to Netlify (if not already done in Task 13).
- [ ] Set Cloudflare DNS TTL to 5 minutes before the cutover, then restore to "Auto" after propagation is confirmed. This minimises the window where some users see the old site.
- [ ] Visit `https://visiontactical.co.za` and verify: HTTPS green lock, correct content loads, no Unsplash watermarks, contact form submits and email is received, quote wizard completes, blog posts load from Sanity, coverage map renders, mobile menu works.
- [ ] Submit the sitemap to Google Search Console: Search Console → Sitemaps → Add `https://visiontactical.co.za/sitemap.xml` → Submit.
- [ ] Verify GA4 Realtime shows a live visitor when you load the production URL.
- [ ] Test all 9 service pages, the about page, careers, FAQ, awards, contact, and quote pages on mobile (real device, not just Chrome DevTools).
- [ ] Search Google for `site:visiontactical.co.za` — you will not see results immediately (indexing takes days to weeks), but confirm no errors in Search Console after 48 hours.
- [ ] Send Yaseen the live URL and the Sanity Studio URL so his team can start managing content.
- [ ] Commit: `chore: go-live confirmation — production URL verified`

---

## Task 15 — Post-Launch Monitoring (Week 1)

**Steps:**

- [ ] After 48 hours, check Google Search Console for any crawl errors or coverage issues under "Pages" → "Not indexed"
- [ ] Check Netlify deploy logs for any function errors (form submissions hitting errors)
- [ ] Monitor Resend dashboard for email delivery rate — flag any bounced emails from the admin or client confirmation templates
- [ ] Check GA4 for expected traffic patterns — homepage, service pages, and quote wizard should be the highest-traffic pages
- [ ] If Yaseen's team reports issues adding blog posts in Sanity Studio, provide a short recorded walkthrough (Loom video) of: creating a post, setting a slug, adding an image, publishing
- [ ] Set up a Netlify notification to email Yaseen's address on failed deploys

---

## Dependency Map

```
Task 1 (Email)          ← No dependencies (can start immediately with API key)
Task 2 (Hero image)     ← Requires final approved image from Yaseen
Task 3 (Leaflet map)    ← No external dependencies
Task 4 (Content)        ← Requires PSIRA number, address, testimonials from Yaseen
Task 5 (Photography)    ← Requires real photos from Yaseen (may delay; use Pexels interim)
Task 6 (Sanity)         ← No dependencies (can start immediately)
Task 7 (Careers form)   ← Requires careers email address from Yaseen
Task 8 (SEO)            ← Requires Task 4 and Task 6 complete (accurate content, dynamic sitemap)
Task 9 (Analytics)      ← Requires Yaseen's Google account
Task 10 (Performance)   ← Requires Tasks 2 and 5 complete (real images)
Task 11 (Accessibility) ← Requires Task 3 complete (map)
Task 12 (Cloudflare)    ← Requires domain registrar access from Yaseen
Task 13 (Netlify prod)  ← Requires Tasks 1 and 6 complete (env vars needed)
Task 14 (Go-live)       ← Requires all tasks complete and Yaseen approval
Task 15 (Monitoring)    ← After Task 14
```

**Parallel tracks (can run simultaneously):**
- Track A: Tasks 1, 3, 6, 7, 8 — no external blockers
- Track B: Tasks 2, 4, 5 — blocked on Yaseen supplying assets
- Track C: Tasks 9, 12 — blocked on Yaseen supplying Google account + domain access

---

## What to Request from Yaseen (Summary)

Before or at kickoff:

| # | Item | Blocks |
|---|------|--------|
| 1 | PSIRA registration number | Task 4 |
| 2 | Confirmed office address | Task 4 |
| 3 | Confirmed emergency number (084 222 2222?) | Task 4 |
| 4 | Careers applications email address | Task 7 |
| 5 | 5–8 real testimonials (quote, first name + last initial, suburb, service used) | Task 4 |
| 6 | Social media URLs (Facebook, X, Instagram, LinkedIn) | Task 4 |
| 7 | Real photography: hero images, 1 per service, team photo, vehicles, awards | Task 5 |
| 8 | Final approved AI hero image | Task 2 |
| 9 | Google account email for GA4 + Search Console | Task 9 |
| 10 | Domain registrar login or DNS access | Tasks 12, 13 |
| 11 | Email hosting confirmation (does `@visiontactical.co.za` email exist?) | Task 1 |

---

## Estimated Timeline

| Track | Tasks | Duration |
|-------|-------|----------|
| Developer (no blockers) | 1, 3, 6, 7, 8, 10, 11, 13 | ~10 days |
| Waiting on Yaseen assets | 2, 4, 5, 9, 12 | Depends on response time |
| Go-live + post-launch | 14, 15 | ~2 days + 1 week monitoring |
| **Total (optimistic)** | All 15 tasks | **3 weeks** |
| **Total (realistic with asset delays)** | All 15 tasks | **4–5 weeks** |

---

## Out of Scope (Phase 2+)

The following are explicitly excluded from this plan and will be planned separately:

- Sanity CMS for service page content editing (service data currently in `src/lib/data/services.ts` — migration to Sanity is a Phase 2 task when there is demand for frequent service updates)
- Client onboarding portal and digital contract signing
- Sage/DebiCheck debit order integration
- Custom CRM
- WhatsApp incident reporting bot
- Patrol check-in QR system
- Community Wolf integration
- Admin authentication and dashboard
- Booking/appointment scheduling
