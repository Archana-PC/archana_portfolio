import React from 'react';
import { Layers, ShieldCheck, Zap, Server } from 'lucide-react';
import { stats } from '../data/portfolioData';

export const StatsBar = () => {
  const icons = [
    <Layers className="w-5 h-5 text-indigo-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
    <Server className="w-5 h-5 text-cyan-400" />
  ];

  return (
    <section className="relative z-10 py-6 border-y border-slate-800/80 bg-[#0b101e]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-start gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 group-hover:border-indigo-500/40 transition-colors shrink-0">
                {icons[idx]}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
