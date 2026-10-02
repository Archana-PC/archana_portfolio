import React, { useState } from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Mail, Sparkles, CheckCircle2, Play, Copy, Check, Download, FileText, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeDownload';

export const Hero = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState('engineer');
  const [testOutput, setTestOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await downloadResume('Archana_Kumari_Resume.pdf');
    } finally {
      setTimeout(() => setIsDownloading(false), 1200);
    }
  };

  const handleRunTests = () => {
    setIsRunning(true);
    setTestOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setTestOutput([
        { text: 'PASS  src/systems/orchestrator.test.ts (1.12s)', status: 'pass' },
        { text: 'PASS  src/api/graphql-resolver.test.ts (0.84s)', status: 'pass' },
        { text: '✓ 48 tests passed | 0 failing | 100% coverage', status: 'summary' },
        { text: '⚡ P99 Latency: 32ms | Memory: Stable (38MB)', status: 'perf' }
      ]);
    }, 700);
  };

  const codeSnippets = {
    engineer: `// Archana Kumari - Full-Stack Software Engineer Profile
export const engineer: DeveloperProfile = {
  name: "Archana Kumari",
  title: "Full-Stack Software Engineer",
  specialization: [
    "Python, Django & FastAPI Backend Systems",
    "React & Next.js Modern Frontends",
    "Distributed Async Pipelines (Celery, RabbitMQ, Redis)"
  ],
  coreStack: {
    backend: ["Python", "Django", "FastAPI", "DRF", "Celery", "RabbitMQ"],
    frontend: ["React", "Next.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    persistence: ["PostgreSQL", "MySQL", "Redis", "Firebase", "MongoDB"],
    devops_ai: ["Docker", "AWS", "Nginx", "CI/CD", "OpenAI API"]
  },
  mission: "Architecting high-throughput, business-critical systems with clean code and zero downtime."
};`,
    architecture: `{
  "productionTopology": {
    "frontend": "Next.js + React (RTK Query Caching)",
    "backendServices": "Django REST Framework + FastAPI",
    "asyncQueue": "Celery workers + RabbitMQ message broker",
    "caching": "Redis in-memory cache (40% latency reduction)",
    "database": "PostgreSQL with connection pooling",
    "integrations": ["PhonePe Gateway", "Ekart Logistics API", "OpenAI API"],
    "metrics": {
      "dailyAsyncTasks": "10,000+",
      "activeUsers": "5,000+",
      "stockSKUs": "1,000+",
      "dataLoss": "0%"
    }
  }
}`,
    vitals: `#!/bin/bash
# Production System Health & Async Vitals
echo "=== Cloud Software Solution Health Check ==="
echo "[OK] Celery Workers Active: 10,000+ tasks/day"
echo "[OK] Redis Cache Hit Ratio: 98.4%"
echo "[OK] Multi-Tenant SaaS Isolation: Verified (0% Leakage)"
echo "[OK] PhonePe & Ekart APIs: Resilient & Healthy"
echo "STATUS: SCALED_AND_OPERATIONAL"`
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono font-medium mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Stack Software Engineer · Python & JavaScript Ecosystems</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
              <span className="text-emerald-400 font-semibold">Available for Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Archana Kumari <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
                Full-Stack Software Engineer
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="text-white font-semibold">Archana Kumari</strong>. A Full-Stack Software Engineer with 2+ years of experience building scalable, production-grade web platforms using <strong className="text-indigo-400 font-semibold">Django, FastAPI, React, Next.js</strong>, and distributed async backends (<strong className="text-cyan-400 font-semibold">Celery, RabbitMQ, Redis</strong>).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                title="Download Archana Kumari Resume PDF"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                title="Preview Resume"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 rounded-xl transition-all cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                <span className="text-xs font-mono">{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Proof & Quick Tech Links */}
            <div className="flex items-center gap-4 text-slate-400 border-t border-slate-800/80 pt-6 w-full max-w-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="ml-auto text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Bangalore, IN (Open to Remote)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Console / Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/40 border border-slate-800 text-left">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">archana@engine: ~</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('engineer')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'engineer'
                        ? 'bg-indigo-900/60 text-indigo-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-indigo-900/60 text-indigo-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System.json
                  </button>
                  <button
                    onClick={() => setActiveTab('vitals')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'vitals'
                        ? 'bg-indigo-900/60 text-indigo-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vitals.sh
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 bg-[#080d19] font-mono text-xs text-slate-300 overflow-x-auto min-h-[260px] max-h-[300px]">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Interactive Runner Footer */}
              <div className="px-4 py-3 bg-[#0c1220] border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunTests}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-emerald-400" />
                    <span>{isRunning ? 'Running suite...' : 'Run Test Suite'}</span>
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">Vitest v2.1 • TypeScript</span>
                </div>

                <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Interactive REPL</span>
                </div>
              </div>

              {/* Test Output Box (appears upon click) */}
              {testOutput && (
                <div className="p-3 bg-[#050811] border-t border-slate-800/80 font-mono text-xs space-y-1 animate-fade-in">
                  {testOutput.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.status === 'pass'
                          ? 'text-emerald-400'
                          : line.status === 'summary'
                          ? 'text-sky-300 font-bold'
                          : 'text-amber-300'
                      }
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
