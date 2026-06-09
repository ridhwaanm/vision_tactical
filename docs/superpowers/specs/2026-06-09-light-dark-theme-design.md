# Light/Dark Theme (System-Based) — Design

**Date:** 2026-06-09
**Status:** Approved (pending spec review)

## Goal

Make the Vision Tactical site respond site-wide to the operating system's
light/dark appearance preference. The site currently renders dark-only. After
this change, a visitor whose OS is set to light mode sees a light version of the
site; a visitor in dark mode sees the existing design unchanged.

## Constraints & Decisions

- **System-driven only.** No manual toggle, no persistence, no JavaScript. Pure
  CSS via `@media (prefers-color-scheme: light)`. This means no flash-of-wrong-theme
  problem to solve.
- **Brand fidelity.** Light mode is the "Linear look" translated to light: white /
  zinc neutrals with the same red accent — *not* warm cream. The brand reads as
  modern, high-contrast, tactical.
- **Accent correction.** The accent red `#EF4444` is tuned to glow on near-black
  and reads slightly hot on white. In light mode the accent shifts to `#DC2626`
  (the existing `--accent-red-soft`, also close to the `#C0392B` theme-color).
  Same red identity, correct contrast.
- **Scope:** Full token-based refactor so the whole site flips cleanly. Not a
  partial/shell-only pass.

## The core problem

Colors are currently hardcoded in three places. Only the first flips on its own:

1. **CSS variables in `:root`** (`src/app.css`) — one place, easy to override.
2. **Tailwind utility classes** hardcoded to dark colors across components —
   ~440 occurrences (`text-white` ×141, `text-zinc-400` ×111, `text-zinc-500`
   ×56, `text-zinc-300` ×34, `border-zinc-700/800`, `bg-zinc-800`,
   `placeholder-zinc-500`, gradient stops, etc.).
3. **Inline hex** in gradients/overlays (`#09090B`, `#0F0F12`, `#18181B`) —
   ~50 occurrences in route files.

A theme variable cannot reach groups 2 and 3. The work is converting those
appearance-named colors into role-named tokens that flip.

## Architecture: semantic token layer

Rename colors by **role** instead of **appearance**, backed by CSS variables,
then redefine the variables under the light media query.

### Token utilities (`app.css`, Tailwind v4)

Add an `@theme inline` block that defines real Tailwind utilities resolving
*through* to the existing design-system variables, so theme overrides cascade:

```css
@theme inline {
  --color-base:        var(--bg-base);
  --color-surface:     var(--bg-surface);
  --color-elevated:    var(--bg-elevated);
  --color-subtle:      var(--bg-subtle);

  --color-primary:     var(--text-primary);
  --color-secondary:   var(--text-secondary);
  --color-muted:       var(--text-muted);
  --color-ghost:       var(--text-ghost);

  --color-border-default: var(--border-default);
  --color-border-subtle:  var(--border-subtle);
  --color-border-hover:   var(--border-hover);

  --color-accent-red:      var(--accent-red);
  --color-accent-red-soft: var(--accent-red-soft);
  --color-accent-red-muted:var(--accent-red-muted);
}
```

`@theme inline` (not plain `@theme`) is required: it makes the generated utility
emit `color: var(--text-primary)` rather than copying the literal value, so
overriding `--text-primary` in a media query cascades to every utility.

### Dark stays as-is, light overrides

The current `:root` values remain the **dark** theme, untouched. Add:

```css
@media (prefers-color-scheme: light) {
  :root {
    --bg-base: #FFFFFF;  --bg-surface: #FAFAFA;
    --bg-elevated: #F4F4F5;  --bg-subtle: #E4E4E7;
    --border-default: #E4E4E7;  --border-subtle: #F0F0F1;  --border-hover: #D4D4D8;
    --text-primary: #18181B;  --text-secondary: #3F3F46;
    --text-muted: #52525B;  --text-ghost: #A1A1AA;
    --accent-red: #DC2626;
  }
}
```

Token → value mapping:

| role | dark (now) | light |
|---|---|---|
| bg-base | `#09090B` | `#FFFFFF` |
| bg-surface | `#0F0F12` | `#FAFAFA` |
| bg-elevated | `#18181B` | `#F4F4F5` |
| bg-subtle | `#1E1E22` | `#E4E4E7` |
| border-default | `#27272A` | `#E4E4E7` |
| border-subtle | `#1C1C1F` | `#F0F0F1` |
| border-hover | `#3F3F46` | `#D4D4D8` |
| text-primary | `#FAFAFA` | `#18181B` |
| text-secondary | `#A1A1AA` | `#3F3F46` |
| text-muted | `#71717A` | `#52525B` |
| text-ghost | `#52525B` | `#A1A1AA` |
| accent-red | `#EF4444` | `#DC2626` |

