import { Camera, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    number: "01",
    name: "The Juniper",
    icon: Sparkles,
    price: "Starting at $6400",
    coverage: "10 hours",
    images: "500–600",
    details: "This package covers the full wedding day — from getting ready, to ceremony, to reception (and maybe even the after party). You'll have both the photographer and a trusted associate there to capture it all. Every event of the day will be documented thoroughly without being disruptive. Once everyone's ready to go, we'll capture your full day from all angles.",
    bonus: "An engagement session (1 hour) is also included."
  },
  {
    number: "02",
    name: "The Olive",
    icon: Heart,
    price: "Starting at $5300",
    coverage: "8 hours",
    images: "400–500",
    details: "This 8-hour package includes coverage by both the photographer and a trusted associate. It's perfect for getting ready images or splitting the team to cover two locations or rooms. You'll have many tender moments and charming shots captured.",
    bonus: "Includes a free engagement session (1 hour) — we'll connect beforehand to get to know your story and vision."
  },
  {
    number: "03",
    name: "The Evergreen",
    icon: Camera,
    price: "Starting at $4200",
    coverage: "6 hours",
    images: "300–400",
    details: "You get the main photographer for 6 hours — ideal for shorter wedding days or if you only need partial coverage. Hourly rates are available upon request and this package is also great for elopements.",
    bonus: "Includes a discounted engagement session (25% off) that can be used for Save the Dates, websites, wedding displays, and more."
  }
];

export default function ServicesBreakdown() {
  return (
    <section className="py-20 bg-secondary/10" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-script text-5xl sm:text-6xl text-center text-primary mb-4">
          Wedding Packages
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-jost">
          Choose the perfect coverage for your special day
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-8 shadow-sm border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading text-4xl text-accent/30 group-hover:text-accent transition-colors">
                    {pkg.number}
                  </span>
                  <Icon className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-script text-4xl text-primary mb-4 group-hover:text-accent transition-colors">
                  {pkg.name}
                </h3>
                
                <div className="mb-6">
                  <p className="font-heading text-2xl text-primary mb-2">{pkg.price}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground font-jost">
                    <span>📸 {pkg.coverage}</span>
                    <span>🖼️ {pkg.images} images</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6 mb-6">
                  <p className="font-jost text-muted-foreground leading-relaxed mb-4">
                    {pkg.details}
                  </p>
                  <p className="font-jost text-accent font-medium">
                    ✨ {pkg.bonus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block btn bg-accent text-accent-foreground font-jost tracking-wider hover:bg-accent/90 rounded-full"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
