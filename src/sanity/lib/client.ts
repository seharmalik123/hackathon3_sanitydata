import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export async function getProductBySlug(slug: string) {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
}