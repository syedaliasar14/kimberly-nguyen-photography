"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ChevronLeft, ChevronRight, DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import { ImageWithAlt } from '@/sanity/lib/types';
import { urlFor } from '@/sanity/lib/image';

export default function WeddingGuide({ title, subtitle, images, pdf, photosAltText }: { title?: string; subtitle?: string; images?: ImageWithAlt[]; pdf?: { asset: any }; photosAltText?: string }) {
  const handleDownload = () => {
    if (pdf?.asset?.url) {
      const link = document.createElement('a');
      link.href = pdf.asset.url;
      link.download = pdf.asset.originalFilename || 'Wedding-Guide.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="py-32 bg-background flex flex-col relative">
      <Image
        src="/marble2.jpg" alt=""
        fill sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-50"
      />

      <div className="max-w-full md:max-w-7xl flex flex-col mx-auto px-4 md:px-8 mb-16 z-20 text-stone-800">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center mb-4">
          {title || "The Wedding Guide"}
        </h2>
        <p className="text-center font-sans">
          {subtitle || "Everything you need, in one downloadable guide"}
        </p>
        {pdf && <button onClick={handleDownload} className='btn-outline z-10 self-center mx-8 mt-10 flex items-center'>
          Download the Full PDF <DownloadIcon className="size-5 stroke-1 ml-2 " />
        </button>}
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.5}
          slideToClickedSlide={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          className="wedding-1-swiper w-full relative mx-4 md:mx-8 z-10"
        >
          {images?.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                <Image
                  src={urlFor(img.asset).url()!}
                  alt={img.alt || photosAltText || `Connecticut Wedding Photographer`}
                  width={1200}
                  height={1200}
                  className="object-cover"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 flex items-center justify-center cursor-pointer transition-all">
            <ChevronLeft className="w-6 h-6 text-white stroke-1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 flex items-center justify-center cursor-pointer transition-all">
            <ChevronRight className="w-6 h-6 text-white stroke-1" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
