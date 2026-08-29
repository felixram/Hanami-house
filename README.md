Hanami House marketing site — a single-page Next.js app for a private/corporate sushi catering business.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — the deployed site's URL (e.g. `https://hanamihouse.com`). Used for `robots.txt`, `sitemap.xml`, and social-share metadata. Falls back to `http://localhost:3000` if unset — set this once a domain is live.
- `NEXT_PUBLIC_GALLERY_BASE_URL` — base URL the Gallery section loads photos from. Falls back to `/gallery` (the files in `public/gallery/`). Point it at an R2 bucket's public URL (see below) once the gallery outgrows what's practical to ship in the repo.

## Structure

- `app/page.tsx` — assembles the page from the sections in `app/components/`
- `app/api/contact/route.ts` — handles the contact form submission (currently logs to console; needs a real email integration — see below)
- Testimonials is currently un-rendered in `page.tsx` (still has placeholder quotes)

## Moving the gallery to Cloudflare R2

The gallery currently ships from `public/gallery/`. To switch to an R2 bucket once one exists:

1. Upload the images to the bucket with the same filenames used in `app/components/Gallery.tsx` (e.g. `omakase-table.jpg`), or update that file's `tiles` array to match new filenames/labels — it's a plain array, so adding more tiles as the gallery grows is just adding more entries.
2. Enable public access on the bucket and grab its public URL (the `pub-<hash>.r2.dev` dev domain, or a custom domain mapped to the bucket).
3. Set `NEXT_PUBLIC_GALLERY_BASE_URL` to that URL (no trailing slash) in the deployment environment and redeploy.

`next.config.ts` already allows image optimization from any `*.r2.dev` host, and picks up a custom domain automatically from `NEXT_PUBLIC_GALLERY_BASE_URL` — no code changes needed for the switch itself. `public/gallery/` can be deleted once R2 is confirmed working.

## Before launch

- **Contact form delivery**: `app/api/contact/route.ts` only logs submissions to the server console — nothing is emailed or saved yet. Once the Google Workspace inbox is set up, this needs an actual send step (e.g. [Resend](https://resend.com)) targeting that address, plus an API key set as an environment variable.
- **Testimonials**: re-enable `<Testimonials />` in `app/page.tsx` (and its nav link) once real client quotes replace the placeholders in `app/components/Testimonials.tsx`.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` in the deployment environment once a domain is chosen.
