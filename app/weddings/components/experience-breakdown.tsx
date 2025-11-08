"use client";

import { useState } from "react";

const processSteps = [
  {
    number: "1",
    title: "First Chat",
    content: "We set up a video call to talk through questions, and I get to know about you as a couple. I draft up a contract within a week of our chat when you decide you want to move forward. Once the contract is signed and the retainer (25% of package) is paid, the fun part begins."
  },
  {
    number: "2",
    title: "Questionnaire",
    content: "I send you a questionnaire 6-8 weeks before the wedding day. From that questionnaire, I create a day-of plan to ensure the specificities of the day are on my shot list. I like to give suggestions on locations that photograph well, best timings for bridal party photos, individual shots, etc., and my own creative ideas for photos (a tearjerker first look anyone?)."
  },
  {
    number: "3",
    title: "Planning Call",
    content: "We set up a call (or even an in-person meeting if time and distance allow) to finalize our photo game plan. You will get my day-of plan before our call!"
  },
  {
    number: "4",
    title: "Wedding Day",
    content: "It's the big day! Time to capture and photograph some memories. Sneak peeks will be sent 7-10 business days following the wedding."
  },
  {
    number: "5",
    title: "Gallery Delivery",
    content: "Your beautiful digital photo gallery will be shared after 7-9 weeks! I highly suggest you back up your images 1, 2, or even 3 times. Later, I'll get to ask YOU some questions! You'll receive a short survey after receiving your gallery so I can know how best to improve my services for future couples."
  }
];

export default function ExperienceBreakdown() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/10" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl md:text-6xl text-center text-primary mb-4">
          Get to Know the <span className="font-script text-8xl md:text-9xl ml-2">process</span>
        </h2>
        <p className="text-center text-muted-foreground -mt-6 mb-16 font-jost">
          Hover over each step to learn more
        </p>
        
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`border-1 rounded-lg p-6 transition-all duration-500 cursor-pointer bg-background
                ${hoveredIndex === index ? 'border-secondary shadow-lg shadow-stone-300' : 'border-border'}
              `}>
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-3xl font-jost transition-all duration-300
                    ${hoveredIndex === index ? 'bg-secondary text-white scale-110' : 'bg-secondary/20 text-primary'}
                  `}>
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-heading text-xl md:text-2xl mb-3 transition-colors duration-300
                      ${hoveredIndex === index ? 'text-secondary' : 'text-primary'}`}>
                      <span className="font-script text-5xl">{step.title}</span>
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="font-jost text-muted-foreground leading-relaxed">
                        {step.content}
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
