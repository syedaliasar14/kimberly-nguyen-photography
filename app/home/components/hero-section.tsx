import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-primary-foreground -mt-16">
      <div className="w-full mx-auto px-4 text-center flex flex-col justify-between flex-grow pt-16">
        <div className="flex flex-col gap-4 mt-8">
          <h1 className="font-heading text-4xl sm:text-7xl leading-tight font-semibold uppercase">Kimberly Nguyen</h1>
          <p className="text-xs sm:text-lg uppercase">{`Wedding & Lifestyle Photographer  |  CT, NY & MA`}</p>
        </div>

        <div className="flex flex-col gap-4 mb-12 mt-8">
          <div className="self-start text-left text-2xl sm:text-4xl font-accent">One of a kind memories, beautifully preserved</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start ">
            <Link href="/contact" className="border-2 border-transparent bg-accent text-accent-foreground px-8 py-2 rounded-sm hover:bg-primary-foreground hover:text-primary transition-all duration-300 w-max">
              Schedule Consultation
            </Link>
            <Link href="/weddings" className="border-2 border-primary-foreground px-8 py-2 rounded-sm hover:bg-primary-foreground hover:text-primary transition-all duration-300 w-max">
              View Weddings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
