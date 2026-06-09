# System-Based Light/Dark Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the whole site flip between light and dark based on the OS `prefers-color-scheme` setting, with no JS and no manual toggle.

**Architecture:** Introduce a semantic token layer in `app.css` (Tailwind v4 `@theme inline` utilities that resolve through to the existing `--bg-*` / `--text-*` / `--border-*` / `--accent-*` CSS variables). The current `:root` values stay as the dark theme; a single `@media (prefers-color-scheme: light)` block redefines those variables for light. Then sweep all 19 components, replacing appearance-named colors (`text-white`, `text-zinc-400`, inline `#09090B`, `text-red-500`) with role-named token utilities that flip automatically.

**Tech Stack:** SvelteKit, Tailwind CSS v4 (`@tailwindcss/vite`), CSS custom properties.

**Spec:** `docs/superpowers/specs/2026-06-09-light-dark-theme-design.md`

---

## Canonical mapping (used by every sweep task)

This table is the single source of truth. Tasks reference it instead of repeating it.

### Neutral utilities → role tokens

| from (appearance) | to (role token) |
|---|---|
| `text-white` *(see judgment rule)* | `text-primary` |
| `text-zinc-300` | `text-secondary` |
| `text-zinc-400` | `text-secondary` |
| `text-zinc-500` | `text-muted` |
| `text-zinc-600` / `text-zinc-700` / `text-zinc-800` | `text-ghost` |
| `bg-zinc-800` | `bg-elevated` |
| `bg-zinc-800/50` | `bg-elevated/50` |
| `bg-zinc-700` | `bg-subtle` |
| `bg-black/80` *(modal backdrop — keep, see judgment rule)* | *(unchanged)* |
| `bg-white/[0.05]` / `bg-white/[0.10]` *(hover tints — keep)* | *(unchanged)* |
| `border-zinc-800` | `border-line` |
| `border-zinc-700` / `border-zinc-600` | `border-line-strong` |
| `placeholder-zinc-500` | `placeholder-ghost` |
| `from-zinc-800` | `from-elevated` |
| `to-zinc-900` | `to-base` |

### Inline hex → variables

| from | to |
|---|---|
| `#09090B` | `var(--bg-base)` |
| `#0F0F12` | `var(--bg-surface)` |
| `#18181B` | `var(--bg-elevated)` |

(In Tailwind arbitrary values these appear as `bg-[#09090B]` → `bg-[var(--bg-base)]`, and in `<style>`/`style=""` as raw `#09090B` → `var(--bg-base)`. The `to-[#0F0F12]` gradient stops become `to-[var(--bg-surface)]`.)

### Red foreground text → accent token

| from | to |
|---|---|
| `text-red-500` | `text-accent-red` |
| `text-red-400` | `text-accent-red` |
| `text-red-500/80` | `text-accent-red/80` |
| `text-red-300` | `text-accent-red` |

`text-accent-red` resolves to `var(--accent-red)`, which is `#EF4444` in dark and `#DC2626` in light — fixing the "hot red on white" contrast problem automatically.

### Leave literal (read correctly in BOTH themes — do NOT change)

- Translucent red **tints/fills/borders**: `bg-red-500/10`, `bg-red-500/20`, `bg-red-600/5`, `bg-red-500`, `border-red-500`, `border-red-500/30`, `border-red-500/50`, `from-red-900/20`, `ring-red-500`, `ring-red-900`. A translucent or solid red sits fine on white or near-black.

### The judgment rule — `text-white` is NOT a blind swap

Before converting a `text-white` (or `text-zinc-*` used as a label), look at what it sits on:

- **On the page / a card / a surface** → it's chrome → convert to the role token. ✅
- **Color-locked — leave as literal `text-white`:**
  - text on a **red fill**: e.g. `bg-red-500 text-white` pill (`community/+page.svelte:52`).
  - text on the **WhatsApp green button**: `bg-[#25D366] ... text-white` (`Navbar.svelte:220`, `WhatsAppFloat.svelte`).
  - text **over a hero photograph** (sections using a background image + `.hero-overlay`): the overlay stays dark in both themes for legibility, so the text stays light.
  - `bg-black/80` modal backdrop (`about/+page.svelte:313`): a dim scrim over a lightbox stays dark in both themes.

