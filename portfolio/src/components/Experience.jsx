import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#070b16]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-xs font-mono mb-3">
            <span>04 // CAREER & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            A demonstrable history of scaling web platforms, reducing latency, and collaborating in high-velocity agile engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12 text-left">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080d19] border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300"></div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/90 group-hover:border-slate-700">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-0.5">
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-normal text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/60">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-950/70 text-indigo-300 text-[11px] font-mono border border-indigo-800/60">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
