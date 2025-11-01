export default function FaqSection() {
  const faqs = [
    {
      question: "How far in advance should we book you for our wedding?",
      answer: "Typically, couples book me about 6-8 months before their wedding date. I encourage you to reach out as soon as possible about my availability, even if you’re planning on a shorter time frame.",
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
      question: "Will you edit all our photos?",
      answer: "Definitely. All final images will be edited for color, saturation, exposure, and sharpness to ensure they look beautiful to the style you see in my work.",
    },
    {
      question: "Do you offer retouching on the images?",
      answer: "At this time I do not offer retouching on my images. Each image delivered to you is hand-picked and professionally edited keeping factors such as color correction, visual ambiance, and cropping in mind. I do not offer altering of my Clients' general appearance that includes: bags under eyes, body size or shape, wrinkles, hair color, height, skin tone, etc. If requested, I will refer you to trusted retouching experts I have worked with. Their fees/costs are up to their own business discretion.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-center text-primary mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={`faq-${i}`}>
              <h3 className="font-semibold text-primary mb-3 text-lg">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
