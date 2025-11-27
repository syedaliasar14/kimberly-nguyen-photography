import Link from "next/link";
import Image from "next/image";

interface PolaroidCardProps {
  title: string;
  slug: string;
  thumbnailUrl?: string | null;
  index: number;
  rotate?: boolean;
}

const rotations = [-4, 3, -2, 5, -6, 2, -3, 4, -1, 6]; // Predefined rotation values

export default function PolaroidCard({ title, slug, thumbnailUrl, index, rotate }: PolaroidCardProps) {
  const cardRotation = rotate ? rotations[index % rotations.length] : 0;
  
  return (
    <Link href={`/portfolio/${slug}`} className="flex justify-center mb-8">
      <div className="relative group">
        {/* Back card (bottom layer) */}
        <div className="absolute bg-white p-4  shadow-lg border border-gray-200 z-0"
          style={{ transform: `rotate(${cardRotation + 2}deg) translate(-4px, 8px)`,opacity: 0.7}}>
          <div className="bg-gray-100 rounded-sm overflow-hidden border border-gray-100">
            <div className="w-[220px] h-[250px] bg-gray-200"></div>
            <div className="h-10 bg-gray-100 border-t border-gray-200"></div>
          </div>
        </div>

        {/* Middle card */}
        <div className="absolute bg-white p-4  shadow-lg border border-gray-200 z-10"
          style={{ transform: `rotate(${cardRotation - 1}deg) translate(-2px, 4px)`, opacity: 0.85}}>
          <div className="bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
            <div className="w-[220px] h-[250px] bg-gray-150"></div>
            <div className="h-10 bg-gray-50 border-t border-gray-150"></div>
          </div>
        </div>

        {/* Front card (top layer) */}
        <div className="relative bg-white p-4  shadow-2xl border border-gray-200 z-20"
          style={{ transform: `rotate(${cardRotation}deg)` }} >
          <div className="bg-white overflow-hidden border border-gray-100">
            <div className="relative w-[220px] h-[250px] bg-gray-50 overflow-hidden">
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill sizes="500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                />
              ) : (
                <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                  <p className="text-secondary text-sm font-jost">Portfolio Image</p>
                </div>
              )}
            </div>
            <div className="h-10 bg-white flex items-center justify-center border-t border-gray-100">
              <span className="text-3xl text-primary font-allura">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}