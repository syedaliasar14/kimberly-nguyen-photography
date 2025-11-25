import { groq } from 'next-sanity'

// Base page fields used by all pages
const BASE_PAGE_FIELDS = groq`
  _id,
  title,
  slug,
  pageType,
  seo{
    metaTitle,
    metaDescription,
    ogImage
  }
`

// Specific page queries
export const HOME_PAGE_QUERY = groq`*[_type == "page" && pageType == "home"][0]{
  ${BASE_PAGE_FIELDS},
  homeContent{
    weddingSection1{
      title,
      text,
      images[]{asset->, alt}
    },
    weddingSection2{
      title,
      text,
      images[]{asset->, alt}
    },
    testimonials[]{quote, author},
    otherServices[]{
      service,
      description,
      image{asset->, alt}
    }
  }
}`

export const WEDDINGS_PAGE_QUERY = groq`*[_type == "page" && pageType == "weddings"][0]{
  ${BASE_PAGE_FIELDS},
  weddingsContent{
    heroSection{
      title,
      text,
      images[]{asset->, alt}
    },
    processSection[]{title, description},
    elopementsSection{
      title,
      text,
      image{asset->, alt}
    },
    engagementsSection{
      title,
      text,
      image{asset->, alt}
    }
  }
}`

