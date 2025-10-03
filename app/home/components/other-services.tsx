export default function OtherServices() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-primary mb-16 font-bold tracking-tight">
          Other Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center hover:scale-105 transition-transform">
            <div className="aspect-square bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-accent font-accent font-medium">Engagement Photos</p>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Engagement Sessions</h3>
            <p className="text-muted-foreground leading-relaxed font-accent">
              Celebrate your love story with a romantic engagement session in beautiful locations.
            </p>
          </div>
          
          <div className="text-center hover:scale-105 transition-transform">
            <div className="aspect-square bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-accent font-accent font-medium">Elopement Photos</p>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Elopements</h3>
            <p className="text-muted-foreground leading-relaxed font-accent">
              Intimate ceremonies deserve intimate photography. Perfect for couples seeking simplicity.
            </p>
          </div>
          
          <div className="text-center hover:scale-105 transition-transform">
            <div className="aspect-square bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-accent font-accent font-medium">Portrait Photos</p>
            </div>
            <h3 className="font-serif text-xl text-primary mb-4 font-semibold">Portrait Sessions</h3>
            <p className="text-muted-foreground leading-relaxed font-accent">
              Professional portraits that capture your personality and authentic self.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
