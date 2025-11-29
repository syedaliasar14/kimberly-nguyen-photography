import Image from "next/image";
import Link from "next/link";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface HeroSectionProps {
  title?: string;
  text?: string;
  image?: ImageWithAlt;
}

export default function HeroSection({ title, text, image }: HeroSectionProps) {
  const imageUrl = image?.asset ? urlFor(image.asset).width(1000).height(1000).url() : "/kim/3.png";
  const imageAlt = image?.alt || "Kimberly Nguyen Photography";

  const defaultTitle = "Get to Know...";
  const defaultText = `Welcome! I'm Kim, a daughter of Vietnamese immigrants who chose to move to Connecticut, where I have lived for most of my life. I love the change of seasons in this part of the country and all the rich backdrops it brings for imagery (and mental health walks). My cultural heritage is the foundation for my photographic passion. My camera allows me to work where I know I work best, front row at some of the most profound moments in people's lives. In a pinch though, I'll be there carrying the train, making sure you don't get your shoes dirty and helping to support you where I can throughout your wedding day!

My goal in my work is to document and capture one-of-a-kind memories that will be immortalized for generations of your family to look back on. As someone with a deep-rooted Vietnamese background, I especially understand the traditions that go into a cultural wedding and what it takes to capture all those details. From the first email to the delivery of your photos, this will be a personalized and easy experience so you can focus on other aspects of your big day! Let me handle all the details for you when it comes to photography.`;

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/50 relative overflow-hidden text-primary">
      <Image
        src="/bg/2.png"
        alt="Kimberly Nguyen Photography"
        width={1000}
        height={1000}
        className="w-full h-full object-cover shadow-lg absolute opacity-10 blur-sm pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl md:text-6xl mb-8 text-center md:text-left">
          {title || defaultTitle} <span className="font-script text-9xl ml-2">me!</span>
        </h1>

        <div className="relative">
          <div className="float-right md:ml-8 mb-6 w-full md:w-100 h-80 flex-shrink-0 relative">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover shadow-lg"
            />
            <span className="absolute bottom-4 right-4 text-white text-xl rotate-12 font-script px-2 py-1 rounded-tl-md">-KN</span>
          </div>

          <div className="text-xl leading-relaxed whitespace-pre-wrap">
            {text || defaultText}

            <div className="clear-both mt-8">
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