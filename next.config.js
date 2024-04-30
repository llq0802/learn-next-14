const isProd = process.env.NODE_ENV === 'production';


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  distDir: isProd ? 'dist' : '.next',
  eslint: {
    ignoreDuringBuilds: true, // 忽略在构建时出现的错误
  },
  typescript: {
    ignoreBuildErrors: true // 忽略ts构建错误
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/dashboard',
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
