import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolio-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ portfolioType ],
}
