import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    portfolio: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/portfolio/${doc?.slug}`,
          },
          { title: 'Portfolio index', href: `/portfolio` },
        ],
      }),
    }),
  },
}