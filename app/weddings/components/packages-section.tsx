"use client";

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

export default function PackagesSection({ title, subtitle, packages, photosAltText }: { title?: string; subtitle?: string; packages?: Package[]; photosAltText?: string }) {
  return (
    <section className="py-20 relative overflow-hidden bg-primary" id="packages">
      <Image
        src="/charcoal.png"
        alt="Background"
        className="w-full h-full object-cover opacity-30"
        fill
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10 relative">
        <h2 className="font-heading font-thin text-5xl sm:text-6xl text-center text-accent mb-4">
          {title || "Wedding Packages"}
        </h2>
        <p className="text-center font-sans mb-20">
          {subtitle || "Choose the perfect coverage for your day"}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <div key={index} className={`bg-background p-8 shadow-sm border transition-all duration-300 group z-10 relative flex flex-col
                  ${pkg.isBest ? "border-accent" : ""}`}
              style={{ boxShadow: pkg.isBest ? "0 0px 25px 0px #dab364" : undefined }}
            >
              {/* Background for Package */}
              <Image
                src="/marble3.png" alt="" fill
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-50 rotate-180 z-0"
              />

              {/* Popular Badge */}
              {pkg.isBest && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent font-sans text-accent-foreground px-6 py-1 rounded-full text-sm shadow-lg">
                  popular
                </div>
              )}

              <div className="mb-6 overflow-hidden z-10 relative">
                {pkg.image && <Image
                  src={urlFor(pkg.image).url()!}
                  alt={pkg.image.alt || photosAltText || `${pkg.name} Wedding Photography Pricing Package`}
                  className={`w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300`}
                  loading="lazy"
                  width={400} height={300}
                />}
                <div className="absolute inset-2 border border-white" />
              </div>

              <h3 className={`flex items-end mb-6 z-10 relative gap-4 text-4xl opacity-50 group-hover:opacity-100 transition-all ${pkg.isBest ? "text-accent opacity-100" : "text-primary group-hover:text-primary"}`}>
                <span className={`font-heading font-thin text-5xl `}>
                  {index + 1}
                </span>
                <span className="font-allura -mb-2">{pkg.name}</span>
              </h3>

              <div className="mb-6 z-10 relative">
                <p className={`font-heading font-thin text-xl mb-2 ${pkg.isBest ? "text-accent" : "text-primary"}`}>
                  Starting at ${pkg.price}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground font-sans">
                  {pkg.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6 mb-6 z-10 relative">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {pkg.description}
                </p>
                <div className="text-accent flex items-center gap-2">
                  <div className="w-2 h-2 rotate-45 bg-accent flex-shrink-0" /> {pkg.bonus}
                </div>
              </div>

                <Link href="/contact" className={`btn-accent py-2 w-full text-center z-10 relative self-end mt-auto`}>
                Book Now →
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
