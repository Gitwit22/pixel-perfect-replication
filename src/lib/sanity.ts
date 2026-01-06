import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'x9a76b7h',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
