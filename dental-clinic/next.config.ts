import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires formats to be only avif/webp (jpeg/png are migrated)
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  compress: true,

  // Allow dev tools (like HMR websocket) to be requested from other LAN hosts
  // so the loader/components don't get stuck due to dev resource blocking.
  allowedDevOrigins: ['192.168.31.97', 'localhost', '127.0.0.1'],
};

export default nextConfig;
