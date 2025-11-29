import { defineField, defineType } from 'sanity'

export const contactContent = defineType({
  name: 'contactContent',
  title: 'Contact Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
      ],
    }),
  ],
})
