import Image from "next/image";
import Link from "next/link";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface HeroSectionProps {
  title?: string;
  text?: string;
  image?: ImageWithAlt;
  image2?: ImageWithAlt;
}

export default function HeroSection({ title, text, image, image2 }: HeroSectionProps) {
  const imageUrl = image?.asset ? urlFor(image.asset).width(1000).height(1200).url() : "/kim/3.png";
  const imageAlt = image?.alt || "Kimberly Nguyen Photography";

  const image2Url = image2?.asset ? urlFor(image2.asset).width(1000).height(1200).url() : null;
  const image2Alt = image2?.alt || "Kimberly Nguyen Photography";

  const defaultText = `Welcome! I'm Kim, a daughter of Vietnamese immigrants who chose to move to Connecticut, where I have lived for most of my life. I love the change of seasons in this part of the country and all the rich backdrops it brings for imagery (and mental health walks). My cultural heritage is the foundation for my photographic passion. My camera allows me to work where I know I work best, front row at some of the most profound moments in people's lives. In a pinch though, I'll be there carrying the train, making sure you don't get your shoes dirty and helping to support you where I can throughout your wedding day!

My goal in my work is to document and capture one-of-a-kind memories that will be immortalized for generations of your family to look back on. As someone with a deep-rooted Vietnamese background, I especially understand the traditions that go into a cultural wedding and what it takes to capture all those details. From the first email to the delivery of your photos, this will be a personalized and easy experience so you can focus on other aspects of your big day! Let me handle all the details for you when it comes to photography.`;

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/50 relative overflow-hidden text-primary">
      <Image
        src="/marble3.png"
        alt="Kimberly Nguyen Photography"
        fill sizes="100vw"
        className="object-cover absolute opacity-50 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <h1 className="font-heading font-thin text-5xl md:text-6xl my-8 text-center md:text-left">
          {title || "Get to Know Me!"}
        </h1>

        <div className="w-16 h-px bg-primary mx-auto md:mx-0 my-8" />

        <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start">
          <div className="md:ml-8 md:-mt-10 mb-6 w-full md:w-1/3 relative flex-shrink-0">
            <div className="relative mr-8 aspect-[5/6]">
              <Image
                src={imageUrl} alt={imageAlt}
                width={1000} height={1200}
                className="w-full h-full object-cover"
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

          <div className="text-xl leading-relaxed whitespace-pre-wrap text-justify">
            {text || defaultText}

            <div className="mt-10">
              <Link href="/contact" className="btn hover:bg-accent">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}