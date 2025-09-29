import Link from "next/link";

export const metadata = {
  title: "About Kimberly - Kimberly Nguyen Photography",
  description: "Meet Kimberly Nguyen, a wedding photographer who believes in capturing love stories with flow, balance, and heart, celebrating diversity and community.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
                Hello, I'm<br />
                <span className="text-sage">Kimberly</span>
              </h1>
              <p className="text-xl text-stone mb-8 leading-relaxed">
                A wedding photographer who believes that every love story deserves to be 
                captured with intention, heart, and an eye for the beautiful moments that 
                make your day uniquely yours.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-forest text-cream px-8 py-4 rounded-full hover:bg-sage transition-colors text-lg font-medium"
              >
                Let's Connect
              </Link>
            </div>
            <div className="order-first md:order-last">
              <div className="aspect-[3/4] bg-sage/10 rounded-lg flex items-center justify-center">
                <p className="text-sage text-lg">Portrait of Kimberly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            My Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-stone leading-relaxed">
            <p className="text-xl mb-8">
              Photography found me through love—first, my love for capturing fleeting moments, 
              and later, through witnessing the profound love between couples on their wedding days.
            </p>
            
            <p className="mb-8">
              What started as a passion for documenting life's beautiful moments grew into a 
              calling to serve couples during one of the most significant days of their lives. 
              I believe that wedding photography is so much more than just taking pictures—it's 
              about preserving the emotions, the connections, and the story that unfolds when 
              two people choose to commit their lives to each other.
            </p>
            
            <p className="mb-8">
              My approach is rooted in authenticity. I'm not interested in forced poses or 
              artificial moments. Instead, I focus on the real, unguarded instances—the way 
              you look at each other when you think no one is watching, the laughter shared 
              with family, the quiet tears of joy. These are the moments that tell your true story.
            </p>
            
            <p className="mb-8">
              When I'm not behind the camera, you can find me exploring local coffee shops, 
              spending time in nature, or traveling to new places that inspire my creativity. 
              I bring this sense of adventure and wonder to every wedding I photograph, always 
              looking for the unique beauty in each celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            What I Believe In
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-sage rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Flow</h3>
              <p className="text-stone leading-relaxed">
                Every wedding has its own natural rhythm. I work with that flow, not against it, 
                capturing moments as they organically unfold throughout your day.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-8 bg-sage rounded"></div>
                  <div className="w-3 h-6 bg-sage/60 rounded"></div>
                  <div className="w-3 h-8 bg-sage rounded"></div>
                </div>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Balance</h3>
              <p className="text-stone leading-relaxed">
                The perfect wedding photo balances light and shadow, joy and reverence, 
                candid moments and intentional portraits to create a complete story.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Heart</h3>
              <p className="text-stone leading-relaxed">
                I photograph with empathy and emotional intelligence, understanding that 
                your wedding day is filled with deep meaning and significance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Cohesive Aesthetics</h3>
              <p className="text-stone leading-relaxed">
                Every image in your gallery works together to tell a unified story, 
                with consistent editing that enhances the natural beauty of your day.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Diversity</h3>
              <p className="text-stone leading-relaxed">
                Love comes in many forms, and I celebrate the beautiful diversity of 
                couples, families, and traditions that make each wedding unique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">Community</h3>
              <p className="text-stone leading-relaxed">
                Weddings are about bringing people together. I capture not just the couple, 
                but the community of love and support that surrounds them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
            Behind the Scenes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[4/3] bg-sage/10 rounded-lg flex items-center justify-center mb-8">
                <p className="text-sage">Behind the Scenes Photo</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-forest mb-6">My Process</h3>
              <div className="space-y-6">
                <p className="text-stone leading-relaxed">
                  I believe the best wedding photography happens when couples feel completely 
                  comfortable and natural. That's why I spend time getting to know you before 
                  your wedding day—understanding your story, your vision, and what matters most to you.
                </p>
                <p className="text-stone leading-relaxed">
                  On your wedding day, I blend into the background, documenting moments as they 
                  happen while providing gentle guidance when needed. My goal is for you to forget 
                  I'm there, so you can be fully present with each other and your loved ones.
                </p>
                <p className="text-stone leading-relaxed">
                  After your wedding, I carefully curate and edit your images, ensuring each photo 
                  reflects the beauty and emotion of your day with my signature bright, clean aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Video Section Placeholder */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest mb-8">
            Coming Soon: Video Stories
          </h2>
          <p className="text-stone text-lg leading-relaxed mb-8">
            I'm excited to soon offer wedding videography services to complement my photography, 
            creating moving stories that capture the sounds, voices, and motion of your special day.
          </p>
          <div className="aspect-video bg-sage/10 rounded-lg flex items-center justify-center">
            <p className="text-sage text-lg">Video Preview Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            Let's Tell Your Story Together
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            I'd love to learn about your love story and how we can capture your wedding day beautifully.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage text-forest px-8 py-4 rounded-full hover:bg-cream transition-colors text-lg font-medium"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}