import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImageSource
}

export interface ImageWithAlt {
  asset: SanityImageSource
  alt?: string
}

export interface WeddingSection {
  title?: string
  text?: string
  images?: ImageWithAlt[]
}

export interface Testimonial {
  quote: string
  author: string
}

export interface OtherService {
  service: string
  description?: string
  image?: ImageWithAlt
}

export interface ProcessStep {
  title: string
  description?: string
}

export interface SectionWithImage {
  title?: string
  text?: string
  image?: ImageWithAlt
}

export interface HomeContent {
  weddingSection1?: WeddingSection
  weddingSection2?: WeddingSection
  testimonials?: Testimonial[]
  otherServices?: OtherService[]
}

export interface WeddingsContent {
  heroSection?: {
    title?: string
    text?: string
    images?: ImageWithAlt[]
  }
  processSection?: ProcessStep[]
  elopementsSection?: SectionWithImage
  engagementsSection?: SectionWithImage
}

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  pageType: 'home' | 'weddings'
  seo?: SEO
  homeContent?: HomeContent
  weddingsContent?: WeddingsContent
}
