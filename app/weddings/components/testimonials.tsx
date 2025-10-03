export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-primary mb-16">
          What Couples Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-muted-foreground italic text-lg mb-6 leading-relaxed">
              "Kimberly was absolutely incredible from start to finish. She made us feel so 
              comfortable and natural throughout our entire wedding day. The photos she captured 
              are exactly what we envisioned—bright, beautiful, and full of emotion."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">S&M</span>
              </div>
              <div>
                <p className="font-semibold text-primary">Sarah & Michael</p>
                <p className="text-muted-foreground text-sm">Garden Wedding, 2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-muted-foreground italic text-lg mb-6 leading-relaxed">
              "We cannot thank Kimberly enough for capturing our special day so beautifully. 
              Her eye for detail and ability to capture candid moments is unmatched. Every 
              single photo tells our story perfectly."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">J&D</span>
              </div>
              <div>
                <p className="font-semibold text-primary">Jessica & David</p>
                <p className="text-muted-foreground text-sm">Beach Elopement, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
