import Link from "next/link";
import Image from "next/image";

export default function EngagementsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg/3.png"
        alt="Engagement Photography Background"
        fill priority
        className="object-cover object-center absolute inset-0 opacity-90 blur-md w-full absolute -z-10 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/30 to-accent/10 -z-10 backdrop-blur-sm" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-accent text-5xl sm:text-7xl mb-6">
            Engagement Sessions
          </h2>
          <p className="font-jost text-lg md:text-xl text-white leading-relaxed mb-8">
            Engagement sessions are a wonderful way to celebrate this special time in your
            relationship and get comfortable with your photographer before the big day. These
            sessions are perfect for save-the-dates, wedding websites, and displays at your
            reception. Let's capture the excitement and joy of this chapter in your love story.
          </p>
          <Link href="/contact" className="btn bg-accent text-white hover:bg-white hover:text-primary">
            Book Engagement Session
          </Link>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
    </section>
  );
}
