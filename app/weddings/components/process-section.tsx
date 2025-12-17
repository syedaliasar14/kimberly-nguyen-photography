"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProcessSection({ title, subtitle, processSteps }: { title?: string; subtitle?: string; processSteps: { title: string; description?: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative bg-gradient-to-b from-secondary/5 to-secondary/40" id="process">
      <Image
        src="/marble3.png"
        alt="Wedding Photography Process Background"
        fill priority
        className="object-cover object-center absolute inset-0 w-full h-full -z-0 opacity-50"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-heading font-thin text-5xl md:text-6xl text-center mb-4">
          {title || "Here's What to Expect"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-sans">
          {subtitle || "Tap or hover over each step to learn more"}
        </p>

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`border-1 p-6 transition-all duration-500 cursor-pointer bg-background
                ${hoveredIndex === index ? 'border-accent shadow-lg' : 'border-transparent shadow-none'}
              `}>
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-3xl transition-all duration-300
                    ${hoveredIndex === index ? 'bg-accent text-white' : 'bg-secondary/20 text-primary'}
                  `}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-heading font-thin text-2xl md:text-3xl mb-3 transition-colors duration-300`}>
                      {step.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="tracking-wide leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
