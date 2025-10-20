import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 leading-tight font-bold tracking-tight">
          Wedding Photography
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Every love story is unique, deserving to be captured with intention and heart. 
          I believe in documenting the authentic moments—the quiet glances, joyful tears, 
          and everything in between that makes your day truly yours.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-lg font-semibold"
        >
          Book Your Wedding
        </Link>
      </div>
    </section>
  );
}
