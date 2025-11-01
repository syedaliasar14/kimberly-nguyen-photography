"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WeddingSection1() {
  return (
    <section className="py-40 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 z-20 text-stone-800">
        <h2 className="font-accent text-6xl mb-4 flex flex-col gap-6 items-center text-center">
          Capturing Your Love Story
          <Image
          src="/heart-line-art.svg"
          alt="Testimonials"
          width={1200}
          height={800}
          className="w-56 h-auto self-center mb-4 select-none pointer-events-none"
        />
        </h2>
        <p className="mb-24 font-jost text-lg">
          {`Every love story is unique. I specialize in capturing the intimate moments, genuine emotions,
          and natural connections that make your day truly yours. Whether it's the stolen glances,
          the heartfelt laughter, or the tender embraces, each detail is a thread in the tapestry of your romance.
          I approach every shoot with an eye for authenticity and a passion for storytelling, ensuring that
          your memories are preserved as beautifully as the day itself.`}
        </p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          /* effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }} */
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          slideToClickedSlide={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mySwiper w-full relative mx-4 md:mx-8"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[3/4] bg-stone-900 overflow-hidden flex items-center justify-center" />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hover:bg-primary/10 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronLeft className="w-6 h-6 text-white/50" />
          </div>

          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hover:bg-primary/10 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronRight className="w-6 h-6 text-white/50" />
          </div>
        </Swiper>
      </div>

      <Link href="#testimonials" className='btn-outline rounded-full font-jost tracking-wider self-center md:self-end mx-8 mt-10 flex items-center group'>
        See Testimonials <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>

      <style jsx>{`
        :global(.mySwiper .swiper-slide) {
          transform: scale(0.85);
          transition: transform 0.3s ease;
        }
        :global(.mySwiper .swiper-slide-active) {
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
