import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/50 to-secondary/90 text-white -mt-14 pt-14 relative overflow-hidden">
      <Image
        src="/home-page/hero-section/1.png"
        alt="Wedding Photography Background"
        fill
        className="object-cover object-center absolute inset-0 -z-10 opacity-90 blur-md"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-16">
        <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl mb-4 leading-tight">
          Wedding Photography
        </h1>
        <p className="font-jost text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Every love story is unique, deserving to be captured with intention and heart.
          I believe in documenting the authentic moments—the quiet glances, joyful tears,
          and everything in between that makes your day truly yours.
        </p>

        <div className="flex gap-2 md:gap-4 items-center mb-8">
          <Link href="#process" className="btn px-2 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
            Process
          </Link>
          <div className="block w-1 h-1 bg-white rounded-full" />
          <Link href="#packages" className="btn px-2 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
            Packages
          </Link>
          <div className="block w-1 h-1 bg-white rounded-full" />
          <Link href="#portfolio" className="btn px-2 md:px-6 bg-transparent font-jost tracking-wider hover:bg-white/30 rounded-full">
            Portfolio
          </Link>
        </div>
        <Link href="/contact" className="btn bg-white/20 px-8 font-jost tracking-wider hover:bg-white/30 rounded-full">
          Book Your Wedding
        </Link>
      </div>
    </section>
  );
}
