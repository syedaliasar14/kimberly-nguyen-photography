import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Weddings', value: 'weddings'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (50-60 characters)',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines (150-160 characters)',
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
        }),
      ],
    }),
    defineField({
      name: 'homeContent',
      title: 'Home Page Content',
      type: 'homeContent',
      hidden: ({document}) => document?.pageType !== 'home',
    }),
    defineField({
      name: 'weddingsContent',
      title: 'Weddings Page Content',
      type: 'weddingsContent',
      hidden: ({document}) => document?.pageType !== 'weddings',
    }),
  ],
  preview: {
    select: {
      pageType: 'pageType',
    },
    prepare(selection) {
      const {pageType} = selection
      return {
        title: pageType ? pageType.charAt(0).toUpperCase() + pageType.slice(1) : 'Page',
        subtitle: 'Page Content'
      }
    },
  },
})
