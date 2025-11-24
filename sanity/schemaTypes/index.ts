import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolio-type'
import { pageType } from './page-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ portfolioType, pageType ],
}
