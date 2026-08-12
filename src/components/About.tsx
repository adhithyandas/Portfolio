import React from "react";
import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Languages,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            ABOUT ME
          </span>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Description & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              I build <span className="text-[#38BDF8]">clean, scalable</span>{" "}
              solutions.
            </h2>

            <div className="space-y-4 text-[#94A3B8] text-base leading-relaxed">
              <p>{PERSONAL_INFO.aboutParagraph1}</p>
              <p>{PERSONAL_INFO.aboutParagraph2}</p>

              <p className="text-sm pt-2 text-[#94A3B8]">
                Core technologies I work with every day include{" "}
                <span className="text-[#F8FAFC] font-medium">React</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">Next.js</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">Node.js</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">Express</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">MongoDB</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">Redis</span>,{" "}
                <span className="text-[#F8FAFC] font-medium">AWS</span>, and{" "}
                <span className="text-[#F8FAFC] font-medium">Socket.IO</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Information Area */}
          <div className="lg:col-span-5 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Experience */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <Briefcase className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Experience
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#F8FAFC] mt-0.5">
                    {PERSONAL_INFO.experienceYears}
                  </div>
                </div>
              </div>

              {/* Degree */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Degree
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#F8FAFC] mt-0.5">
                    {PERSONAL_INFO.degree}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors mt-0.5 block break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Location
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#F8FAFC] mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1120] border border-[#1E293B] text-[#38BDF8]">
                  <Languages className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    Languages
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-[#F8FAFC] mt-0.5">
                    {PERSONAL_INFO.languages}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
