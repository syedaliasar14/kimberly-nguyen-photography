import { Page } from './types'
import { urlFor } from './image'

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
