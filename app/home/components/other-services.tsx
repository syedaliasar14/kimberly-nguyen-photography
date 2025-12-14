"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithAlt } from '@/sanity/lib/types';
import { urlFor } from '@/sanity/lib/image';

export default function OtherServices({ title, services }: { title?: string; services?: { service?: string; description?: string; image?: ImageWithAlt }[] }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <h2 className="absolute text-white font-heading font-thin text-5xl md:text-6xl z-10 top-8 w-full px-4 md:px-8 flex flex-col items-center text-center gap-3">
        {/* <div className="text-sm w-1.5 h-1.5 bg-white rotate-45" /> */} {title || "Other Services"} {/* <div className="text-sm w-1.5 h-1.5 bg-white rotate-45" /> */}
        <div className='text-base font-sans'>For all your photography needs</div>
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {services?.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              {service?.image && (
                <Image
                  className="absolute inset-0 object-cover object-center"
                  src={urlFor(service.image.asset).url()!}
                  alt={service?.service || `Connecticut Photography Service`}
                  fill sizes="100vw"
                />
              )}

              {/* Overlay for content readability */}
              <div className="absolute inset-0 bg-stone-900/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-end text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20 text-center text-balance">
                  <h3 className="font-heading font-thin text-5xl md:text-6xl mb-6">
                    {service.service}
                  </h3>

                  <p className="text-xl mb-8 leading-relaxed opacity-90">
                    {service.description}
                  </p>

                  <Link href="/contact" className="btn-white">
                    Book Your Session
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Button */}
      <div>
        <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-y-1/2 p-2 text-white group z-30 cursor-pointer" aria-label="Previous service">
          <ChevronLeft className="size-8 stroke-1" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-0 -translate-y-1/2 p-2 text-white group z-30 cursor-pointer" aria-label="Next service">
          <ChevronRight className="size-8 stroke-1" />
        </div>
      </div>
    </section>
  );
}