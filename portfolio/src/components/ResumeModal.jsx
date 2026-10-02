import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, Check, ExternalLink, Loader2, FileText } from 'lucide-react';
import { personalInfo, experienceData, skillsData, educationData } from '../data/portfolioData';
import { downloadResume, downloadCv } from '../utils/resumeDownload';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloadingResume, setDownloadingResume] = useState(false);
  const [downloadingCv, setDownloadingCv] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadResume = async () => {
    setDownloadingResume(true);
    try {
      await downloadResume('Archana_Kumari_Resume.pdf');
    } finally {
      setTimeout(() => setDownloadingResume(false), 1000);
    }
  };

  const handleDownloadCv = async () => {
    setDownloadingCv(true);
    try {
      await downloadCv('Archana_Kumari_CV.pdf');
    } finally {
      setTimeout(() => setDownloadingCv(false), 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0b0f1a] border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-left">
        
        {/* Modal Top Action Bar */}
        <div className="px-4 sm:px-6 py-4 bg-[#0e1424] border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
              Professional Profile — {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Download Resume (1 Page) */}
            <button
              onClick={handleDownloadResume}
              disabled={downloadingResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-75 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              title="Download 1-Page Resume PDF"
            >
              {downloadingResume ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Resume...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </>
              )}
            </button>

            {/* Download Full CV (2 Pages) */}
            <button
              onClick={handleDownloadCv}
              disabled={downloadingCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-75 text-white text-xs font-semibold shadow-md shadow-cyan-600/30 transition-all cursor-pointer"
              title="Download Full 2-Page Curriculum Vitae (CV) PDF"
            >
              {downloadingCv ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>CV...</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </>
              )}
            </button>

            <a
              href="/Archana_Kumari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open Tab</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Profile Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d18] text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-indigo-400 font-mono text-sm font-semibold mt-1">
                {personalInfo.role}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  github.com/Archana-PC
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  linkedin.com/in/archana-kumari
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((category) => (
                <div key={category.category} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-semibold text-slate-200 mb-1">{category.category}</div>
                  <div className="text-slate-400 leading-relaxed">
                    {category.items.map((i) => i.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-indigo-300 font-medium">
                    {exp.company} — {exp.location}
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-sm">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {edu.institution} • {edu.period} • {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#0e1424] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>PDF Documents: 1-Page Resume &amp; 2-Page CV Ready</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleDownloadResume}
              disabled={downloadingResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-75 text-white font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (1-Page)</span>
            </button>
            <button
              onClick={handleDownloadCv}
              disabled={downloadingCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-75 text-white font-medium transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full CV (2-Page)</span>
            </button>
            <a
              href="/Archana_Kumari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>View CV PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
