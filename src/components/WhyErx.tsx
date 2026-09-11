import React from 'react';
import {
  Database,
  Calendar,
  DollarSign,
  Building2,
  Home,
  Truck,
  Video,
  ClipboardCheck,
  Bell,
  Cog,
  Users,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WhyErx: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="why-erx-section" className="w-full py-1.5 px-2 sm:px-4 transition-colors duration-300">
      <div className="w-full max-w-[1530px] mx-auto">
        {/* Main Card Wrapper - Compact Single-Screen Height Fit */}
        <div
          className={`w-full rounded-2xl p-3 sm:p-4 overflow-hidden relative shadow-xl border transition-colors ${
            isDark
              ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-slate-950/50'
              : 'bg-white/95 border-white/80 text-slate-800 shadow-sky-950/10'
          }`}
        >
          {/* Subtle Top Ambient Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-sky-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

          {/* Header Section */}
          <header className="text-center mb-2.5 relative z-10">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1 shadow-xs ${
                isDark ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100/80 border-slate-200/80 text-slate-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>BRIDGING PLANS TO REALITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <h1 className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-0.5 leading-tight ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
              Why Enterprise Resource eXecution (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
                ERX
              </span>
              )?
            </h1>

            <p className={`text-xs sm:text-sm font-medium max-w-xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Because great plans create value only when they are executed.
            </p>
          </header>

          {/* Comparison Bridge Section (3 Columns: ERP -> Bridge -> ERX) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-stretch mb-2.5 relative z-10">
            
            {/* LEFT CARD: ERP (THE BRAIN) */}
            <div
              className={`lg:col-span-4 rounded-xl p-2.5 flex flex-col justify-between border shadow-sm transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-slate-800'
                  : 'bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 border-sky-100/80'
              }`}
            >
              <div className="text-center mb-1">
                <h2 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>ERP</h2>
                <span className="inline-block text-[9px] font-extrabold text-slate-500 tracking-[0.2em] uppercase">THE BRAIN</span>
                <p className="text-[10px] font-semibold text-sky-500">Plan | Manage | Analyze</p>
              </div>

              {/* ERP Graphic: Compact Workstation Monitor */}
              <div
                className={`relative w-full h-28 rounded-lg p-1.5 flex items-center justify-end overflow-hidden border shadow-inner ${
                  isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-gradient-to-b from-slate-50/90 via-sky-50/50 to-slate-100/80 border-slate-200/80'
                }`}
              >
                {/* Desktop Monitor Frame */}
                <div className="w-48 sm:w-52 bg-slate-900 rounded p-1 shadow-xl border border-slate-700/80 relative z-10 mr-1">
                  <div className="bg-white dark:bg-slate-950 rounded p-1.5 space-y-1 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-0.5">
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[7.5px] font-bold text-slate-700 dark:text-slate-300 ml-0.5">ERP Analytics Studio</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="grid grid-cols-12 gap-1">
                      {/* Bar Graph Visual */}
                      <div className="col-span-7 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded p-1 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[6px] font-semibold text-slate-500 dark:text-slate-400">
                          <span>Target</span>
                          <span className="text-sky-600 font-bold">+18.4%</span>
                        </div>
                        <div className="h-7 flex items-end justify-between px-0.5 gap-0.5">
                          <div className="w-1.5 bg-sky-200 dark:bg-sky-900 rounded-t-xs h-2.5" />
                          <div className="w-1.5 bg-sky-300 dark:bg-sky-700 rounded-t-xs h-4" />
                          <div className="w-1.5 bg-sky-400 dark:bg-sky-600 rounded-t-xs h-3" />
                          <div className="w-1.5 bg-sky-500 rounded-t-xs h-5.5" />
                          <div className="w-1.5 bg-sky-600 rounded-t-xs h-6.5 shadow-xs" />
                        </div>
                      </div>

                      {/* Donut Chart Visual */}
                      <div className="col-span-5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded p-0.5 flex flex-col items-center justify-center">
                        <div className="relative w-6 h-6">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" fill="none" r="14" stroke={isDark ? "#334155" : "#e2e8f0"} strokeWidth="4" />
                            <circle cx="18" cy="18" fill="none" r="14" stroke="#0ea5e9" strokeDasharray="55 100" strokeWidth="4" />
                            <circle cx="18" cy="18" fill="none" r="14" stroke="#10b981" strokeDasharray="25 100" strokeDashoffset="-55" strokeWidth="4" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-[5.5px] font-bold text-slate-700 dark:text-slate-300">92%</div>
                        </div>
                        <span className="text-[5.5px] text-slate-500 font-medium">Budget</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manager Silhouette */}
                <div className="absolute left-1 -bottom-2 z-20 flex items-end">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto relative border border-white shadow-md overflow-hidden z-20">
                      <div className="absolute -top-1 right-0 w-8 h-7 bg-slate-900 rounded-full" />
                      <div className="absolute top-1 left-0.5 w-4 h-4 bg-slate-900 rounded-full" />
                    </div>
                    <div className="w-20 h-12 bg-gradient-to-br from-sky-600 to-blue-700 rounded-t-xl border-t border-l border-white shadow-lg relative -mt-1 z-10" />
                  </div>
                </div>
              </div>

              {/* ERP 3 Feature Badges */}
              <div className="grid grid-cols-3 gap-1 mt-1.5 pt-1.5 border-t border-sky-100 dark:border-slate-800 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Database className="w-3.5 h-3.5 text-sky-600" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Manages Data</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Scheduling</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Finances</span>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: THE EXECUTION BRIDGE */}
            <div className="lg:col-span-4 flex flex-col justify-between items-center text-center py-1 px-1 relative">
              <div className="px-1 mb-0.5">
                <p className={`text-xs font-semibold leading-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Bridging high-level planning<br />and real-world operations.
                </p>
              </div>

              {/* Flow Directional Labels */}
              <div className="w-full flex items-center justify-between px-2 mb-0.5 text-[10px] font-extrabold z-20">
                <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full border shadow-xs ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white/90 border-sky-100 text-slate-800'}`}>
                  <span>Plans</span>
                  <span className="text-sky-500 text-xs font-black">➔</span>
                </div>
                <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full border shadow-xs ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white/90 border-emerald-100 text-slate-800'}`}>
                  <span>Execution</span>
                  <span className="text-emerald-500 text-xs font-black">➔</span>
                </div>
              </div>

              {/* Arch Bridge Graphic with Center Badge */}
              <div className="relative w-full h-28 my-auto flex items-center justify-center">
                <svg className="absolute bottom-0 w-full h-24 overflow-visible z-10" viewBox="0 0 320 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="bridgeSpanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="35%" stopColor="#059669" />
                      <stop offset="70%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M 8 116 Q 160 8 312 116" fill="none" stroke="#0f172a" strokeWidth="16" strokeOpacity="0.08" strokeLinecap="round" />
                  <path d="M 10 114 Q 160 6 310 114" fill="none" stroke="url(#bridgeSpanGrad)" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 18 114 Q 160 14 302 114" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,4" strokeLinecap="round" />
                </svg>

                {/* Center Badge */}
                <div className="relative z-30 w-20 h-20 rounded-full bg-gradient-to-br from-[#0c4a6e] via-[#047857] to-[#065f46] text-white p-1 shadow-lg flex flex-col items-center justify-center border-2 border-white text-center transform transition-all duration-300 hover:scale-105">
                  <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-200">From</span>
                  <span className="text-base font-extrabold leading-tight text-white">Plan</span>
                  <span className="text-[7px] uppercase font-bold tracking-widest text-sky-200">to</span>
                  <span className="text-[11px] font-black tracking-wide text-white uppercase">Action</span>
                </div>
              </div>

              <div className="mt-0.5">
                <p className={`text-xs sm:text-sm font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  Turning strategy into<br />daily, physical actions.
                </p>
              </div>
            </div>

            {/* RIGHT CARD: ERX (THE HANDS AND FEET) */}
            <div
              className={`lg:col-span-4 rounded-xl p-2.5 flex flex-col justify-between border shadow-sm transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-slate-800'
                  : 'bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/30 border-emerald-100/80'
              }`}
            >
              <div className="text-center mb-1">
                <h2 className="text-xl font-black text-emerald-500 tracking-tight">ERX</h2>
                <span className="inline-block text-[9px] font-extrabold text-slate-500 tracking-[0.2em] uppercase">THE HANDS AND FEET</span>
                <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Execute | Monitor | Control</p>
              </div>

              {/* ERX Graphic: Compact Shop Floor Scoreboard HUD */}
              <div className="relative w-full h-28 rounded-lg p-1.5 overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 text-white shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1 relative z-10">
                  <div className="flex items-center space-x-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[8px] font-extrabold tracking-wider uppercase text-slate-200">SCOREBOARD</span>
                  </div>
                  <div className="text-[7.5px] font-mono text-emerald-400 bg-emerald-950/90 px-1 py-0.2 rounded border border-emerald-800/80">
                    Line 1 - Body Shop
                  </div>
                </div>

                {/* HUD Metrics Grid */}
                <div className="grid grid-cols-12 gap-1 my-auto relative z-10">
                  {/* Gauge 1: OEE */}
                  <div className="col-span-4 bg-slate-900/90 p-1 rounded border border-slate-800 text-center flex flex-col justify-center items-center">
                    <span className="text-[7px] font-bold text-slate-400 uppercase">OEE</span>
                    <div className="relative w-7 h-7 my-0.5 flex items-center justify-center">
                      <svg className="w-7 h-7 transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-emerald-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78.6, 100" strokeLinecap="round" strokeWidth="4" />
                      </svg>
                      <span className="absolute text-[7.5px] font-black text-white">78%</span>
                    </div>
                    <span className="text-[6px] text-emerald-400 font-mono">97.1%</span>
                  </div>

                  {/* Gauge 2: OUTPUT VS TARGET */}
                  <div className="col-span-4 bg-slate-900/90 p-1 rounded border border-slate-800 flex flex-col justify-between">
                    <span className="text-[7px] font-bold text-slate-400 uppercase block">OUTPUT</span>
                    <div className="text-[7px] font-mono">
                      <span className="text-emerald-400 font-bold">412</span> / 450
                    </div>
                    <div className="flex items-end space-x-0.5 h-3.5 pt-0.5">
                      <div className="w-1 bg-emerald-600 h-2 rounded-t" />
                      <div className="w-1 bg-emerald-500 h-3 rounded-t" />
                      <div className="w-1 bg-emerald-400 h-3.5 rounded-t" />
                    </div>
                  </div>

                  {/* Gauge 3: DOWNTIME ALERTS */}
                  <div className="col-span-4 bg-slate-900/90 p-1 rounded border border-slate-800 flex flex-col justify-between text-[6px]">
                    <div>
                      <span className="font-extrabold text-rose-400 uppercase flex items-center gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />
                        ALERTS
                      </span>
                      <p className="text-slate-200 font-mono leading-tight truncate">Robot #2</p>
                    </div>
                    <div className="pt-0.5 border-t border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-white bg-emerald-900/80 px-1 rounded text-[6px]">
                        0 Incidents
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Line Status Banner */}
                <div className="bg-slate-900/95 border border-slate-800 rounded px-1.5 py-0.5 flex items-center justify-between text-[7px] relative z-10">
                  <span className="px-1 py-0.2 bg-emerald-500 text-slate-950 font-black rounded text-[7px] tracking-wider">RUNNING</span>
                  <span className="text-slate-400 font-mono">Shift: <strong className="text-emerald-400">3,128</strong></span>
                </div>
              </div>

              {/* ERX 3 Feature Badges */}
              <div className="grid grid-cols-3 gap-1 mt-1.5 pt-1.5 border-t border-emerald-100 dark:border-slate-800 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-500" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Factory Floor</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Home className="w-3.5 h-3.5 text-sky-500" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Warehouse</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Supply Chain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition Section (5 Pillars Single-Row Strip) */}
          <section
            className={`rounded-xl p-2 sm:p-2.5 mb-2 border shadow-xs transition-colors ${
              isDark
                ? 'bg-slate-900/60 border-slate-800'
                : 'bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-sky-50/80 border-emerald-100/90'
            }`}
          >
            <h3 className={`text-center text-xs sm:text-sm font-black mb-1.5 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              How <span className="text-emerald-500">Sarvosmi ERX</span> Makes a Difference?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-center">
              {/* Pillar 1 */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-emerald-100/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <h4 className={`text-[10px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Real-Time Capture</h4>
                  <p className={`text-[9px] leading-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>As activities happen</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-amber-100/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <h4 className={`text-[10px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Compares Plans</h4>
                  <p className={`text-[9px] leading-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Actual vs planned</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-rose-100/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shrink-0">
                  <Bell className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <h4 className={`text-[10px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Real-Time Alerts</h4>
                  <p className={`text-[9px] leading-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Instant violation alert</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-sky-100/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shrink-0">
                  <Cog className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <h4 className={`text-[10px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Reduces Manual Work</h4>
                  <p className={`text-[9px] leading-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Negligible manual entry</p>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-purple-100/60 dark:border-slate-700/60 sm:col-span-2 md:col-span-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <h4 className={`text-[10px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Helps Focus</h4>
                  <p className={`text-[9px] leading-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Focus on core work</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};
