"use client";

import { useScrollY } from "@/hooks/use-scroll";
import Image from "next/image";
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
    details: "This package covers the FULL wedding day, from getting ready, to ceremony, to reception (and maybe even the after party). You'll have both myself and a trusted associate there to capture it all. We'll intimately follow the events of the day, making sure no photo is left uncaptured...without being disruptive of course. All I'm saying is, once we get a good stretch and fill up our water bottles, we'll be ready to take on and capture your full day from all angles.",
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
    details: "In these 8 hours, myself and a trusted associate will be there right by your side. This is the perfect option for getting ready images, as we can split the team and go to two different locations or rooms. With two people capturing your day, you'll be sure to have as many tender moments and charm captured as possible.",
    bonus: "Plus free 1hr engagement session!",
    image: "/weddings-page/services-section/olive.png",
  },
  {
    number: "03",
    name: "The Evergreen",
    icon: null,
    price: "Starting at $4200",
    bullets: ["6 hour coverage", "300 - 400 images"],
    details: "You get me as your photographer (nice!) for 6 hours. This package is perfect if you only need me for a certain part of the day or have a shorter wedding schedule. Hourly rates are available upon request, ideal for elopements.",
    bonus: "Plus 25% off engagement session",
    image: "/weddings-page/services-section/evergreen.png",
  },
];

export default function ServicesBreakdown() {
  const scrollY = useScrollY();

  return (
    <section className="py-20 relative overflow-hidden" id="packages">
      <div className="absolute inset-0 w-full h-[120%] top-[-10%] -z-10 bg-stone-800">
        <Image
          src="/weddings-page/services-section/bg.png"
          alt="Background"
          className="w-full h-full object-cover blur-sm opacity-50"
          fill
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4">
          Wedding Packages
        </h2>
        <p className="text-center font-jost mb-20">
          Choose the perfect coverage for your day
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Link href="/contact" key={index}
              className={`bg-background rounded-lg p-8 shadow-sm border-2 transition-all duration-300 group relative
                ${pkg.popular ? "border-accent transform md:-translate-y-4 scale-105 bg-gradient-to-br from-background to-accent/5"
                  : "border-border hover:shadow-xl"}`}
              style={{ boxShadow: pkg.popular ? "0 0px 25px 0px #dab364" : undefined }}
            >

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent font-jost text-accent-foreground px-6 py-1 rounded-full text-sm shadow-lg">
                  best value
                </div>
              )}

              <div className="mb-6">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  className={`
                    w-full h-64 object-cover mb-4 rounded transition-transform duration-300
                    ${pkg.popular ? "shadow-lg group-hover:scale-105" : ""}
                  `}
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>

              <h3 className={`flex items-end mb-6 gap-4 text-4xl opacity-50 group-hover:opacity-100 transition-all ${pkg.popular ? "text-accent opacity-100" : "text-primary group-hover:text-primary"}`}>
                <span className={`font-heading text-5xl `}>
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
