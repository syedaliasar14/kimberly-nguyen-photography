import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from 'next-sanity'

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  pageType: 'home' | 'weddings' | 'about' | 'contact'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImageSource
  }
  homeContent?: HomeContent
  weddingsContent?: WeddingsContent
  aboutContent?: AboutContent
  contactContent?: ContactContent
}

export interface ImageWithAlt {
  asset: SanityImageSource
  alt?: string
}

export interface HomeContent {
  heroSection?: {
    tagline?: string
    images?: ImageWithAlt[]
  }
  weddingSection1?: {
    title?: string
    text?: string
    images?: ImageWithAlt[]
  }
  weddingSection2?: {
    title?: string
    text?: string
    images?: ImageWithAlt[]
  }
  testimonialsSection?: {
    title?: string
    testimonials?: {
      quote: string
      name: string
    }[]
  }
  otherServices?: {
    title?: string
    services?: {
      service: string
      description?: string
      image?: ImageWithAlt
    }[]
  }
}

export interface WeddingsContent {
  heroSection?: {
    title?: string
    text?: string
    images?: ImageWithAlt[]
  }
  processSection?: {
    title: string
    description?: string
  }[]
  elopementsSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
  }
  engagementsSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
  }
  packagesSection?: {
    packages?: {
      name: string
      price: string
      isBestValue?: boolean
      image?: ImageWithAlt
      description?: string
      features?: string[]
      bonus?: string
    }[]
  }
  testimonials?: {
    quote: string
    name: string
  }[]
}

export interface AboutContent {
  heroSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
  }
  behindTheScenesSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
  }
}

export interface ContactContent {
  testimonialsSection?: {
    title?: string
    testimonials?: {
      quote: string
      name: string
    }[]
  }
  faqSection?: {
    title?: string
    faqs?: {
      question: string
      answer: string
    }[]
  }
}

export interface PortfolioItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  thumbnail?: ImageWithAlt
  publishedAt: string
  order?: number
}

export interface Blog {
  _id: string
  title: string
  slug: {
    current: string
  }
  image?: ImageWithAlt
  content: PortableTextBlock[]
  publishedAt: string
}

export interface BlogListItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  image?: ImageWithAlt
  publishedAt: string
}