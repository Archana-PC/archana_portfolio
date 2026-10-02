import React from 'react';
import { ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#080c17] text-slate-100 flex items-center justify-center p-4">
      <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-800 text-center max-w-lg w-full">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="font-mono text-xs text-indigo-400 font-semibold mb-2">
          HTTP_STATUS_CODE // 404
        </div>

        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">
          Route Not Resolved
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The endpoint you are attempting to access does not exist on this server cluster or has been migrated.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </a>
      </div>
    </div>
  );
};