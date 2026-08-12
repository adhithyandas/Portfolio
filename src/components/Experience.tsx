import React from "react";
import { EXPERIENCE_DATA } from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            EXPERIENCE
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            My Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E293B]">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-5.75 sm:-left-6.75 top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-[#38BDF8] group-hover:scale-125 group-hover:bg-[#38BDF8] transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.3)]" />

              <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 hover:border-[#38BDF8]/40 transition-all duration-300 shadow-lg">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E293B] pb-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      {exp.role}{" "}
                      <span className="text-[#38BDF8] font-semibold text-base sm:text-lg">
                        @ {exp.company}
                      </span>
                    </h3>
                  </div>

                  <div className="inline-block px-3 py-1 bg-[#0B1120] border border-[#1E293B] rounded-md text-xs font-mono text-[#38BDF8] w-fit">
                    {exp.duration}
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges/Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E293B]/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#0B1120] border border-[#1E293B] text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-colors"
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
