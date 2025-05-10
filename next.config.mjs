import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/dxi44hqqe/**')],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
