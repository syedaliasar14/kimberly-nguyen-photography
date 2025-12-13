import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative">
      <Image
        src="/bg/1.png" alt=""
        fill sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-10 blur-sm"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-thin text-3xl sm:text-4xl mb-6">
          Let's Tell Your Story Together
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          I'd love to learn about your love story and how we can capture your wedding day beautifully.
        </p>
        <Link
          href="/contact"
          className="btn bg-accent hover:bg-white hover:text-primary text-lg"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}
