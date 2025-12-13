import Link from "next/link";
import Image from "next/image";

interface PolaroidCardProps {
  title: string;
  slug: string;
  thumbnailUrl?: string | null;
  index: number;
}

export default function PolaroidCard({ title, slug, thumbnailUrl, index }: PolaroidCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="flex justify-center mb-8">
      <div className="relative group">
        <div className="relative bg-white p-4 shadow-2xl border border-gray-200 z-20">
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
                  <p className="text-secondary text-sm font-sans">Portfolio Image</p>
                </div>
              )}
            </div>
            <div className="h-10 bg-white flex items-center justify-center border-t border-gray-100">
              <span className="text-3xl text-primary">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}