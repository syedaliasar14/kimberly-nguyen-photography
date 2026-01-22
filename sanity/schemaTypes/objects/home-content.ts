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
        {name: 'tagline', title: 'Tagline', type: 'string'},
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
        {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]},
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
        }
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'quote', title: 'Quote', type: 'text', validation: (rule) => rule.required()},
                {name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()},
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
                }
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'otherServices',
      title: 'Other Services',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'service', title: 'Service Name', type: 'string', validation: (rule) => rule.required()},
                {name: 'description', title: 'Description', type: 'string'},
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
        },
      ],
    }),
  ],
})