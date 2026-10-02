import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight, Sparkles, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeDownload';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080c17]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-100 font-bold text-lg tracking-tight hover:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px] flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[7px] flex items-center justify-center font-mono font-bold text-indigo-400 text-sm">
                A/
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-base sm:text-lg leading-tight">
                  {personalInfo.name}
                  <span className="text-indigo-400 font-mono ml-0.5">.dev</span>
                </span>
                <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Roles
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:block">
                Full-Stack Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => downloadResume()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Download Archana Kumari Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Preview Interactive Resume"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/50 rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => downloadResume()}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white bg-indigo-600 rounded-md"
              title="Download Resume"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 bg-[#0d1424] border border-slate-800 rounded-xl shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>View Interactive Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 rounded-lg border border-slate-800"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
