# Codesstellar

Codesstellar is a Next.js marketing site for crypto-agile blockchain engineering, post-quantum readiness, and AI-assisted security operations. It includes an embedded Payload CMS for publishing research-led blog content and managing research intelligence.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS, Framer Motion, GSAP, and React Three Fiber
- Payload CMS + PostgreSQL
- Local Postgres via Docker Compose

## Run locally

Prerequisites: Node.js 20+ and Docker (for the CMS database).

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

   Set a unique `PAYLOAD_SECRET` before using the CMS outside local development.

3. Start PostgreSQL:

   ```bash
   docker compose -f docker-compose.cms.yml up -d
   ```

4. Start the website:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000). The CMS admin is available at [http://localhost:3000/admin](http://localhost:3000/admin).

The public site uses built-in fallback articles when the database is unavailable, so the marketing pages can still be previewed without starting Postgres.

## Useful commands

```bash
npm run lint             # Type-check the project
npm run build            # Create a production build
npm run research:ingest  # Collect RSS research into Payload
npm run research:digest  # Print a prioritised research digest
```

## Content workflow

1. Capture external sources and research items in Payload.
2. Review and shortlist research items.
3. Create a blog post linked to its source research.
4. Move the post through `draft` → `review` → `approved` → `published`.
5. Published posts appear on `/blogs` and in the homepage research section.

See [the CMS and research pipeline plan](docs/CMS_BLOG_RESEARCH_PIPELINE_PLAN.md) for the full architecture and operating model.

## Environment variables

Copy `.env.example` to `.env.local`. Required variables for CMS usage:

```bash
PAYLOAD_SECRET=replace-with-a-long-random-secret
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/codesstellar_dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`GEMINI_API_KEY` and `BLOB_READ_WRITE_TOKEN` are optional and are not required for the local website preview.
