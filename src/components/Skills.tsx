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
            Technologies I <span className="text-[#38BDF8]">Work With</span>
          </h2>
        </div>

        {/* 5-Column Grid Matrix - TEXT ONLY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-lg font-bold text-[#38BDF8] pb-3 mb-4 border-b border-[#1E293B] tracking-tight">
                  {category.category}
                </h3>

                {/* Skill Items List - Plain Text Styling */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#F8FAFC]/90 font-medium hover:text-[#38BDF8] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/60 inline-block" />

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
