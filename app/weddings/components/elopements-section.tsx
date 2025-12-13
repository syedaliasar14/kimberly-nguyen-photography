import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ImageWithAlt } from "@/sanity/lib/types";

export default function ElopementsSection({ title, text, image }: { title?: string; text?: string; image?: ImageWithAlt }) {
  return (
    <section className="py-32 bg-transparent relative bg-gradient-to-br overflow-hidden">
      {/* Background Image */}
      {image && <Image
        src={urlFor(image).url()!}
        alt={image?.alt || "Elopement Photography Background"}
        fill priority
        className="object-cover object-center contrast-75 absolute inset-0 opacity-50 blur-md w-full absolute -z-10 scale-105"
      />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:w-2/3 w-full">
          <h2 className="font-heading font-thin text-5xl sm:text-6xl lg:text-7xl text-center md:text-left text-primary">
            {title || "Elopements"}
          </h2>
          <div className="text-center md:text-left font-sans text-lg md:text-xl text-primary whitespace-pre-wrap">
            {text || `Sometimes the most beautiful celebrations are the intimate ones. Elopements allow couples to focus purely on their commitment to each other in a meaningful setting.\n\nWhether it's a mountain peak, a quiet beach, or a charming courthouse, I'm here to document your love story with the same care and artistry as any grand celebration.`}
          </div>
          <div className="pt-4 text-center md:text-left">
            <Link href="/contact" className="btn bg-[#dd8187] text-white hover:bg-white hover:text-primary inline-block">
              Inquire About Elopements
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:w-1/3 w-full aspect-square overflow-hidden shadow-2xl">
          {image && <Image
            src={urlFor(image).url()!}
            alt={image.alt || "Elopement Photography"}
            width={1000} height={1000}
            className="object-cover w-full h-full flex-shrink-0"
          />}
          {/* Image overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}