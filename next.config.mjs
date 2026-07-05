// On GitHub Pages the site is served from a sub-path (/<repo>), set via the
// PAGES_BASE_PATH env in CI. Empty locally and on Netlify (served at root).
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the whole site as static HTML/CSS/JS (no server runtime needed) —
  // reliable on any static host and loads instantly.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
