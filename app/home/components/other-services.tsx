"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OtherServices() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Portrait Sessions",
      description: "Professional portraits that capture your personality and authentic self.",
      image: "/images/portrait-bg.jpg" // Add your portrait photo
    },
    {
      title: "Family Photography",
      description: "Capture cherished moments with your loved ones in a relaxed and natural setting.",
      image: "/images/family-bg.jpg" // Add your family photo
    },
    {
      title: "Graduation Photos",
      description: "Capture the joy and milestones of your child's academic journey.",
      image: "/images/graduation-bg.jpg" // Add your graduation photo
    },
    {
      title: "Engagement Sessions",
      description: "Celebrate your love story with a romantic engagement session in beautiful locations.",
      image: "/images/engagement-bg.jpg" // Add your engagement photo
    },
    {
      title: "Elopements",
      description: "Intimate ceremonies deserve intimate photography. Perfect for couples seeking simplicity.",
      image: "/images/elopement-bg.jpg" // Add your elopement photo
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="w-full h-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h2 className="font-heading text-white text-6xl mb-8">Looking for Something Else?</h2>

            <button className="swiper-button-next-custom absolute right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-30"
              aria-label="Next service"
            >
              <ChevronRight className="size-8 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Current Service Content */}
            <div className="text-white mt-24">
              <h3 className="font-heading text-4xl mb-6 transition-all duration-500">
                {services[currentSlide].title}
              </h3>

              <p className="text-xl mb-8 leading-relaxed opacity-90">
                {services[currentSlide].description}
              </p>

              <Link href="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-jost hover:bg-white/30 transition-all duration-300 font-medium">
                Book Session
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}