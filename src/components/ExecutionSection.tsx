import React, { useState } from 'react';
import {
  BarChart3,
  ShoppingCart,
  Truck,
  Package,
  ClipboardCheck,
  Layers,
  Cog,
  MoveRight,
  RotateCcw,
  RefreshCw,
  Radio,
  Zap,
  Target,
  Users,
  TrendingUp,
  Coins,
  Award,
  Scan,
  Hand,
  CheckCircle2,
  Check,
  QrCode,
  Smartphone,
  Laptop
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ExecutionSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'laptop' | 'mobile'>('all');
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { id: 1, title: 'Raw Material demand generation against production plans', icon: BarChart3, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' },
    { id: 2, title: 'Procurement', icon: ShoppingCart, color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
    { id: 3, title: 'Material receipts', icon: Truck, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30' },
    { id: 4, title: 'Unloading', icon: Package, color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
    { id: 5, title: 'Inward QC', icon: ClipboardCheck, color: 'text-rose-500 bg-rose-500/10 border-rose-500/30' },
    { id: 6, title: 'Putting', icon: Layers, color: 'text-teal-500 bg-teal-500/10 border-teal-500/30' },
    { id: 7, title: 'Production plan execution', icon: Cog, color: 'text-slate-500 bg-slate-500/10 border-slate-500/30' },
    { id: 8, title: 'Picking & delivery to production', icon: MoveRight, color: 'text-red-500 bg-red-500/10 border-red-500/30' },
    { id: 9, title: 'Returns & rejections', icon: RotateCcw, color: 'text-orange-500 bg-orange-500/10 border-orange-500/30' },
    { id: 10, title: 'Material re-issue', icon: RefreshCw, color: 'text-purple-500 bg-purple-500/10 border-purple-500/30' },
  ];

  const productionPlans = [
    { id: 'PLAN_3', product: 'Split AC Outdoor Unit', qty: 3, schedule: '11 Sep 2026', status: 'Non Executable', statusColor: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200 dark:border-red-800' },
    { id: 'PLAN_4', product: 'Split AC Outdoor Unit', qty: 3, schedule: '11 Sep 2026', status: 'Non Executable', statusColor: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200 dark:border-red-800' },
    { id: 'PLAN_5', product: 'Split AC Outdoor Unit', qty: 3, schedule: '12 Sep 2026', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' },
    { id: 'PLAN_6', product: 'Split AC Outdoor Unit', qty: 3, schedule: '12 Sep 2026', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' },
    { id: 'PLAN_7', product: 'Split AC Outdoor Unit', qty: 3, schedule: '13 Sep 2026', status: 'Non Executable', statusColor: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200 dark:border-red-800' },
    { id: 'PLAN_8', product: 'Split AC Outdoor Unit', qty: 3, schedule: '13 Sep 2026', status: 'Non Executable', statusColor: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200 dark:border-red-800' },
  ];

  return (
    <section id="execution-section" className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
          {/* ═══════════ HEADER ═══════════ */}
          <div
            className={`px-4 sm:px-8 py-5 border-b flex flex-col lg:flex-row items-center justify-between gap-4 relative overflow-hidden ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white/80 border-slate-200/80 backdrop-blur-md'
            }`}
          >
            {/* Left Brand Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-black text-xl">
                ERX
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold italic text-red-600">Sarvosmi</span>
                  <span className="text-xs font-black text-emerald-600 tracking-wider">ERX™ RMSC</span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Raw Material Supply Chain
                </p>
              </div>
            </div>

            {/* Center Main Title */}
            <div className="text-center max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                End-to-End Raw Material Supply Chain Execution
              </h2>
              <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                From Plan to Production — All in One Platform
              </p>

              {/* 4 Feature Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-extrabold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" /> Real-Time Visibility
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-extrabold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30">
                  <Target className="w-3.5 h-3.5 text-rose-500" /> Accurate Control
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-extrabold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                  <Users className="w-3.5 h-3.5 text-blue-500" /> Connected Teams
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-extrabold bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/30">
                  <TrendingUp className="w-3.5 h-3.5 text-green-500" /> Higher Productivity
                </span>
              </div>
            </div>

            {/* Right Slogan */}
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black italic tracking-wide text-slate-700 dark:text-slate-300 font-serif">
                Smarter Materials
              </p>
              <p className="text-sm font-black italic text-emerald-600 dark:text-emerald-400 font-serif">
                Stronger Tomorrow
              </p>
            </div>
          </div>

          {/* ═══════════ MAIN CONTENT GRID ═══════════ */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* ── LEFT: 10-Step Sequential Execution Flow ── */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  10-Step Execution Flow
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Auto-Sync
                </span>
              </div>

              <div className="space-y-1.5">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`flex items-center gap-2.5 p-2 rounded-md border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm scale-[1.02]'
                          : 'bg-white/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-xs flex items-center justify-center text-[10px] font-black shrink-0 ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {step.id}
                      </div>
                      <div className={`p-1.5 rounded-xs border shrink-0 ${step.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11px] font-bold leading-tight text-slate-800 dark:text-slate-200 line-clamp-2">
                        {step.title}
                      </p>
                    </div>
                  );
                })}

                <div className="mt-2 p-2.5 rounded-md bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/30 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300">
                    ...in real-time with appropriate alerts
                  </span>
                </div>
              </div>
            </div>

            {/* ── CENTER: Live Platform Mockup (Laptop & Mobile) ── */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Device Mode Selector */}
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 p-1 rounded-md border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1 rounded-xs text-xs font-black transition-all ${
                      activeTab === 'all'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    All Devices
                  </button>
                  <button
                    onClick={() => setActiveTab('laptop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xs text-xs font-black transition-all ${
                      activeTab === 'laptop'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" /> Web Console
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xs text-xs font-black transition-all ${
                      activeTab === 'mobile'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile HNSC
                  </button>
                </div>
                <div className="flex items-center gap-2 px-2 text-[10px] font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-xs bg-emerald-500 animate-ping" />
                  Live Sync Active
                </div>
              </div>

              {/* Devices Container */}
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
                
                {/* 1. LAPTOP MOCKUP */}
                {(activeTab === 'all' || activeTab === 'laptop') && (
                  <div className={`w-full ${activeTab === 'all' ? 'md:w-3/5' : 'w-full'} transition-all`}>
                    <div className="bg-slate-800 rounded-t-md p-2 pb-1 shadow-2xl border-4 border-slate-800">
                      {/* Laptop Screen Header */}
                      <div className="bg-white dark:bg-slate-900 rounded-xs p-2 text-slate-800 dark:text-slate-200 text-xs shadow-inner">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold italic text-red-600 text-[10px]">Sarvosmi</span>
                            <span className="text-[9px] font-bold text-emerald-600">ERX™ RMSC</span>
                          </div>
                          <span className="text-[9px] font-semibold text-slate-500">Jayant Vaidya (PPE Mgr)</span>
                        </div>

                        {/* Top 4 Stats */}
                        <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                          <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-center">
                            <p className="text-[8px] text-slate-500 font-bold uppercase">Total Plans</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">20</p>
                          </div>
                          <div className="p-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-center">
                            <p className="text-[8px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">In Progress</p>
                            <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">8</p>
                          </div>
                          <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950/50 text-center">
                            <p className="text-[8px] text-blue-600 dark:text-blue-400 font-bold uppercase">Completed</p>
                            <p className="text-sm font-black text-blue-600 dark:text-blue-400">10</p>
                          </div>
                          <div className="p-1.5 rounded-md bg-rose-50 dark:bg-rose-950/50 text-center">
                            <p className="text-[8px] text-rose-600 dark:text-rose-400 font-bold uppercase">Shortage</p>
                            <p className="text-sm font-black text-rose-600 dark:text-rose-400">2</p>
                          </div>
                        </div>

                        {/* Mini Table */}
                        <div className="overflow-x-auto">
                          <p className="text-[9px] font-black uppercase text-slate-700 dark:text-slate-300 mb-1">
                            Production Plan Execution
                          </p>
                          <table className="w-full text-[8.5px] border-collapse">
                            <thead>
                              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold text-left">
                                <th className="p-1">Plan ID</th>
                                <th className="p-1">Product</th>
                                <th className="p-1 text-center">Qty</th>
                                <th className="p-1">Schedule</th>
                                <th className="p-1 text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                              {productionPlans.slice(0, 4).map((plan) => (
                                <tr key={plan.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                  <td className="p-1 font-bold text-emerald-600">{plan.id}</td>
                                  <td className="p-1 font-medium">{plan.product}</td>
                                  <td className="p-1 text-center font-bold">{plan.qty}</td>
                                  <td className="p-1 text-slate-500">{plan.schedule}</td>
                                  <td className="p-1 text-right">
                                    <span className={`px-1.5 py-0.5 rounded text-[7.5px] font-extrabold border ${plan.statusColor}`}>
                                      {plan.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="bg-slate-700 h-3 rounded-b-md shadow-md flex items-center justify-center">
                      <div className="w-16 h-1 bg-slate-500 rounded-full" />
                    </div>
                  </div>
                )}

                {/* 2. MOBILE PHONE MOCKUP */}
                {(activeTab === 'all' || activeTab === 'mobile') && (
                  <div className={`w-full ${activeTab === 'all' ? 'md:w-2/5' : 'max-w-xs mx-auto'} transition-all`}>
                    <div className="bg-slate-900 p-2.5 rounded-md border-4 border-slate-800 shadow-2xl relative">
                      {/* Notch */}
                      <div className="w-20 h-3 bg-slate-800 rounded-xs mx-auto mb-2" />
                      
                      {/* Screen Content */}
                      <div className="bg-white dark:bg-slate-900 rounded-xs p-2.5 text-slate-800 dark:text-slate-200 shadow-inner text-xs">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800 mb-2">
                          <span className="font-extrabold italic text-red-600 text-[10px]">Sarvosmi <span className="text-emerald-600">ERX™ HNSC</span></span>
                          <span className="text-[8px] font-mono text-slate-400">1:22 PM</span>
                        </div>

                        {/* Barcode Banner */}
                        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xs p-2 mb-2 flex items-center justify-between">
                          <div>
                            <p className="text-[7.5px] font-black uppercase text-emerald-800 dark:text-emerald-300">GRN Barcode</p>
                            <p className="text-[9px] font-mono font-bold text-slate-700 dark:text-slate-300">ORG0000001-S001-CIN-02-2026-0001</p>
                          </div>
                          <QrCode className="w-6 h-6 text-emerald-600 shrink-0" />
                        </div>

                        {/* Supplier Info */}
                        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xs p-2 mb-2 space-y-0.5 text-[8.5px]">
                          <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight">Supplier Details</p>
                          <p><span className="text-slate-400">Org:</span> <strong className="text-slate-700 dark:text-slate-300">Aldahome Appliances</strong></p>
                          <p><span className="text-slate-400">Contact:</span> Khursheed Alam</p>
                          <p><span className="text-slate-400">Phone:</span> 9971841909</p>
                        </div>

                        {/* Transporter Info */}
                        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xs p-2 mb-2.5 space-y-0.5 text-[8.5px]">
                          <p className="font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight">Transporter Details</p>
                          <p><span className="text-slate-400">Transport:</span> KK Transports</p>
                          <p><span className="text-slate-400">Driver:</span> Akshay (LMV)</p>
                          <p><span className="text-slate-400">Vehicle:</span> MH21HU2726</p>
                        </div>

                        <button className="w-full py-1.5 rounded-xs bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] shadow-sm flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> View Items &amp; Verify
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* ── RIGHT: Wearable Mobile Computer & Ring Barcode Scanner ── */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              {/* Accurate & Helps to Card */}
              <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-md p-3.5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-300">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider">Accurate &amp; Helps To</h3>
                </div>
                <ul className="space-y-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Identify Constraints</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Predictive Forecasting and Planning</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Real-Time Alerts &amp; Reports</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>All activities are time bound</span>
                  </li>
                </ul>
              </div>

              {/* Wearable Ring Scanner Visual Card */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-md p-4 shadow-xl border border-emerald-500/40 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest border border-emerald-500/30 mb-2">
                    <Scan className="w-3 h-3" /> Hands-Free Tech
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug">
                    Wearable Mobile Computer &amp; Ring Barcode Scanner
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Dock and store operators scan barcodes directly from a fingertip ring scanner while keeping both hands completely free for heavy material handling.
                  </p>
                </div>

                {/* Laser Barcode Simulation */}
                <div className="my-3 p-3 bg-slate-800/80 rounded-xs border border-slate-700 flex items-center justify-between relative overflow-hidden">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-emerald-400" />
                    <div>
                      <p className="text-[9px] font-mono text-emerald-300 font-bold">PRDSHP00002</p>
                      <p className="text-[8px] text-slate-400">Split AC Outdoor Unit (QTY: 3)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-red-400 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-xs bg-red-500" /> Laser Active
                  </div>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-red-500 shadow-[0_0_8px_#ef4444]" />
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-[10px] font-bold text-slate-400">
                  <Hand className="w-4 h-4 text-emerald-400" />
                  <span>100% Free hands for picking &amp; putting</span>
                </div>
              </div>

            </div>

          </div>

          {/* ═══════════ BOTTOM BENEFITS BAR ═══════════ */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70">
            <p className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 text-center sm:text-left">
              The key benefits being optimizing of all processes resulting in.....
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Lower operational &amp; transactional costs
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Better quality and negligible raw material wastages or leakages
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Higher efficiency, productivity and profitability due to...
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Scan className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Implementation of Put &amp; Pick-to-Barcode technology using Wearables
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                  <Hand className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  Both hands of Dock &amp; Store Operators are free for picking &amp; putting
                </p>
              </div>

            </div>

            {/* Footer Tag */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                PEOPLE &nbsp;|&nbsp; PROCESS &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
              </span>
            </div>
          </div>
      </div>
    </section>
  );
};
