import Image from "next/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface BehindTheScenesProps {
  title?: string;
  text?: string;
  image?: ImageWithAlt;
}

export default function BehindTheScenes({ title, text, image }: BehindTheScenesProps) {
  const imageUrl = image?.asset ? urlFor(image.asset).width(1000).height(1000).url() : "/kim/1.png";
  const imageAlt = image?.alt || "Kimberly Nguyen Photography";

  const defaultTitle = "Behind the Scenes";
  const defaultText = `I believe the best wedding photography happens when couples feel completely comfortable and natural. That's why I spend time getting to know you before your wedding day—understanding your story, your vision, and what matters most to you.

On your wedding day, I blend into the background, documenting moments as they happen while providing gentle guidance when needed. My goal is for you to forget I'm there, so you can be fully present with each other and your loved ones.

After your wedding, I carefully curate and edit your images, ensuring each photo reflects the beauty and emotion of your day with my signature bright, clean aesthetic.`;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center text-primary mb-16">
          {title || defaultTitle}
        </h2>

        <div className="relative min-h-120">
          <div className="float-left md:mr-8 mb-6 w-full md:w-100 flex-shrink-0 relative h-120">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="text-xl leading-relaxed whitespace-pre-wrap">
            <div className="space-y-6 whitespace-pre-wrap">
              <p className="text-muted-foreground leading-relaxed">
                {text || defaultText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
