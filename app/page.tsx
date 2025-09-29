import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
            Capturing Love Stories<br />
            <span className="text-sage">with Heart</span>
          </h1>
          <p className="text-xl text-stone max-w-2xl mx-auto mb-8 leading-relaxed">
            Wedding photography that celebrates flow, balance, and the beautiful diversity of love. 
            Bright, minimalist aesthetics that honor your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-forest text-cream px-8 py-3 rounded-full hover:bg-sage transition-colors text-lg font-medium"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/weddings"
              className="border-2 border-forest text-forest px-8 py-3 rounded-full hover:bg-forest hover:text-cream transition-colors text-lg font-medium"
            >
              View Weddings
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Wedding Photography
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-sage/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-sage">
                  <p className="text-lg">Wedding Gallery 1</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-forest">Intimate Ceremonies</h3>
              <p className="text-stone leading-relaxed">
                Every love story is unique. I specialize in capturing the intimate moments, genuine emotions, 
                and natural connections that make your day truly yours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-sage/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-sage">
                  <p className="text-lg">Wedding Gallery 2</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-forest">Joyful Celebrations</h3>
              <p className="text-stone leading-relaxed">
                From grand celebrations to quiet elopements, I document the joy, laughter, and tears 
                that make your wedding day unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest mb-16">
            What Couples Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <p className="text-stone italic mb-4 leading-relaxed">
                "Kimberly captured our day perfectly. Her eye for natural beauty and genuine moments 
                made our photos feel so authentic and timeless."
              </p>
              <p className="font-semibold text-forest">- Sarah & Michael</p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <p className="text-stone italic mb-4 leading-relaxed">
                "We felt so comfortable with Kimberly. She has this amazing ability to blend into 
                the background while capturing every important moment."
              </p>
              <p className="font-semibold text-forest">- Jessica & David</p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <p className="text-stone italic mb-4 leading-relaxed">
                "The photos exceeded our expectations. Kimberly's bright, clean style perfectly 
                matched our vision for our special day."
              </p>
              <p className="font-semibold text-forest">- Maria & James</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Other Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-sage">Engagement Photos</p>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Engagement Sessions</h3>
              <p className="text-stone leading-relaxed">
                Celebrate your love story with a romantic engagement session in beautiful locations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-sage">Elopement Photos</p>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Elopements</h3>
              <p className="text-stone leading-relaxed">
                Intimate ceremonies deserve intimate photography. Perfect for couples seeking simplicity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-sage">Portrait Photos</p>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Portrait Sessions</h3>
              <p className="text-stone leading-relaxed">
                Professional portraits that capture your personality and authentic self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's create something beautiful together. Schedule your consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage text-forest px-8 py-4 rounded-full hover:bg-cream transition-colors text-lg font-medium"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      {/* Instagram Feed Integration Placeholder */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest mb-8">
            Follow the Journey
          </h2>
          <p className="text-stone mb-12 text-lg">
            See the latest work and behind-the-scenes moments on Instagram
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-sage/20 rounded-lg flex items-center justify-center">
                <p className="text-sage">Instagram {item}</p>
              </div>
            ))}
          </div>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-forest hover:text-sage transition-colors text-lg font-medium"
          >
            <span>@kimberlynguyenphotography</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
