import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media', // where local files would go (ignored if you disable local storage)
    disableLocalStorage: true, // stop writing to disk entirely :contentReference[oaicite:1]{index=1}
    imageSizes: [{ name: 'thumbnail', width: 400, height: 400 }],
    mimeTypes: ['image/*'],
  },
}
