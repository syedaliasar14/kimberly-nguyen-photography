import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolio-type'
import { pageType } from './page-type'
import { homeContent } from './objects/home-content'
import { weddingsContent } from './objects/weddings-content'
import { blogType } from './blog-type'
import { aboutContent } from './objects/about-content'
import { contactContent } from './objects/contact-content'
import { otherWorksType } from './other-works-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    portfolioType,
    otherWorksType,
    blogType,
    homeContent,
    weddingsContent,
    aboutContent,
    contactContent,
  ],
}
