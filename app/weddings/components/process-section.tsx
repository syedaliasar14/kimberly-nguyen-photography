"use client";

import { useState } from "react";

export default function ProcessSection({ processSteps }: { processSteps: { title: string; description?: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-secondary/40" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl md:text-6xl text-center text-primary mb-4">
          Get to Know the <span className="font-cursive text-8xl md:text-9xl ml-2">process</span>
        </h2>
        <p className="text-center text-muted-foreground -mt-6 mb-16 font-sans">
          Tap or hover over each step to learn more
        </p>

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`border-1 p-6 transition-all duration-500 cursor-pointer bg-background
                ${hoveredIndex === index ? 'border-secondary shadow-lg shadow-stone-300' : 'border-border'}
              `}>
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-3xl font-sans transition-all duration-300
                    ${hoveredIndex === index ? 'bg-secondary text-white scale-110' : 'bg-secondary/20 text-primary'}
                  `}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-sans text-xl md:text-2xl mb-3 transition-colors duration-300
                      ${hoveredIndex === index ? 'text-secondary' : 'text-primary'}`}>
                      {step.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="font-sans text-muted-foreground leading-relaxed">
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
