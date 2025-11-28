import { defineField, defineType } from 'sanity'

export const portfolioContent = defineType({
  name: 'portfolioContent',
  title: 'Portfolio Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading for the portfolio page',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      description: 'Introduction text displayed below the page title',
      validation: (rule) => rule.required(),
    }),
  ],
})