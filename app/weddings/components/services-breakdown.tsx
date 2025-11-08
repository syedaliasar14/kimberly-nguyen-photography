import Link from "next/link";

const packages = [
  {
    number: "01",
    name: "The Juniper",
    icon: null,
    price: "Starting at $6400",
    bullets: [
      "10 hour coverage",
      "500 - 600 images",
      "Second photographer",
    ],
    details: "This package covers the full wedding day — from getting ready, to ceremony, to reception (and maybe even the after party). You'll have both the photographer and a trusted associate there to capture it all. Every event of the day will be documented thoroughly without being disruptive. Once everyone's ready to go, we'll capture your full day from all angles.",
    bonus: "Plus free 1hr engagement session!",
    image: "/weddings-page/services-section/juniper.png",
    popular: true,
  },
  {
    number: "02",
    name: "The Olive",
    icon: null,
    price: "Starting at $5300",
    bullets: [
      "8 hour coverage",
      "400 - 500 images",
      "Second photographer",
    ],
    details: "This 8-hour package includes coverage by both the photographer and a trusted associate. It's perfect for getting ready images or splitting the team to cover two locations or rooms. You'll have many tender moments and charming shots captured.",
    bonus: "Plus free 1hr engagement session!",
    image: "/weddings-page/services-section/olive.png",
  },
  {
    number: "03",
    name: "The Evergreen",
    icon: null,
    price: "Starting at $4200",
    bullets: ["6 hour coverage", "300 - 400 images"],
    details: "You get the main photographer for 6 hours — ideal for shorter wedding days or if you only need partial coverage. Hourly rates are available upon request and this package is also great for elopements.",
    bonus: "Plus 25% off engagement session",
    image: "/weddings-page/services-section/evergreen.png",
  },
];

export default function ServicesBreakdown() {
  return (
    <section className="py-20 bg-secondary/10" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl sm:text-6xl text-center text-primary mb-4">
          Wedding Packages
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-jost">
          Choose the perfect coverage for your special day
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Link href="/contact" key={index}
              className={`bg-background rounded-lg p-8 shadow-sm border-2 transition-all duration-300 group relative
                ${pkg.popular ? "border-accent transform md:-translate-y-4 scale-105 bg-gradient-to-br from-background to-accent/5"
                  : "border-border hover:border-accent hover:shadow-xl"}`}
              style={{ boxShadow: pkg.popular ? "0 0px 25px 0px #dab364" : undefined }}
            >

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent font-jost text-accent-foreground px-6 py-1 rounded-full text-sm shadow-lg">
                  best value
                </div>
              )}

              <div className="mb-6">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  className={`
                    w-full h-48 object-cover mb-4 rounded transition-transform duration-300
                    ${pkg.popular ? "shadow-lg group-hover:scale-105" : ""}
                  `}
                  loading="lazy"
                />
              </div>

              <h3 className={`flex items-end mb-6 gap-4 text-4xl transition-colors ${pkg.popular ? "text-accent" : "text-primary group-hover:text-secondary"}`}>
                <span className={`font-heading text-5xl transition-opacity opacity-30 group-hover:opacity-100 ${pkg.popular ? "text-accent" : "text-secondary"}`}>
                  {pkg.number}
                </span>
                <span className="font-allura -mb-2">{pkg.name}</span>
              </h3>

              <div className="mb-6">
                <p className={`font-heading text-xl mb-2 ${pkg.popular ? "text-accent" : "text-primary"}`}>
                  {pkg.price}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground font-jost">
                  {pkg.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="font-jost text-muted-foreground leading-relaxed mb-4">
                  {pkg.details}
                </p>
                <p className="font-jost text-accent">
                  ✨ {pkg.bonus}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
