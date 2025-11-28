import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { BlogListItem } from "@/sanity/lib/types";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Blog - Kimberly Nguyen Photography",
  description: "Wedding tips, real wedding stories, and photography insights from Kimberly Nguyen Photography.",
};

export default async function BlogPage() {
  const blogs = await client.fetch<BlogListItem[]>(BLOGS_QUERY, {}, options);

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

        {blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const imageUrl = blog.image?.asset
                ? urlFor(blog.image.asset)?.width(800).height(600).url()
                : null;

              return (
                <article 
                  key={blog._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className="aspect-[4/3] relative">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={blog.image?.alt || blog.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                          <p className="text-accent">Blog Post Image</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl text-primary mb-3 font-semibold">
                        {blog.title}
                      </h2>
                      <span className="text-primary hover:text-accent transition-colors font-medium">
                        Read More →
                      </span>
                    </div>
                  </Link>
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
