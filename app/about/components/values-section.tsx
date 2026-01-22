import Image from "next/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface ValuesSectionProps {
  title?: string;
  text?: string;
  image?: ImageWithAlt;
  image2?: ImageWithAlt;
  photosAltText?: string;
}

export default function ValuesSection({ title, text, image, image2, photosAltText }: ValuesSectionProps) {
  const imageUrl = image?.asset ? urlFor(image.asset).width(1000).height(1000).url() : "/kim/2.png";
  const image2Url = image2?.asset ? urlFor(image2.asset).width(1000).height(1200).url() : null;

  const defaultTitle = "My Approach to Photography";
  const defaultText = `Authenticity is at the heart of everything I do. I believe in capturing real moments—the unguarded laughter, the quiet glances, and the genuine emotions that make your day uniquely yours.

Diversity and cultural traditions are something I deeply cherish. Having grown up in a Vietnamese-American household, I understand the importance of honoring heritage while celebrating new beginnings. I'm passionate about photographing couples from all backgrounds and ensuring their cultural elements are beautifully documented.

Quality and attention to detail drive my work. From the initial consultation to the final gallery delivery, I'm committed to providing a seamless experience and images that will be treasured for generations.

Community and connection matter to me. I don't just photograph your wedding—I become part of your story, supporting you throughout your journey and celebrating alongside your loved ones.`;

  return (
    <section className="py-20 relative">
      <Image
        src="/marble2.jpg"
        alt="Kimberly Nguyen Photography"
        fill sizes="100vw"
        className="object-cover absolute pointer-events-none select-none z-0 opacity-50"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center text-primary mb-16">
          {title || defaultTitle}
        </h2>

        <div className="w-16 h-px bg-transparent mx-auto md:mx-0 my-8" />

        <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start">
          <div className="md:ml-8 md:-mt-10 mb-6 w-full md:w-1/3 relative flex-shrink-0">
            <div className="relative mr-8 aspect-[5/6] flex-shrink-0">
              <Image
                src={imageUrl} alt={image?.alt || photosAltText || "Kimberly Nguyen Photography"}
                width={1000} height={1200}
                className="w-full h-full object-cover flex-shrink-0"
                unoptimized
              />
            </div>

            {image2Url && (
              <div className="ml-8 -mt-20 aspect-[5/6] shadow-lg relative">
                <Image
                  src={image2Url} alt={image2?.alt || photosAltText || "Kimberly Nguyen Photography"}
                  width={1000} height={1200}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            )}
          </div>

          <div>
            <p className="text-xl text-primary whitespace-pre-wrap leading-relaxed text-justify">
              {text || defaultText}
            </p>
            <div className="w-16 h-px bg-primary mx-auto md:mx-0 my-8" />
          </div>
        </div>
      </div>
    </section>
  );
}