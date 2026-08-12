import React from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            SKILLS
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            Technical Skills
          </h2>

          <p className="text-[#94A3B8] text-base mt-3 max-w-3xl">
            A practical set of technologies, tools, and engineering practices I
            use to build scalable, reliable, and maintainable software.
          </p>
        </div>

        {/* 6-Card 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-7 hover:border-[#38BDF8]/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-base font-bold text-[#F8FAFC] pb-3 mb-4 border-b border-[#1E293B] tracking-tight">
                  {category.category}
                </h3>

                {/* Skill Items List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors flex items-center gap-2.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#38BDF8]/40 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
