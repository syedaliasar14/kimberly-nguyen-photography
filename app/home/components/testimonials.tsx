"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default function Testimonials({ title, testimonials }: { title?: string; testimonials?: { quote: string; name: string, image?: ImageWithAlt }[] }) {
  return (
    <section className="py-40 overflow-hidden bg-background relative" id="testimonials">
      <Image
        src="/marble2.jpg" alt=""
        width={2000} height={2000}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-30"
      />

      <div className="mx-auto flex flex-col z-10 ">
        <h2 className="font-heading font-thin text-6xl mb-16 z-10 text-center">
          {title || "What Couples Are Saying..."}
        </h2>

        <Swiper
          modules={[Navigation, Autoplay, Zoom]}
          spaceBetween={50}
          slidesPerView={1.3}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          centeredSlides={true}
          slideToClickedSlide={true}
          zoom={{ maxRatio: 3, minRatio: 1, toggle: true }}
          navigation={{ nextEl: '.testimonial-button-next-custom', prevEl: '.testimonial-button-prev-custom' }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full relative mx-4 md:mx-8 z-10"
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index} className="mx-auto py-12">
              <div className="flex flex-col md:flex-row gap-6 h-full max-w-3xl ">
                <div className="swiper-zoom-container w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
                  {testimonial.image && (
                    <div className="relative">
                      {/* <Image src="/green-leather.jpg" alt=""
                        width={600} height={700}
                        className="absolute -top-4 -left-4 w-full rotate-180 aspect-[5/6] object-cover z-0" /> */}

                      <div className="absolute -top-2 -left-2 right-4 bottom-4 bg-accent" />

                      <Image src={urlFor(testimonial.image).url()!}
                        alt={testimonial.image.alt || "Connecticut Wedding Photography Testimonial"}
                        width={1000} height={1000}
                        className="relative z-10 object-cover w-full aspect-[5/6] border border-accent"
                      />
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center bg-white p-4 md:p-8 shadow-lg h-max self-end md:-ml-32 -mb-4 z-10">
                  <p className="text-accent">★★★★★</p>
                  <p className="text-lg text-justify italic mb-6">"{testimonial.quote}"</p>
                  <p className="text-xl text-right">- {testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="testimonial-button-prev-custom absolute left-0 top-1/2 z-10 cursor-pointer">
          <ChevronLeft className="size-8 stroke-1" />
        </div>
        <div className="testimonial-button-next-custom absolute right-0 top-1/2 z-10 cursor-pointer">
          <ChevronRight className="size-8 stroke-1" />
        </div>
      </div>
    </section >
  );
}
