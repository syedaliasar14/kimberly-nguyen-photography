import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolio-type'
import { pageType } from './page-type'
import { homeContent } from './objects/home-content'
import { weddingsContent } from './objects/weddings-content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    portfolioType,
    homeContent,
    weddingsContent
  ],
}
