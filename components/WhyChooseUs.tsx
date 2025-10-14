import Image from 'next/image';
import { features } from '@/lib/home';
import { Shield, Award, CheckCircle, Clock } from 'lucide-react';

const iconMap = {
  Shield,
  Award,
  CheckCircle,
  Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/img/2025/03/Metal-Roof-Restoration-Melbourne.png"
              alt="Active Metal Roofing team and equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
              One Stop Solution for All Your Roofing Needs
            </h2>
            <p className="text-lg text-[#7A7A7A] mb-8 leading-relaxed">
              With over 22 years of experience, we deliver exceptional commercial and industrial roofing services across Melbourne and Victoria.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="bg-[#BFE3F7] rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-[#006991]" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#212121] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[#7A7A7A] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
