export default function ElopementsAndEngagements() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-forest mb-8">Elopements</h2>
            <div className="aspect-[4/3] bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-sage">Elopement Photography</p>
            </div>
            <p className="text-stone leading-relaxed mb-6">
              Sometimes the most beautiful celebrations are the intimate ones. Elopements allow 
              couples to focus purely on their commitment to each other in a meaningful setting.
            </p>
            <ul className="space-y-2 text-stone">
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>2-4 hours of coverage</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>100+ edited images</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>Location scouting assistance</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl text-forest mb-8">Engagement Sessions</h2>
            <div className="aspect-[4/3] bg-sage/10 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-sage">Engagement Photography</p>
            </div>
            <p className="text-stone leading-relaxed mb-6">
              Engagement sessions are a wonderful way to celebrate this special time in your 
              relationship and get comfortable with your photographer before the big day.
            </p>
            <ul className="space-y-2 text-stone">
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>1-2 hours of photography</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>50+ edited images</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage">•</span>
                <span>Perfect for save-the-dates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
