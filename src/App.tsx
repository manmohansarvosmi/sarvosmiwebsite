/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { WhyErx } from './components/WhyErx';
import { QuestionsSection } from './components/QuestionsSection';
import { OverviewSection } from './components/OverviewSection';
import { ModulesArchitecture } from './components/ModulesArchitecture';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 relative ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#faf7f5] text-slate-900'
      }`}
    >
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content View */}
      <main>
        {/* Why ERX Infographic Section */}
        <WhyErx />

        {/* Questions Section (Question1 & Question2) */}
        <QuestionsSection />

        {/* Overview Section (3 infographic panels) */}
        <OverviewSection />

        {/* Modules Mindmap Flow Architecture */}
        <ModulesArchitecture />
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
