import Image from "next/image";

export interface IImageItem {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function ImageItem({ data, onClick }: { data: IImageItem; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="overflow-hidden">
        <Image
          src={data.src}
          alt={data.alt || 'Portfolio Image | Connecticut Photographer'}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={1000}
          height={1000}
        />
      </div>
      {data.caption && (
        <div className="p-3 bg-white">
          <p className="text-sm text-muted-foreground italic font-jost">
            {data.caption}
          </p>
        </div>
      )}
    </div>
  );
}