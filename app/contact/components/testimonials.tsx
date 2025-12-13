interface TestimonialsProps {
  data?: {
    title?: string;
    testimonials?: {
      quote: string;
      name: string;
    }[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  const title = data?.title || "Kind Words from Kind Clients";
  const testimonials = data?.testimonials || [];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-thin text-4xl md:text-6xl text-center text-primary mb-16">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-background p-8 rounded-lg shadow-sm ${index === testimonials.length - 1 && testimonials.length % 3 === 1 ? 'lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
