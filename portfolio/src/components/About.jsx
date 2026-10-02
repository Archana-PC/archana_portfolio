import React from 'react';
import { Cpu, Gauge, ShieldCheck, HeartHandshake, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import profileImg from '../assets/archana_profile.jpg';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "System Architecture",
      desc: "Designing resilient, decoupled microservices and clean domain boundaries with clear API contracts."
    },
    {
      icon: <Gauge className="w-5 h-5 text-cyan-400" />,
      title: "Performance Optimization",
      desc: "Profiling render cycles, indexing database queries, and utilizing Redis caching for sub-100ms response times."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Reliability & Quality",
      desc: "Enforcing strict type safety with TypeScript, automated CI/CD testing pipelines, and robust error handling."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-purple-400" />,
      title: "User-First UI/UX",
      desc: "Crafting fluid, accessible web interfaces that delight end-users and simplify complex data workflows."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-xs font-mono mb-3">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Architectural Rigor with Seamless User Experiences
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Treating database queries and pixel-perfect layouts with equal passion and engineering discipline.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-purple-500 opacity-25 group-hover:opacity-40 blur-lg transition duration-500"></div>
              
              <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-slate-700/80 text-left">
                {/* Profile Photo */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-slate-900 border border-slate-800">
                  <img
                    src={profileImg}
                    alt="Archana - Software Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating pill badge */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#0a0f1d]/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Archana Kumari</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Full-Stack Software Engineer</span>
                  </div>
                </div>

                {/* Quick Info Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="text-slate-300">Bangalore, IN</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">{personalInfo.experienceYears} Years Exp.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="text-slate-300">MCA • BCA</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-300">Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a results-driven <strong className="text-white font-semibold">Full-Stack Software Engineer</strong> with 2+ years of hands-on experience designing and deploying scalable, production-grade web systems. My expertise spans both robust Python backends (<strong className="text-indigo-400 font-semibold">Django, FastAPI, DRF</strong>) and high-performance frontends (<strong className="text-cyan-400 font-semibold">React, Next.js, Redux Toolkit, Tailwind CSS</strong>).
              </p>
              <p>
                In production, I have architected and built completely from scratch comprehensive enterprise platforms for <strong className="text-white font-semibold">E-Commerce management</strong>, <strong className="text-white font-semibold">real-time Inventory Management</strong> across 1,000+ SKUs, and <strong className="text-white font-semibold">POS billing</strong>. I have also engineered high-throughput async task pipelines handling <strong className="text-white font-semibold">10,000+ daily background tasks</strong> using Celery, RabbitMQ, and Redis, and built multi-tenant SaaS architectures with strict zero cross-tenant data leakage.
              </p>
              <p>
                Beyond core full-stack systems, I have integrated resilient payment workflows (<strong className="text-indigo-400 font-semibold">PhonePe</strong>), logistics tracking APIs (<strong className="text-cyan-400 font-semibold">Ekart</strong>), and intelligent AI capabilities with the <strong className="text-amber-400 font-semibold">OpenAI API</strong>. I hold a Master of Computer Applications (MCA) from Presidency College, Bangalore, and am dedicated to building software that drives measurable business impact.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-slate-800 flex flex-col gap-2"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