### `color-scheme`

`html { color-scheme: dark }` → `color-scheme: light dark`, so form controls,
scrollbars, and UA chrome follow the OS too.

### Effects that need explicit light overrides

These use hardcoded dark `rgba()` in `app.css` and won't flip via variables.
Override inside the same light media block:

- `.glass` — `rgba(9, 9, 11, 0.8)` → `rgba(255, 255, 255, 0.8)`
- `.glass-surface` — `rgba(15, 15, 18, 0.85)` → `rgba(250, 250, 250, 0.85)`
- Glow / spotlight red intensities (`--accent-red-glow`, `--accent-red-flare`,
  `.spotlight-layer`, `.glow-card::before`) — reduce ~40% so they don't muddy
  a light surface.
- `.card-image` brightness — lift toward `brightness(1)` in light mode.
- Grid pattern (`.grid-pattern*`) already references `var(--border-subtle)` —
  flips for free, no change needed.

## Component sweep (19 files, ~440 usages)

Replace appearance utilities/inline hex with role tokens:

- `text-white` → `text-primary`
- `text-zinc-300` → `text-secondary` (strong) / `text-muted` per context
- `text-zinc-400` → `text-secondary`
- `text-zinc-500` → `text-muted`
- `text-zinc-600` → `text-ghost`
- `border-zinc-700` → `border-border-hover`; `border-zinc-800` → `border-border-default`
- `bg-zinc-800` → `bg-elevated`; `bg-zinc-700` → `bg-subtle`
- `placeholder-zinc-500` → `placeholder-ghost`
- gradient stops `from-zinc-800` / `to-zinc-900` → role tokens
- inline `#09090B` → `var(--bg-base)`; `#0F0F12` → `var(--bg-surface)`;
  `#18181B` → `var(--bg-elevated)`

Affected files:
`src/app.css`, `src/routes/+layout.svelte`, `src/routes/+page.svelte`,
`src/routes/+error.svelte`, `src/routes/about/+page.svelte`,
`src/routes/services/+page.svelte`, `src/routes/services/[slug]/+page.svelte`,
`src/routes/coverage-areas/+page.svelte`, `src/routes/community/+page.svelte`,
`src/routes/community/[slug]/+page.svelte`, `src/routes/awards/+page.svelte`,
`src/routes/careers/+page.svelte`, `src/routes/contact/+page.svelte`,
`src/routes/get-a-quote/+page.svelte`, `src/routes/faq/+page.svelte`,
`src/routes/privacy-policy/+page.svelte`, `src/routes/terms-of-service/+page.svelte`,
`src/lib/components/layout/Navbar.svelte`,
`src/lib/components/layout/Footer.svelte`,
`src/lib/components/layout/WhatsAppFloat.svelte`.

## The critical judgment rule

This is a **context-aware sweep, not a find-replace.** Two kinds of light/dark
color exist and must be treated differently:

- **Chrome / content** (headings, cards, body copy, borders) → flips with theme.
  These get role tokens.
- **Color-locked** — must stay the same in both themes:
  - White text *on a red button/badge* stays white (it sits on red, not on the
    page background).
  - Light text *over a hero photograph* stays light; hero sections keep their
    dark image overlay in both modes. This is intentional — text legibility over
    imagery — not a bug to "fix."

Every `text-white` and inline dark hex is reviewed in context before swapping.
This judgment is the bulk of the effort.

## Verification

No meaningful unit test exists for pure CSS theming. Verification is build +
visual:

1. `npm run build` succeeds (Tailwind compiles the new `@theme` utilities).
2. Walk every route in **both** schemes (emulate `prefers-color-scheme: light`
   via DevTools rendering panel).
3. Watch specifically for: invisible text (white-on-white / dark-on-dark),
   washed-out or vibrating red, broken/inverted overlays, and any element that
   stayed dark because a hardcoded color was missed.

## Out of scope

- Manual theme toggle / user override.
- Theme persistence / localStorage.
- Per-component redesign beyond color (spacing, layout unchanged).
- Updating the `<meta name="theme-color">` per scheme (minor; can follow later).
