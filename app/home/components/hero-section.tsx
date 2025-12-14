"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { urlFor } from "@/sanity/lib/image";

export default function HeroSection({ tagline, images }: { tagline?: string; images?: any[] }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {setIsVisible(entry.isIntersecting);},
      { threshold: 0.1 }
    );
    if (sectionRef.current) { observer.observe(sectionRef.current);}
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center text-white pt-12 bg-primary relative overflow-hidden">
      {/* Background Slideshow - Fixed Position */}
      <div className={`fixed inset-0 w-full h-full z-0 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'}`}>
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
        <div className="absolute inset-0 bg-primary/15 z-10" />
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-4 md:px-8 text-center flex flex-col justify-between flex-grow pt-4 relative z-20">
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="font-heading font-thin font-thin uppercase text-6xl md:text-7xl">Kimberly Nguyen</h1>
          <h2 className="text-xl md:text-2xl font-sans tracking-widest uppercase">Photography, LLC</h2>
        </div>

        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-start ">
              <Link href="/contact" className="btn-white">
                Schedule Consultation
              </Link>
              <Link href="/weddings" className="btn-outline-white flex items-center">
                Wedding Details
                <ChevronRight className="size-5 stroke-1 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="self-start text-left text-2xl sm:text-3xl">
              {tagline || `Capturing one of a kind moments, immortalized for generations.`}
            </div>
          </div>
          <div className="overflow-hidden self-end mb-4 flex-shrink-0">
            <Image src="/white-logo.svg"
              alt="Testimonials" width={800} height={800}
              className={`w-16 ml-1 md:w-32 h-auto select-none pointer-events-none transform transition-all ease-in-out duration-1500 ${isLoaded
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
