"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="font-jost text-5xl md:text-7xl tracking-widest uppercase trailing-tight">Kimberly Nguyen</h1>
          <p className="text-sm md:text-lg font-jost tracking-widest flex flex-col md:flex-row gap-2 justify-center">
            <span>Wedding & Lifestyle Photographer | </span>
            <span>CT, NY & MA</span>
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-end">
          <div className="flex flex-col gap-4 mb-12">
            <div className="self-start text-left text-2xl sm:text-3xl font-accent">
              Capturing one of a kind moments, immortalized for generations.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start ">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-foreground hover:text-white font-jost tracking-wider rounded-full">
                Schedule Consultation
              </Link>
              <Link href="/weddings" className="btn-outline text-white border-white font-jost tracking-wider hover:bg-primary-foreground hover:text-primary rounded-full flex items-center">
                View Weddings
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden self-start md:self-end mb-4 md:mb-10">
            <Image src="/white-logo.svg"
              alt="Testimonials" width={800} height={800}
              className={`w-20 md:w-32 h-auto select-none pointer-events-none transform transition-all duration-1500 ${isLoaded
                  ? 'translate-y-2'
                  : 'translate-y-full'
                }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