When unsure, render the page in light mode and check the element is readable.

---

## Task 1: Token foundation in `app.css`

**Files:**
- Modify: `src/app.css` (the `:root` block ~10-73, `html` rule ~83-86, and append new blocks)

- [ ] **Step 1: Add the `@theme inline` token layer**

Insert immediately after the existing `@source` lines (after line 4, before the `:root` comment block):

```css
/* ============================================
   SEMANTIC THEME TOKENS (Tailwind v4)
   Map role-named utilities to themeable vars.
   @theme inline => utilities emit var(...) so the
   light media-query override below cascades.
   ============================================ */
@theme inline {
  --color-base:        var(--bg-base);
  --color-surface:     var(--bg-surface);
  --color-elevated:    var(--bg-elevated);
  --color-subtle:      var(--bg-subtle);

  --color-primary:     var(--text-primary);
  --color-secondary:   var(--text-secondary);
  --color-muted:       var(--text-muted);
  --color-ghost:       var(--text-ghost);

  --color-line:        var(--border-default);
  --color-line-subtle: var(--border-subtle);
  --color-line-strong: var(--border-hover);

  --color-accent-red:      var(--accent-red);
  --color-accent-red-soft: var(--accent-red-soft);
}
```

- [ ] **Step 2: Switch `color-scheme` to allow both**

In the `html` rule, change:

```css
html {
  scroll-behavior: smooth;
  color-scheme: dark;
}
```
to:
```css
html {
  scroll-behavior: smooth;
  color-scheme: light dark;
}
```

- [ ] **Step 3: Append the light-mode override block**

Add at the END of `src/app.css`:

```css
/* ============================================
   LIGHT THEME — follows OS prefers-color-scheme
   Overrides the dark defaults defined in :root.
   ============================================ */
@media (prefers-color-scheme: light) {
  :root {
    /* Backgrounds (light to slightly darker) */
    --bg-base:       #FFFFFF;
    --bg-surface:    #FAFAFA;
    --bg-elevated:   #F4F4F5;
    --bg-subtle:     #E4E4E7;

    /* Borders */
    --border-default: #E4E4E7;
    --border-subtle:  #F0F0F1;
    --border-hover:   #D4D4D8;

    /* Text (dark on light) */
    --text-primary:   #18181B;
    --text-secondary: #3F3F46;
    --text-muted:     #52525B;
    --text-ghost:     #A1A1AA;

    /* Accent — deepen so red doesn't vibrate on white */
    --accent-red:       #DC2626;
    --accent-red-glow:  rgba(220, 38, 38, 0.10);
    --accent-red-flare: rgba(220, 38, 38, 0.05);
  }

  /* Hardcoded-rgba effects that vars can't reach */
  .glass {
    background: rgba(255, 255, 255, 0.8);
  }
  .glass-surface {
    background: rgba(250, 250, 250, 0.85);
  }
  /* Soften cursor glow + spotlight so they don't muddy light surfaces */
  .glow-card::before {
    background: radial-gradient(
      600px circle at var(--glow-x, 50%) var(--glow-y, 50%),
      rgba(220, 38, 38, 0.04) 0%,
      transparent 40%
    );
  }
  .spotlight-layer {
    background: radial-gradient(
      800px circle at var(--spot-x, 50%) var(--spot-y, 50%),
      rgba(220, 38, 38, 0.04) 0%,
      rgba(220, 38, 38, 0.02) 25%,
      transparent 60%
    );
  }
  /* Card images were dimmed for dark bg; lift on light */
  .card-image {
    filter: brightness(0.95);
  }
}
```

- [ ] **Step 4: Verify the build compiles the new utilities**

