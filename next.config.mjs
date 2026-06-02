/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'v0-double-r-renovations-website';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
}

export default nextConfig