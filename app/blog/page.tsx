import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { BlogListItem } from "@/sanity/lib/types";

export const metadata = {
  title: "Blog - Kimberly Nguyen Photography",
  description: "Wedding tips, real wedding stories, and photography insights from Kimberly Nguyen Photography.",
};

export default async function BlogPage() {
  const blogs = (await sanityFetch({query: BLOGS_QUERY, params: {}}))?.data as BlogListItem[];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-primary mb-6 font-bold tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wedding tips, real wedding stories, and photography insights.
          </p>
        </div>

        {blogs && blogs.length > 0 ? (
          <div className="flex flex-col gap-12">
            {blogs.map((blog, index) => {
              const imageUrl = blog.image?.asset
                ? urlFor(blog.image.asset).width(800).height(600).url()
                : null;

              const isEven = index % 2 === 0;

              return (
                <article 
                  key={blog._id}
                  className="group"
                >
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                      {/* Image Section */}
                      <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={blog.image?.alt || blog.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                            <p className="text-accent">Blog Post Image</p>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-4' : 'md:pr-4'}`}>
                        <span className="text-sm text-muted-foreground mb-3 font-jost tracking-wide uppercase">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        
                        <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4 font-semibold group-hover:text-accent transition-colors duration-300">
                          {blog.title}
                        </h2>

                        <div className="w-12 h-0.5 bg-accent/50 mb-4" />

                        <span className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300 font-medium font-jost">
                          Read Article
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Divider between posts */}
                  {index < blogs.length - 1 && (
                    <div className="mt-12 border-b border-secondary/50" />
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-heading text-2xl text-primary mb-4 font-bold">
                Blog Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm working on creating helpful content about wedding photography, 
                planning tips, and real wedding stories. Check back soon for updates!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
