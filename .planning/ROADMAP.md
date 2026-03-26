# Roadmap — Vision Tactical Content Migration

## Milestone v1.0 — Content Population

**Goal:** Populate the new Vision Tactical SvelteKit site with real articles and content from the old WordPress site.

**Success:** New site has 15-20 real blog posts, real terms of service, and no remaining placeholder copy in content sections.

---

### Phase 1 — Extract & Write Community Posts (2019-2020)

**Goal:** Extract the most authentic Vision Tactical content — the Green Team / community posts from 2019-2020 — and write them as markdown files.

**Why first:** These are the most valuable posts (VT is the subject, not just sharing news). Small volume (6 posts), high authenticity.

**Deliverables:**
- 6 blog post markdown files in `src/content/blog/`
- Posts: green team activities, tree planting, rubbish cleanup campaigns
- Tagged: `community`, `green-team`, `environment`

**Requirements covered:** REQ-01, REQ-02, REQ-04, REQ-05, REQ-08

---

### Phase 2 — Extract & Write Security/Operations Posts (2015-2016)

**Goal:** Extract the best security-related posts from 2015-2016 that represent Vision Tactical's own operations or service announcements (not just news re-posts).

**Why second:** Builds out the blog volume with relevant industry content. Filter for posts where VT is the primary subject.

**Target posts:**
- ER24 partnership announcement
- Vision Tactical operations articles
- Car jamming/crime prevention articles
- App review and service posts

**Deliverables:**
- 10-12 additional blog post markdown files
- Tagged: `operations`, `services`, `community`, `armed-response`

**Requirements covered:** REQ-01, REQ-03, REQ-04, REQ-05, REQ-08

---

### Phase 3 — Terms of Service & Content Review

**Goal:** Extract real Terms & Conditions from WP post ID 1310 and update the Terms of Service page. Review and clean up existing placeholder blog posts.

**Deliverables:**
- Terms of Service page updated with real legal content
- Review 3 existing placeholder posts — keep or replace
- Final build check: no errors, all posts render correctly

**Requirements covered:** REQ-06, REQ-07, REQ-09

---

## Phase Summary

| Phase | Goal | Plans | Status |
|-------|------|-------|--------|
| 1 | Community posts (2019-2020) | 1 | planned |
| 2 | Security/operations posts (2015-2016) | 1 | planned |
| 3 | Terms of Service + review | 1 | planned |
