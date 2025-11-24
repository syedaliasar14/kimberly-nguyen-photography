import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
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
      type: 'object',
      hidden: ({document}) => document?.pageType !== 'home',
      fields: [
        defineField({
          name: 'weddingSection1',
          title: 'Wedding Section 1',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'weddingSection2',
          title: 'Wedding Section 2',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'quote', title: 'Quote', type: 'text', validation: (rule) => rule.required()},
                {name: 'author', title: 'Author', type: 'string', validation: (rule) => rule.required()},
              ],
            },
          ],
        }),
        defineField({
          name: 'otherServices',
          title: 'Other Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'service', title: 'Service Name', type: 'string', validation: (rule) => rule.required()},
                {name: 'description', title: 'Description', type: 'text'},
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'weddingsContent',
      title: 'Weddings Page Content',
      type: 'object',
      hidden: ({document}) => document?.pageType !== 'weddings',
      fields: [
        defineField({
          name: 'heroSection',
          title: 'Hero Section',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'processSection',
          title: 'Process Section',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()},
                {name: 'description', title: 'Description', type: 'text'},
              ],
            },
          ],
        }),
        defineField({
          name: 'elopementsSection',
          title: 'Elopements Section',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'engagementsSection',
          title: 'Engagements Section',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
    },
    prepare(selection) {
      const {title, pageType} = selection
      return {
        title: title,
        subtitle: pageType ? pageType.charAt(0).toUpperCase() + pageType.slice(1) : '',
      }
    },
  },
})
