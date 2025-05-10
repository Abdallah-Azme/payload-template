import React from 'react'
import './styles.css'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import Image from 'next/image'
// import '@/styles/globals.css'
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config: payloadConfig })
  const media = await payload.find({
    collection: 'media',
    depth: 10,
  })

  console.log('media', media)
  return (
    <html lang="en">
      <body>
        <main>
          <Image
            src={media.docs[0].cloudinary?.secure_url || ''}
            width={400}
            height={400}
            alt="image"
          />
          {children}
        </main>
      </body>
    </html>
  )
}
