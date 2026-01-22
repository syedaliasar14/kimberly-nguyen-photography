import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional order for sorting. Leave empty to sort by date.',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Location or venue name',
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      description: 'Season or category (e.g., Spring 2024, Summer)',
    }),
    defineField({
      name: 'photosAltText',
      title: 'Photos Alt Text',
      type: 'string',
      description: 'Default Alt text for all photos used in this page',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Portfolio Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility',
            },
          ],
        },
      ],
      validation: (rule) => rule.min(1).error('At least one image is required'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'publishedAt',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title: title,
        media: media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
      }
    },
  },
})