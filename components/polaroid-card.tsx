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
      <div className="relative group p-4 z-20">
        <div className="relative w-[250px] aspect-[5/6] overflow-hidden">
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={title}
              fill sizes="500px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              priority={index < 3}
            />
          ) : (
            <div className="w-full h-full bg-secondary/10 flex items-center justify-center" />
          )}
          <div className="border border-white inset-2 absolute" />
        </div>
        <div className="mt-2 text-balance flex items-center justify-center">
          <span className="text-3xl text-primary">{title}</span>
        </div>
      </div>
    </Link >
  );
}