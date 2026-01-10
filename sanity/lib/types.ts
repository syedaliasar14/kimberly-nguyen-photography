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
    keywords?: string[]
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
      image?: ImageWithAlt
    }[]
  }
  otherServices?: {
    title?: string
    subtitle?: string
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
    subtitle?: string
    steps?: {
      title: string
      description?: string
    }[]
  }
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
    title?: string
    subtitle?: string
    packages?: {
      name: string
      price: string
      isBest?: boolean
      image?: ImageWithAlt
      description?: string
      features?: string[]
      bonus?: string
    }[]
  }
  weddingGuide?: {
    title?: string
    subtitle?: string
    pdf?: { asset: SanityImageSource }
    images?: ImageWithAlt[]
  }
  testimonials?: {
    quote: string
    name: string
    image?: ImageWithAlt
  }[]
}

export interface AboutContent {
  heroSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
    image2?: ImageWithAlt
  }
  behindTheScenesSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
    image2?: ImageWithAlt
  }
  valuesSection?: {
    title?: string
    text?: string
    image?: ImageWithAlt
    image2?: ImageWithAlt
  }
}

export interface ContactContent {
  contactForm?: {
    title?: string
    subtitle?: string
  }
  testimonialsSection?: {
    title?: string
    testimonials?: {
      quote: string
      name: string
      image?: ImageWithAlt
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

export interface OtherWorksItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  thumbnail?: ImageWithAlt
  publishedAt: string
  order?: number
}