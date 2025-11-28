import Link from "next/link";
import { PORTFOLIO_PAGE_QUERY, PORTFOLIO_THUMBNAILS_QUERY } from "@/sanity/lib/queries";
import { Page, PortfolioItem } from "@/sanity/lib/types";
import PolaroidCard from "@/components/polaroid-card";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export default async function PortfolioPage() {
  const [pageData, portfolios] = await Promise.all([
    (await sanityFetch({query: PORTFOLIO_PAGE_QUERY, params: {}})).data as Page,
    (await sanityFetch({query: PORTFOLIO_THUMBNAILS_QUERY, params: {}})).data as PortfolioItem[],
  ]);

  const title = pageData?.portfolioContent?.title || "The Portfolio";
  const description = pageData?.portfolioContent?.description || 
    "A curated collection of love stories we've had the honor to capture. Each gallery represents a unique celebration of love, connection, and the beautiful moments that make your day unforgettable.";

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
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
              <h3 className="font-heading text-2xl text-primary mb-4">Coming Soon</h3>
              <p className="text-muted-foreground text-lg font-jost max-w-2xl mx-auto">
                We're currently curating our portfolio galleries. Check back soon to see 
                beautiful love stories and unforgettable moments we've captured.
              </p>
              <Link href="/contact" className="inline-block mt-8 rounded-full hover:bg-accent btn">
                Book Your Session
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}