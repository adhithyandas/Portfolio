import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, HERO_STATS, CODE_SNIPPET } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Intro & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC]">
                Hi, I'm
              </h1>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="text-[#38BDF8]">
                  {PERSONAL_INFO.name.split(" ")[0]}
                </span>{" "}
                <span className="text-[#F8FAFC]">
                  {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                id="hero-view-work-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg text-[#0B1120] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-300 shadow-lg shadow-[#38BDF8]/20 cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                id="hero-get-in-touch-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg text-[#F8FAFC] bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 cursor-pointer group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="GitHub Profile"
                id="hero-social-github"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="LinkedIn Profile"
                id="hero-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="Email Address"
                id="hero-social-email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="WhatsApp Profile"
                id="hero-social-whatsapp"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="X Profile"
                id="hero-social-x"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Hero Stats */}
            <div className="pt-8 border-t border-[#1E293B]/80 grid grid-cols-3 gap-4 max-w-lg">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                    {stat.value}
                  </div>

                  <div className="text-xs sm:text-sm text-[#94A3B8]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Code Editor Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden hover:border-[#38BDF8]/40 transition-colors duration-300">
              {/* Window Controls */}
              <div className="bg-[#0B1120]/80 px-4 py-3 border-b border-[#1E293B] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs text-[#94A3B8] font-mono ml-2">
                  developer.js
                </span>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#F8FAFC]">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right w-6">
                        1
                      </td>

                      <td>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-[#38BDF8]">developer</span> =
                        &#123;
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        2
                      </td>

                      <td className="pl-4">
                        <span className="text-cyan-300">name</span>:{" "}
                        <span className="text-emerald-400">
                          "Adhithyan Das K"
                        </span>
                        ,
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        3
                      </td>

                      <td className="pl-4">
                        <span className="text-cyan-300">role</span>:{" "}
                        <span className="text-emerald-400">
                          "Full Stack Developer"
                        </span>
                        ,
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        4
                      </td>

                      <td className="pl-4">
                        <span className="text-cyan-300">experience</span>:{" "}
                        <span className="text-emerald-400">"2+ Years"</span>,
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        5
                      </td>

                      <td className="pl-4">
                        <span className="text-cyan-300">focus</span>: [
                        <span className="text-emerald-400">
                          "Clean Architecture"
                        </span>
                        ,{" "}
                        <span className="text-emerald-400">"Performance"</span>,{" "}
                        <span className="text-emerald-400">"Security"</span>],
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        6
                      </td>

                      <td className="pl-4">
                        <span className="text-cyan-300">tech</span>: &#123;
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        7
                      </td>

                      <td className="pl-8">
                        <span className="text-cyan-300">frontend</span>: [
                        <span className="text-emerald-400">"React"</span>,{" "}
                        <span className="text-emerald-400">"Next.js"</span>,{" "}
                        <span className="text-emerald-400">"TypeScript"</span>],
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        8
                      </td>

                      <td className="pl-8">
                        <span className="text-cyan-300">backend</span>: [
                        <span className="text-emerald-400">"Node.js"</span>,{" "}
                        <span className="text-emerald-400">"Express"</span>],
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        9
                      </td>

                      <td className="pl-8">
                        <span className="text-cyan-300">database</span>: [
                        <span className="text-emerald-400">"MongoDB"</span>,{" "}
                        <span className="text-emerald-400">"Redis"</span>],
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        10
                      </td>

                      <td className="pl-8">
                        <span className="text-cyan-300">cloud</span>: [
                        <span className="text-emerald-400">"AWS"</span>],
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        11
                      </td>

                      <td className="pl-8">
                        <span className="text-cyan-300">tools</span>: [
                        <span className="text-emerald-400">"Docker"</span>,{" "}
                        <span className="text-emerald-400">"Git"</span>,{" "}
                        <span className="text-emerald-400">"CI/CD"</span>]
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        12
                      </td>
                      <td className="pl-4">&#125;</td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        13
                      </td>
                      <td>&#125;;</td>
                    </tr>

                    <tr>
                      <td className="pr-4 text-[#94A3B8]/40 select-none text-right">
                        14
                      </td>

                      <td className="pt-2">
                        <span className="text-yellow-400">console</span>.
                        <span className="text-blue-400">log</span>(
                        <span className="text-[#38BDF8]">developer</span>);
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
