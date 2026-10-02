import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ResumeModal } from '../components/ResumeModal';
import { personalInfo } from '../data/portfolioData';

export const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.title = `${personalInfo.name} — Full-Stack Software Engineer`;
  }, []);

  return (
    <div className="min-h-screen bg-[#080c17] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};