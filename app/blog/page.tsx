export default function BlogPage() {
  const placeholderPosts = [
    {
      id: 1,
      title: "A Complete Guide to Engagement Sessions",
      excerpt: "Everything you need to know about planning your engagement photo session.",
      date: "Coming Soon",
      category: "Tips & Advice"
    },
    {
      id: 2,
      title: "Real Wedding: Sarah & Michael's Garden Celebration",
      excerpt: "A beautiful botanical garden wedding filled with love and laughter.",
      date: "Coming Soon",
      category: "Real Weddings"
    },
    {
      id: 3,
      title: "What to Wear for Your Engagement Photos",
      excerpt: "Style tips and outfit ideas for your engagement session.",
      date: "Coming Soon",
      category: "Tips & Advice"
    }
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-primary mb-6 font-bold tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wedding tips, real wedding stories, and photography insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-accent/10 flex items-center justify-center">
                <p className="text-accent">Blog Post Image</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-accent font-medium uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="font-heading text-xl text-primary mb-3 font-semibold">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button 
                  className="text-primary hover:text-accent transition-colors font-medium"
                  disabled
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="font-heading text-2xl text-primary mb-4 font-bold">
              Blog Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm working on creating helpful content about wedding photography, 
              planning tips, and real wedding stories. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
