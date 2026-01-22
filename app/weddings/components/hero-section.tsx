"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default function HeroSection({ title, text, images, photosAltText }: { title?: string; text?: string; images?: ImageWithAlt[]; photosAltText?: string }) {

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-secondary via-secondary to-secondary/30 text-white pt-14 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/leather2.jpg"
          alt="Wedding Photography Background"
          fill priority
          className="object-cover object-center absolute inset-0 opacity-25 w-full h-full"
          unoptimized
        />
      </div>

      <div className="max-w-7xl flex flex-col md:flex-row gap-10 items-start mx-auto px-4 md:px-8 py-12 z-10">
        <div className="flex flex-col mt-12">
          <h1 className="font-heading font-thin text-6xl mb-4 relative">
            {/* <div className="absolute bottom-0 -left-4 -right-4 bg-accent h-[80%] px-4 rotate-2 opacity-75" /> */}
            {title || "Wedding Photography"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-justify">
            {text || `Every love story is unique, deserving to be captured with intention and heart. I believe in documenting the authentic moments—the quiet glances, joyful tears, and everything in between that makes your day truly yours.`}
          </p>

          <div className="md:text-xl flex gap-2 md:gap-4 items-center mb-8 self-center md:self-start">
            <Link href="#process" className="btn px-4 md:px-6 bg-transparent hover:border-white text-white">
              Process
            </Link>
            <div className="block w-1 h-1 bg-white rounded-full" />
            <Link href="#portfolio" className="btn px-4 md:px-6 bg-transparent hover:border-white text-white">
              Portfolio
            </Link>
            <div className="block w-1 h-1 bg-white rounded-full" />
            <Link href="#packages" className="btn px-4 md:px-6 bg-transparent hover:border-white text-white">
              Pricing
            </Link>
          </div>
          <Link href="/contact" className="text-xl btn-white mx-auto md:mx-0">
            Book Your Wedding
          </Link>
        </div>

        <div className="mx-4 mt-10 md:mt-0 rounded-t-full w-xs sm:w-sm md:w-md h-full overflow-hidden border-3 border-white/75 shadow-accent shadow-lg flex-shrink-0 self-center">
          <Swiper
            modules={[Autoplay, EffectFade, Zoom]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            zoom={{
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full h-full"
          >
            {images?.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                  <Image
                    src={urlFor(img.asset).url()!}
                    alt={img.alt || photosAltText || `Wedding Photo ${i + 1}`}
                    width={1200}
                    height={1200}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
