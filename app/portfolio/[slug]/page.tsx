import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import ImagesGrid from "./images-grid";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { PORTFOLIO_ITEMS_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const portfolio = (await sanityFetch({ query: PORTFOLIO_ITEMS_QUERY, params: resolvedParams })).data as SanityDocument | null;
  
  const ogImage = portfolio?.thumbnail 
    ? urlFor(portfolio.thumbnail).width(1200).height(630).url()
    : undefined;

  return {
    title: `${portfolio?.title} - Portfolio - Kimberly Nguyen Photography Connecticut`,
    description: `View the ${portfolio?.title} gallery from our wedding and engagement photography portfolio.`,
    openGraph: ogImage ? {
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
      }]
    } : undefined,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const portfolio = (await sanityFetch({ query: PORTFOLIO_ITEMS_QUERY, params: resolvedParams })).data as SanityDocument | null;

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-thin text-2xl text-primary mb-4">Portfolio Not Found</h1>
          <Link href="/portfolio" className="text-accent hover:underline font-sans">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 my-8 font-sans">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="text-center">
            <h1 className="font-heading font-thin text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              {portfolio.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <ImagesGrid portfolio={portfolio} />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-thin text-3xl md:text-4xl text-primary mb-6">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-lg text-muted-foreground mb-4 font-sans leading-relaxed">
            Every beautiful story deserves to be told with intention and heart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn hover:bg-accent">
              Book Your Session
            </Link>
            <Link href="/portfolio" className="btn-outline hover:bg-primary hover:text-primary-foreground">
              View More Work
            </Link>
          </div>

          <Image
            src="/camera-line-art.svg"
            alt="Camera Line Art"
            width={800} height={800}
            className="w-56 h-auto mx-auto mt-10 select-none pointer-events-none"
          />
        </div>
      </section>
    </>
  );
}