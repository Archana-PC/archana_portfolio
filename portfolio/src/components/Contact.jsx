import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MapPin, Globe, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-xs font-mono mb-3">
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Engineer Something Exceptional
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            I'm currently exploring full-time software engineering roles and consulting projects. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Email</h4>
                  <p className="text-xs text-slate-400">Feel free to email me directly</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-indigo-300 truncate mr-2">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Phone / WhatsApp</h4>
                  <p className="text-xs text-slate-400">Available for recruitment calls</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <a href={`tel:${personalInfo.phone}`} className="font-mono text-xs sm:text-sm text-emerald-300 hover:underline truncate mr-2">
                  {personalInfo.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Work Preference</h4>
                  <p className="text-xs text-cyan-400 font-medium">Available for Full-time Remote & Hybrid</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Based in <strong className="text-slate-200">Bangalore, India (IST)</strong>, comfortable working across international time zones with flexible overlap.
              </p>
            </div>

            {/* Social Network Links */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Professional Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-medium">GitHub Profile</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-950/30 border border-emerald-600/40 rounded-xl space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I'll review your note and get back to you promptly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 text-sm bg-slate-900/90 text-slate-100 rounded-xl border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-slate-900/90 text-slate-100 rounded-xl border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer Opportunity"
                      className="w-full px-4 py-2.5 text-sm bg-slate-900/90 text-slate-100 rounded-xl border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Archana, we're building a new platform and would love to chat about your background..."
                      className="w-full px-4 py-2.5 text-sm bg-slate-900/90 text-slate-100 rounded-xl border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
