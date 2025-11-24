import { client } from './client'
import { PAGE_QUERY } from './queries'
import { Page } from './types'
import { urlFor } from './image'

/**
 * Fetches page data from Sanity by slug
 * @param slug - The slug of the page to fetch
 * @returns Page data or null if not found
 */
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const page = await client.fetch<Page>(PAGE_QUERY, { slug })
    return page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

/**
 * Generates metadata for Next.js pages from Sanity page data
 * @param page - The page data from Sanity
 * @returns Metadata object for Next.js
 */
export function generatePageMetadata(page: Page | null) {
  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    }
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || undefined,
    openGraph: page.seo?.ogImage
      ? {
          images: [
            {
              url: urlFor(page.seo.ogImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
            },
          ],
        }
      : undefined,
  }
}
