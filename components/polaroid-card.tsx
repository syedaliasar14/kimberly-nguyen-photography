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
        <div style={{ transform: `rotate(${cardRotation}deg)` }}
          className="bg-white p-4 rounded-sm shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:rotate-0"
        >
          <div className="bg-white rounded-sm overflow-hidden border border-gray-100">
            <div className="relative w-[220px] h-[250px] bg-gray-50">
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 220px, 250px"
                  className="object-cover"
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
    </Link>
  );
}