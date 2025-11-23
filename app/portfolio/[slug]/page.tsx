"use client";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Masonry } from "masonic";
import { useState, useEffect } from "react";
import ImageItem, { IImageItem } from "./image-item";
import ImageSlider from "./image-slider";

const PORTFOLIO_QUERY = `*[_type == "portfolio" && slug.current == $slug][0]{_id, title, slug, images[]}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

/* export async function generateMetadata({params}: {params: Promise<{ slug: string }>;}) {
  const portfolio = await client.fetch<SanityDocument>(PORTFOLIO_QUERY, await params, options);
  
  return {
    title: `${portfolio?.title} - Portfolio - Kimberly Nguyen Photography`,
    description: `View ${portfolio?.title} from our wedding and engagement photography portfolio.`,
  };
} */

export default function PortfolioDetailPage({ params, }: { params: Promise<{ slug: string }>; }) {
  const [portfolio, setPortfolio] = useState<SanityDocument | null>(null);
  const [images, setImages] = useState<IImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const resolvedParams = await params;
        const portfolioData = await client.fetch<SanityDocument>(PORTFOLIO_QUERY, resolvedParams, options);
        setPortfolio(portfolioData);

        if (portfolioData?.images) {
          const imageItems: IImageItem[] = portfolioData.images.map((image: any, index: number) => {
            const imageUrl = urlFor(image)?.width(600).url();
            const fullImageUrl = urlFor(image)?.width(2000).url();
            return {
              id: `${portfolioData._id}-${index}`,
              src: imageUrl || '',
              fullSrc: fullImageUrl || imageUrl || '',
              alt: image.alt || `${portfolioData.title} - Image ${index + 1}`,
              caption: image.caption,
            };
          }).filter((item: IImageItem) => item.src); // Filter out items without valid src

          setImages(imageItems);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [params]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setSliderOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-primary mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-primary mb-4">Portfolio Not Found</h1>
          <Link href="/portfolio" className="text-accent hover:underline font-jost">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Image Slider Popup */}
      <ImageSlider
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={sliderOpen}
        onClose={() => setSliderOpen(false)}
      />

      {/* Hero Section with Back Navigation */}
      <section className="py-12 bg-gradient-to-br from-secondary/20 to-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 my-8 font-jost">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
              {portfolio.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      {images.length > 0 && (
        <section className="py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Masonry
              items={images}
              columnGutter={16}
              columnWidth={170}
              overscanBy={5}
              maxColumnCount={7}
              render={({ data, index }) => (
                <ImageItem 
                  data={data} 
                  onClick={() => handleImageClick(index)} 
                />
              )}
            />
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl sm:text-3xl text-primary mb-6">
            Ready to Create Your Own <span className="font-script text-5xl ">Story?</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 font-jost leading-relaxed">
            Let's capture the beautiful moments and genuine emotions of your special day.
            Every love story deserves to be told with intention and heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn rounded-full hover:bg-accent">
              Book Your Session
            </Link>
            <Link href="/portfolio" className="btn-outline rounded-full hover:bg-primary hover:text-primary-foreground">
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}