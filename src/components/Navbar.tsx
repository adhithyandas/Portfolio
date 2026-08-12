import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2 } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection observer fallback by scroll offset
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-[#1E293B] py-3.5 shadow-xl shadow-black/20'
          : 'bg-[#0B1120]/60 backdrop-blur-sm py-5 border-b border-[#1E293B]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="navbar-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#38BDF8]/40 flex items-center justify-center font-bold text-[#38BDF8] group-hover:border-[#38BDF8] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-300">
              {PERSONAL_INFO.initials}
            </div>
            <span className="font-semibold text-lg text-[#F8FAFC] tracking-tight group-hover:text-[#38BDF8] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#38BDF8]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]/60'
                  }`}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#38BDF8] rounded-full shadow-[0_0_8px_#38BDF8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Download CV Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenCvModal}
              id="download-cv-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium rounded-md text-[#F8FAFC] bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 cursor-pointer shadow-sm group"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 text-[#38BDF8] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="p-2 text-xs font-medium rounded-md text-[#38BDF8] bg-[#111827] border border-[#1E293B]"
              title="Download CV"
              id="mobile-cv-icon-btn"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827] focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120] border-b border-[#1E293B] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#111827] text-[#38BDF8] border-l-2 border-[#38BDF8]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-[#F8FAFC] bg-[#111827] border border-[#38BDF8]/50 hover:bg-[#38BDF8] hover:text-[#0B1120] transition-all"
            >
              <Download className="w-4 h-4 text-[#38BDF8]" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
