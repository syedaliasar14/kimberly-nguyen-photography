"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IImageItem } from './image-item';
import { useEffect } from 'react';
import Image from 'next/image';

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
        className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white"
        aria-label="Close slider"
      >
        <X className="w-6 h-6 stroke-1" />
      </button>

      {/* Swiper Slider */}
      <div className="w-full h-full flex items-center md:px-16 justify-center relative">
        <Swiper
          modules={[Navigation, Zoom]}
          initialSlide={initialIndex}
          slidesPerView={1}
          loop={false}
          zoom={{
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="w-full h-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="swiper-zoom-container w-full h-full flex items-center justify-center p-4">
                <Image
                  src={image.fullSrc}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  width={2000}
                  height={2000}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}