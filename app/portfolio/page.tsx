import Link from "next/link";
import { PORTFOLIO_THUMBNAILS_QUERY } from "@/sanity/lib/queries";
import { Page, PortfolioItem } from "@/sanity/lib/types";
import PolaroidCard from "@/components/polaroid-card";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function PortfolioPage() {
  const portfolios = (await sanityFetch({ query: PORTFOLIO_THUMBNAILS_QUERY, params: {} })).data as PortfolioItem[];

  return (
    <>
      {/* Portfolio Grid */}
      <section className="py-20 bg-background relative">
        <Image
          src="/marble3.png" alt=""
          fill sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-50"
        />
        <h1 className="py-12 font-heading text-center mx-auto font-thin text-5xl md:text-6xl z-10 relative text-primary">
          The Portfolio
        </h1>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {portfolios.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {portfolios.map((portfolio, index) => {
                const thumbnailUrl = portfolio.thumbnail
                  ? urlFor(portfolio.thumbnail)?.url()
                  : null;

                return (
                  <PolaroidCard
                    key={portfolio._id}
                    title={portfolio.title}
                    slug={portfolio.slug.current}
                    thumbnailUrl={thumbnailUrl}
                    index={index}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-heading font-thin text-2xl text-primary mb-4">Coming Soon</h3>
              <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
                We're currently curating our portfolio galleries. Check back soon to see
                beautiful love stories and unforgettable moments we've captured.
              </p>
              <Link href="/contact" className="inline-block mt-8 hover:bg-accent btn">
                Book Your Session
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}