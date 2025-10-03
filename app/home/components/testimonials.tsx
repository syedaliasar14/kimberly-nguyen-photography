export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-16 font-bold tracking-tight">
          What Couples Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <p className="text-muted-foreground italic mb-4 leading-relaxed font-accent">
              "Kimberly captured our day perfectly. Her eye for natural beauty and genuine moments 
              made our photos feel so authentic and timeless."
            </p>
            <p className="font-semibold text-primary font-accent">- Sarah & Michael</p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <p className="text-muted-foreground italic mb-4 leading-relaxed font-accent">
              "We felt so comfortable with Kimberly. She has this amazing ability to blend into 
              the background while capturing every important moment."
            </p>
            <p className="font-semibold text-primary font-accent">- Jessica & David</p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-sm md:col-span-2 lg:col-span-1 border border-border hover:shadow-md transition-shadow">
            <p className="text-muted-foreground italic mb-4 leading-relaxed font-accent">
              "The photos exceeded our expectations. Kimberly's bright, clean style perfectly 
              matched our vision for our special day."
            </p>
            <p className="font-semibold text-primary font-accent">- Maria & James</p>
          </div>
        </div>
      </div>
    </section>
  );
}
