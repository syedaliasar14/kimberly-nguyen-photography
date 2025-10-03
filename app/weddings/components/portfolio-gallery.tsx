export default function PortfolioGallery() {
  const weddings = [
    { title: "Sarah & Michael - Garden Wedding", description: "Intimate ceremony in botanical gardens" },
    { title: "Jessica & David - Beach Elopement", description: "Sunset vows by the ocean" },
    { title: "Maria & James - Rustic Celebration", description: "Farmhouse reception with family" },
    { title: "Aisha & Omar - Cultural Fusion", description: "Beautiful blend of traditions" },
    { title: "Emily & Chen - City Hall Ceremony", description: "Simple elegance in downtown" },
    { title: "Rachel & Sofia - Backyard Wedding", description: "Cozy celebration at home" }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-primary mb-16 font-bold tracking-tight">
          Recent Weddings
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddings.map((wedding, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-accent/10 rounded-lg overflow-hidden mb-4 group-hover:bg-accent/20 transition-colors">
                <div className="w-full h-full flex items-center justify-center text-accent">
                  <p className="text-center px-4 font-accent font-medium">{wedding.title}</p>
                </div>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">{wedding.title}</h3>
              <p className="text-muted-foreground text-sm font-accent">{wedding.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
