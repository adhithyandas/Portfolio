import React from "react";
import { motion } from "motion/react";
import { X, Download } from "lucide-react";

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.15 }}
        className="bg-[#111827] border border-[#1E293B] rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B1120] px-6 py-4 border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
            <h3 className="font-bold text-[#F8FAFC]">AdhithyanDasK.pdf</h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Adhithyan_Das_Resume.pdf"
              download="Adhithyan_Das_Resume.pdf"
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#38BDF8] text-[#0B1120] hover:bg-[#0EA5E9] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-[#1E293B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - CV Content (A4 Paper Style) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B1120]">
          <div className="max-w-3xl mx-auto bg-white text-[#111827] shadow-2xl p-8 sm:p-12 rounded-sm border border-gray-200 font-sans leading-normal">
            {/* Header */}
            <div className="border-b border-gray-300 pb-3 mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-1">
                Adhithyan Das K
              </h1>

              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-2">
                Full Stack Developer
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-gray-600">
                <a
                  href="mailto:adhithyandask@gmail.com"
                  className="hover:text-[#38BDF8] hover:underline"
                >
                  adhithyandask@gmail.com
                </a>

                <span>|</span>

                <span>+91 7306291434</span>

                <span>|</span>

                <span>Malappuram, Kerala, India</span>

                <span>|</span>
                <a
                  href="https://linkedin.com/in/adhithyan-das-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] underline"
                >
                  LinkedIn
                </a>

                <span>|</span>

                <a
                  href="https://adhithyandask.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] underline"
                >
                  Portfolio
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">
                Professional Summary
              </h2>

              <p className="text-xs leading-relaxed text-gray-700">
                Full Stack Developer with{" "}
                <strong className="font-semibold text-black">
                  2+ years of development experience
                </strong>
                , including{" "}
                <strong className="font-semibold text-black">
                  1.5 years professional experience
                </strong>
                , building scalable web applications, backend services, APIs,
                real-time systems and cloud solutions. Experienced in{" "}
                <strong className="font-semibold text-black">
                  application and database design, testing, deployment, and
                  maintenance
                </strong>
                , with focus on{" "}
                <strong className="font-semibold text-black">
                  clean architecture, performance, security and maintainability
                </strong>
                .
              </p>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">
                Skills
              </h2>

              <div className="space-y-1.5 text-xs text-gray-700">
                <div>
                  <strong className="font-semibold text-black">
                    Languages:
                  </strong>{" "}
                  TypeScript, JavaScript (ES6+)
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Frontend Development:
                  </strong>{" "}
                  React, Next.js, HTML5, CSS3, Tailwind CSS
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Backend & APIs:
                  </strong>{" "}
                  Node.js, Express.js, REST APIs, Socket.io, JWT, RBAC,
                  Firebase, Third-Party Integrations
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Database & Caching:
                  </strong>{" "}
                  MongoDB, Mongoose, Redis, Firestore
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Cloud & DevOps:
                  </strong>{" "}
                  AWS (S3, Lambda, EventBridge, IAM), Docker (Basic), CI/CD,
                  Vercel
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Testing & Monitoring:
                  </strong>{" "}
                  Vitest, React Testing Library, Sentry
                </div>

                <div>
                  <strong className="font-semibold text-black">
                    Tools & Engineering:
                  </strong>{" "}
                  Git, GitHub, Postman, Swagger / OpenAPI, System Design (Basic)
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5">
                Professional Experience
              </h2>

              <div className="space-y-4">
                {/* Job 1 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="text-xs text-gray-800">
                      <strong className="font-bold text-black text-xs">
                        MERN Stack Developer
                      </strong>
                      , <span className="text-gray-700">Elance Learning</span>
                    </div>

                    <span className="text-[10px] text-gray-500 font-medium">
                      Jan 2025 - Jun 2026
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>
                      Developed and maintained production web applications,
                      admin platforms, and backend services
                    </li>

                    <li>
                      Built and maintained admin and faculty platforms
                      end-to-end, covering content management, course
                      structures, media, materials, live sessions, and related
                      workflows
                    </li>

                    <li>
                      Implemented cloud deployments and CI/CD workflows using{" "}
                      <strong className="font-semibold text-black">AWS</strong>{" "}
                      and{" "}
                      <strong className="font-semibold text-black">
                        GitHub Actions
                      </strong>
                    </li>

                    <li>
                      Collaborated with senior engineers and QA on code reviews,
                      testing, debugging, and production releases
                    </li>

                    <li>
                      Worked in an{" "}
                      <strong className="font-semibold text-black">
                        Agile/Scrum
                      </strong>{" "}
                      environment using{" "}
                      <strong className="font-semibold text-black">Jira</strong>
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="text-xs text-gray-800">
                      <strong className="font-bold text-black text-xs">
                        MERN Stack Developer Intern
                      </strong>
                      , <span className="text-gray-700">Luminar Technolab</span>
                    </div>

                    <span className="text-[10px] text-gray-500 font-medium">
                      Apr 2024 - Dec 2024
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>
                      Developed full-stack web applications using{" "}
                      <strong className="font-semibold text-black">
                        React, Node.js, Express.js, and MongoDB
                      </strong>
                    </li>

                    <li>
                      Developed a real-time chat application with{" "}
                      <strong className="font-semibold text-black">
                        authentication, authorization
                      </strong>
                      , profile management, image uploads, search, and protected
                      routes
                    </li>

                    <li>
                      Developed and integrated{" "}
                      <strong className="font-semibold text-black">
                        REST APIs
                      </strong>
                      , database operations, file uploads, and frontend-backend
                      communication
                    </li>

                    <li>
                      Contributed to debugging, feature development, code
                      improvements, and application testing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5">
                Projects
              </h2>

              <div className="space-y-4">
                {/* Project 1 */}
                <div>
                  <div className="mb-1 text-xs text-gray-800">
                    <strong className="font-bold text-black">
                      Elant Learning
                    </strong>{" "}
                    <span className="text-gray-500">
                      — React, Next.js, TypeScript, Node.js, Express.js,
                      MongoDB, Redis, Socket.io, AWS
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>
                      Built and maintained an{" "}
                      <strong className="font-semibold text-black">
                        AI-driven learning platform
                      </strong>{" "}
                      supporting structured courses, video classes, study
                      materials, live sessions, exams, forums, challenges, and
                      real-time communication
                    </li>

                    <li>
                      Developed and maintained{" "}
                      <strong className="font-semibold text-black">
                        admin and faculty platforms
                      </strong>{" "}
                      for managing programs, batches, faculties, chapters,
                      topics, videos, materials, and live sessions
                    </li>

                    <li>
                      Contributed to backend services for chat, live sessions,
                      videos, materials, profiles, and global ranking, with
                      real-time communication using{" "}
                      <strong className="font-semibold text-black">
                        Socket.io
                      </strong>{" "}
                      and{" "}
                      <strong className="font-semibold text-black">
                        Redis
                      </strong>
                    </li>

                    <li>
                      Worked with{" "}
                      <strong className="font-semibold text-black">
                        cloud deployment, CI/CD
                      </strong>
                      , third-party integrations, and production application
                      workflows
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="mb-1 text-xs text-gray-800">
                    <strong className="font-bold text-black">
                      Elance Learning Management System (LMS)
                    </strong>{" "}
                    <span className="text-gray-500">
                      — Next.js, Node.js, Express.js, MongoDB, AWS, Vercel
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-gray-700">
                    <li>
                      Built the{" "}
                      <strong className="font-semibold text-black">
                        web application end-to-end
                      </strong>{" "}
                      for professional finance learning programs
                    </li>

                    <li>
                      Developed structured content management for programs,
                      batches, chapters, topics, videos, announcements, and
                      study materials
                    </li>

                    <li>
                      Implemented faculty content workflows for video classes
                      and learning materials
                    </li>

                    <li>
                      Integrated{" "}
                      <strong className="font-semibold text-black">
                        video streaming
                      </strong>{" "}
                      and{" "}
                      <strong className="font-semibold text-black">
                        cloud storage
                      </strong>{" "}
                      services for course content delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">
                Education
              </h2>

              <div className="flex justify-between items-baseline text-xs text-gray-800">
                <div>
                  <strong className="font-bold text-black">
                    Bachelor of Computer Applications (BCA)
                  </strong>
                  , <span className="text-gray-700">Yenepoya University</span>
                </div>

                <span className="text-[10px] text-gray-500 font-medium font-sans">
                  Nov 2021 - Apr 2024 | Mangalore, Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
