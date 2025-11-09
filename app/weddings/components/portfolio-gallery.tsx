"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioGallery() {
  const weddings = [
    { coupleName: "Sarah & Michael", img: "/images/weddings/wedding1.jpg", href: "/portfolio/sarah-michael", rotate: -4 },
    { coupleName: "Jessica & David", img: "/images/weddings/wedding2.jpg", href: "/portfolio/jessica-david", rotate: 3 },
    { coupleName: "Maria & James", img: "/images/weddings/wedding3.jpg", href: "/portfolio/maria-james", rotate: -2 },
    { coupleName: "Aisha & Omar", img: "/images/weddings/wedding4.jpg", href: "/portfolio/aisha-omar", rotate: 5 },
    { coupleName: "Emily & Chen", img: "/images/weddings/wedding5.jpg", href: "/portfolio/emily-chen", rotate: -6 },
    { coupleName: "Rachel & Sofia", img: "/images/weddings/wedding6.jpg", href: "/portfolio/rachel-sofia", rotate: 2 }
  ];

  const PolaroidCard = ({ wedding, index }: { wedding: typeof weddings[0], index: number }) => (
    <Link href={wedding.href} className="block">
      <div className="flex justify-center py-12">
        <div style={{ transform: `rotate(${wedding.rotate}deg)` }} 
          className="bg-white p-4 rounded-sm shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:rotate-0"
        >
          <div className="bg-white rounded-sm overflow-hidden border border-gray-100">
            <div className="relative w-[220px] h-[280px] bg-gray-50">
              <Image
                src={wedding.img}
                alt={wedding.coupleName}
                fill
                sizes="(max-width: 768px) 220px, 280px"
                className="object-cover"
                priority={index < 3}
              />
            </div>
            <div className="h-10 bg-white flex items-center justify-center border-t border-gray-100">
              <span className="text-3xl text-primary font-script">{wedding.coupleName}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-20 bg-stone-900" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4">
          Portfolio Gallery
        </h2>
        <p className="text-center mb-16 font-jost">
          A glimpse into recent celebrations
        </p>

        {/* Mobile/Small screen Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.2, centeredSlides: true },
              640: { slidesPerView: 2, centeredSlides: false }
            }}
            className="pb-12"
          >
            {weddings.map((wedding, index) => (
              <SwiperSlide key={index}>
                <PolaroidCard wedding={wedding} index={index} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-primary/50 rounded-full flex items-center justify-center cursor-pointer transition-all">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {weddings.map((wedding, index) => (
            <PolaroidCard key={index} wedding={wedding} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
