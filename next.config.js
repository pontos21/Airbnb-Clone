/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoicG9udG9zMjEiLCJhIjoiY2xhbjBoMXE5MGZubDN3bWs4ZXd4bm1qbSJ9.YX6vbg4YpwzXXv3cmBqvzw'
  }
}

module.exports = nextConfig
