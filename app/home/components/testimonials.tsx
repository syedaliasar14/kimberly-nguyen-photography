export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kimberly captured our day perfectly. Her eye for natural beauty and genuine moments made our photos feel so authentic and timeless.",
      names: "Sarah & Michael",
      season: "Fall Wedding 2024",
    },
    {
      quote: "Amazing work!",
      names: "Jessica & David", 
      season: "Summer Wedding 2024",
    },
    {
      quote: "Every moment was captured with such care and creativity. We couldn't be happier with our photos.",
      names: "Emily & James",
      season: "Spring Wedding 2024",
    },
    {
      quote: "Kimberly was a joy to work with! Her professionalism and talent made our wedding day stress-free.",
      names: "Anna & Robert",
      season: "Winter Wedding 2024",
    },
    {
      quote: "The photos exceeded our expectations! Kimberly has an incredible talent for storytelling through her lens.",
      names: "Olivia & Ethan",
      season: "Autumn Wedding 2024",
    }
  ];

  return (
    <section className="py-40 border-b" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-6xl mb-16 text-center">What Couples Are Saying</h2>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 text-sm md:text-base">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-background cursor-default p-6 rounded-lg shadow-sm border border-border hover:shadow-xl hover:scale-101 transition-all duration-300 break-inside-avoid`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-medium text-primary">- {testimonial.names}</p>
              <p className="text-sm text-muted-foreground mt-1">{testimonial.season}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
