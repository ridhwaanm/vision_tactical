# Vision Tactical — Content Migration

## What This Is

A content migration from Vision Tactical's old WordPress site to their new SvelteKit website. The task is to extract real text articles (blog posts, community posts, legal pages) from a WordPress backup archive and populate the new site's content sections, replacing placeholder AI-generated content with actual historical material.

## Core Value

The new site must contain Vision Tactical's real articles and authentic content — not placeholder copy — so visitors see the company's actual history, operations, and community involvement.

## Requirements

### Validated

- ✓ New SvelteKit site is built and deployed (Netlify) — existing
- ✓ Blog system reads markdown files from `src/content/blog/` — existing
- ✓ 3 placeholder blog posts exist — existing (to be replaced/augmented)
- ✓ Services data populated with rich content — existing
- ✓ Community, about, awards pages built — existing

### Active

- [ ] Replace/augment placeholder blog posts with real WordPress articles
- [ ] Add real community/environmental posts (green team, tree planting, 2019-2020)
- [ ] Add real security/crime news articles from the old site (2015-2016)
- [ ] Update Terms of Service with real legal content from old WP site
- [ ] Replace placeholder logo SVG with real brand SVG (pending user providing logo)

### Out of Scope

- WordPress database migration or live DB sync — site uses static markdown files
- Migrating WordPress images (old uploads are low-quality resized copies)
- Migrating the VTAC App or Personal Watch pages — these features don't exist in new site
- Email/user data from the backup — not relevant to public website content
- Full 107-post migration — only the most substantive and authentic posts

## Context

### Technical Environment
- New site: SvelteKit + TypeScript, deployed on Netlify
- Blog system: Reads `.md` files from `src/content/blog/` using gray-matter + marked
- Community section: Uses same `getAllPosts()` blog system filtered by tags
- Old site: WordPress 6.2.2 with Enfold theme, backed up as 3.4GB `.wpress` archive
- WordPress DB extracted from archive at offset 3605622976, size ~41MB

### Content Found in Old WordPress DB
- **107 published blog posts** by authors 1, 2, 3, 6
- Most recent: Community/green team posts (2019-2020) — tree planting, rubbish cleanup
- Large volume: Crime news re-posts from 2015-2016 (security industry news)
- Key service posts: ER24 partnership announcement, VTAC app launch
- **Pages**: Terms & Conditions (ID 1310, ~12KB content), Contact, Home (shortcode-heavy)

### Content Selection Strategy
Prioritise posts where Vision Tactical is the subject (not just sharing news):
1. Green Team / community posts (2019-2020) — authentic VT activities
2. Service-specific posts (ER24 partnership, operations) — authentic VT content
3. Crime news articles (2015-2016) — relevant industry context, authored by VT
4. Real Terms & Conditions page content

### New Site Blog Post Format
```
---
title: "..."
slug: "..."
date: "YYYY-MM-DD"
excerpt: "..."
image: "/images/blog/placeholder.jpg"
tags: ["..."]
author: "Vision Tactical"
---

[Markdown content]
```

## Constraints

- **Tech Stack**: Must use existing markdown-based blog system — no DB changes
- **Images**: Old site images are at WP upload paths; new site uses `/images/blog/` paths — use `/images/og-default.jpg` as fallback
- **Content Quality**: WP posts contain Enfold shortcodes — must strip these cleanly and preserve actual text
- **Volume**: Target 15-20 real blog posts total (not all 107)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Extract from .wpress archive directly | No WP install available; archive contains full SQL dump | ✓ Implemented — DB extracted |
| Use `/images/og-default.jpg` for missing images | Old WP image paths won't resolve on new site | Pending |
| Focus on post-2019 community posts first | Most authentic VT content, recent | Pending |
| Strip shortcodes, preserve text content | Enfold shortcodes are layout-only; text is the value | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? → Move to Out of Scope
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active

---
*Last updated: 2026-03-26 after initialization*
