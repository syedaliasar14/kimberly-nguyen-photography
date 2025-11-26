"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OtherServices() {
  const services = [
    {
      title: "Individualized Sessions",
      description: "Professional portraits that capture your personality and authentic self.",
      image: "/home-page/other-services/individual.png"
    },
    {
      title: "Family Photography",
      description: "Capture cherished moments with your loved ones in a relaxed and natural setting.",
      image: "/home-page/other-services/family.png"
    },
    {
      title: "Graduation Photos",
      description: "Capture the joy and milestones of your academic journey.",
      image: "/home-page/other-services/graduation.png"
    },
    {
      title: "Engagement Sessions",
      description: "Celebrate your love story with a romantic engagement session in beautiful locations.",
      image: "/home-page/other-services/engagement.png"
    },
    {
      title: "Couples Portraits",
      description: "Celebrate your bond with intimate and heartfelt couples portraits.",
      image: "/home-page/other-services/couples.png"
    },
    {
      title: "Maternity Photography",
      description: "Celebrate the beauty of motherhood with elegant maternity portraits.",
      image: "/home-page/other-services/maternity.png"
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <h2 className="absolute font-script text-white text-7xl -rotate-10 z-10 top-8 w-full px-4 md:px-8">
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
        }}
        className="w-full h-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                className="absolute inset-0 object-cover object-center"
                src={service.image}
                alt={service.title}
                fill
                sizes="100vw"
              />

              {/* Overlay for content readability */}
              <div className="absolute inset-0 bg-stone-900/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-end">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl mb-20">

                    <div className="text-white">
                      <h3 className="font-heading text-5xl md:text-6xl mb-6">
                        {service.title}
                      </h3>

                      <p className="text-xl mb-8 leading-relaxed opacity-90">
                        {service.description}
                      </p>

                      <Link href="/contact" className="btn-glass">
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
      <button className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 p-2 btn-glass group z-30"
        aria-label="Next service"
      >
        <ChevronRight className="size-8" />
      </button>
    </section>
  );
}