import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
              Hello, I'm<br />
              <span className="text-accent">Kimberly</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A wedding photographer who believes that every love story deserves to be 
              captured with intention, heart, and an eye for the beautiful moments that 
              make your day uniquely yours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-cream px-8 py-4 rounded-full hover:bg-accent transition-colors text-lg font-medium"
            >
              Let's Connect
            </Link>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-[3/4] bg-accent/10 rounded-lg flex items-center justify-center">
              <p className="text-accent text-lg">Portrait of Kimberly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
