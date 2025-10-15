import Image from 'next/image';
import ShapeDivider from './ShapeDivider';

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function ServiceHero({ title, subtitle, image }: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/20 z-10" />

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* White Shape Divider */}
      <ShapeDivider position="bottom" color="#ffffff" height={90} />
    </section>
  );
}
