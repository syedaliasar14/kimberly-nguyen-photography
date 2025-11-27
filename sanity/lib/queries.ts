import { groq } from 'next-sanity'

// Base page fields used by all pages
const BASE_PAGE_FIELDS = groq`
  _id,
  pageType,
  title,
  slug,
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
    heroSection{
      tagline,
      images[]{asset->, alt}
    },
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
    testimonialsSection{
      title,
      testimonials[]{quote, name}
    },
    otherServices{
      title,
      services[]{
        service,
        description,
        image{asset->, alt}
      }
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
    },
    packagesSection{
      packages[]{
        name,
        price,
        isBestValue,
        image{asset->, alt},
        description,
        features,
        bonus
      }
    }
  }
}`

