"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How far in advance should we book you for our wedding?",
      answer: "Typically, couples book me about 6-8 months before their wedding date. I encourage you to reach out as soon as possible about my availability, even if you're planning on a shorter time frame.",
    },
    {
      question: "Do you travel for weddings?",
      answer: "Yes! I have traveled all over New England and beyond. For locations that are over an hour driving distance from Hartford County, I apply a travel fee. When submitting your inquiry, please include the location if possible so I can include travel estimate costs.",
    },
    {
      question: "How long will it take to see our photos?",
      answer: "Typically, you'll be able to view your photos online about 6-8 weeks after your wedding. Within this time, you can also expect to receive a link to high-resolution image files, so you can share the photos with your loved ones. You also have the option of ordering prints straight from that site. I also like to send sneak peeks within a week after the wedding so you can have a taste of what's to come!",
    },
    {
      question: "Do you work with assistants or other photographers?",
      answer: "I have a trusted group of photographers and videographers that I rely on and reach out to when I need to form a bigger team for an event.",
    },
    {
      question: "What's your back-up plan if you can't photograph our wedding as planned?",
      answer: "In the very rare event that I'm unable to photograph your wedding, I'll make sure you're covered by a member of my team. I'll be with you every step of the way to make sure the right replacement is found. I will still be doing all the editing so you'll be sure the final images match my style.",
    },
    {
      question: "Will you edit all our photos?",
      answer: "Definitely. All final images will be edited for color, saturation, exposure, and sharpness to ensure they look beautiful to the style you see in my work.",
    },
    {
      question: "Do you offer retouching on the images?",
      answer: "At this time I do not offer retouching on my images. Each image delivered to you is hand-picked and professionally edited keeping factors such as color correction, visual ambiance, and cropping in mind. I do not offer altering of my Clients' general appearance that includes: bags under eyes, body size or shape, wrinkles, hair color, height, skin tone, etc. If requested, I will refer you to trusted retouching experts I have worked with. Their fees/costs are up to their own business discretion.",
    },
    {
      question: "Where do I get more information about your wedding packages?",
      answer: (<>
        You can find all the information about my wedding packages <Link href="/weddings#packages" className="underline">here</Link>!
      </>)
    },
    {
      question: "Do you offer videography services?",
      answer: "Yes, I am currently accepting video projects on a case-by-case basis. Please include in your inquiry if this is something you are interested in!",
    },
    {
      question: "Do you offer film photography services?",
      answer: "I'm so excited to be able to offer this to my couples this year for the first time! Please include film in your request for custom pricing.",
    },
    {
      question: "Will you share all unedited images with us?",
      answer: "I do not share unedited images (ie. RAWs) to my Clients. I take pride in my editing style and attention to detail. It is my hope that my work resonates with you before you even reach out!",
    },
    {
      question: "We're ready to book/would like to learn more! What are the next steps?",
      answer: (<>
        Submit an inquiry form to me <Link href="/contact" className="underline">here</Link>! Please allow 2-3 business days for my response. I look forward to connecting with you!
      </>)
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-center text-primary mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={`faq-${i}`} className="border border-primary/20 rounded-lg overflow-hidden group">
              <button onClick={() => toggleItem(i)} className="w-full px-6 py-4 text-left bg-white group-hover:bg-stone-50 transition-colors duration-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-primary text-lg pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ${openItems.includes(i) ? 'rotate-180' : ''}`} />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(i) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-4 group-hover:bg-gray-50 transition-colors duration-200 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
