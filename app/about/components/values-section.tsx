export default function ValuesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-primary mb-16 font-bold tracking-tight">
          What I Believe In
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <div className="w-8 h-8 bg-accent rounded-full group-hover:scale-110 transition-transform"></div>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Flow</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every wedding has its own natural rhythm. I work with that flow, not against it, 
              capturing moments as they organically unfold throughout your day.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <div className="flex space-x-1">
                <div className="w-3 h-8 bg-accent rounded"></div>
                <div className="w-3 h-6 bg-accent/60 rounded"></div>
                <div className="w-3 h-8 bg-accent rounded"></div>
              </div>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Balance</h3>
            <p className="text-muted-foreground leading-relaxed">
              The perfect wedding photo balances light and shadow, joy and reverence, 
              candid moments and intentional portraits to create a complete story.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Heart</h3>
            <p className="text-muted-foreground leading-relaxed">
              I photograph with empathy and emotional intelligence, understanding that 
              your wedding day is filled with deep meaning and significance.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Cohesive Aesthetics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every image in your gallery works together to tell a unified story, 
              with consistent editing that enhances the natural beauty of your day.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Diversity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Love comes in many forms, and I celebrate the beautiful diversity of 
              couples, families, and traditions that make each wedding unique.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Weddings are about bringing people together. I capture not just the couple, 
              but the community of love and support that surrounds them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
