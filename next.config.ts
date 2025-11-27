import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "standalone",
  basePath: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
  reactStrictMode: true,
}

export default nextConfig
