import React from 'react';
import {
  ArrowUpRight,
  Radio,
  ArrowLeftRight,
  Bell,
  Cpu,
  Target,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import heroImg from '../asset/hero.png';
import logoRmsc from '../asset/logo_rmsc.png';

export const WhyErx: React.FC = () => {
  const { isDark } = useTheme();

  const erxDifferences = [
    {
      id: 'diff-1',
      step: '01',
      title: 'Real-Time Action',
      desc: 'All execution activities & data is recorded in real-time as it happens in ERX, be it related to material, machines, manpower, method (process) and measurement (quality)',
      category: 'LIVE TELEMETRY',
      icon: Radio,
      color: '#2563eb',
    },
    {
      id: 'diff-2',
      step: '02',
      title: 'Plans Vs. Actuals',
      desc: 'ERX indicates in real-time the gap between what is planned in ERP versus the actual status and that too in real-time. ERX also facilitates real-time actions so as to control any interruptions or deviations',
      category: 'DEVIATION ENGINE',
      icon: ArrowLeftRight,
      color: '#f59e0b',
    },
    {
      id: 'diff-3',
      step: '03',
      title: 'Real-Time Notifications',
      desc: 'Every stake holder gets notified in real-time, be it regarding action they have to take or if any exception to the rule happens, which has to be attended to immediately, before it becomes problem',
      category: 'EARLY WARNING',
      icon: Bell,
      color: '#ef4444',
    },
    {
      id: 'diff-4',
      step: '04',
      title: 'Reduces Manual Inefficiencies & Stress',
      desc: 'Virtually all stake holders interact digitally and in real-time, this eliminates, miscommunication, errors and accurate, complete and timely transaction data, which can be use to analyse inefficiency issues',
      category: 'LEAN AUTOMATION',
      icon: Cpu,
      color: '#0891b2',
    },
    {
      id: 'diff-5',
      step: '05',
      title: 'Enhances Focus & Reduces Stress',
      desc: 'ERX guides the stake holders to act as per time-line, eliminates ambiguity due to pre-defined processes, this helps them to focus on their work role, while virtually eliminating stress',
      category: 'EMPOWERING EVERY STAKE HOLDER',
      icon: Target,
      color: '#7c3aed',
    },
  ];

  return (
    <section id="why-erx-section" className="w-full bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      {/* ═══════════ FULL-BLEED HERO BANNER: ZERO MARGIN/PADDING FIT ═══════════ */}
      <div className="w-full">
        <img
          src={heroImg}
          alt="Why ERX - Enterprise Resource eXecution. Bridging the gap between Plans and real-time execution"
          className="w-full h-auto block"
          loading="eager"
        />
      </div>

      {/* ═══════════ HOW ERX MAKES A DIFFERENCE (5 PREMIUM CARDS) ═══════════ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 pb-4 flex flex-col gap-3">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[9px] font-black uppercase tracking-widest mb-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>ENTERPRISE VALUE PROPOSITION</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight">
              How
            </span>
            <img
              src={logoRmsc}
              alt="Sarvosmi ERX™"
              className="h-5 sm:h-6 w-auto object-contain inline-block mix-blend-multiply dark:bg-white dark:px-1.5 dark:py-0.5 dark:rounded-md shadow-xs"
            />
            <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight">
              Makes a Difference:
            </span>
          </div>

          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 max-w-xl font-medium">
            Bridging planning to physical shop floor reality with instant telemetry, automated deviation notifications and paperless execution
          </p>
        </div>

        {/* 5 Premium Cards matching Hero Section aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {erxDifferences.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.id}
                className="group relative rounded-xl p-3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden"
              >
                {/* Top colored accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: diff.color }}
                />

                <div>
                  {/* Header Row: Icon Badge + Step Number */}
                  <div className="flex items-center justify-between mb-2 pt-0.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${diff.color}15`,
                        color: diff.color,
                        border: `1.5px solid ${diff.color}35`,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      {diff.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[12px] font-black font-grotesk tracking-tight text-slate-900 dark:text-white leading-snug mb-1.5 flex items-center transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] leading-snug text-slate-600 dark:text-slate-400 font-medium">
                    {diff.desc}
                  </p>
                </div>

                {/* Footer: Category Pill + Circle Arrow */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase truncate"
                    style={{
                      backgroundColor: `${diff.color}12`,
                      color: diff.color,
                      border: `1px solid ${diff.color}30`,
                    }}
                  >
                    {diff.category}
                  </span>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{
                      backgroundColor: `${diff.color}15`,
                      color: diff.color,
                    }}
                  >
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
