"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageWithAlt } from '@/sanity/lib/types';
import { urlFor } from '@/sanity/lib/image';

export default function WeddingSection1({ title, text, images }: { title?: string; text?: string; images?: ImageWithAlt[] }) {
  return (
    <section className="py-40 flex flex-col relative">
      <Image
        src="/bg/1.png" alt=""
        fill sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none blur-sm z-0 opacity-10"
      />

      <div className="max-w-7xl flex flex-col mx-auto px-4 md:px-8 mb-12 z-20 text-stone-800">
        <Image
          src="/heart-line-art.svg" alt="Testimonials"
          width={1200} height={800}
          className="w-78 h-auto self-center mb-16 select-none pointer-events-none opacity-80"
        />

        <h2 className="font-accent text-6xl mb-4 text-center">
          {title || "Wedding Photography"}
        </h2>
        <p className="mb-24 font-jost text-lg text-center whitespace-pre-wrap">
          {text || `Every love story is unique. I specialize in capturing the intimate moments, genuine emotions, and natural connections that make your day truly yours. Whether it's the stolen glances, the heartfelt laughter, or the tender embraces, each detail is a thread in the tapestry of your romance. I approach every shoot with an eye for authenticity and a passion for storytelling, ensuring that your memories are preserved as beautifully as the day itself.`}
        </p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay, Zoom]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          slideToClickedSlide={true}
          zoom={{
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
          }}
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
          {images?.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                <Image
                  src={urlFor(img.asset).url()!}
                  alt={img.alt || `Connecticut Wedding Photographer`}
                  width={1200}
                  height={1200}
                  className="object-cover"
                />
              </div>
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

      <Link href="/weddings" className='btn bg-accent border-accent hover:bg-transparent hover:border-accent hover:text-accent self-center mx-8 mt-10 flex items-center group'>
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
