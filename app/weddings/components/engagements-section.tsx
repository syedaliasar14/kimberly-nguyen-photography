import Link from "next/link";
import Image from "next/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default function EngagementsSection({ title, text, image }: { title?: string; text?: string; image?: ImageWithAlt }) {
  return (
    <section className="py-32 relative overflow-hidden bg-primary">
      {/* Background Image */}
      <Image
        src="/charcoal.png"
        alt="Engagement Photography Background"
        fill priority
        className="object-cover object-center absolute inset-0 opacity-30 w-full absolute scale-105"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        <div className="relative w-full md:w-1/3 aspect-[5/6] overflow-hidden">
          {image && <Image
            src={urlFor(image).url()!}
            alt={image.alt || "Engagement Photography"}
            width={1000} height={1000}
            className="object-cover w-full h-full flex-shrink-0 border border-accent"
          />}
          {/* Image overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="text-center w-full md:w-2/3 space-y-6">
          <h2 className="font-heading font-thin text-center text-accent text-5xl sm:text-7xl mb-8">
            {title || "Engagement Sessions"}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto my-8" />
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 whitespace-pre-wrap text-justify">
            {text || "Engagement sessions are a wonderful way to celebrate this special time in your relationship and get comfortable with your photographer before the big day. These sessions are perfect for save-the-dates, wedding websites, and displays at your reception. Let's capture the excitement and joy of this chapter in your love story."}
          </p>
          <Link href="/contact" className="btn bg-accent text-right text-white hover:bg-white hover:text-primary">
            Book Engagement Session
          </Link>
        </div>
      </div>
    </section>
  );
}
