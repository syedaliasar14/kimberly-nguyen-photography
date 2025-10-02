export default function FaqSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-forest mb-3 text-lg">How far in advance should we book?</h3>
            <p className="text-stone leading-relaxed">
              I recommend booking 8-12 months in advance, especially for peak wedding season 
              (May-October). However, I'm sometimes available for shorter notice weddings, so 
              don't hesitate to reach out regardless of your timeline.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest mb-3 text-lg">Do you travel for weddings?</h3>
            <p className="text-stone leading-relaxed">
              Yes! I'm based in the Bay Area but love to travel for weddings. I don't charge 
              travel fees within California, and I'm always excited to photograph destination 
              weddings worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest mb-3 text-lg">When will we receive our photos?</h3>
            <p className="text-stone leading-relaxed">
              You'll receive a sneak peek gallery within 48 hours of your wedding with 15-20 
              images. Your complete gallery of 500+ edited images will be delivered within 6-8 weeks.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest mb-3 text-lg">What's your photography style?</h3>
            <p className="text-stone leading-relaxed">
              I describe my style as bright, clean, and timeless with a focus on natural moments 
              and authentic emotions. I use natural light whenever possible and have a gentle, 
              documentary approach to capturing your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
