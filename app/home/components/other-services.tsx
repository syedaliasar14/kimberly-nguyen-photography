export default function OtherServices() {
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-accent text-6xl mb-16 text-center">Other Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-left group">
            <div className="aspect-square bg-accent/10 mb-6"/>
            <h3 className="font-jost font-medium text-2xl text-primary group-hover:text-accent mb-2">Engagement Sessions</h3>
            <p className="text-muted-foreground">
              Celebrate your love story with a romantic engagement session in beautiful locations.
            </p>
          </div>
          
          <div className="text-left group">
            <div className="aspect-square bg-accent/10 mb-6"/>
            <h3 className="font-jost font-medium text-2xl text-primary group-hover:text-accent mb-2">Elopements</h3>
            <p className="text-muted-foreground">
              Intimate ceremonies deserve intimate photography. Perfect for couples seeking simplicity.
            </p>
          </div>
          
          <div className="text-left group">
            <div className="aspect-square bg-accent/10 mb-6"/>
            <h3 className="font-jost font-medium text-2xl text-primary group-hover:text-accent mb-2">Portrait Sessions</h3>
            <p className="text-muted-foreground">
              Professional portraits that capture your personality and authentic self.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
