"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WeddingSection1() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-16">
          Intimate Ceremonies
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Every love story is unique. I specialize in capturing the intimate moments, genuine emotions,
          and natural connections that make your day truly yours.
        </p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mySwiper w-full relative mx-4 sm:mx-6 lg:mx-8"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[4/3] bg-gray-500/10 rounded-lg overflow-hidden flex items-center justify-center" />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </div>

          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronRight className="w-6 h-6 text-primary" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
