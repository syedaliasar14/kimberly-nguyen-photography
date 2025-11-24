# Page Schema Documentation

This documentation explains how to use the Sanity page schema to manage content for the Home and Weddings pages.

## Schema Structure

The `page` schema type supports two page types:
- **Home**: Content for the home page
- **Weddings**: Content for the weddings page

### Common Fields

All pages include:
- `title`: Page title
- `slug`: URL-friendly identifier
- `pageType`: Dropdown selection (home/weddings)
- `seo`: SEO metadata (metaTitle, metaDescription, ogImage)

### Home Page Content

When `pageType` is set to "home", the following sections are available:

1. **Wedding Section 1**
   - Title
   - Text
   - Images (array with alt text)

2. **Wedding Section 2**
   - Title
   - Text
   - Images (array with alt text)

3. **Testimonials**
   - Quote
   - Author

4. **Other Services**
   - Service name
   - Description
   - Image with alt text

### Weddings Page Content

When `pageType` is set to "weddings", the following sections are available:

1. **Hero Section**
   - Title
   - Text
   - Images (array with alt text)

2. **Process Section**
   - Title
   - Description
   (Array of steps)

3. **Elopements Section**
   - Title
   - Text
   - Image with alt text

4. **Engagements Section**
   - Title
   - Text
   - Image with alt text

## Usage in Server Components

### Fetching Page Data

```typescript
import { getPageBySlug, generatePageMetadata } from '@/sanity/lib/page'

// In a server component or page
export default async function HomePage() {
  const page = await getPageBySlug('home')
  
  if (!page) {
    return <div>Page not found</div>
  }

  const homeContent = page.homeContent
  
  return (
    <div>
      {/* Use the content */}
      {homeContent?.weddingSection1 && (
        <section>
          <h2>{homeContent.weddingSection1.title}</h2>
          <p>{homeContent.weddingSection1.text}</p>
        </section>
      )}
    </div>
  )
}
```

### Generating Metadata

```typescript
import { getPageBySlug, generatePageMetadata } from '@/sanity/lib/page'

export async function generateMetadata() {
  const page = await getPageBySlug('home')
  return generatePageMetadata(page)
}
```

### Using Images

```typescript
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

// In your component
{page.homeContent?.weddingSection1?.images?.map((img, index) => (
  <Image
    key={index}
    src={urlFor(img.asset).url()}
    alt={img.alt || 'Wedding photo'}
    width={600}
    height={400}
  />
))}
```

## Example: Home Page Server Component

```typescript
import { getPageBySlug } from '@/sanity/lib/page'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

export async function generateMetadata() {
  const page = await getPageBySlug('home')
  return {
    title: page?.seo?.metaTitle || page?.title || 'Home',
    description: page?.seo?.metaDescription,
  }
}

export default async function HomePage() {
  const page = await getPageBySlug('home')
  
  if (!page || page.pageType !== 'home') {
    return <div>Page not found</div>
  }

  const { homeContent } = page

  return (
    <>
      {/* Wedding Section 1 */}
      {homeContent?.weddingSection1 && (
        <section className="py-20">
          <h2>{homeContent.weddingSection1.title}</h2>
          <p>{homeContent.weddingSection1.text}</p>
          <div className="grid grid-cols-3 gap-4">
            {homeContent.weddingSection1.images?.map((img, i) => (
              <Image
                key={i}
                src={urlFor(img.asset).width(600).url()}
                alt={img.alt || ''}
                width={600}
                height={400}
              />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {homeContent?.testimonials && (
        <section className="py-20">
          <h2>Testimonials</h2>
          {homeContent.testimonials.map((testimonial, i) => (
            <div key={i}>
              <p>"{testimonial.quote}"</p>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </section>
      )}

      {/* Other Services */}
      {homeContent?.otherServices && (
        <section className="py-20">
          <h2>Other Services</h2>
          {homeContent.otherServices.map((service, i) => (
            <div key={i}>
              <h3>{service.service}</h3>
              <p>{service.description}</p>
              {service.image && (
                <Image
                  src={urlFor(service.image.asset).width(400).url()}
                  alt={service.image.alt || service.service}
                  width={400}
                  height={300}
                />
              )}
            </div>
          ))}
        </section>
      )}
    </>
  )
}
```

## Example: Weddings Page Server Component

```typescript
import { getPageBySlug } from '@/sanity/lib/page'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

export default async function WeddingsPage() {
  const page = await getPageBySlug('weddings')
  
  if (!page || page.pageType !== 'weddings') {
    return <div>Page not found</div>
  }

  const { weddingsContent } = page

  return (
    <>
      {/* Hero Section */}
      {weddingsContent?.heroSection && (
        <section>
          <h1>{weddingsContent.heroSection.title}</h1>
          <p>{weddingsContent.heroSection.text}</p>
        </section>
      )}

      {/* Process Section */}
      {weddingsContent?.processSection && (
        <section>
          <h2>Our Process</h2>
          {weddingsContent.processSection.map((step, i) => (
            <div key={i}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Elopements Section */}
      {weddingsContent?.elopementsSection && (
        <section>
          <h2>{weddingsContent.elopementsSection.title}</h2>
          <p>{weddingsContent.elopementsSection.text}</p>
          {weddingsContent.elopementsSection.image && (
            <Image
              src={urlFor(weddingsContent.elopementsSection.image.asset).url()}
              alt={weddingsContent.elopementsSection.image.alt || ''}
              width={800}
              height={600}
            />
          )}
        </section>
      )}

      {/* Engagements Section */}
      {weddingsContent?.engagementsSection && (
        <section>
          <h2>{weddingsContent.engagementsSection.title}</h2>
          <p>{weddingsContent.engagementsSection.text}</p>
        </section>
      )}
    </>
  )
}
```

## Creating Pages in Sanity Studio

1. Navigate to `/studio` in your browser
2. Click "Create" and select "Page"
3. Enter a title and slug
4. Select page type (Home or Weddings)
5. Fill in the relevant content sections based on the page type
6. Add SEO metadata (recommended)
7. Save and publish

## TypeScript Types

All types are exported from `@/sanity/lib/types`:

- `Page`: Main page type
- `HomeContent`: Home page content structure
- `WeddingsContent`: Weddings page content structure
- `SEO`: SEO metadata
- `ImageWithAlt`: Image with alt text
- `Testimonial`: Testimonial structure
- `OtherService`: Service item structure
- `ProcessStep`: Process step structure

## Notes

- Only the relevant content section (homeContent or weddingsContent) will be visible based on the selected pageType
- Images support hotspot for smart cropping
- All image fields include optional alt text for accessibility
- SEO fields are optional but recommended for better search engine optimization
