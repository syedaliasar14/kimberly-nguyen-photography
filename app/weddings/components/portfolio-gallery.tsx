import Link from "next/link";

export default function PortfolioGallery() {
  const weddings = [
    { coupleName: "Sarah & Michael" },
    { coupleName: "Jessica & David" },
    { coupleName: "Maria & James" },
    { coupleName: "Aisha & Omar" },
    { coupleName: "Emily & Chen" },
    { coupleName: "Rachel & Sofia" }
  ];

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-script text-5xl sm:text-6xl text-center text-primary mb-4">
          Portfolio Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-jost">
          A glimpse into recent celebrations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddings.map((wedding, index) => (
            <Link 
              key={index} 
              href="/portfolio" 
              className="group cursor-pointer block"
            >
              <div className="aspect-[3/4] bg-secondary/20 rounded-lg overflow-hidden mb-4 relative group-hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-full h-full flex items-center justify-center text-accent/50">
                  <p className="text-center px-4 font-jost text-sm">Wedding Photography</p>
                </div>
              </div>
              <h3 className="font-script text-2xl md:text-3xl text-primary text-center group-hover:text-accent transition-colors duration-300">
                {wedding.coupleName}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
