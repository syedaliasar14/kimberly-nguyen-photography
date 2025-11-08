import Image from "next/image";

export default function TestimonialSection({ quote, coupleName }: { quote: string; coupleName: string }) {
  return (
    <section className="border-b px-4">
      <div className="max-w-4xl mx-auto text-center py-20">
        <Image
          src="/quote-icon.svg"
          alt="Quote"
          width={80}
          height={80}
          className="mx-auto mb-8 select-none pointer-events-none opacity-30"
        />
        <blockquote className="font-jost text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-6">
          "{quote}"
        </blockquote>
        <p className="font-allura text-3xl md:text-4xl text-primary">
          {coupleName}
        </p>
      </div>
    </section>
  );
}
