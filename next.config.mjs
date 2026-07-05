/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the whole site as static HTML/CSS/JS (no server runtime needed) —
  // reliable on any static host (Netlify CDN) and loads instantly.
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
