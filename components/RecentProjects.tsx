import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects } from '@/lib/projects';

interface RecentProjectsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function RecentProjects({ limit, showViewAll = false }: RecentProjectsProps) {
  const projects = limit ? featuredProjects.slice(0, limit) : featuredProjects;

  return (
    <section id="recent-projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto">
            Explore our latest commercial and industrial roofing projects across Melbourne and Victoria.
            Quality workmanship delivered on time, every time.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-[#006991] focus-within:ring-offset-2"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  priority={index < 3}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#212121] mb-2 group-hover:text-[#006991] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#006991] text-white font-semibold rounded-md hover:bg-[#005577] transition-all shadow-lg text-lg"
            >
              View All Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
