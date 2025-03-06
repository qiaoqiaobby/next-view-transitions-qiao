import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  // seems to interfere with view transitions during `next dev`
  devIndicators: false,
}

export default nextConfig