Run: `npm run build`
Expected: build succeeds with no CSS errors. (This confirms `@theme inline` is valid and the new `text-primary`/`bg-base`/etc. utilities are generated.)

- [ ] **Step 5: Commit**

```bash
git add src/app.css
git commit -m "feat(theme): add semantic token layer + light prefers-color-scheme overrides"
```

---

## Task 2: Layout shell — Navbar, Footer, WhatsAppFloat, +layout

**Files:**
- Modify: `src/lib/components/layout/Navbar.svelte`
- Modify: `src/lib/components/layout/Footer.svelte`
- Modify: `src/lib/components/layout/WhatsAppFloat.svelte`
- Modify: `src/routes/+layout.svelte`

- [ ] **Step 1: Apply the canonical mapping to all four files**

Go file-by-file applying the "Canonical mapping" tables. Apply the **judgment rule** for every `text-white`:
- `Navbar.svelte:93` `text-white` (dropdown child label, on glass surface) → `text-primary`.
- `Navbar.svelte:134,161,176,188` `text-white` (mobile menu links on page bg) → `text-primary`.
- `Navbar.svelte:220` `bg-[#25D366] ... text-white` (WhatsApp CTA) → **keep `text-white`** (green fill).
- `Navbar.svelte:154` `bg-[#09090B]` (mobile menu panel) → `bg-[var(--bg-base)]`.
- `Navbar.svelte:61,91` `bg-white/[0.05]` / `bg-white/[0.10]` hover tints → **keep**.
- `WhatsAppFloat.svelte`: the green floating button `text-white` → **keep** (green fill).
- `Footer.svelte`: `text-red-500` (5×) → `text-accent-red`; zinc/white per table.
- Convert `text-red-500`/`text-red-400` → `text-accent-red` everywhere in these files.

- [ ] **Step 2: Verify no stray dark literals remain (allowed exceptions aside)**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/lib/components/layout/Navbar.svelte src/lib/components/layout/Footer.svelte src/lib/components/layout/WhatsAppFloat.svelte src/routes/+layout.svelte
```
Expected: **no output** (every zinc utility and inline dark hex replaced).

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/layout/ src/routes/+layout.svelte
git commit -m "feat(theme): tokenize layout shell (navbar, footer, whatsapp, layout)"
```

---

## Task 3: Home page + error page

**Files:**
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/+error.svelte`

- [ ] **Step 1: Apply the canonical mapping**

Apply tables to both files. Watch for hero sections in `+page.svelte` that sit over a background image — `text-white` there is **color-locked, keep it**. `text-white` on plain sections/cards → `text-primary`. `#09090B`/`#0F0F12` inline → `var(--bg-base)`/`var(--bg-surface)`. `text-red-500` (6× home, 2× error) → `text-accent-red`. Leave `bg-red-500/10`, `bg-red-600/5` literal.

- [ ] **Step 2: Verify no stray dark literals**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/routes/+page.svelte src/routes/+error.svelte
```
Expected: no output.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/routes/+page.svelte src/routes/+error.svelte
git commit -m "feat(theme): tokenize home and error pages"
```

---

## Task 4: About + Services pages

