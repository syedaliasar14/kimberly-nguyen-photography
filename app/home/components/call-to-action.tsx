import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-forest text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-6">
          Ready to Tell Your Story?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Let's create something beautiful together. Schedule your consultation today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-sage text-forest px-8 py-4 rounded-full hover:bg-cream transition-colors text-lg font-medium"
        >
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
