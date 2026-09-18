import React, { useState } from 'react';
import {
  Database,
  Calendar,
  DollarSign,
  Building2,
  Truck,
  Warehouse,
  ClipboardCheck,
  Bell,
  Cpu,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowLeftRight,
  ArrowUpRight,
  Activity,
  Layers,
  Sparkles,
  Scan,
  Radio,
  Factory,
  ShieldCheck,
  RefreshCw,
  Clock,
  TrendingUp,
  AlertTriangle,
  FileSpreadsheet,
  CheckSquare,
  QrCode,
  Gauge,
  Sliders,
  Flame
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import bridgeImg from '../asset/bridge.png';

export const WhyErx: React.FC = () => {
  const { isDark } = useTheme();
  const [activeSyncTab, setActiveSyncTab] = useState<'all' | 'downstream' | 'upstream'>('all');

  const erxDifferences = [
    {
      id: 'diff-1',
      title: 'Real-Time Capture',
      desc: 'All activities recorded live as they happen on docks, racks & production lines via wearable scanners.',
      category: 'LIVE TELEMETRY',
      icon: Radio,
      color: '#3b82f6',
    },
    {
      id: 'diff-2',
      title: 'Compares Plans',
      desc: 'Instant delta verification between ERP planned orders vs actual physical floor stock and bin status.',
      category: 'DEVIATION ENGINE',
      icon: ClipboardCheck,
      color: '#f59e0b',
    },
    {
      id: 'diff-3',
      title: 'Real-Time Alerts',
      desc: 'Automated shortage triggers and bottleneck alerts sent immediately to buyers, planners & supervisors.',
      category: 'EARLY WARNING',
      icon: Bell,
      color: '#ef4444',
    },
    {
      id: 'diff-4',
      title: 'Reduces Manual Work',
      desc: 'Zero manual data entry, no paper slips, no delayed registers or error-prone spreadsheet logs.',
      category: 'LEAN AUTOMATION',
      icon: Cpu,
      color: '#06b6d4',
    },
    {
      id: 'diff-5',
      title: 'Helps Teams Focus',
      desc: 'Hands-free wearable scanners let dock and store operators focus on rapid material movement.',
      category: 'OPERATOR EMPOWERMENT',
      icon: Target,
      color: '#8b5cf6',
    },
  ];

  const downstreamItems = [
    'Material Demands (MRP Net Requirements)',
    'Shift Production Work Orders',
    'Procurement POs & Vendor Allocations',
    'Bill of Materials (BOM) Specifications',
  ];

  const upstreamItems = [
    '1-Scan Gate Inward & Unloading Dock Telemetry',
    'Real-Time QC Inspection Pass / Fail Status',
    'Physical Bin & Rack Put-Away Verification',
    'Line Feeding Consumption & 15-Min Defect Alerts',
  ];

  return (
    <section id="why-erx-section" className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">

          {/* ═══════════ HEADER ═══════════ */}
          <header className="text-center mb-6 relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-[10px] font-black tracking-[0.2em] uppercase mb-2 shadow-xs ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                  : 'bg-slate-100/80 border-slate-200 text-slate-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>BRIDGING PLANS TO PHYSICAL REALITY</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
              Why Enterprise Resource eXecution (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                ERX
              </span>
              )?
            </h1>

            <p className="text-xs sm:text-sm font-semibold max-w-3xl mx-auto mt-1.5 text-slate-600 dark:text-slate-300">
              Because great plans create enterprise value only when they are executed in real-time on the physical shop floor.
            </p>
          </header>

          {/* ═══════════ 3-COLUMN ARCHITECTURAL COMMAND CENTER ═══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-6 relative z-10">
            
            {/* ── LEFT COLUMN: ERP (THE BRAIN) ── */}
            <div
              className={`lg:col-span-4 rounded-xl p-4 sm:p-5 flex flex-col justify-between border shadow-sm transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-slate-800/80 border-blue-500/30 shadow-blue-950/20'
                  : 'bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-blue-200/90 shadow-[0_2px_12px_rgba(59,130,246,0.08)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">ERP</h2>
                      <span className="text-[9.5px] font-extrabold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                        THE BRAIN • Plan | Manage | Analyze
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                    Static Planning
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Calculates requirements, generates master production schedules, and manages corporate financial governance.
                </p>

                {/* ERP Analytics Studio Mockup Screen */}
                <div className="w-full rounded-lg bg-slate-950 text-white p-3.5 border border-slate-800 shadow-inner mb-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold text-slate-300 ml-1.5 flex items-center gap-1">
                        <Sliders className="w-3 h-3 text-blue-400" /> ERP Production Studio
                      </span>
                    </div>
                    <span className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm bg-blue-900/50 text-blue-300 border border-blue-700/50">
                      STATUS: PLANNED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-md bg-slate-900 border border-slate-800">
                      <span className="text-[8.5px] text-slate-400 uppercase tracking-wider font-semibold block">MONTHLY PLAN</span>
                      <strong className="text-sm font-black text-blue-400 block">450 Units</strong>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div className="w-[82%] h-full bg-blue-500 rounded-full" />
                      </div>
                    </div>
                    <div className="p-2 rounded-md bg-slate-900 border border-slate-800">
                      <span className="text-[8.5px] text-slate-400 uppercase tracking-wider font-semibold block">TARGET EFFICIENCY</span>
                      <strong className="text-sm font-black text-emerald-400 block">+18.4%</strong>
                      <span className="text-[8px] text-slate-500 mt-1 block">Scheduled on Paper</span>
                    </div>
                  </div>
                </div>

                {/* 3 ERP Feature Pods */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-blue-400 transition-colors">
                    <Database className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">Master Data</strong>
                    <span className="text-[8.5px] text-slate-500 block">BOM &amp; MRP</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-indigo-400 transition-colors">
                    <Calendar className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">Scheduling</strong>
                    <span className="text-[8.5px] text-slate-500 block">Shift Orders</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-amber-400 transition-colors">
                    <DollarSign className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">Finances</strong>
                    <span className="text-[8.5px] text-slate-500 block">Costing &amp; GL</span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2.5 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                <span>Enterprise Strategy &amp; Governance</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
                  Demand Out <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* ── CENTER COLUMN: 3D BRIDGE (THE CONNECTION) ── */}
            <div
              className={`lg:col-span-4 rounded-xl p-3 sm:p-4 flex flex-col justify-between border shadow-sm transition-all duration-300 relative overflow-hidden text-center ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700/80'
                  : 'bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ArrowLeftRight className="w-4 h-4 text-indigo-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                    REAL-TIME BI-DIRECTIONAL BRIDGE
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug mb-2">
                  Bridging high-level planning and physical shop-floor reality.
                </h3>

                {/* 3D Bridge Image Container with Ambient Glow */}
                <div className="relative my-2 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/50 p-1 group">
                  <img
                    src={bridgeImg}
                    alt="Real-Time Bi-Directional Bridge - Bridging high-level planning and physical shop-floor reality"
                    className="w-full h-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-white text-[9.5px] font-black tracking-wide border border-slate-800 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    FROM <span className="text-blue-400">PLAN</span> TO <span className="text-emerald-400">ACTION</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">
                    Turning static ERP strategy into <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">daily, physical actions</span>.
                  </p>
                </div>
              </div>

              {/* Sync Stream Selector */}
              <div className="pt-2.5 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase">Live Telemetry Flow:</span>
                <span className="px-2 py-0.5 rounded-md text-[8.5px] font-black uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Sub-Second Sync
                </span>
              </div>
            </div>

            {/* ── RIGHT COLUMN: ERX (THE HANDS AND FEET) ── */}
            <div
              className={`lg:col-span-4 rounded-xl p-4 sm:p-5 flex flex-col justify-between border shadow-sm transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-slate-800/80 border-emerald-500/30 shadow-emerald-950/20'
                  : 'bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-emerald-200/90 shadow-[0_2px_12px_rgba(16,185,129,0.08)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Scan className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">ERX</h2>
                      <span className="text-[9.5px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                        THE HANDS &amp; FEET • Execute | Monitor | Control
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    Live Floor Action
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Powers physical ground execution — barcode scanning, dock inwards, binning, line feeding &amp; defect swaps.
                </p>

                {/* ERX Shopfloor Scoreboard Mockup Screen */}
                <div className="w-full rounded-lg bg-slate-950 text-white p-3.5 border border-slate-800 shadow-inner mb-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-300 ml-1 flex items-center gap-1">
                        <Gauge className="w-3 h-3 text-emerald-400" /> SCOREBOARD: LINE 1 - BODY SHOP
                      </span>
                    </div>
                    <span className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                      LIVE RUNNING
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-md bg-slate-900 border border-slate-800">
                      <span className="text-[8.5px] text-slate-400 uppercase tracking-wider font-semibold block">REAL OUTPUT</span>
                      <strong className="text-sm font-black text-emerald-400 block">412 / 450 Units</strong>
                      <span className="text-[8px] text-emerald-300 mt-1 block">91.5% Target Achieved</span>
                    </div>
                    <div className="p-2 rounded-md bg-slate-900 border border-slate-800">
                      <span className="text-[8.5px] text-slate-400 uppercase tracking-wider font-semibold block">RING SCANNER FEED</span>
                      <strong className="text-sm font-black text-cyan-400 block">0 Defects</strong>
                      <span className="text-[8px] text-slate-400 mt-1 block">Auto-QC Verified</span>
                    </div>
                  </div>
                </div>

                {/* 3 ERX Feature Pods */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-emerald-400 transition-colors">
                    <Factory className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">Factory Floor</strong>
                    <span className="text-[8.5px] text-slate-500 block">Line Feeding</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-teal-400 transition-colors">
                    <Warehouse className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">RM Store</strong>
                    <span className="text-[8.5px] text-slate-500 block">Put &amp; Pick Bins</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 text-center hover:border-green-400 transition-colors">
                    <Truck className="w-4 h-4 text-green-600 mx-auto mb-1" />
                    <strong className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">Supply Flow</strong>
                    <span className="text-[8.5px] text-slate-500 block">Dock &amp; 1-Scan ASN</span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2.5 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" /> Telemetry In
                </span>
                <span>100% Physical Execution Sync</span>
              </div>
            </div>

          </div>

          {/* ═══════════ BI-DIRECTIONAL TELEMETRY STREAM VISUALIZER ═══════════ */}
          <div
            className={`rounded-xl p-4 mb-6 border transition-all duration-300 ${
              isDark
                ? 'bg-slate-950/60 border-slate-800'
                : 'bg-gradient-to-r from-blue-50/70 via-slate-50 to-emerald-50/70 border-slate-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Bi-Directional Telemetry Stream: What Flows Across The Bridge?
                  </h3>
                  <span className="text-[10px] text-slate-500">Continuous sync preventing plan drift and floor stockouts</span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] font-bold">
                <button
                  onClick={() => setActiveSyncTab('all')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeSyncTab === 'all'
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  All Streams
                </button>
                <button
                  onClick={() => setActiveSyncTab('downstream')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeSyncTab === 'downstream'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
                  }`}
                >
                  ERP ➔ ERX (Demands)
                </button>
                <button
                  onClick={() => setActiveSyncTab('upstream')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeSyncTab === 'upstream'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
                  }`}
                >
                  ERX ➔ ERP (Telemetry)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Downstream stream */}
              {(activeSyncTab === 'all' || activeSyncTab === 'downstream') && (
                <div className="p-3 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" /> Downstream (ERP to Floor)
                    </span>
                    <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-blue-300">Strategy &amp; Demand</span>
                  </div>
                  <ul className="space-y-1.5">
                    {downstreamItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Upstream stream */}
              {(activeSyncTab === 'all' || activeSyncTab === 'upstream') && (
                <div className="p-3 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5" /> Upstream (Floor to ERP)
                    </span>
                    <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-300">Physical Truth</span>
                  </div>
                  <ul className="space-y-1.5">
                    {upstreamItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ═══════════ HOW ERX MAKES A DIFFERENCE (DESKERA MODULE CARDS) ═══════════ */}
          <div className="pt-2">
            <div className="text-center mb-3.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                How <span className="text-red-600 italic">Sarvosmi ERX</span><sup className="text-[10px]">TM</sup> Makes a Difference?
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {erxDifferences.map((diff) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={diff.id}
                    className={`rounded-lg border p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700/80 hover:border-slate-500'
                        : 'bg-white border-slate-200/90 hover:border-blue-400 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                          style={{
                            backgroundColor: isDark ? `${diff.color}22` : `${diff.color}15`,
                            color: diff.color,
                            border: `1.5px solid ${diff.color}${isDark ? '40' : '30'}`
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                          {diff.title}
                        </h3>
                      </div>

                      <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span
                        className="text-[8.5px] font-semibold tracking-wide uppercase"
                        style={{ color: diff.color }}
                      >
                        {diff.category}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════ PROVEN ROI & OPERATIONAL VALUE BAR ═══════════ */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 block">100% Floor Sync</span>
              <span className="text-[9px] text-slate-500">Zero plan-to-execution drift</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-400 block">&lt; 15 Min Replacements</span>
              <span className="text-[9px] text-slate-500">Rapid defect exchange at lines</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 block">Zero Paperwork</span>
              <span className="text-[9px] text-slate-500">100% Barcode Put &amp; Pick</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 block">+35% Throughput</span>
              <span className="text-[9px] text-slate-500">Hands-free wearable scanners</span>
            </div>
          </div>

          {/* ═══════════ VALUE SUMMARY FOOTER STRIP ═══════════ */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
              PEOPLE &nbsp;|&nbsp; PROCESS &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
            </span>
            <span className="text-[10px] font-extrabold italic text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Turning static enterprise plans into flawless daily execution
            </span>
          </div>
      </div>
    </section>
  );
};
