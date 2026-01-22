"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  title?: string;
  testimonials?: {
    quote: string;
    name: string;
    image?: ImageWithAlt;
  }[];
  photosAltText?: string;
}

export default function Testimonials({ title, testimonials, photosAltText }: Props) {
  return (
    <section className="relative h-screen overflow-hidden bg-primary">
      <h2 className="absolute text-white font-heading font-thin text-5xl md:text-6xl z-10 top-8 w-full px-4 md:px-8 flex flex-col items-center text-center gap-3">
        {title || "Kind Words from Kind Clients"}
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1536: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              {testimonial?.image && (
                <Image
                  className="absolute inset-0 object-cover object-center"
                  src={urlFor(testimonial.image).url()!}
                  alt={testimonial.image.alt || photosAltText || "Connecticut Wedding Photography Testimonial"}
                  fill sizes="100vw"
                  unoptimized
                />
              )}

              {/* Overlay for content readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 to-stone-900/80" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-end text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20 text-center text-balance">
                  <p className="text-xl mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <p className="text-xl text-accent">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {/* <div className=''>
        <div className="swiper-button-prev-custom absolute top-1/3 left-0 p-2 text-white group z-30 cursor-pointer" aria-label="Previous testimonial">
          <ChevronLeft className="size-8 stroke-1" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/3 right-0 p-2 text-white group z-30 cursor-pointer" aria-label="Next testimonial">
          <ChevronRight className="size-8 stroke-1" />
        </div>
      </div> */}
    </section>
  );
}