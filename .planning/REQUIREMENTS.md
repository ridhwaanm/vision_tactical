# Requirements — Vision Tactical Content Migration

## Must Have (MVP)

### Blog Content
- [ ] REQ-01: Extract and create 15-20 markdown blog posts from WordPress backup
- [ ] REQ-02: Posts from 2019-2020 community/green team activities
- [ ] REQ-03: Posts from 2015-2016 security operations and service announcements
- [ ] REQ-04: Each post has valid frontmatter (title, slug, date, excerpt, tags, author)
- [ ] REQ-05: Post content is clean markdown (no WP shortcodes, no HTML artifacts)

### Legal Pages
- [ ] REQ-06: Terms of Service page populated with real content from old WP site (post ID 1310)
- [ ] REQ-07: Content is properly formatted as readable sections

## Should Have

- [ ] REQ-08: Blog posts tagged appropriately (community, operations, awards, services)
- [ ] REQ-09: Existing 3 placeholder posts reviewed — kept if good, replaced if not

## Won't Have (This Milestone)

- Images migrated from old WordPress uploads
- Privacy policy from old site (not found in backup)
- VTAC App page content
- All 107 posts migrated

## Acceptance Criteria

- `src/content/blog/` contains ≥15 markdown files with valid frontmatter
- Terms of service page displays real legal content
- No placeholder text remains in blog/community sections
- Site builds without errors after content additions
