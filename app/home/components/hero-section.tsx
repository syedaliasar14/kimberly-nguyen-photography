"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-primary-foreground -mt-16 relative">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full bg-stone-500 flex items-center justify-center">
                <p className="text-lg font-medium opacity-50">Background Image {i + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>
      
      {/* Content */}
      <div className="w-full mx-auto px-4 md:px-8 text-center flex flex-col justify-between flex-grow pt-16">
        <div className="flex flex-col gap-4 mt-8">
          <h1 className="font-jost text-4xl md:text-7xl tracking-widest uppercase">Kimberly Nguyen</h1>
          <p className="text-xs sm:text-lg uppercase">{`Wedding & Lifestyle Photographer  |  CT, NY & MA`}</p>
        </div>

        <div className="flex flex-col gap-4 mb-12 mt-8">
          <div className="self-start text-left text-3xl sm:text-4xl font-accent">One of a kind memories, beautifully preserved</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start ">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-foreground hover:text-white rounded-full">
              Schedule Consultation
            </Link>
            <Link href="/weddings" className="btn-outline text-white border-white hover:bg-primary-foreground hover:text-primary rounded-full">
              View Weddings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
