import React from 'react';
import {
  RefreshCw,
  PieChart,
  Target,
  MonitorCheck,
  Handshake,
  Users2,
  Layers,
  Clock,
  Key,
  Trash2,
  Building,
  CheckCircle,
  Lightbulb,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import sarvosmiLogo from '../asset/sarvosmi.png';

export const ObjectivesSection: React.FC = () => {
  const { isDark } = useTheme();

  const objectives = [
    {
      num: '01',
      title: 'Uninterrupted Material Flow',
      subText: 'Seamless supply of all critical & standard raw materials',
      icon: RefreshCw,
      color: '#3b82f6',
      category: 'SUPPLY CONTINUITY',
    },
    {
      num: '02',
      title: 'Optimize Inventory & Losses',
      subText: 'Mitigate leakage, damages, aging & obsolescence risks',
      icon: PieChart,
      color: '#ef4444',
      category: 'CAPITAL EFFICIENCY',
    },
    {
      num: '03',
      title: 'Physical & Logical Exactness',
      subText: '100% real-time balance between physical bins & ERP logs',
      icon: Target,
      color: '#10b981',
      category: 'INVENTORY ACCURACY',
    },
    {
      num: '04',
      title: 'Real-Time Logistics Monitoring',
      subText: 'Live inbound status, transporter tracking & dock alerts',
      icon: MonitorCheck,
      color: '#06b6d4',
      category: 'LIVE TELEMETRY',
    },
    {
      num: '05',
      title: 'Supplier Collaboration',
      subText: 'Mutually beneficial transparency & automated ASN sync',
      icon: Handshake,
      color: '#f97316',
      category: 'VENDOR PARTNERSHIP',
    },
    {
      num: '06',
      title: 'Stakeholder Integration',
      subText: 'Unified interaction layer with role-based security access',
      icon: Users2,
      color: '#8b5cf6',
      category: 'CONNECTED ECOSYSTEM',
    },
    {
      num: '07',
      title: 'Standardize Lean Processes',
      subText: 'Rationalize workflows to eliminate shop-floor waste',
      icon: Layers,
      color: '#6366f1',
      category: 'LEAN MANUFACTURING',
    },
    {
      num: '08',
      title: 'Just-in-Time (JIT) Inventory',
      subText: 'World Class Manufacturing (WCM) on-demand replenishment',
      icon: Clock,
      color: '#14b8a6',
      category: 'JIT DISPATCH',
    },
    {
      num: '09',
      title: 'Permission & Security Access',
      subText: 'Time-bound encrypted access control for internal & external users',
      icon: Key,
      color: '#059669',
      category: 'ENTERPRISE SECURITY',
    },
    {
      num: '10',
      title: 'Zero Waste & Obsolescence',
      subText: 'Avoid duplication, aging inventory, and material scrapping',
      icon: Trash2,
      color: '#a855f7',
      category: 'WASTE ELIMINATION',
    },
    {
      num: '11',
      title: 'Partner Performance Metrics',
      subText: 'Real-time scorecard for suppliers, transporters & operators',
      icon: Building,
      color: '#ec4899',
      category: 'SLA GOVERNANCE',
    },
    {
      num: '12',
      title: 'Complete & Accurate Data',
      subText: 'Zero manual tampering with targeted execution productivity',
      icon: CheckCircle,
      color: '#2563eb',
      category: 'DATA GOVERNANCE',
    },
  ];

  return (
    <section id="objectives-section" className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">

          {/* ═══════════ HEADER ═══════════ */}
          <div
            className={`px-4 sm:px-8 py-5 border-b flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white/80 border-slate-200/80 backdrop-blur-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                <img
                  src={sarvosmiLogo}
                  alt="Sarvosmi Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2 border-l border-slate-300 dark:border-slate-700">
                  Consulting
                </span>
              </div>
              <p className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Key Objectives of
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                <span className="text-red-600 italic">Sarvosmi</span> <span className="text-emerald-600">ERX™ RMSC</span>{' '}
                <span className="text-slate-800 dark:text-slate-100">Raw Material Supply Chain</span>
              </h2>
            </div>

            {/* Subtitle Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                Smarter Supply Chain
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                Higher Efficiency
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                Sustainable Growth
              </span>
            </div>

            {/* Right Tagline */}
            <div className="text-center md:text-right hidden sm:block">
              <p className="text-xs font-black italic tracking-wide text-slate-700 dark:text-slate-300 font-serif">
                Smarter Materials
              </p>
              <p className="text-sm font-black italic text-emerald-600 dark:text-emerald-400 font-serif">
                Stronger Tomorrow
              </p>
            </div>
          </div>

          {/* ═══════════ 12 OBJECTIVES MODULE CARDS (DESKERA STYLE) ═══════════ */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.num}
                  className={`rounded-xl border p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between cursor-pointer ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/80 hover:border-slate-500'
                      : 'bg-white border-slate-200/90 hover:border-blue-300 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon Box + Number Tag */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: isDark ? `${obj.color}22` : `${obj.color}15`,
                          color: obj.color,
                          border: `1.5px solid ${obj.color}${isDark ? '40' : '30'}`
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className="px-2 py-0.5 rounded-md text-[10px] font-black font-mono shadow-xs"
                        style={{
                          backgroundColor: isDark ? `${obj.color}25` : `${obj.color}15`,
                          color: obj.color
                        }}
                      >
                        {obj.num}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight">
                      {obj.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal font-medium">
                      {obj.subText}
                    </p>
                  </div>

                  {/* Card Bottom: Category + Arrow */}
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span
                      className="text-[9px] font-semibold tracking-wide uppercase"
                      style={{ color: obj.color }}
                    >
                      {obj.category}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ═══════════ BOTTOM LIGHTBULB BANNER ═══════════ */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              
              {/* Left Lightbulb */}
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Lightbulb className="w-5 h-5 animate-pulse text-emerald-500" />
              </div>

              {/* Center Text */}
              <div className="text-center md:text-left flex-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <span className="text-red-600 italic font-black">Sarvosmi ERX</span><sup className="text-[10px] font-bold">TM</sup>{' '}
                  <span className="text-emerald-600 font-bold">RMSC</span> the only one platform for a{' '}
                  <span className="font-extrabold text-blue-600 dark:text-blue-400">“real-time”</span>,{' '}
                  <span className="font-extrabold text-purple-600 dark:text-purple-400">“secure”</span> and{' '}
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400">“lean”</span> raw material supply chain
                </p>
              </div>

              {/* Right Growth Graphic */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-end gap-1 h-7">
                  <div className="w-2 h-2.5 bg-blue-500 rounded-sm" />
                  <div className="w-2 h-4 bg-purple-500 rounded-sm" />
                  <div className="w-2 h-5.5 bg-emerald-500 rounded-sm" />
                  <div className="w-2 h-7 bg-emerald-600 rounded-sm" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black italic text-emerald-600 dark:text-emerald-400">Ideas to Growth</p>
                </div>
              </div>

            </div>

            {/* Footer Tag */}
            <div className="mt-4 pt-2 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                PEOPLE &nbsp;|&nbsp; PROCESS &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
              </span>
            </div>
          </div>
      </div>
    </section>
  );
};
