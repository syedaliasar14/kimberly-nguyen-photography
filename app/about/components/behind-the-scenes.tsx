import Image from "next/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface BehindTheScenesProps {
  title?: string;
  text?: string;
  image?: ImageWithAlt;
  image2?: ImageWithAlt;
}

export default function BehindTheScenes({ title, text, image, image2 }: BehindTheScenesProps) {
  const imageUrl = image?.asset ? urlFor(image.asset).width(1000).height(1000).url() : "/kim/1.png";
  const imageAlt = image?.alt || "Kimberly Nguyen Photography";

  const image2Url = image2?.asset ? urlFor(image2.asset).width(1000).height(1200).url() : null;
  const image2Alt = image2?.alt || "Kimberly Nguyen Photography";

  const defaultTitle = "Behind the Scenes";
  const defaultText = `I believe the best wedding photography happens when couples feel completely comfortable and natural. That's why I spend time getting to know you before your wedding day—understanding your story, your vision, and what matters most to you.

On your wedding day, I blend into the background, documenting moments as they happen while providing gentle guidance when needed. My goal is for you to forget I'm there, so you can be fully present with each other and your loved ones.

After your wedding, I carefully curate and edit your images, ensuring each photo reflects the beauty and emotion of your day with my signature bright, clean aesthetic.`;

  return (
    <section className="py-20 relative">
      <Image
        src="/green-leather.jpg"
        alt="Kimberly Nguyen Photography"
        fill sizes="100vw"
        className="object-cover absolute pointer-events-none select-none z-0"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center text-accent mb-16">
          {title || defaultTitle}
        </h2>

        <div className="w-16 h-px bg-transparent mx-auto md:mx-0 my-8" />

        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          <div className="md:mr-8 md:-mt-10 mb-6 w-full md:w-1/3 relative flex-shrink-0">
            <div className="relative mr-8 aspect-[5/6] flex-shrink-0">
              <Image
                src={imageUrl} alt={imageAlt}
                width={1000} height={1200}
                className="w-full h-full object-cover flex-shrink-0"
                unoptimized
              />
            </div>

            {image2Url && (
              <div className="ml-8 -mt-20 aspect-[5/6] shadow-lg relative">
                <Image
                  src={image2Url} alt={image2Alt}
                  width={1000} height={1200}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-xl text-white whitespace-pre-wrap leading-relaxed text-justify">
              {text || defaultText}
            </p>
            <div className="w-16 h-px bg-accent self-center my-10" />
            <div className="mt-4 self-center">
              <Link href="/weddings#process" className="btn-accent">
                Learn More About My Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
