import Link from "next/link";
import Image from "next/image";

export default function ElopementsSection() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/elopements-img.png"
        alt="Elopement Photography Background"
        fill priority
        className="object-cover object-center contrast-75 absolute inset-0 opacity-90 blur-md w-full absolute -z-10 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-lime-950/10 -z-10 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2 w-full">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-center md:text-left text-primary leading-tight">
            Elopements
          </h2>
          <div className="space-y-4 text-center md:text-left">
            <p className="font-jost text-lg md:text-xl text-primary leading-relaxed">
              Sometimes the most beautiful celebrations are the intimate ones. Elopements allow
              couples to focus purely on their commitment to each other in a meaningful setting.
            </p>
            <p className="font-jost text-lg md:text-xl text-primary leading-relaxed">
              Whether it's a mountain peak, a quiet beach, or a charming courthouse, I'm here to
              document your love story with the same care and artistry as any grand celebration.
            </p>
          </div>
          <div className="pt-4 text-center md:text-left">
            <Link href="/contact" className="btn bg-[#dd8187] text-white hover:bg-white hover:text-primary inline-block">
              Inquire About Elopements
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:w-1/2 w-full p-4 ">
          <div className="relative w-full aspect-square overflow-hidden shadow-2xl rounded-full border-white rotate-3">
            <Image
              src="/elopements-img.png"
              alt="Elopement Photography"
              width={1000} height={1000}
              className="object-cover w-full h-full flex-shrink-0"
            />
            {/* Image overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}