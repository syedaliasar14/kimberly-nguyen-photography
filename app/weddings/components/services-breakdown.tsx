export default function ServicesBreakdown() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-forest mb-16">
          Wedding Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-forest mb-6">Full Wedding Coverage</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">8-12 hours of wedding day coverage</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Getting ready through reception</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">500+ edited high-resolution images</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Online gallery for easy sharing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Print release included</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl text-forest mb-6">Add-On Options</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Engagement session</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Rehearsal dinner coverage</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Second photographer</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Custom wedding albums</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                <p className="text-stone">Extended coverage hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
