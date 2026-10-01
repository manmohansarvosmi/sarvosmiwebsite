import React from 'react';
import { Sparkles } from 'lucide-react';
import sction1Img from '../asset/sction1.png';
import rmscImg from '../asset/rmsc.png';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview-section" className="w-full bg-white transition-colors duration-300 relative pt-8 pb-10">
      {/* ── Section Header & Context Lines ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10.5px] font-black uppercase tracking-widest mb-2.5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
          <span>WHY RMSC · VITALITY ARCHITECTURE &amp; ECOSYSTEM OVERVIEW</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-grotesk text-slate-900 dark:text-white tracking-tight leading-tight">
          Why Raw Material Supply Chain (RMSC) Matters
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-2.5 max-w-3xl leading-relaxed">
          When sales, manufacturing, and shipping teams are ready, overall organizational success depends squarely on the Raw Material Supply Chain. Like vital arteries and veins, RMSC powers uninterrupted material velocity, buffer stability, and organizational vitality across the enterprise.
        </p>
      </div>

      {/* ── Section 1: Why Raw Material Chain Matters ── */}
      <div className="w-full mb-8 overflow-hidden">
        <img
          src={sction1Img}
          alt="Why Raw Material Chain Matters - Sales Team, Manufacturing, Shipping Department and RMSC Performance"
          className="w-full h-auto block object-contain"
          loading="eager"
        />
      </div>

      {/* ── High-Resolution RMSC Infographic ── */}
      <div className="w-full overflow-hidden">
        <img
          src={rmscImg}
          alt="Raw Material Supply Chain is to an organization just as Arteries and Veins are to human body"
          className="w-full h-auto block object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

