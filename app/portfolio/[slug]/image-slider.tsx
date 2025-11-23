"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IImageItem } from './image-item';
import { useEffect } from 'react';

interface ImageSliderProps {
  images: IImageItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageSlider({ images, initialIndex, isOpen, onClose }: ImageSliderProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when slider is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white"
        aria-label="Close slider"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Swiper Slider */}
      <div className="w-full h-full flex items-center justify-center px-16">
        <Swiper
          modules={[Navigation]}
          initialSlide={initialIndex}
          slidesPerView={1}
          loop={false}
          autoplay={false}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="w-full h-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={image.fullSrc}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white z-40"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white z-40"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
