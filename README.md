# Vision Tactical Marketing Website

Phase 1: Static marketing website for Vision Tactical security company.

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Adapter:** adapter-node (Docker deployment)
- **Email:** Resend
- **Forms:** Zod validation
- **Blog:** Markdown-based (gray-matter + marked)
- **Maps:** Leaflet

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# Lint
npm run lint

# Format
npm run format
```

## Docker

```bash
# Build and run with Docker Compose
docker compose build
docker compose up

# Or just
docker compose up --build
```

## Project Structure

```
src/
├── app.html              # HTML shell template
├── app.css               # Global styles with Tailwind
├── lib/
│   ├── components/       # Reusable Svelte components
│   ├── data/             # Static data (services, testimonials, etc.)
│   ├── server/           # Server-side modules (email, blog)
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── routes/               # SvelteKit file-based routing
└── content/
    └── blog/             # Markdown blog posts
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PUBLIC_SITE_URL=https://visiontactical.co.za
PUBLIC_SITE_NAME=Vision Tactical
PUBLIC_CONTACT_PHONE=0842222222
PUBLIC_CONTACT_EMAIL=info@visiontactical.co.za
PUBLIC_WHATSAPP_NUMBER=27842222222
RESEND_API_KEY=
CONTACT_FORM_TO_EMAIL=info@visiontactical.co.za
PORT=3000
NODE_ENV=production
```

## Deployment

The site is deployed to an xneelo dedicated server using Docker, with Cloudflare CDN/WAF in front.

## Phase 1 Status

- [x] Milestone 1: Scaffold & Infrastructure
- [ ] Milestone 2: Layout Shell & Navigation
- [ ] Milestone 3: Homepage
- [ ] Milestone 4: Service Pages
- [ ] Milestone 5: Content Pages
- [ ] Milestone 6: Blog System
- [ ] Milestone 7: Quote Wizard & Contact Forms
- [ ] Milestone 8: Coverage Areas & Map
- [ ] Milestone 9: SEO, Performance & Polish
- [ ] Milestone 10: Deployment & Handover

## License

Private - Vision Tactical
