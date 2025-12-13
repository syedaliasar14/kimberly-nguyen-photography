"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Masonry } from "masonic";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
}

const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <div className="bg-background p-6 transition-shadow cursor-default">
    <div className="flex items-center mb-4">
      <div className="flex text-accent">
        {'★'.repeat(5)}
      </div>
    </div>
    <p className="text-muted-foreground italic mb-4 leading-relaxed">
      "{data.quote}"
    </p>
    <p className="text-lg text-primary">- {data.name}</p>
  </div>
);

export default function Testimonials({ title, testimonials }: { title?: string; testimonials?: { quote: string; name: string }[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Transform testimonials for masonic
  const masonicItems: Testimonial[] | undefined = testimonials?.map((testimonial, index) => ({
    id: `testimonial-${index}`,
    ...testimonial,
  }));

  return (
    <section className="py-40 overflow-hidden relative" id="testimonials">
      <Image
        src="/marble2.jpg" alt=""
        width={2000} height={2000}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none -z-10 opacity-50 blur-sm"
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h2 className="font-heading text-6xl mb-10 text-center">
          {title || "What Couples Are Saying..."}
        </h2>

        {/* Mobile: Swiper */}
        <div className="md:hidden relative px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.testimonial-button-next-mobile',
              prevEl: '.testimonial-button-prev-mobile',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 1.2, centeredSlides: true },
              640: { slidesPerView: 2, centeredSlides: false }
            }}
            className="pb-12"
          >
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard data={{ id: `testimonial-${index}`, ...testimonial }} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Buttons */}
          <div className="testimonial-button-prev-mobile absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer transition-all -translate-x-4">
            <ChevronLeft className="w-5 h-5 text-primary/50" />
          </div>
          <div className="testimonial-button-next-mobile absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer transition-all translate-x-4">
            <ChevronRight className="w-5 h-5 text-primary/50" />
          </div>
        </div>

        {/* Desktop: Masonic Layout */}
        <div className="hidden md:block">
          {isMounted && masonicItems && (
            <Masonry
              items={masonicItems}
              columnGutter={16}
              columnWidth={300}
              overscanBy={3}
              render={TestimonialCard}
            />
          )}
        </div>
      </div>
    </section>
  );
}
