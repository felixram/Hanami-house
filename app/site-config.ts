export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Points at the local /public/gallery folder by default. Once an R2 bucket
// (or any other host) serves the gallery images, set NEXT_PUBLIC_GALLERY_BASE_URL
// to its public base URL (no trailing slash) — filenames stay the same.
export const galleryBaseUrl = process.env.NEXT_PUBLIC_GALLERY_BASE_URL ?? "/gallery";
