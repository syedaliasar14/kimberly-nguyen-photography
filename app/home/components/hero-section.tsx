"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/use-scroll";
import { urlFor } from "@/sanity/lib/image";

export default function HeroSection({ tagline, images }: { tagline?: string; images?: any[] }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollY = useScrollY();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white pt-12 bg-primary relative overflow-hidden">
      {/* Background Slideshow with Parallax */}
      <div className="w-full h-[120%] -top-[10%] mt-16 md:mt-20 absolute" style={{ transform: `translateY(${scrollY * 0.5}px)` }} will-change="transform">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {images?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                className="absolute inset-0 object-cover object-center"
                src={urlFor(img.asset).url()!}
                alt={`Hero Image ${i + 1}`}
                fill sizes="100vw" priority={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-primary/5 z-10" />
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-4 md:px-8 text-center flex flex-col justify-between flex-grow pt-4 relative z-20">
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="font-script text-6xl md:text-8xl -mb-2">Kimberly Nguyen</h1>
          <h2 className="font-jost text-2xl md:text-2xl tracking-widest uppercase">Photography, LLC</h2>
          {/* <p className="text-sm md:text-lg font-jost tracking-widest flex flex-col md:flex-row gap-2 justify-center">
            <span>Wedding & Lifestyle Photographer | </span>
            <span>CT, NY & MA</span>
          </p> */}
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-end">
          <div className="flex flex-col gap-4 mb-12">
            <div className="self-start text-left text-2xl sm:text-3xl font-jost">
              {tagline || `Capturing one of a kind moments, immortalized for generations.`}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start ">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-accent hover:text-white">
                Schedule Consultation
              </Link>
              <Link href="/weddings" className="btn-glass flex items-center">
                Wedding Details
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden self-start md:self-end mb-4 md:mb-10">
            <Image src="/white-logo.svg"
              alt="Testimonials" width={800} height={800}
              className={`w-20 md:w-32 h-auto select-none pointer-events-none transform transition-all ease-in-out duration-1500 ${isLoaded
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
