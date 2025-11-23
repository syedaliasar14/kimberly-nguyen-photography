"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";
import PolaroidCard from "@/components/polaroid-card";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";

const PORTFOLIO_QUERY = `*[
  _type == "portfolio"
  && defined(slug.current)
] | order(order asc, publishedAt asc)[0...6]{_id, title, slug, thumbnail, order}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default function PortfolioGallery() {
  const [portfolios, setPortfolios] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(PORTFOLIO_QUERY);
        setPortfolios(data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-stone-900" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-center mb-16 font-jost">
            Loading recent celebrations...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-stone-900" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4">
          Portfolio Gallery
        </h2>
        <p className="text-center mb-16 font-jost">
          A glimpse into recent celebrations
        </p>

        {portfolios.length > 0 ? (
          <>
            {/* Mobile/Small screen Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
                pagination={{ clickable: true }}
                breakpoints={{
                  480: { slidesPerView: 1.2, centeredSlides: true },
                  640: { slidesPerView: 2, centeredSlides: false }
                }}
                className="pb-12"
              >
                {portfolios.map((portfolio, index) => {
                  const thumbnailUrl = portfolio.thumbnail
                    ? urlFor(portfolio.thumbnail)?.url()
                    : null;
                  
                  return (
                    <SwiperSlide key={portfolio._id} className="py-6">
                      <PolaroidCard 
                        title={portfolio.title}
                        slug={portfolio.slug.current}
                        thumbnailUrl={thumbnailUrl}
                        index={index}
                        rotate={true}
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </div>
                <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10 items-start">
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
                    rotate={true}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-white/80 font-jost text-lg">
              Portfolio coming soon...
            </p>
          </div>
        )}

        <Link href="/portfolio" className="btn-outline rounded-full text-white border-white hover:text-primary hover:bg-white mx-auto block mt-12 flex items-center gap-2">
          View Full Gallery <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
