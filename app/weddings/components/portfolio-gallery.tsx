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
import Image from "next/image";

const PORTFOLIO_QUERY = `*[
  _type == "portfolio"
  && defined(slug.current)
] | order(order asc, publishedAt asc)[0...4]{_id, title, slug, thumbnail, order}`;

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

  return (
    <section className="py-20 bg-background relative" id="portfolio">
      <Image
        src="/marble3.png" alt=""
        width={2000} height={2000}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center mb-4">
          Portfolio Gallery
        </h2>
        <p className="text-center mb-16 font-sans">
          A glimpse into recent celebrations
        </p>

        {loading ? (
          <div className="text-center py-16 opacity-75 font-sans">
            Loading portfolio...
          </div>
        ) : portfolios.length > 0 ? (
          <>
            {/* Mobile/Small screen Swiper */}
            <div className="lg:hidden">
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
                className="pb-12 portfolio-swiper"
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
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 cursor-pointer">
                  <ChevronLeft className="w-6 h-6 stroke-1" />
                </div>
                <div className="swiper-button-next-custom absolute right-0 top-1/2 z-10 cursor-pointer">
                  <ChevronRight className="w-6 h-6 stroke-1" />
                </div>
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-10 items-start">
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
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-white/80 font-sans text-lg">
              Portfolio coming soon...
            </p>
          </div>
        )}

        <Link href="/portfolio" className="btn-outline mx-auto block mt-10 flex items-center gap-2">
          View Full Gallery <ChevronRight className="size-4 stroke-1" />
        </Link>
      </div>

      <style jsx>{`
        :global(.portfolio-swiper .swiper-pagination-bullet) {
          background-color: #666666 !important;
          opacity: 0.5;
        }

        :global(.portfolio-swiper .swiper-pagination-bullet-active) {
          background-color: #333333 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
