# DESIGN-SYSTEM.md — Vision Tactical "Linear Look" Design System

> **Purpose:** This document defines a complete design system inspired by the Linear aesthetic — dark, luminous, precision-engineered — adapted for a security company.

---

## 1. Design Philosophy

The Linear Look is defined by darkness as a canvas, light as information, and restraint as confidence. For Vision Tactical:

- **Dark = authority and vigilance** (we operate at night, we are always watching)
- **Red glow = alert state, readiness** (not decorative — functionally signals "active protection")
- **Thin borders and subtle luminance = precision and technology** (drones, CCTV, surveillance systems)
- **Absence of clutter = operational clarity** (a control room, not a circus)

---

## 2. Colour System

See `src/app.css` for CSS custom properties.

### Background Scale
- `--bg-base`: #09090B — page background
- `--bg-surface`: #0F0F12 — cards, sections
- `--bg-elevated`: #18181B — modals, dropdowns, hover
- `--bg-subtle`: #1E1E22 — inset areas

### Borders
- `--border-default`: #27272A — standard borders
- `--border-subtle`: #1C1C1F — dividers
- `--border-hover`: #3F3F46 — hover states

### Text
- `--text-primary`: #FAFAFA — headings
- `--text-secondary`: #A1A1AA — body text
- `--text-muted`: #71717A — captions, meta
- `--text-ghost`: #52525B — placeholders

### Accent (Red)
- `--accent-red`: #EF4444 — primary CTA
- `--accent-red-soft`: #DC2626 — hover
- `--accent-red-muted`: #991B1B — subtle backgrounds
- `--accent-red-glow`: rgba(239, 68, 68, 0.15)
- `--accent-red-flare`: rgba(239, 68, 68, 0.08)

---

## 3. Typography

- **Font:** Inter (400, 500, 600, 700)
- **Headings:** Gradient from white to muted
- **Overlines:** xs, uppercase, tracking-wider, red

---

## 4. Glow System

- Ambient background glows (radial gradients)
- Card glow on hover (cursor tracking)
- Spotlight effect (hero sections)

---

## 5. Borders and Lines

- All borders: 1px, `--border-default`
- Gradient highlights on top edge
- Animated border sweep on feature cards

---

## 6. Grid Background Pattern

- Dot grid: `radial-gradient(circle at 1px 1px, ...)`
- 32px spacing
- Faded variant with mask for heroes

---

## 7. Glassmorphism

- Navbar: `backdrop-filter: blur(12px)`
- Modals: `backdrop-filter: blur(16px)`

---

## 8. Motion

- Scroll-triggered fade-in (20px translateY)
- Number counter animation
- Page transitions (crossfade)

---

## 9. Performance

- No heavy animation libraries
- CSS-only glows
- `will-change` sparingly
- Respect `prefers-reduced-motion`
