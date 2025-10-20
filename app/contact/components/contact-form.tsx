'use client';
import { useState } from 'react';

export default function ContactForm() {
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
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary to-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl text-primary mb-6">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I've received your inquiry and I'm so excited to learn about your wedding plans! 
            I'll be in touch within 24-48 hours to schedule our consultation.
          </p>
          <p className="text-muted-foreground">
            In the meantime, feel free to follow along on{' '}
            <a href="https://instagram.com" className="text-accent hover:text-primary transition-colors">
              Instagram
            </a>{' '}
            to see the latest work.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl text-primary mb-8 font-bold tracking-tight">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a 
                  href="mailto:hello@kimberlynguyenphotography.com" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  hello@kimberlynguyenphotography.com
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Based in</h3>
                <p className="text-muted-foreground">Bay Area, California</p>
                <p className="text-muted-foreground text-sm mt-1">Available for travel worldwide</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-muted-foreground">Within 24-48 hours</p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-medium text-primary mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-primary mb-2">
                  Venue or Location
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-primary mb-2">
                  How did you hear about me?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Tell me about your wedding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="I'd love to hear about your wedding vision, timeline, and anything else you'd like to share..."
                  className="w-full px-4 py-3 border border-muted/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-lg font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                    : 'bg-primary text-accent-foreground hover:bg-accent hover:text-primary'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
