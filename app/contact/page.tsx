'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    howDidYouHear: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-cream to-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest mb-6">Thank You!</h1>
          <p className="text-xl text-stone mb-8 leading-relaxed">
            I've received your inquiry and I'm so excited to learn about your wedding plans! 
            I'll be in touch within 24-48 hours to schedule our consultation.
          </p>
          <p className="text-stone">
            In the meantime, feel free to follow along on{' '}
            <a href="https://instagram.com" className="text-sage hover:text-forest transition-colors">
              Instagram
            </a>{' '}
            to see the latest work.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
            Let's Start Planning<br />
            <span className="text-sage">Your Story</span>
          </h1>
          <p className="text-xl text-stone max-w-2xl mx-auto mb-8 leading-relaxed">
            I'd love to hear all about your wedding plans and how we can work together 
            to capture your special day beautifully.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-forest mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-forest mb-2">Email</h3>
                  <a 
                    href="mailto:hello@kimberlynguyenphotography.com" 
                    className="text-stone hover:text-sage transition-colors"
                  >
                    hello@kimberlynguyenphotography.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-forest mb-2">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-stone hover:text-sage transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-forest mb-2">Based in</h3>
                  <p className="text-stone">Bay Area, California</p>
                  <p className="text-stone text-sm mt-1">Available for travel worldwide</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-forest mb-2">Response Time</h3>
                  <p className="text-stone">Within 24-48 hours</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weddingDate" className="block text-sm font-medium text-forest mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-forest mb-2">
                    Venue or Location
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-forest mb-2">
                    How did you hear about me?
                  </label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="instagram">Instagram</option>
                    <option value="website">Website/Google</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="venue">Venue Recommendation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                    Tell me about your wedding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I'd love to hear about your wedding vision, timeline, and anything else you'd like to share..."
                    className="w-full px-4 py-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-stone/20 text-stone cursor-not-allowed'
                      : 'bg-forest text-cream hover:bg-sage hover:text-forest'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Kind Words from Couples
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-sage">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-stone italic mb-6 leading-relaxed">
                "Working with Kimberly was an absolute dream. She made our engagement session 
                so fun and natural, and we knew immediately she was the right choice for our wedding."
              </p>
              <p className="font-semibold text-forest">Elena & Marcus</p>
              <p className="text-stone text-sm">Napa Valley Wedding</p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-sage">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-stone italic mb-6 leading-relaxed">
                "Kimberly's photos exceeded all our expectations. She captured moments we didn't 
                even realize were happening. Her editing style is exactly what we wanted."
              </p>
              <p className="font-semibold text-forest">Priya & Jonathan</p>
              <p className="text-stone text-sm">Garden Wedding</p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1">
              <div className="flex items-center mb-4">
                <div className="flex text-sage">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-stone italic mb-6 leading-relaxed">
                "From our first consultation to receiving our final gallery, Kimberly was 
                professional, responsive, and so easy to work with. We can't recommend her enough!"
              </p>
              <p className="font-semibold text-forest">Alex & Sam</p>
              <p className="text-stone text-sm">Beach Elopement</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
    </>
  );
}