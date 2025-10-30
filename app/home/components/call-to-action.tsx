import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-6xl mb-4">
          Ready to Capture Your Special Day?
        </h2>
        <p className="text-lg mt-8 mb-4 opacity-90">
          Let's create something beautiful together. Schedule your consultation today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-stone-700 to-stone-700/80 font-jost text-accent-foreground px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-secondary-foreground transition-colors duration-300 text-lg"
        >
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
