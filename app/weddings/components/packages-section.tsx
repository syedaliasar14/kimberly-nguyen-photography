"use client";

import { useScrollY } from "@/hooks/use-scroll";
import { urlFor } from "@/sanity/lib/image";
import { ImageWithAlt } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";

interface Package {
  name: string;
  price: string;
  isBest?: boolean;
  image?: ImageWithAlt;
  description?: string;
  features?: string[];
  bonus?: string;
}

export default function PackagesSection({ packages }: { packages?: Package[] }) {
  const scrollY = useScrollY();

  return (
    <section className="py-20 relative overflow-hidden" id="packages">
      <div className="absolute inset-0 w-full h-[120%] top-[-10%] -z-10 bg-gradient-to-br from-secondary to-primary filter">
        <Image
          src="/bg/6.png"
          alt="Background"
          className="w-full h-full object-cover blur-sm opacity-25"
          fill
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="font-heading font-thin text-5xl sm:text-6xl text-center mb-4">
          Wedding Packages
        </h2>
        <p className="text-center font-sans mb-20">
          Choose the perfect coverage for your day
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <Link href="/contact" key={index}
              className={`bg-background p-8 shadow-sm border transition-all duration-300 group relative
                ${pkg.isBest ? "border-accent transform bg-gradient-to-br from-background to-accent/5"
                  : "border-border hover:shadow-xl"}`}
              style={{ boxShadow: pkg.isBest ? "0 0px 25px 0px #dab364" : undefined }}
            >

              {/* Popular Badge */}
              {pkg.isBest && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent font-sans text-accent-foreground px-6 py-1 rounded-full text-sm shadow-lg">
                  popular
                </div>
              )}

              <div className="mb-6 overflow-hidden shadow-lg ">
                {pkg.image && <Image
                  src={urlFor(pkg.image).url()!}
                  alt={pkg.image.alt || `${pkg.name} package`}
                  className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300`}
                  loading="lazy"
                  width={400} height={300}
                />}
              </div>

              <h3 className={`flex items-end mb-6 gap-4 text-4xl opacity-50 group-hover:opacity-100 transition-all ${pkg.isBest ? "text-accent opacity-100" : "text-primary group-hover:text-primary"}`}>
                <span className={`font-heading font-thin text-5xl `}>
                  {index + 1}
                </span>
                <span className="font-allura -mb-2">{pkg.name}</span>
              </h3>

              <div className="mb-6">
                <p className={`font-heading font-thin text-xl mb-2 ${pkg.isBest ? "text-accent" : "text-primary"}`}>
                  Starting at ${pkg.price}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground font-sans">
                  {pkg.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  {pkg.description}
                </p>
                <p className="font-sans text-accent flex items-center gap-2">
                  <div className="w-2 h-2 rotate-45 bg-accent flex-shrink-0"/> {pkg.bonus}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
