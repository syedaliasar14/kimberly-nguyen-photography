import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-20 bg-stone-900 text-primary-foreground relative">
      <Image
        src="/bg/1.png" alt=""
        fill sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-10 blur-sm"
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-6xl mb-4">
          Ready to Book Your Wedding?
        </h2>
        <p className="text-lg mt-8 mb-4 font-sans">
          It's time to capture <span className="font-cursive text-5xl md:text-7xl mx-1">your</span> love story
        </p>
        <Link href="/contact" className="inline-block bg-accent font-sans text-accent-foreground px-8 py-4 hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-secondary-foreground transition-colors duration-300 text-lg">
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
