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
      images[]{asset->, alt},
      keywords[]
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
    processSection{
      title,
      subtitle,
      steps[]{title, description}},
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
      title,
      subtitle,
      packages[]{
        name,
        price,
        isBest,
        image{asset->, alt},
        description,
        features,
        bonus
      }
    },
    testimonials[]{
      quote,
      name,
      image{asset->, alt}
    }
  }
}`

export const ABOUT_PAGE_QUERY = groq`*[_type == "page" && pageType == "about"][0]{
  ${BASE_PAGE_FIELDS},
  aboutContent{
    heroSection{
      title,
      text,
      image{asset->, alt}
    },
    behindTheScenesSection{
      title,
      text,
      image{asset->, alt}
    }
  }
}`

export const CONTACT_PAGE_QUERY = groq`*[_type == "page" && pageType == "contact"][0]{
  ${BASE_PAGE_FIELDS},
  contactContent{
    contactForm{
      title,
      subtitle
    },
    testimonialsSection{
      title,
      testimonials[]{
        quote,
        name
      }
    },
    faqSection{
      title,
      faqs[]{
        question,
        answer
      }
    }
  }
}`

export const PORTFOLIO_THUMBNAILS_QUERY = groq`*[
  _type == "portfolio"
  && defined(slug.current)
] | order(order asc, publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  thumbnail,
  order
}`

export const PORTFOLIO_ITEMS_QUERY = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  _id, 
  title, 
  slug, 
  thumbnail{
    asset->
  },
  images[]{
    asset->,
    alt,
    caption
  }
}`;

export const BLOGS_QUERY = groq`*[
  _type == "blog"
  && defined(slug.current)
] | order(publishedAt desc){
  _id,
  title,
  slug,
  image{asset->, alt},
  publishedAt
}`

export const BLOG_BY_SLUG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  image{asset->, alt},
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  publishedAt
}`
