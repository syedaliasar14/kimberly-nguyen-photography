import Link from "next/link";

export default function EngagementSessionsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-script text-5xl sm:text-7xl text-primary mb-6">
            Engagement Sessions
          </h2>
          <p className="font-jost text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Engagement sessions are a wonderful way to celebrate this special time in your 
            relationship and get comfortable with your photographer before the big day. These 
            sessions are perfect for save-the-dates, wedding websites, and displays at your 
            reception. Let's capture the excitement and joy of this chapter in your love story.
          </p>
          <Link
            href="/contact"
            className="inline-block btn bg-accent text-accent-foreground font-jost tracking-wider hover:bg-accent/90 rounded-full"
          >
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
