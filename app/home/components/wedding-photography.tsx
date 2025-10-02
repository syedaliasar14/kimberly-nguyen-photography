export default function WeddingPhotography() {
  return (
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
  );
}
