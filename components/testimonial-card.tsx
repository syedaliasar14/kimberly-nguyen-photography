import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  coupleName: string;
}

export default function TestimonialCard({ quote, coupleName }: TestimonialCardProps) {
  return (
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
      <p className="font-script text-3xl md:text-4xl text-primary">
        {coupleName}
      </p>
    </div>
  );
}
