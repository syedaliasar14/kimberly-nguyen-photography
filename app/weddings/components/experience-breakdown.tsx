export default function ExperienceBreakdown() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
          The Wedding Photography Experience
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-forest">1</span>
            </div>
            <h3 className="font-serif text-xl text-forest mb-4">Consultation & Planning</h3>
            <p className="text-stone leading-relaxed">
              We'll start with a conversation about your vision, timeline, and all the special 
              moments you want captured. This is where we plan the perfect approach for your day.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-forest">2</span>
            </div>
            <h3 className="font-serif text-xl text-forest mb-4">Your Wedding Day</h3>
            <p className="text-stone leading-relaxed">
              I'll be there to capture every meaningful moment—from getting ready to the last dance. 
              My approach is unobtrusive, allowing you to be present while I document your story.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-forest">3</span>
            </div>
            <h3 className="font-serif text-xl text-forest mb-4">Gallery Delivery</h3>
            <p className="text-stone leading-relaxed">
              Within 6-8 weeks, you'll receive your curated gallery of beautifully edited images 
              that tell the complete story of your wedding day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
