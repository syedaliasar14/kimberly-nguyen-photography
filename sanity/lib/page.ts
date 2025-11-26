import { client } from './client'
import { HOME_PAGE_QUERY, WEDDINGS_PAGE_QUERY } from './queries'
import { Page } from './types'
import { urlFor } from './image'
import { sanityFetch } from './live'

export async function getPageContent(pageType: 'home' | 'weddings'): Promise<Page | null> {
  try {
    let query: string
    let params: any = {}

    switch (pageType) {
      case 'home':
        query = HOME_PAGE_QUERY
        break
      case 'weddings':
        query = WEDDINGS_PAGE_QUERY
        break
      default:
        throw new Error('Invalid page type')
    }

    const page = await sanityFetch({query, params})
    return page.data
  } catch (error) {
    console.error(`Error fetching ${pageType} page:`, error)
    return null
  }
}

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
