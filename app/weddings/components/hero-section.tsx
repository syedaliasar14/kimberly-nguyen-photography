"use client";

import { useScrollY } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const NUM_IMAGES = 6;

export default function HeroSection() {
  const scrollY = useScrollY();

  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-secondary via-secondary/50 to-secondary/90 text-white -mt-14 pt-14 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <Image
          src="/home-page/hero-section/1.png"
          alt="Wedding Photography Background"
          fill priority
          className="object-cover object-center absolute inset-0 opacity-90 blur-md w-full h-[120%] -top-[10%] absolute -z-10"
          /* style={{ transform: `translateY(${scrollY * 0.5}px)` }} will-change="transform" */
        />
      </div>

      <div className="max-w-7xl flex flex-col md:flex-row gap-6 items-start mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col">
          <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl mb-4 leading-tight w-max relative">
            {/* <div className="absolute bottom-0 -left-4 -right-4 bg-accent h-[80%] px-4 rotate-2 opacity-75" /> */}
            <span className="relative">Wedding Photography</span>
          </h1>
          <p className="font-jost text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Every love story is unique, deserving to be captured with intention and heart.
            I believe in documenting the authentic moments—the quiet glances, joyful tears,
            and everything in between that makes your day truly yours.
          </p>

          <div className="flex gap-2 md:gap-4 items-center mb-8 self-center md:self-start">
            <Link href="#process" className="btn px-3 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
              Process
            </Link>
            <div className="block w-1 h-1 bg-white rounded-full" />
            <Link href="#packages" className="btn px-3 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
              Packages
            </Link>
            <div className="block w-1 h-1 bg-white rounded-full" />
            <Link href="#portfolio" className="btn px-3 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
              Portfolio
            </Link>
          </div>
          <Link href="/contact" className="btn bg-white/20 px-8 font-jost tracking-wider hover:bg-white/30 rounded-full mx-auto md:mx-0">
            Book Your Wedding
          </Link>
        </div>

        <div className="mx-4 mt-10 md:mt-0 rounded-t-full w-xs sm:w-sm md:w-md h-full overflow-hidden border-3 border-white/75 shadow-accent shadow-lg flex-shrink-0 self-center">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full h-full"
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
          </Swiper>
        </div>
      </div>
    </section>
  );
}
