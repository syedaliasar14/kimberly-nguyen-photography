import { defineField, defineType } from 'sanity'

export const contactContent = defineType({
  name: 'contactContent',
  title: 'Contact Page Content',
  type: 'object',
  fields: [
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
      type: 'object',
      fields: [
        { name: 'title', title: 'Form Title', type: 'string' },
        { name: 'subtitle', title: 'Form Subtitle', type: 'string' },
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'quote', title: 'Quote', type: 'text' },
              { name: 'name', title: 'Name', type: 'string' },
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
              }
            ]
          }]
        }
      ],
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        {
          name: 'faqs',
          title: 'FAQ Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text' },
            ]
          }]
        }
      ],
    }),
  ],
})
