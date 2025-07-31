import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modern JavaScript output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  
  
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Use modern ES modules
    esmExternals: true,
    // Better tree shaking
    optimizeServerReact: true,
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Tree shaking optimizations
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        usedExports: true,
      }
      
      // Module concatenation for better minification
      config.optimization.concatenateModules = true

      // Disable polyfills for modern browsers
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },

  
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  
  async redirects() {
    return [
      // Redirect from non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'binghengcredit.com',
          },
        ],
        destination: 'https://www.binghengcredit.com/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'llms-txt',
          },
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'llms-txt',
          },
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/llms-ctx.txt',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'llms-txt',
          },
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
