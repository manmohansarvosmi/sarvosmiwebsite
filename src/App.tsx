/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import footerImg from './asset/footer.png';
import sarvosmiLogo from './asset/sarvosmi.jpeg';

import { WhyErx } from './components/WhyErx';
import { QuestionsSection } from './components/QuestionsSection';
import { OverviewSection } from './components/OverviewSection';
import { ExecutionSection } from './components/ExecutionSection';
import { ConceptsSection } from './components/ConceptsSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { FeaturesBenefitsSection } from './components/FeaturesBenefitsSection';
import { ModulesArchitecture } from './components/ModulesArchitecture';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 relative ${
        isDark ? 'bg-mesh-dark text-slate-900' : 'bg-mesh-light text-slate-900'
      }`}
    >
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Why ERX Infographic Section */}
        <WhyErx />

        {/* Questions Section */}
        <QuestionsSection />

        <hr className="divider-gradient" />

        {/* Overview Section */}
        <OverviewSection />

        <hr className="divider-gradient" />

        {/* End-to-End Execution Section */}
        <ExecutionSection />

        <hr className="divider-gradient" />

        {/* Practical Concepts Section */}
        <ConceptsSection />

        <hr className="divider-gradient" />

        {/* Key Objectives Section */}
        <ObjectivesSection />

        <hr className="divider-gradient" />

        {/* Features & Benefits Section */}
        <FeaturesBenefitsSection />

        <hr className="divider-gradient" />

        {/* Modules Mindmap Flow Architecture */}
        <ModulesArchitecture />

        {/* Footer */}
        <footer id="footer-section" className="w-full mt-4 relative overflow-hidden">
          {/* Background image */}
          <img
            src={footerImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto block"
            loading="lazy"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-16 lg:px-24 py-6">

            {/* Top Row: Logo + Nav Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

              {/* Brand */}
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
                <img src={sarvosmiLogo} alt="Sarvosmi" className="h-8 w-auto object-contain object-left mix-blend-multiply" />
                <p className="text-[10px] text-slate-500 font-medium leading-snug max-w-[180px]">
                  Real-time Manufacturing Supply Chain Intelligence — Built for Industry 4.0
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">ERX™ RMSC Live</span>
                </div>
              </div>

              {/* Product */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Product</p>
                {['ERX?', 'Why RMSC', 'The Approach', 'Modules'].map(l => (
                  <a key={l} href="#" className="text-[11px] text-slate-600 hover:text-emerald-600 font-medium transition-colors">{l}</a>
                ))}
              </div>

              {/* Services */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Services</p>
                {['Questions', 'Execution', 'Concepts', 'Objectives'].map(l => (
                  <a key={l} href="#" className="text-[11px] text-slate-600 hover:text-emerald-600 font-medium transition-colors">{l}</a>
                ))}
              </div>

              {/* Connect */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Connect</p>
                {['Contact Us', 'Get a Demo', 'Partnership', 'Careers'].map(l => (
                  <a key={l} href="#" className="text-[11px] text-slate-600 hover:text-emerald-600 font-medium transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Bottom Row: Divider + Copyright */}
            <div className="border-t border-slate-300/60 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-[10px] text-slate-400 font-medium">
                © {new Date().getFullYear()} Sarvosmi Consulting. All rights reserved.
              </p>
              <p className="text-[10px] text-slate-400 font-medium">
                ERX™ RMSC · Real-Time Orchestration Core · Industry 4.0
              </p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
