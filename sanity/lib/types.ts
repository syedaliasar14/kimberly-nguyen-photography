import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  pageType: 'home' | 'weddings'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImageSource
  }
  homeContent?: HomeContent
  weddingsContent?: WeddingsContent
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
}