**Files:**
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/services/+page.svelte`
- Modify: `src/routes/services/[slug]/+page.svelte`

- [ ] **Step 1: Apply the canonical mapping**

Apply tables. Specific color-locked cases to keep literal:
- `about/+page.svelte:313` `bg-black/80` modal backdrop → **keep**.
- `about/+page.svelte:59`, `services/[slug]/+page.svelte:109` `bg-gradient-to-br from-red-900/20 to-[#0F0F12]` → change ONLY the hex stop: `to-[var(--bg-surface)]`; leave `from-red-900/20`.
- `text-red-500` (about 8×, services 6×, slug 5×) → `text-accent-red`.
- Hero images: keep `text-white` over photos.

- [ ] **Step 2: Verify no stray dark literals**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/routes/about/+page.svelte src/routes/services/+page.svelte 'src/routes/services/[slug]/+page.svelte'
```
Expected: no output.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/routes/about/ src/routes/services/
git commit -m "feat(theme): tokenize about and services pages"
```

---

## Task 5: Coverage areas + Community pages

**Files:**
- Modify: `src/routes/coverage-areas/+page.svelte`
- Modify: `src/routes/community/+page.svelte`
- Modify: `src/routes/community/[slug]/+page.svelte`

- [ ] **Step 1: Apply the canonical mapping**

Apply tables. Specific cases:
- `community/+page.svelte:52` `bg-red-500 text-white` (active filter pill) → **keep `text-white`**; the inactive side `bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700` → `bg-elevated text-secondary hover:text-primary hover:bg-subtle`.
- `community/[slug]/+page.svelte:179` `to-[#0F0F12]` → `to-[var(--bg-surface)]`; leave `from-red-900/20`.
- `coverage-areas/+page.svelte`: it has a Leaflet map with raw style colors (`#111`, `rgba(0,0,0,0.3)`, `#71717A`) inside `<style>` — leave map-internal styling as-is (the map tiles are externally themed); only convert page-chrome zinc/white/hex per the tables. `bg-red-500` map dots → keep.
- `text-red-500` → `text-accent-red`.

- [ ] **Step 2: Verify no stray dark literals (page chrome)**

Run:
```bash
grep -nE 'zinc-|#09090B|#18181B' src/routes/coverage-areas/+page.svelte src/routes/community/+page.svelte 'src/routes/community/[slug]/+page.svelte'
```
Expected: no output. (Note: `#0F0F12` may legitimately remain only if inside the Leaflet `<style>` map theming; verify any remaining hit is map-internal, otherwise convert it.)

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/routes/coverage-areas/ src/routes/community/
git commit -m "feat(theme): tokenize coverage-areas and community pages"
```

---

## Task 6: Awards + Careers pages

**Files:**
- Modify: `src/routes/awards/+page.svelte`
- Modify: `src/routes/careers/+page.svelte`

- [ ] **Step 1: Apply the canonical mapping**

Apply tables. `text-red-500` (awards 1×, careers 2×) → `text-accent-red`. `bg-red-500/10`, `bg-red-600/5` → keep. Hero `text-white` over imagery → keep; other `text-white` → `text-primary`.

- [ ] **Step 2: Verify no stray dark literals**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/routes/awards/+page.svelte src/routes/careers/+page.svelte
```
Expected: no output.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/routes/awards/ src/routes/careers/
git commit -m "feat(theme): tokenize awards and careers pages"
```

---

## Task 7: Contact + Get-a-quote pages (forms)

**Files:**
- Modify: `src/routes/contact/+page.svelte`
- Modify: `src/routes/get-a-quote/+page.svelte`

- [ ] **Step 1: Apply the canonical mapping (form fields matter here)**

Apply tables. Forms use `placeholder-zinc-500` → `placeholder-ghost`, `border-zinc-700` → `border-line-strong`, `bg-zinc-800` → `bg-elevated`. `text-red-500` (contact 14×, quote 8×) → `text-accent-red`. Keep the WhatsApp green button `text-white`. Keep `bg-red-500/10 border-red-500/30` error/info boxes literal. The `#25D366`/`#20BA5A` WhatsApp greens and `#EF4444` literals in `<style>`/inline → leave (brand greens) EXCEPT inline `#09090B`/`#0F0F12` page backgrounds → convert to vars.

- [ ] **Step 2: Verify form inputs are legible in light mode**

Run: `npm run build`
Then run: `npm run preview` and open `/contact` and `/get-a-quote`. With OS (or DevTools Rendering → Emulate `prefers-color-scheme: light`) set to light, confirm: input text is dark, placeholders are visible-but-muted, borders are visible, focus ring shows.

- [ ] **Step 3: Verify no stray dark literals**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/routes/contact/+page.svelte src/routes/get-a-quote/+page.svelte
```
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/routes/contact/ src/routes/get-a-quote/
git commit -m "feat(theme): tokenize contact and quote forms"
```

---

## Task 8: FAQ + legal pages

**Files:**
- Modify: `src/routes/faq/+page.svelte`
- Modify: `src/routes/privacy-policy/+page.svelte`
- Modify: `src/routes/terms-of-service/+page.svelte`

- [ ] **Step 1: Apply the canonical mapping**

Apply tables. These are mostly prose/`text-zinc-*` content. Convert per table. Inline `#09090B` → `var(--bg-base)`. The `.prose` class already uses `--text-secondary`/`--accent-blue` vars, so it flips for free — no change needed inside `.prose` rules.

- [ ] **Step 2: Verify no stray dark literals**

Run:
```bash
grep -nE 'zinc-|#09090B|#0F0F12|#18181B' src/routes/faq/+page.svelte src/routes/privacy-policy/+page.svelte src/routes/terms-of-service/+page.svelte
```
Expected: no output.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/routes/faq/ src/routes/privacy-policy/ src/routes/terms-of-service/
git commit -m "feat(theme): tokenize faq and legal pages"
```

---

## Task 9: Full visual verification pass (both schemes)

**Files:** none (verification + any fixes uncovered)

- [ ] **Step 1: Confirm no appearance-named dark colors remain anywhere**

Run:
```bash
grep -rnE 'zinc-|#09090B|#0F0F12|#18181B' src --include=*.svelte
```
Expected: no output, OR only the known Leaflet-map-internal `<style>` hits noted in Task 5. Investigate anything else.

- [ ] **Step 2: Build and serve**

Run: `npm run build && npm run preview`
Expected: builds and serves with no errors.

- [ ] **Step 3: Walk every route in BOTH schemes**

In a browser, open DevTools → Rendering → "Emulate CSS media feature prefers-color-scheme". Toggle between `light` and `dark` on each route:
`/`, `/about`, `/services`, `/services/<a-slug>`, `/coverage-areas`, `/community`, `/community/<a-slug>`, `/awards`, `/careers`, `/contact`, `/get-a-quote`, `/faq`, `/privacy-policy`, `/terms-of-service`, and a 404.

For each, in **light** mode check for:
- Invisible text (white-on-white / dark-on-dark) — especially headings, labels, placeholders.
- Red that looks washed-out or vibrating.
- Overlays/glass that render as solid dark blocks or wrong tints.
- Navbar glass on scroll, dropdown, mobile menu.
In **dark** mode, confirm the page looks **identical to before** this work (no regressions).

- [ ] **Step 4: Fix any issues found, re-verify the affected route, commit**

For each fix, apply the mapping/judgment rule, rebuild, re-check that route. Commit:
```bash
git add -A
git commit -m "fix(theme): resolve light-mode contrast/overlay issues from QA pass"
```

- [ ] **Step 5: Final clean build + lint**

Run: `npm run build && npm run check`
Expected: both pass.

---

## Self-review notes (author)

- **Spec coverage:** token layer (Task 1) ✓; light var overrides + effect overrides (Task 1) ✓; `color-scheme: light dark` (Task 1) ✓; 19-file sweep across Tasks 2-8 ✓ (all 19 spec files mapped to a task); accent deepening via `--accent-red` override + `text-accent-red` token ✓; judgment rule for color-locked elements (mapping section + per-task notes) ✓; verification both schemes (Task 9) ✓.
- **Added beyond spec:** red Tailwind utilities (`text-red-500`/`-400`, 80+ usages) were not in the original spec's three groups; tokenizing red *foreground* to `text-accent-red` is required for the accent-deepen goal to actually reach those elements. Red tints/fills left literal.
- **Out of scope (per spec):** manual toggle, persistence, per-scheme `<meta theme-color>`.
- **Token naming:** border tokens named `line` / `line-subtle` / `line-strong` (not `border-hover`) to avoid the ugly `border-border-hover` utility flagged during brainstorming.
