import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1120] border-t border-[#1E293B] pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#38BDF8]/40 flex items-center justify-center font-bold text-[#38BDF8]">
                {PERSONAL_INFO.initials}
              </div>
              <span className="font-bold text-lg text-[#F8FAFC]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Full Stack Developer building scalable, high-performance applications with modern technologies.
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
              Feel free to reach out via social media or email.
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
          <div>
            © {currentYear} Adhithyan Das. All rights reserved.
          </div>
          <div className="text-xs text-[#94A3B8]/80">
            Kerala, India • Full Stack Developer
          </div>
        </div>
      </div>
    </footer>
  );
};
