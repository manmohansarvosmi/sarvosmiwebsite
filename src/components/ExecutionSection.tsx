import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Laptop,
  Sparkles,
  ShieldCheck,
  Activity,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import laptopMobileWhiteImg from '../asset/laptopmobile_white.png';

export const ExecutionSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const steps = [
    { id: 1, title: 'RM Demand Generation', desc: 'Against ERP plans', icon: BarChart3, color: '#2563eb' },
    { id: 2, title: 'Procurement & PO Sync', desc: 'PO & supplier validation', icon: ShoppingCart, color: '#3b82f6' },
    { id: 3, title: 'Material Gate Receipts', desc: 'Vehicle & gate entry', icon: Truck, color: '#6366f1' },
    { id: 4, title: 'Unloading & Staging', desc: 'Dock receipt & staging', icon: Package, color: '#d97706' },
    { id: 5, title: 'Inward Quality QC', desc: 'Parametric inspection', icon: ClipboardCheck, color: '#e11d48' },
    { id: 6, title: 'Put-Away to Bins', desc: 'Barcode rack put-away', icon: Layers, color: '#0d9488' },
    { id: 7, title: 'Production Plan Execution', desc: 'Live PPE & BOM control', icon: Cog, color: '#059669' },
    { id: 8, title: 'Picking & Line Delivery', desc: 'Kitting & FIFO issue', icon: MoveRight, color: '#dc2626' },
    { id: 9, title: 'Returns & Rejections', desc: 'Discrepancy quarantine', icon: RotateCcw, color: '#ea580c' },
    { id: 10, title: 'Material Re-Issue', desc: 'Scrap & rework issue', icon: RefreshCw, color: '#9333ea' },
  ];

  // Auto-advance steps softly when autoPlay is enabled
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [autoPlay, steps.length]);

  return (
    <section
      id="execution-section"
      className="w-full py-6 sm:py-8 px-3 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #090d16 0%, #0d131f 50%, #091218 100%)'
          : 'linear-gradient(135deg, #f0f7fe 0%, #ffffff 50%, #f0fdf4 100%)',
      }}
    >
      {/* ── Ambient Background Motion Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.10, 0.20, 0.10],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
        />
        
        {/* Subtle dot matrix patterns */}
        <div
          className="absolute top-4 right-6 w-32 h-32 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#059669 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
        />
        <div
          className="absolute top-4 left-6 w-32 h-32 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5 relative z-10">
        
        {/* ═══════════ ANIMATED COMPACT HEADER ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Top Pill Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider mb-1.5 shadow-2xs cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>REAL-TIME SUPPLY CHAIN EXECUTION</span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug text-slate-900 dark:text-white">
            End-to-End <span className="text-emerald-600 dark:text-emerald-400">ERX™</span> Raw Material Execution
          </h2>

          <p className="text-[11.5px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl font-medium">
            Bridging ERP planning to shop-floor reality with live barcode scanning and paperless execution.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-1.5 h-1 rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"
          />

          {/* 4 Feature Badges with staggered hover */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-2.5">
            {[
              { label: 'Real-Time Visibility', icon: Zap, color: 'text-blue-600', bg: 'text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60' },
              { label: 'Accurate Control', icon: Target, color: 'text-rose-600', bg: 'text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900/60' },
              { label: 'Connected Teams', icon: Users, color: 'text-indigo-600', bg: 'text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/60' },
              { label: 'Higher Productivity', icon: TrendingUp, color: 'text-emerald-600', bg: 'text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60' },
            ].map((tag, i) => {
              const TagIcon = tag.icon;
              return (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.06, y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white dark:bg-slate-900 ${tag.bg} border shadow-2xs cursor-default`}
                >
                  <TagIcon className={`w-3 h-3 ${tag.color}`} /> {tag.label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* ═══════════ MAIN 3-COLUMN WORKFLOW GRID ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          
          {/* ── LEFT COLUMN: ANIMATED 10-STEP TIMELINE ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-black text-xs text-slate-900 dark:text-white leading-tight">
                      10-Step Execution Flow
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    title={autoPlay ? 'Pause Auto-Cycle' : 'Play Auto-Cycle'}
                    className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    {autoPlay ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  </button>
                  <span className="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    AUTO-SYNC
                  </span>
                </div>
              </div>

              {/* Vertical Stepper List */}
              <div className="relative pl-1.5 space-y-1">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-800" />

                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = activeStep === idx;
                  return (
                    <motion.div
                      key={step.id}
                      onClick={() => {
                        setActiveStep(idx);
                        setAutoPlay(false);
                      }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                      className={`relative flex items-center gap-2 py-1 px-1.5 rounded-lg transition-colors cursor-pointer group ${
                        isSelected
                          ? 'bg-blue-50/90 dark:bg-blue-950/50 shadow-2xs'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <motion.div
                          layoutId="activeStepBorder"
                          className="absolute left-0 top-1 bottom-1 w-1 rounded-r-full bg-blue-600"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}

                      {/* Step Number Dot */}
                      <motion.div
                        animate={isSelected ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black shrink-0 z-10 transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-200 dark:ring-blue-900'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {step.id}
                      </motion.div>

                      {/* Icon */}
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color,
                        }}
                      >
                        <Icon className="w-3 h-3" />
                      </div>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-[11px] font-bold leading-tight truncate transition-colors ${
                            isSelected ? 'text-blue-700 dark:text-blue-400 font-extrabold' : 'text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <ChevronRight className="w-3 h-3 text-blue-600 shrink-0" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Alert */}
            <div className="mt-2 p-1.5 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-blue-600 animate-pulse shrink-0" />
              <p className="text-[10px] font-bold text-blue-950 dark:text-blue-200 leading-tight">
                Live shop-floor telemetry broadcast
              </p>
            </div>
          </motion.div>

          {/* ── CENTER COLUMN: MOTION-ENHANCED DEVICE SHOWCASE ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs relative group overflow-hidden"
          >
            {/* Top Status Header */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[9px] border border-blue-200 dark:border-blue-800">
                    💻 WEB PPE PORTAL
                  </span>
                  <span className="text-slate-300 text-[10px] font-bold">↔</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[9px] border border-emerald-200 dark:border-emerald-800">
                    📱 MOBILE HNSC
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[9px] font-extrabold border border-emerald-500/25">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span>0s LATENCY</span>
                </div>
              </div>

              {/* Showcase Image on Clean Studio Background with Gentle Breathing Float */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center p-1.5 sm:p-2.5 rounded-xl bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 overflow-hidden"
              >
                {/* Ambient Soft Glow Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/8 via-transparent to-blue-500/8 pointer-events-none" />

                <motion.img
                  src={laptopMobileWhiteImg}
                  alt="Sarvosmi ERX RMSC - Desktop Production Plans & Mobile Barcode Inwarding"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[390px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.10)] dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] cursor-pointer"
                  loading="eager"
                />
              </motion.div>
            </div>

            {/* Bottom 2 Feature Badges */}
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px]">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-1.5 rounded-lg bg-blue-500/5 dark:bg-blue-950/30 border border-blue-500/15 flex items-center gap-1.5"
              >
                <Laptop className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-extrabold text-slate-800 dark:text-slate-200 truncate">Web PPE Plans &amp; Gap</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-1.5 rounded-lg bg-emerald-500/5 dark:bg-emerald-950/30 border border-emerald-500/15 flex items-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-extrabold text-slate-800 dark:text-slate-200 truncate">Mobile CIN Barcode</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: CAPABILITIES & WEARABLE SCANNER ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs relative"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-black text-xs text-slate-900 dark:text-white leading-tight">
                      Accuracy &amp; Impact
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  99.8% ACCURATE
                </span>
              </div>

              {/* Accuracy Checklist */}
              <div className="space-y-1.5 mb-2.5">
                {[
                  'Identify shortages early',
                  'Predictive scheduling',
                  'Sub-second deviation alerts',
                  '100% Time-bound execution',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 transition-colors"
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[10.5px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Wearable Ring Barcode Scanner Showcase Box with Animated Laser Beam */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-2.5 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-md border border-slate-800 relative overflow-hidden"
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase tracking-wider border border-emerald-500/30">
                    <Scan className="w-2.5 h-2.5 inline mr-0.5" /> Wearable Tech
                  </span>
                </div>
                <h4 className="text-[11px] font-black text-white leading-tight">
                  Ring Barcode Scanner
                </h4>
                <p className="text-[9.5px] text-slate-400 mt-0.5 leading-tight">
                  Hands-free barcode scanning for dock &amp; store ops.
                </p>

                {/* Laser Barcode Simulation */}
                <div className="mt-1.5 p-1.5 rounded-lg bg-slate-800/90 text-white flex items-center justify-between relative overflow-hidden border border-slate-700/80">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <div>
                      <p className="text-[8px] font-mono font-bold text-emerald-300">ORG0000001-CIN</p>
                      <p className="text-[7px] text-slate-400">Barcode Verified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[7.5px] font-bold text-red-400">
                    <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> Laser
                  </div>

                  {/* Animated laser beam sweep */}
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
                  />
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-red-500 shadow-[0_0_6px_#ef4444]" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-2 p-1.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-1.5 text-[9.5px] font-bold text-emerald-900 dark:text-emerald-200">
              <Hand className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Free hands for material handling</span>
            </div>
          </motion.div>

        </div>

        {/* ═══════════ COMPACT PROCESS BENEFITS (5 TILES WITH HOVER SPRING) ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs"
        >
          <div className="flex items-center justify-between mb-2.5 flex-wrap gap-1">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Process Optimization Results
              </h4>
            </div>
            <span className="text-[9.5px] font-bold text-slate-400">
              Across 50+ manufacturing plants
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {[
              { title: 'Lower Costs', desc: 'Reduced overhead', icon: Coins, color: 'bg-blue-600', border: 'border-blue-100 dark:border-slate-800', bg: 'bg-blue-50/60' },
              { title: 'Zero Leakage', desc: 'Zero material waste', icon: Award, color: 'bg-emerald-600', border: 'border-emerald-100 dark:border-slate-800', bg: 'bg-emerald-50/60' },
              { title: 'High Efficiency', desc: 'Higher margins', icon: TrendingUp, color: 'bg-indigo-600', border: 'border-indigo-100 dark:border-slate-800', bg: 'bg-indigo-50/60' },
              { title: 'Pick-to-Barcode', desc: 'Directed put & pick', icon: Scan, color: 'bg-amber-600', border: 'border-amber-100 dark:border-slate-800', bg: 'bg-amber-50/60' },
              { title: '100% Free Hands', desc: 'Ergonomic handling', icon: Hand, color: 'bg-teal-600', border: 'border-teal-100 dark:border-slate-800', bg: 'bg-teal-50/60' },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`p-2.5 rounded-xl ${card.bg} dark:bg-slate-800/50 border ${card.border} flex items-center gap-2 shadow-2xs cursor-default`}
                >
                  <div className={`w-7 h-7 rounded-lg ${card.color} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                    <CardIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">{card.title}</p>
                    <p className="text-[9.5px] text-slate-500 dark:text-slate-400 leading-tight">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
