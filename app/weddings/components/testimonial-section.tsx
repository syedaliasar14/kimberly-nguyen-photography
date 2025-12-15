import { urlFor } from "@/sanity/lib/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import Image from "next/image";

export default function TestimonialSection({ quote, coupleName, image }: { quote: string; coupleName: string; image?: ImageWithAlt }) {
  return (
    <section className="relative overflow-hidden bg-secondary-50 text-accent">
      {/* Background */}
      <Image
        src="/green-leather.jpg"
        alt="Background"
        fill className="object-cover object-center"
      />
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/4 h-1/3 md:h-full bg-background" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-32 flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        {image && (
          <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 relative ml-4 md:ml-0">
            <div className="absolute -top-4 -left-4 right-8 bottom-8 bg-accent" />
            <Image src={urlFor(image).url()!}
              alt={image.alt || "Connecticut Wedding Photography Testimonial"}
              width={600} height={700}
              className="object-cover w-full aspect-[5/6] z-10 relative border border-accent"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="flex flex-col text-justify w-full">
          <Image
            src="/quote-icon.svg" alt="Quote"
            width={40} height={40}
            className="mx-auto mb-8 select-none pointer-events-none"
          />

          <blockquote className="italic text-white text-lg md:text-xl leading-relaxed font-light tracking-wide">
            "{quote}"
          </blockquote>

          <div className="w-12 h-px bg-accent mt-8 mb-4" />
          <p className="text-lg md:text-xl tracking-wide">
            {coupleName}
          </p>

        </div>

      </div>
    </section >
  );
}
