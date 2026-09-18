/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import sarvosmiLogo from './asset/sarvosmi.png';

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

        <hr className="divider-gradient" />

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
        <footer
          className="border-t py-12 mt-4"
          style={{
            background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
            borderColor: 'rgba(15,23,42,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <img
                src={sarvosmiLogo}
                alt="Sarvosmi Logo"
                className="h-8 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
                <span className="font-grotesk font-black text-sm text-emerald-600">ERX™</span>
                <span
                  className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                >
                  RMSC
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-center text-xs">
              Real-time Manufacturing Supply Chain Intelligence · Built for Industry 4.0
            </p>

            {/* Copyright */}
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} Sarvosmi. All rights reserved.
            </p>
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
