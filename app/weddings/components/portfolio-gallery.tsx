import Link from "next/link";
import Image from "next/image";

export default function PortfolioGallery() {
  const weddings = [
    { coupleName: "Sarah & Michael", img: "/images/weddings/wedding1.jpg", href: "/portfolio/sarah-michael", rotate: -4 },
    { coupleName: "Jessica & David", img: "/images/weddings/wedding2.jpg", href: "/portfolio/jessica-david", rotate: 3 },
    { coupleName: "Maria & James", img: "/images/weddings/wedding3.jpg", href: "/portfolio/maria-james", rotate: -2 },
    { coupleName: "Aisha & Omar", img: "/images/weddings/wedding4.jpg", href: "/portfolio/aisha-omar", rotate: 5 },
    { coupleName: "Emily & Chen", img: "/images/weddings/wedding5.jpg", href: "/portfolio/emily-chen", rotate: -6 },
    { coupleName: "Rachel & Sofia", img: "/images/weddings/wedding6.jpg", href: "/portfolio/rachel-sofia", rotate: 2 }
  ];

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl sm:text-6xl text-center text-primary mb-4">
          Portfolio Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-jost">
          A glimpse into recent celebrations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {weddings.map((wedding, index) => (
            <Link key={index} href={wedding.href} className="block">
              <div className="flex justify-center">
                {/* Polaroid wrapper: white frame, bottom caption, slight rotation */}
                <div
                  style={{ transform: `rotate(${wedding.rotate}deg)` }}
                  className="bg-white p-4 rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:rotate-0"
                >
                  {/* Polaroid "photo" area with thicker bottom frame effect */}
                  <div className="bg-white rounded-sm overflow-hidden border border-gray-100">
                    <div className="relative w-[220px] h-[280px] bg-gray-50">
                      <Image
                        src={wedding.img}
                        alt={wedding.coupleName}
                        fill
                        sizes="(max-width: 768px) 220px, 280px"
                        className="object-cover"
                        priority={index < 3}
                      />
                    </div>
                    {/* thicker bottom to mimic polaroid white space */}
                    <div className="h-10 bg-white flex items-center justify-center border-t border-gray-100">
                      <span className="text-sm text-muted-foreground font-jost">{wedding.coupleName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
