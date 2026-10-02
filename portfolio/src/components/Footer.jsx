import React from 'react';
import { ArrowUp, Heart, Terminal, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeDownload';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[7px] flex items-center justify-center font-mono font-bold text-indigo-400 text-xs">
                A/
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm">{personalInfo.name}</span>
              <span className="text-indigo-400 font-mono ml-0.5 text-xs">.dev</span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Full-Stack Software Engineer • Python & Modern Web Systems
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={() => downloadResume()}
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React 19 • Tailwind CSS • Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
