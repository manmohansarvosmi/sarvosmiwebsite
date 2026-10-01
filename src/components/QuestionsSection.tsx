import React from 'react';
import { HelpCircle } from 'lucide-react';
import question1Img from '../asset/question1.png';
import question2Img from '../asset/question2.png';

export const QuestionsSection: React.FC = () => {
  return (
    <section id="questions-section" className="w-full bg-white pt-8 pb-12 transition-colors duration-300 relative">
      {/* ── Section Header & Context Lines ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10.5px] font-black uppercase tracking-wider mb-2.5 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>REAL QUESTIONS · ROLE-BASED OPERATIONAL CHALLENGES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-grotesk text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
          Only questions, No definite answers!
        </h2>

        {/* Wide Full-Width Styled Content Box */}
        <div className="w-full max-w-6xl flex flex-col items-center gap-3">
          <p className="text-xs sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-5xl">
            Every tier for manufacturing supply chain - right from PPC to material demand generation to, procurement to material receipts to unloading to, inward inspection or QC to, storing to picking &amp; delivering material to manufacturing points to final distribution
          </p>

          <div className="inline-flex items-center justify-center flex-wrap gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-50/80 via-blue-50/60 to-slate-50/80 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-emerald-500/25 dark:border-slate-800 shadow-xs text-xs sm:text-[13.5px] font-semibold text-slate-800 dark:text-slate-200">
            <span className="text-red-600 font-black">Sarvos</span>
            <span className="text-emerald-600 font-black -ml-0.5">mi</span>
            <sup className="text-[10px] font-black text-emerald-600 mr-0.5">™</sup>
            <span className="text-emerald-600 font-black italic mr-1">ERX</span>
            <span>bridges the gaps with real-time control and also eliminating delays, bottlenecks, manual data entry errors</span>
          </div>
        </div>
      </div>

      {/* ── Question 1: Core Operational Challenges ── */}
      <div className="w-full mb-6">
        <div className="w-full overflow-hidden">
          <img
            src={question1Img}
            alt="Sarvosmi ERX Question 1 - Real Questions, Real Challenges across production, dock, QC, store, and logistics"
            className="w-full h-auto block"
            loading="eager"
          />
        </div>
      </div>

      {/* ── Question 2: Role-Based Supply Chain Pain Points (Ek ke baad ek) ── */}
      <div className="w-full mt-2">
        <div className="w-full overflow-hidden">
          <img
            src={question2Img}
            alt="Sarvosmi ERX Question 2 - Stakeholder Roles & Their Pain Points: PPC, Buyer, Supplier, Security, Dock, QC, Store, Production, Assembly, Management, Sarvosmi Consulting"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
