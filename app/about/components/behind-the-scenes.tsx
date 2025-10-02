export default function BehindTheScenes() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
          Behind the Scenes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] bg-sage/10 rounded-lg flex items-center justify-center mb-8">
              <p className="text-sage">Behind the Scenes Photo</p>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-forest mb-6">My Process</h3>
            <div className="space-y-6">
              <p className="text-stone leading-relaxed">
                I believe the best wedding photography happens when couples feel completely 
                comfortable and natural. That's why I spend time getting to know you before 
                your wedding day—understanding your story, your vision, and what matters most to you.
              </p>
              <p className="text-stone leading-relaxed">
                On your wedding day, I blend into the background, documenting moments as they 
                happen while providing gentle guidance when needed. My goal is for you to forget 
                I'm there, so you can be fully present with each other and your loved ones.
              </p>
              <p className="text-stone leading-relaxed">
                After your wedding, I carefully curate and edit your images, ensuring each photo 
                reflects the beauty and emotion of your day with my signature bright, clean aesthetic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
