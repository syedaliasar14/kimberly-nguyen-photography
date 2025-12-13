import { defineField, defineType } from 'sanity'

export const weddingsContent = defineType({
  name: 'weddingsContent',
  title: 'Weddings Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'text', title: 'Text', type: 'text' },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
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
            { name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'elopementsSection',
      title: 'Elopements Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'text', title: 'Text', type: 'text' },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
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
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'text', title: 'Text', type: 'text' },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
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
      name: 'packagesSection',
      title: 'Packages Section',
      type: 'object',
      fields: [
        {
          name: 'packages',
          title: 'Packages',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Package Name', type: 'string', validation: (rule) => rule.required() },
                { name: 'price', title: 'Price', type: 'string', validation: (rule) => rule.required() },
                {
                  name: 'isBest',
                  title: 'Mark as Best Value/Popular',
                  type: 'boolean',
                  initialValue: false,
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
                { name: 'description', title: 'Description', type: 'text' },
                {
                  name: 'features',
                  title: 'Features (Bulleted List)',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
                { name: 'bonus', title: '✨Bonus', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials (4 max)',
      type: 'array',
      validation: (rule) => rule.max(4),
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', validation: (rule) => rule.required() },
          { name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() },
        ]
      }]
    })
  ],
})