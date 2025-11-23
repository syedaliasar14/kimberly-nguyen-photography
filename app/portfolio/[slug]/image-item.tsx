export interface IImageItem {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

interface ImageItemProps {
  data: IImageItem;
  onClick?: () => void;
}

export default function ImageItem({ data, onClick }: ImageItemProps) {
  return (
    <div onClick={onClick} className="group cursor-pointer overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="overflow-hidden">
        <img
          src={data.src}
          alt={data.alt}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
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