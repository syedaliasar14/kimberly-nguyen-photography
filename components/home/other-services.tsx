export default function OtherServices() {
  return (
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
  );
}
