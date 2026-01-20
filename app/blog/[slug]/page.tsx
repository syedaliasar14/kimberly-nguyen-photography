import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Blog } from "@/sanity/lib/types";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = (await sanityFetch({ query: BLOG_BY_SLUG_QUERY, params: { slug: resolvedParams.slug } }))?.data as Blog;

  if (!blog) {
    return {
      title: "Blog Not Found - Kimberly Nguyen Photography",
    };
  }

  return {
    title: `${blog.title} - Blog - Kimberly Nguyen Photography`,
    description: `Read ${blog.title} on the Kimberly Nguyen Photography blog.`,
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset ? urlFor(value.asset).width(1200).url() : null;
      if (!imageUrl) return null;
      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value?.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto"
            unoptimized
          />
          {value?.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading font-thin text-3xl mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading font-thin text-2xl mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading font-thin text-xl mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '';
      const isInternal = href.startsWith('/') || href.startsWith('#');
      return (
        <a
          href={href}
          {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
          className="text-accent hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = (await sanityFetch({ query: BLOG_BY_SLUG_QUERY, params: { slug: resolvedParams.slug } }))?.data as Blog;

  if (!blog) {
    notFound();
  }

  const featuredImageUrl = blog.image?.asset
    ? urlFor(blog.image.asset).url()
    : null;

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Posts
          </Link>

          <h1 className="font-heading font-thin text-3xl sm:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Author Info */}
          <Link href="/about" className="flex items-center gap-4 mb-8 w-max">
            <Image
              src="/kim/3.png"
              alt="Kimberly Nguyen"
              width={200}
              height={200}
              className="rounded-full object-cover h-12 w-12"
            />
            <div>
              <p className="font-sans font-medium text-primary">Kimberly Nguyen</p>
              <p className="text-sm text-muted-foreground">
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImageUrl && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <div className="relative aspect-[16/9] overflow-hidden shadow-lg">
            <Image
              src={featuredImageUrl}
              alt={blog.image?.alt || blog.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <PortableText value={blog.content} components={portableTextComponents} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-row items-center gap-6 mb-8 justify-center">
            <Image
              src="/black-logo.svg"
              alt="Kimberly Nguyen Photography Logo"
              width={80} height={80}
              className="object-contain"
            />
          </div>
          <p className="text-lg mb-4 leading-relaxed">
            Capturing one of a kind moments, immortalized for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn hover:bg-accent">
              Get in Touch
            </Link>
            <Link href="/blog" className="btn-outline hover:bg-primary hover:text-primary-foreground">
              Read More Posts
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
