"use client";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import { Masonry } from "masonic";
import { useState, useMemo, useEffect } from "react";
import ImageItem, { IImageItem } from "./image-item";
import ImageSlider from "./image-slider";
import { urlFor } from "@/sanity/lib/image";

export default function ImagesGrid({ portfolio }: { portfolio: SanityDocument | null }) {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = useMemo(() => {
    if (!portfolio?.images) return [];
    
    return portfolio.images.map((image: any, index: number) => {
      const imageUrl = urlFor(image)?.width(600).url();
      const fullImageUrl = urlFor(image).width(2000).url();
      return {
        id: `${portfolio._id}-${index}`,
        src: imageUrl || '',
        fullSrc: fullImageUrl || imageUrl || '',
        alt: image.alt || `${portfolio.title} - Image ${index + 1}`,
        caption: image.caption,
      };
    }).filter((item: IImageItem) => item.src);
  }, [portfolio]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setSliderOpen(true);
  };

  if (!images.length) return null;

  return (
    <>
      <ImageSlider
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={sliderOpen}
        onClose={() => setSliderOpen(false)}
      />

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {isMounted && (
            <Masonry
              items={images}
              columnGutter={16}
              columnWidth={170}
              overscanBy={5}
              maxColumnCount={7}
              render={({ data, index }: { data: IImageItem; index: number }) => (
                <ImageItem
                  data={data}
                  onClick={() => handleImageClick(index)}
                />
              )}
            />
          )}
        </div>
      </section>
    </>
  );
}