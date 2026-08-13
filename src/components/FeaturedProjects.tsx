import React from "react";
import { motion } from "motion/react";
import { PROJECTS_DATA } from "../data/portfolioData";

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            SELECTED PROJECTS
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8"
        >
          {PROJECTS_DATA.map((project, index) => {
            const numberStr = String(index + 1).padStart(2, "0");

            let gridSpanClass = "lg:col-span-4 md:col-span-1";

            if (index === 3) {
              gridSpanClass = "lg:col-span-5 lg:col-start-2 md:col-span-1";
            } else if (index === 4) {
              gridSpanClass = "lg:col-span-5 md:col-span-2";
            }

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#38BDF8]/40 shadow-xl group ${gridSpanClass}`}
              >
                <div>
                  {/* Category Indicator */}
                  <div className="text-xs font-mono text-[#38BDF8] tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <span>{numberStr}</span>
                    <span className="text-[#38BDF8]/40">·</span>
                    <span>{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies list */}
                <div className="pt-4 border-t border-[#1E293B]">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-[#0B1120] border border-[#1E293B] text-[#F8FAFC] group-hover:border-[#38BDF8]/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
