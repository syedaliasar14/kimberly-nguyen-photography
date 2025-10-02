import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
          Capturing Love Stories<br />
          <span className="text-sage">with Heart</span>
        </h1>
        <p className="text-xl text-stone max-w-2xl mx-auto mb-8 leading-relaxed">
          Wedding photography that celebrates flow, balance, and the beautiful diversity of love. 
          Bright, minimalist aesthetics that honor your unique story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-forest text-cream px-8 py-3 rounded-full hover:bg-sage transition-colors text-lg font-medium"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/weddings"
            className="border-2 border-forest text-forest px-8 py-3 rounded-full hover:bg-forest hover:text-cream transition-colors text-lg font-medium"
          >
            View Weddings
          </Link>
        </div>
      </div>
    </section>
  );
}
