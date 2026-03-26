# STATE.md — Vision Tactical Content Migration

## Current Phase
Phase 1 — Extract & Write Community Posts (2019-2020)

## Status
ready-to-execute

## Progress
- [ ] Phase 1: Community posts
- [ ] Phase 2: Security/operations posts
- [ ] Phase 3: Terms of Service + review

## Decisions

| When | Decision | Rationale |
|------|----------|-----------|
| 2026-03-26 | Extract from .wpress archive directly | No WP install available; DB found at file offset 3605622976 |
| 2026-03-26 | Use /images/og-default.jpg for all post images | Old WP image paths won't resolve on new site |
| 2026-03-26 | Target 15-20 posts, not all 107 | Focus on authentic VT content, not news reposts |
| 2026-03-26 | YOLO mode, quality model (Opus 4.6) | User preference |

## Blockers
(none)

## Notes
- WordPress DB extraction key: file offset 3605622976, size 41797386 bytes, header offset 4377
- WPRESS_DB_OFFSET=3605622976
- WPRESS_DATA_OFFSET=4377
- DB_SIZE=41797386

---
*Last updated: 2026-03-26*
