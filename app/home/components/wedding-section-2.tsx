"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronRight } from 'lucide-react';

export default function WeddingSection2() {
  return (
    <section className="pt-20 pb-8 relative overflow-hidden h-screen flex flex-col justify-end">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-7xl px-4 md:px-8 mb-12 z-20 text-white relative">
        <h2 className="font-accent text-6xl mb-4">
          Wedding Photography
        </h2>
        <p className='font-jost'>
          {`From grand celebrations to quiet elopements, I document the joy, laughter, and tears that make
          your wedding day unforgettable. Each photograph tells a story, capturing those intimate moments
          that words cannot fully express. As the couple exchanges vows, the love in their eyes speaks volumes,
          and I am there to preserve that timeless memory.`}
        </p>
        <button className="mt-6 btn bg-white text-primary font-jost tracking-wide hover:bg-foreground hover:text-white group rounded-full flex items-center">
          The Wedding Experience
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
