import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Check, X, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Import images directly for reliable bundler resolution
import brahmoImg from '../assets/projects/brahmo.jpg';
import videostreamImg from '../assets/projects/videostream.jpg';
import soundifyImg from '../assets/projects/soundify.jpg';
import docsenseImg from '../assets/projects/docsense.jpg';
import buildblogImg from '../assets/projects/buildblog.jpg';
import expensetrackerImg from '../assets/projects/expensetracker.jpg';
import nexusflowImg from '../assets/projects/nexusflow.jpg';
import devpulseImg from '../assets/projects/devpulse.jpg';
import auracommerceImg from '../assets/projects/auracommerce.jpg';
import cloudmetricsImg from '../assets/projects/cloudmetrics.jpg';

const imageMap = {
  brahmo: brahmoImg,
  videostream: videostreamImg,
  soundify: soundifyImg,
  docsense: docsenseImg,
  cloudcommerce: auracommerceImg,
  multitenantsaas: nexusflowImg,
  buildblog: buildblogImg,
  expensetracker: expensetrackerImg,
  nexusflow: nexusflowImg,
  devpulse: devpulseImg,
  auracommerce: auracommerceImg,
  cloudmetrics: cloudmetricsImg
};

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Backend / Cloud', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-xs font-mono mb-3">
              <span>03 // FEATURED ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-3">
              Production-grade applications architected for scalability, low latency, and robust fault-tolerance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group hover:border-slate-700 text-left transition-all duration-300"
            >
              {/* Project Image Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={imageMap[project.id] || project.image || brahmoImg}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-80"></div>
                
                {/* Metric Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 backdrop-blur-md border border-indigo-700/60 text-indigo-300 font-mono text-[11px] font-semibold">
                    ⚡ {project.metric}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-300 text-[10px] font-mono">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Architecture Deep Dive &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0d1424] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Architectural Breakdown</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Engineering Highlights & Solutions
              </h4>
              <div className="space-y-2.5">
                {selectedProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack Components
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
