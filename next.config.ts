import type { NextConfig } from "next";

/*
 * STATIC_EXPORT=1 builds a static site into ./out (used for GitHub Pages).
 * NEXT_PUBLIC_BASE_PATH sets the sub-path the site is served from (e.g. "/braut").
 * Without them the app builds as a standalone Node server (Docker / Vercel).
 */
const staticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = staticExport
  ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
  : { output: "standalone" };

export default nextConfig;
