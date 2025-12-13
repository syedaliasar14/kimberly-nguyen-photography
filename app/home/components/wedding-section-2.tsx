"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ImageWithAlt } from '@/sanity/lib/types';
import { urlFor } from '@/sanity/lib/image';

export default function WeddingSection2({ title, text, images }: { title?: string; text?: string; images?: ImageWithAlt[] }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => { setScrollY(window.scrollY) };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 pb-8 relative overflow-hidden h-screen flex flex-col justify-end">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className='w-full h-[120%] -top-[10%] absolute inset-0'>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full h-full"
          >
            {images?.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  className="absolute inset-0 object-cover object-center"
                  src={urlFor(img.asset).url()!}
                  alt={img.alt || `Connecticut Wedding Photographer`}
                  fill sizes='100vw'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overlay for content readability */}
        <div className="absolute z-10 inset-0 bg-stone-950/30" />
      </div>

      {/* Content */}
      <div className="max-w-7xl px-4 md:px-8 z-20 text-white relative">
        <h2 className="font-heading font-thin font-thin text-6xl mb-4">
          {title || <>Capturing Your <div className="font-cursive text-9xl inline-block -rotate-10 ml-2 -translate-y-2">story</div></>}
        </h2>
        <p className='text-lg md:text-xl leading-relaxed whitespace-pre-wrap'>
          {text || `From grand celebrations to quiet elopements, I document the joy, laughter, and tears that make your wedding day unforgettable. Each photograph tells a story, capturing those intimate moments that words cannot fully express. As the couple exchanges vows, the love in their eyes speaks volumes, and I am there to preserve that timeless memory.`}
        </p>
        <Link href='#testimonials' className="mt-6 btn-white group flex items-center">
          Read Testimonials
          <ChevronDown className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section >
  );
}
