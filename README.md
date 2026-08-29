Hanami House marketing site — a single-page Next.js app for a private/corporate sushi catering business.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — the deployed site's URL (e.g. `https://hanamihouse.com`). Used for `robots.txt`, `sitemap.xml`, and social-share metadata. Falls back to `http://localhost:3000` if unset — set this on Vercel once a domain is live.

## Structure

- `app/page.tsx` — assembles the page from the sections in `app/components/`
- `app/api/contact/route.ts` — handles the contact form submission (currently logs to console; needs a real email integration — see below)
- Gallery and Testimonials sections are currently un-rendered in `page.tsx` (Gallery has real photos ready in `public/gallery/`; Testimonials still has placeholder quotes)

## Before launch

- **Contact form delivery**: `app/api/contact/route.ts` only logs submissions to the server console — nothing is emailed or saved yet. Once the Google Workspace inbox is set up, this needs an actual send step (e.g. [Resend](https://resend.com)) targeting that address, plus an API key set as an environment variable.
- **Testimonials**: re-enable `<Testimonials />` in `app/page.tsx` (and its nav link) once real client quotes replace the placeholders in `app/components/Testimonials.tsx`.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` in the deployment environment once a domain is chosen.
