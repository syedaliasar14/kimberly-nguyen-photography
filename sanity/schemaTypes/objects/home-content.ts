import {defineField, defineType} from 'sanity'

export const homeContent = defineType({
  name: 'homeContent',
  title: 'Home Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {name: 'tagline', title: 'Tagline', type: 'text'},
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
})