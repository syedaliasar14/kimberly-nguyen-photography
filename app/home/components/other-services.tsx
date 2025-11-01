"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OtherServices() {
  const services = [
    {
      title: "Individualized Sessions",
      description: "Professional portraits that capture your personality and authentic self.",
      image: "/images/portrait-bg.jpg"
    },
    {
      title: "Family Photography",
      description: "Capture cherished moments with your loved ones in a relaxed and natural setting.",
      image: "/images/family-bg.jpg"
    },
    {
      title: "Graduation Photos",
      description: "Capture the joy and milestones of your academic journey.",
      image: "/images/graduation-bg.jpg"
    },
    {
      title: "Engagement Sessions",
      description: "Celebrate your love story with a romantic engagement session in beautiful locations.",
      image: "/images/engagement-bg.jpg"
    },
    {
      title: "Couples Portraits",
      description: "Celebrate your bond with intimate and heartfelt couples portraits.",
      image: "/images/couples-bg.jpg"
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <h2 className="absolute font-script text-white text-7xl -rotate-1 z-10 top-8 w-full px-4">
        looking for something else?
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
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        className="w-full h-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Overlay for content readability */}
              <div className="absolute inset-0 bg-stone-900/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">

                    <div className="text-white">
                      <h3 className="font-heading text-6xl mb-6">
                        {service.title}
                      </h3>

                      <p className="text-xl mb-8 leading-relaxed opacity-90">
                        {service.description}
                      </p>

                      <Link
                        href="/contact"
                        className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-jost hover:bg-white/30 transition-all duration-300 font-medium"
                      >
                        Book Session
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Button */}
      <button
        className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-30"
        aria-label="Next service"
      >
        <ChevronRight className="size-8" />
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {/* Pagination bullets will be inserted here by Swiper */}
      </div>
    </section>
  );
}