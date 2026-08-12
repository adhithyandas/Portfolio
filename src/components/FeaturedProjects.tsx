import React from 'react';
import { Layers, Monitor, Smartphone } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const FeaturedProjects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'proj-1':
        return <Layers className="w-8 h-8 text-[#38BDF8]" />;
      case 'proj-2':
        return <Monitor className="w-8 h-8 text-[#38BDF8]" />;
      case 'proj-3':
        return <Smartphone className="w-8 h-8 text-[#38BDF8]" />;
      default:
        return <Layers className="w-8 h-8 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            Projects I've Built
          </h2>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Icon Placeholder Card Area */}
                <div className="w-14 h-14 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-center mb-6 group-hover:border-[#38BDF8]/50 group-hover:bg-[#38BDF8]/5 transition-all">
                  {getProjectIcon(project.id)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies list */}
              <div className="pt-4 border-t border-[#1E293B]">
                <div className="text-xs text-[#94A3B8] mb-2 font-mono">Tech:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-[#0B1120] border border-[#1E293B] text-[#F8FAFC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
