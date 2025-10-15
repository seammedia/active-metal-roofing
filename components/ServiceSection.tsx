import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  title: string;
  richText: ReactNode | string;
  image?: string;
  imageLeft?: boolean;
}

export default function ServiceSection({
  title,
  richText,
  image,
  imageLeft = false
}: ServiceSectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image Column */}
      {image && (
        <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      )}

      {/* Content Column */}
      <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'} ${!image ? 'lg:col-span-2' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          {typeof richText === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: richText }} />
          ) : (
            richText
          )}
        </div>
      </div>
    </div>
  );
}
