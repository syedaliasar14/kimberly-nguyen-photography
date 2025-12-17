import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { BlogListItem } from "@/sanity/lib/types";

export const metadata = {
  title: "Blog |Kimberly Nguyen Photography",
  description: "Wedding tips, real wedding stories, and photography insights from Kimberly Nguyen Photography.",
};

export default async function BlogPage() {
  const blogs = (await sanityFetch({ query: BLOGS_QUERY, params: {} }))?.data as BlogListItem[];

  return (
    <section className="py-20 min-h-screen relative">
      <div className="absolute h-[30vh] inset-0 bg-gradient-to-b from-secondary/30 to-transparent -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-thin text-6xl text-primary mb-6">
            The Blog
          </h1>
        </div>

        {blogs && blogs.length > 0 ? (
          <div className="flex flex-col gap-12">
            {blogs.map((blog, index) => (
              <article key={blog._id} className="group">
                <Link href={`/blog/${blog.slug.current}`}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center`}>
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 aspect-[16/9] relative overflow-hidden shadow-lg flex items-center justify-center">
                      {blog.image ? (
                        <Image
                          src={urlFor(blog.image.asset).url()}
                          alt={blog.image?.alt || blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/10 flex items-center justify-center" />
                      )}
                    </div>

                    {/* Content Section */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center md:pl-4`}>
                      <span className="text-sm text-muted-foreground mb-3 font-sans tracking-wide uppercase">
                        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>

                      <h2 className="font-heading font-thin text-2xl md:text-3xl text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                        {blog.title}
                      </h2>

                      <div className={`w-12 h-0.5 bg-accent/50 mb-4 mr-auto`} />

                      <span className={`inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300 font-medium font-sans mr-auto`}>
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
            ))}
          </div>
        ) : (
          <div className="text-center opacity-">
            <div className="mx-auto mb-4 w-24 h-1 bg-accent rounded" />
            <div className="p-8">
              <h2 className="font-heading font-thin text-2xl text-primary mb-4 font-bold">
                Coming Soon...
              </h2>
              <p className="max-w-2xl mx-auto">
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
