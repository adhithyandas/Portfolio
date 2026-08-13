import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "../data/portfolioData";
import logo from "../../assets/favicon/logo.svg";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1120] border-t border-[#1E293B] pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Adhithyan Das K Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <span className="font-bold text-lg text-[#F8FAFC]">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Full Stack Developer specializing in modern web application
              development and backend engineering. Experienced in building
              scalable, reliable, and performance-focused applications with
              modern web technologies. Focused on clean architecture,
              maintainable code, real-time systems, and delivering high-quality
              software.{" "}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#38BDF8] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider">
              Connect
            </h4>

            <p className="text-sm text-[#94A3B8]">
              Let's connect and discuss opportunities to work together.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="X"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="WhatsApp"
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
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <div>© {currentYear} Adhithyan Das K. All rights reserved.</div>

          <div className="text-xs text-[#94A3B8]/80">
            Kerala, India • Full Stack Developer
          </div>
        </div>
      </div>
    </footer>
  );
};
