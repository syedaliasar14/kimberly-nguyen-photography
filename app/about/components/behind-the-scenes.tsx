import Image from "next/image";

export default function BehindTheScenes() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl md:text-6xl text-center text-primary mb-16">
          Behind the Scenes
        </h2>

        <div className="relative min-h-120">
          <div className="float-left md:mr-8 mb-6 w-full md:w-100 flex-shrink-0 relative h-120">
            <Image
              src="/kim/1.png"
              alt="Kimberly Nguyen Photography"
              width={1000}
              height={1000}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="text-xl leading-relaxed whitespace-pre-wrap">
            <div className="space-y-6 whitespace-pre-wrap">
              <p className="text-muted-foreground leading-relaxed">
                I believe the best wedding photography happens when couples feel completely
                comfortable and natural. That's why I spend time getting to know you before
                your wedding day—understanding your story, your vision, and what matters most to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On your wedding day, I blend into the background, documenting moments as they
                happen while providing gentle guidance when needed. My goal is for you to forget
                I'm there, so you can be fully present with each other and your loved ones.
              </p>
              <p className="text-muted-foreground leading-relaxed">
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
