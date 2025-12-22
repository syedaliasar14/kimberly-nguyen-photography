"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageWithAlt } from '@/sanity/lib/types';
import { urlFor } from '@/sanity/lib/image';
import { useState, useRef, useEffect } from 'react';

export default function WeddingSection2({ title, text, images }: { title?: string; text?: string; images?: ImageWithAlt[] }) {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) { observer.observe(sectionRef.current); }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 pb-8 relative overflow-hidden min-h-screen flex flex-col justify-end">
      {/* Background Slideshow */}
      <div className={`fixed inset-0 -z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'}`}>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
          navigation={{ prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' }}
          pagination={{ el: '.swiper-pagination-custom', clickable: true }}
        >
          {images?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                className="fixed inset-0 object-cover object-center"
                src={urlFor(img.asset).url()!}
                alt={img.alt || `Connecticut Wedding Photographer`}
                fill sizes='100vw'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay for content readability */}
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-stone-950/30" />

      {/* Content */}
      <div className="max-w-7xl px-4 md:px-8 z-20 text-white relative">
        <h2 className="font-heading font-thin font-thin text-6xl mb-4">
          {title || <>Capturing Your <div className="font-cursive text-9xl inline-block -rotate-10 ml-2 -translate-y-2">story</div></>}
        </h2>
        <p className='text-xl md:text-2xl leading-relaxed whitespace-pre-wrap text-justify'>
          {text || `From grand celebrations to quiet elopements, I document the joy, laughter, and tears that make your wedding day unforgettable. Each photograph tells a story, capturing those intimate moments that words cannot fully express. As the couple exchanges vows, the love in their eyes speaks volumes, and I am there to preserve that timeless memory.`}
        </p>
        <Link href='#testimonials' className="mt-6 mb-2 btn-white group flex items-center">
          Read Testimonials
          <ChevronDown className="size-5 stroke-1 ml-2" />
        </Link>
      </div>

      {/* Custom Navigation Button */}
      {/* <div>
        <div className="swiper-button-prev-custom absolute top-1/4 left-0 p-2 text-white group z-30 cursor-pointer" aria-label="Previous service">
          <ChevronLeft className="size-8 stroke-1" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/4 right-0 p-2 text-white group z-30 cursor-pointer" aria-label="Next service">
          <ChevronRight className="size-8 stroke-1" />
        </div>
      </div> */}

      {/* Custom Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        <div className="swiper-pagination-custom flex space-x-3" />
      </div>
    </section >
  );
}
