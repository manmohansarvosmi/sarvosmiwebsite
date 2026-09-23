import React from 'react';
import { HelpCircle } from 'lucide-react';
import question1Img from '../asset/question1.png';
import question2Img from '../asset/question2.png';

export const QuestionsSection: React.FC = () => {
  return (
    <section id="questions-section" className="w-full bg-white pt-8 pb-12 transition-colors duration-300 relative">
      {/* ── Section Header & Context Lines ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10.5px] font-black uppercase tracking-wider mb-2.5 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>REAL QUESTIONS · ROLE-BASED OPERATIONAL CHALLENGES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-grotesk text-slate-900 dark:text-white tracking-tight leading-tight">
          Operational Inquiries &amp; Role Pain Points
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-2.5 max-w-3xl leading-relaxed">
          Every tier of the manufacturing supply chain—from PPC, Procurement, and Suppliers to Dock Unloading, Inward QC, and Assembly Lines—encounters critical operational bottlenecks. Sarvosmi ERX™ bridges communication gaps with real-time digital accountability, eliminating delays and human errors.
        </p>
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
