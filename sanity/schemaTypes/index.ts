import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolio-type'
import { pageType } from './page-type'
import { homeContent } from './objects/home-content'
import { weddingsContent } from './objects/weddings-content'
import { blogType } from './blog-type'
import { portfolioContent } from './objects/portfolio-content'
import { aboutContent } from './objects/about-content'
import { contactContent } from './objects/contact-content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    portfolioType,
    blogType,
    homeContent,
    weddingsContent,
    portfolioContent,
    aboutContent,
    contactContent
  ],
}
