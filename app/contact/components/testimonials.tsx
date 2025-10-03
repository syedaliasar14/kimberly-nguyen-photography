export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-primary mb-16">
          Kind Words from Couples
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg shadow-sm">
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
              "Working with Kimberly was an absolute dream. She made our engagement session 
              so fun and natural, and we knew immediately she was the right choice for our wedding."
            </p>
            <p className="font-semibold text-primary">Elena & Marcus</p>
            <p className="text-muted-foreground text-sm">Napa Valley Wedding</p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-sm">
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
              "Kimberly's photos exceeded all our expectations. She captured moments we didn't 
              even realize were happening. Her editing style is exactly what we wanted."
            </p>
            <p className="font-semibold text-primary">Priya & Jonathan</p>
            <p className="text-muted-foreground text-sm">Garden Wedding</p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-sm lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1">
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
              "From our first consultation to receiving our final gallery, Kimberly was 
              professional, responsive, and so easy to work with. We can't recommend her enough!"
            </p>
            <p className="font-semibold text-primary">Alex & Sam</p>
            <p className="text-muted-foreground text-sm">Beach Elopement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
