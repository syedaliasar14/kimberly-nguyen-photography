import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl mb-6">
          Let's Tell Your Story Together
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          I'd love to learn about your love story and how we can capture your wedding day beautifully.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-primary px-8 py-4 rounded-full hover:bg-secondary transition-colors text-lg font-medium"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}
