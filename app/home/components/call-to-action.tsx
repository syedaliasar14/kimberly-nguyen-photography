import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-6 font-bold tracking-tight">
          Ready to Tell Your Story?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed font-accent">
          Let's create something beautiful together. Schedule your consultation today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg font-accent font-semibold"
        >
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
