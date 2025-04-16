import Image from "next/image";
import Link from "next/link";

interface AreaCardProps {
  title: string;
  titleHighlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function AreaCard({
  title,
  titleHighlight,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: AreaCardProps) {
  return (
    <div className={`w-full  p-5 mx-auto my-6 rounded-xl overflow-hidden bg-gray-50 shadow-sm flex flex-col ${reverse ? 'lg:flex-row-reverse border-r-4 border-[#29333A]' : 'lg:flex-row border-l-4 justify-start border-[#29333A]'}`}>
      <div className="flex justify-end">
        <div className="relative rounded h-full w-[319px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      
      <div className={` p-8 flex flex-col ${reverse ? 'lg:items-end text-right' : 'lg:items-start text-left'}`}>
        <h2 className="text-2xl md:text-3xl font-sora mb-4">
          Direito <span className="font-bold">{titleHighlight || title.toLowerCase()}</span>
        </h2>
        
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          {description}
        </p>
        
        <div>
          <Link 
            href="#contato" 
            className="inline-flex bg-[#070A0D] items-center px-6 py-3 border border-black text-white rounded-md hover:bg-black hover:text-white transition-colors"
          >
            Entre em contato <span className="ml-2">⚖️</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 