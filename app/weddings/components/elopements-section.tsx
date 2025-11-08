import Link from "next/link";

export default function ElopementsSection() {
  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-5xl sm:text-7xl text-primary mb-6">
            Elopements
          </h2>
          <p className="font-jost text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Sometimes the most beautiful celebrations are the intimate ones. Elopements allow 
            couples to focus purely on their commitment to each other in a meaningful setting. 
            Whether it's a mountain peak, a quiet beach, or a charming courthouse, I'm here to 
            document your love story with the same care and artistry as any grand celebration.
          </p>
          <Link
            href="/contact"
            className="inline-block btn bg-accent text-accent-foreground font-jost tracking-wider hover:bg-accent/90 rounded-full"
          >
            Inquire About Elopements
          </Link>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
    </section>
  );
}
