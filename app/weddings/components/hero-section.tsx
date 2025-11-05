import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-secondary/20 -mt-14 pt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl text-primary mb-4 leading-tight">
          Wedding Photography
        </h1>
        <p className="font-jost text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Every love story is unique, deserving to be captured with intention and heart. 
          I believe in documenting the authentic moments—the quiet glances, joyful tears, 
          and everything in between that makes your day truly yours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href="#process"
            className="btn-outline text-primary border-primary font-jost tracking-wider hover:bg-primary hover:text-primary-foreground rounded-full"
          >
            The Process
          </Link>
          <Link
            href="#packages"
            className="btn-outline text-primary border-primary font-jost tracking-wider hover:bg-primary hover:text-primary-foreground rounded-full"
          >
            Packages
          </Link>
          <Link
            href="#portfolio"
            className="btn-outline text-primary border-primary font-jost tracking-wider hover:bg-primary hover:text-primary-foreground rounded-full"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="btn bg-primary text-primary-foreground font-jost tracking-wider hover:bg-accent hover:text-accent-foreground rounded-full"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
