"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NUM_IMAGES = 13;

export default function WeddingSection1() {
  return (
    <section className="py-40 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 z-20 text-stone-800">
        <h2 className="font-accent text-6xl mb-4 text-center">
          Capturing Your <div className="font-script text-9xl inline-block -rotate-10 ml-2 -translate-y-2">story</div>
        </h2>
        <p className="mb-24 font-jost text-lg text-center">
          {`Every love story is unique. I specialize in capturing the intimate moments, genuine emotions,
          and natural connections that make your day truly yours. Whether it's the stolen glances,
          the heartfelt laughter, or the tender embraces, each detail is a thread in the tapestry of your romance.
          I approach every shoot with an eye for authenticity and a passion for storytelling, ensuring that
          your memories are preserved as beautifully as the day itself.`}
        </p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          slideToClickedSlide={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mySwiper w-full relative mx-4 md:mx-8"
        >
          {Array.from({ length: NUM_IMAGES }).map((_, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/home-page/wedding-section-1/${i + 1}.png`}
                alt={`Wedding Photo ${i + 1}`}
                width={1200}
                height={1200}
                className="object-cover"
              />
            </SwiperSlide>
          ))}

          {/* <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
            <ChevronRight className="w-6 h-6 text-white" />
          </div> */}
        </Swiper>
      </div>

      <Link href="/weddings" className='btn-outline rounded-full hover:bg-accent hover:border-accent tracking-wider self-center mx-8 mt-10 flex items-center group'>
        The Wedding Experience <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
