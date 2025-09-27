import Link from "next/link";

export const metadata = {
  title: "Wedding Photography - Kimberly Nguyen Photography",
  description: "Capturing your wedding day with flow, balance, and heart. From intimate ceremonies to grand celebrations, every love story deserves beautiful documentation.",
};

export default function Weddings() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
            Wedding Photography
          </h1>
          <p className="text-xl text-stone max-w-3xl mx-auto mb-8 leading-relaxed">
            Every love story is unique, deserving to be captured with intention and heart. 
            I believe in documenting the authentic moments—the quiet glances, joyful tears, 
            and everything in between that makes your day truly yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest text-cream px-8 py-4 rounded-full hover:bg-sage transition-colors text-lg font-medium"
          >
            Book Your Wedding
          </Link>
        </div>
      </section>

      {/* Wedding Experience Breakdown */}
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

      {/* Portfolio Gallery */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Recent Weddings
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Gallery Items */}
            {[
              { title: "Sarah & Michael - Garden Wedding", description: "Intimate ceremony in botanical gardens" },
              { title: "Jessica & David - Beach Elopement", description: "Sunset vows by the ocean" },
              { title: "Maria & James - Rustic Celebration", description: "Farmhouse reception with family" },
              { title: "Aisha & Omar - Cultural Fusion", description: "Beautiful blend of traditions" },
              { title: "Emily & Chen - City Hall Ceremony", description: "Simple elegance in downtown" },
              { title: "Rachel & Sofia - Backyard Wedding", description: "Cozy celebration at home" }
            ].map((wedding, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-sage/10 rounded-lg overflow-hidden mb-4 group-hover:bg-sage/20 transition-colors">
                  <div className="w-full h-full flex items-center justify-center text-sage">
                    <p className="text-center px-4">{wedding.title}</p>
                  </div>
                </div>
                <h3 className="font-serif text-lg text-forest mb-2">{wedding.title}</h3>
                <p className="text-stone text-sm">{wedding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Wedding Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-forest mb-6">Full Wedding Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">8-12 hours of wedding day coverage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Getting ready through reception</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">500+ edited high-resolution images</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Online gallery for easy sharing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Print release included</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-forest mb-6">Add-On Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Engagement session</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Rehearsal dinner coverage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Second photographer</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Custom wedding albums</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <p className="text-stone">Extended coverage hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elopement & Engagement Sections */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-forest mb-8">Elopements</h2>
              <div className="aspect-[4/3] bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-sage">Elopement Photography</p>
              </div>
              <p className="text-stone leading-relaxed mb-6">
                Sometimes the most beautiful celebrations are the intimate ones. Elopements allow 
                couples to focus purely on their commitment to each other in a meaningful setting.
              </p>
              <ul className="space-y-2 text-stone">
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>2-4 hours of coverage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>100+ edited images</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>Location scouting assistance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl text-forest mb-8">Engagement Sessions</h2>
              <div className="aspect-[4/3] bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-sage">Engagement Photography</p>
              </div>
              <p className="text-stone leading-relaxed mb-6">
                Engagement sessions are a wonderful way to celebrate this special time in your 
                relationship and get comfortable with your photographer before the big day.
              </p>
              <ul className="space-y-2 text-stone">
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>1-2 hours of photography</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>50+ edited images</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sage">•</span>
                  <span>Perfect for save-the-dates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            What Couples Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream p-8 rounded-lg">
              <p className="text-stone italic text-lg mb-6 leading-relaxed">
                "Kimberly was absolutely incredible from start to finish. She made us feel so 
                comfortable and natural throughout our entire wedding day. The photos she captured 
                are exactly what we envisioned—bright, beautiful, and full of emotion."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <span className="text-forest font-semibold">S&M</span>
                </div>
                <div>
                  <p className="font-semibold text-forest">Sarah & Michael</p>
                  <p className="text-stone text-sm">Garden Wedding, 2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-lg">
              <p className="text-stone italic text-lg mb-6 leading-relaxed">
                "We cannot thank Kimberly enough for capturing our special day so beautifully. 
                Her eye for detail and ability to capture candid moments is unmatched. Every 
                single photo tells our story perfectly."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <span className="text-forest font-semibold">J&D</span>
                </div>
                <div>
                  <p className="font-semibold text-forest">Jessica & David</p>
                  <p className="text-stone text-sm">Beach Elopement, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            Ready to Book Your Wedding?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's start planning how to capture your love story beautifully.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage text-forest px-8 py-4 rounded-full hover:bg-cream transition-colors text-lg font-medium"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}