import type { NextConfig } from "next";

// Allows next/image to optimize gallery images once they're served from
// Cloudflare R2 instead of /public. The wildcard covers R2's default
// public bucket domain; a custom domain is picked up automatically from
// NEXT_PUBLIC_GALLERY_BASE_URL if one is set instead.
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  { protocol: "https", hostname: "*.r2.dev" },
];

const galleryBaseUrl = process.env.NEXT_PUBLIC_GALLERY_BASE_URL;
if (galleryBaseUrl?.startsWith("http")) {
  const { hostname } = new URL(galleryBaseUrl);
  remotePatterns.push({ protocol: "https", hostname });
}

const nextConfig: NextConfig = {
  images: { remotePatterns },
};

export default nextConfig;
