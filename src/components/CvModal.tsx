import React from "react";
import {
  X,
  Download,
  Printer,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  SKILL_CATEGORIES,
} from "../data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a plain text CV blob for download
    const cvText = `
===================================================================
ADHITHYAN DAS - FULL STACK DEVELOPER
===================================================================
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedinUrl} | GitHub: ${PERSONAL_INFO.githubUrl}

SUMMARY
-------------------------------------------------------------------
Full Stack Developer with 2+ years of total experience (including 1.5+ years
professional) building scalable web applications and real-time experiences
using modern technologies. Focused on clean code and performance.

EXPERIENCE
-------------------------------------------------------------------
${EXPERIENCE_DATA.map(
  (exp) => `
* ${exp.role} @ ${exp.company} (${exp.duration})
  Highlights:
  ${exp.highlights.map((h) => `  - ${h}`).join("\n")}
  Technologies: ${exp.technologies.join(", ")}
`,
).join("\n")}

FEATURED PROJECTS
-------------------------------------------------------------------
${PROJECTS_DATA.map(
  (p) => `
* ${p.title}
  ${p.description}
  Technologies: ${p.technologies.join(", ")}
`,
).join("\n")}

TECHNICAL SKILLS
-------------------------------------------------------------------
${SKILL_CATEGORIES.map((cat) => `${cat.category}: ${cat.skills.join(", ")}`).join("\n")}

EDUCATION
-------------------------------------------------------------------
* B.Tech Degree | Kerala, India
    `.trim();

    const blob = new Blob([cvText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Adhithyan_Das_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#111827] border border-[#1E293B] rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B1120] px-6 py-4 border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
            <h3 className="font-bold text-[#F8FAFC]">
              Adhithyan_Das_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#38BDF8] text-[#0B1120] hover:bg-[#0EA5E9] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#0B1120] text-[#F8FAFC] border border-[#1E293B] hover:border-[#38BDF8] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-[#1E293B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - CV Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#F8FAFC] font-sans text-sm">
          {/* Header */}
          <div className="border-b border-[#1E293B] pb-6 space-y-2">
            <h1 className="text-2xl font-bold text-[#F8FAFC]">
              {PERSONAL_INFO.name}
            </h1>

            <h2 className="text-[#38BDF8] font-semibold">
              {PERSONAL_INFO.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-xs text-[#94A3B8] pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />{" "}
                {PERSONAL_INFO.email}
              </span>

              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />{" "}
                {PERSONAL_INFO.phone}
              </span>

              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />{" "}
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              Professional Summary
            </h3>

            <p className="text-[#94A3B8] leading-relaxed">
              Full Stack Developer with 2+ years of total experience (including
              1.5+ years professional) building scalable web applications and
              real-time experiences using React, Next.js, Node.js, Express,
              MongoDB, and Redis. Passionate about clean code, performance
              optimization, and AWS cloud infrastructure.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              Work Experience
            </h3>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-[#F8FAFC]">
                    {exp.role} —{" "}
                    <span className="text-[#38BDF8]">{exp.company}</span>
                  </div>

                  <div className="text-xs text-[#94A3B8] font-mono">
                    {exp.duration}
                  </div>
                </div>

                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1 pl-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              Featured Projects
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#0B1120] p-3 rounded border border-[#1E293B]"
                >
                  <div className="font-bold text-xs text-[#F8FAFC]">
                    {proj.title}
                  </div>

                  <p className="text-xs text-[#94A3B8] mt-1">
                    {proj.description}
                  </p>

                  <div className="text-[11px] font-mono text-[#38BDF8] mt-1">
                    Tech: {proj.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category}>
                  <span className="font-semibold text-[#F8FAFC]">
                    {cat.category}:{" "}
                  </span>

                  {cat.skills.join(", ")}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1 pt-2 border-t border-[#1E293B]">
            <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              Education
            </h3>

            <div className="flex justify-between text-xs">
              <span className="font-bold text-[#F8FAFC]">B.Tech Degree</span>
              <span className="text-[#94A3B8]">Kerala, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
