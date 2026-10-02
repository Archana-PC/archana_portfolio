import React, { useState } from 'react';
import { Code2, Server, Database, Wrench, CheckCircle, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend & APIs', 'Databases & Cloud', 'DevOps & Tools'];

  const categoryIcons = {
    'Frontend': <Code2 className="w-4 h-4 text-indigo-400" />,
    'Backend & APIs': <Server className="w-4 h-4 text-cyan-400" />,
    'Databases & Cloud': <Database className="w-4 h-4 text-emerald-400" />,
    'DevOps & Tools': <Wrench className="w-4 h-4 text-amber-400" />
  };

  const filteredData = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((group) => group.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#070b15]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-xs font-mono mb-3">
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Production Technologies
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            A comprehensive, battle-tested toolset honed through building and deploying production-grade systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredData.map((group) => (
            <div key={group.category} className="text-left">
              {selectedCategory === 'All' && (
                <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-800">
                  {categoryIcons[group.category] || <Layers className="w-4 h-4 text-indigo-400" />}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 ml-auto">
                    {group.items.length} Technologies
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 rounded-xl border border-slate-800/90 flex flex-col justify-between group hover:border-indigo-500/40"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-slate-100 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : skill.level === 'Advanced'
                              ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                              : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Production Ready</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
