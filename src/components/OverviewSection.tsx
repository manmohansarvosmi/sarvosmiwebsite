import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Building2,
  Globe,
  Truck,
  Warehouse,
  Package,
  AlertTriangle,
  TrendingUp,
  Coins,
  Award,
  Clock,
  ShieldCheck,
  Layers,
  Settings,
  Users,
  ChevronRight,
  Activity,
  Share2,
  Factory,
  BarChart3,
  Check
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   AUTHENTIC INFOGRAPHIC VECTOR GRAPHICS
   ───────────────────────────────────────────────────────────── */

// Top Right Factory Skyline Illustration
const HeaderFactorySkyline: React.FC = () => (
  <svg
    viewBox="0 0 200 65"
    className="w-44 h-14 opacity-25 pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 65V42h15v23h10V35l18 12V30l18 12V65" fill="#94a3b8" />
    <rect x="75" y="20" width="14" height="45" fill="#94a3b8" />
    <polygon points="75,20 82,8 89,20" fill="#94a3b8" />
    <rect x="95" y="28" width="22" height="37" rx="1" fill="#cbd5e1" />
    <circle cx="106" cy="42" r="3" fill="#94a3b8" />
    <path d="M125 65V25h18v40" fill="#94a3b8" />
    <polygon points="125,25 134,12 143,25" fill="#94a3b8" />
    <rect x="150" y="35" width="28" height="30" rx="1" fill="#cbd5e1" />
    <rect x="182" y="22" width="36" height="43" rx="2" fill="#94a3b8" />
    <line x1="82" y1="8" x2="82" y2="2" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="134" y1="12" x2="134" y2="5" stroke="#94a3b8" strokeWidth="1.5" />
    <circle cx="82" cy="2" r="1.5" fill="#ef4444" />
    <circle cx="134" cy="4" r="1.5" fill="#ef4444" />
  </svg>
);

// Bottom Left Truck Logistics Illustration
const TruckLogisticsIllustration: React.FC = () => (
  <div className="relative w-full h-24 rounded-md bg-white border border-slate-200/90 overflow-hidden flex items-end px-3 pb-2 select-none shadow-xs">
    <svg viewBox="0 0 320 85" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="15" width="190" height="60" rx="1" fill="#e2e8f0" />
      <polygon points="110,15 215,2 320,15" fill="#cbd5e1" />
      <rect x="135" y="30" width="30" height="45" fill="#94a3b8" opacity="0.35" />
      <rect x="175" y="30" width="30" height="45" fill="#94a3b8" opacity="0.35" />
      <rect x="215" y="30" width="30" height="45" fill="#94a3b8" opacity="0.35" />
      
      <rect x="255" y="52" width="16" height="16" rx="1" fill="#d97706" opacity="0.8" />
      <rect x="273" y="48" width="20" height="20" rx="1" fill="#b45309" opacity="0.85" />
      <rect x="264" y="34" width="15" height="15" rx="1" fill="#f59e0b" opacity="0.9" />
      <rect x="295" y="54" width="14" height="14" rx="1" fill="#d97706" opacity="0.75" />

      <line x1="0" y1="75" x2="320" y2="75" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />

      <rect x="35" y="24" width="82" height="46" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="55" y1="26" x2="55" y2="68" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="75" y1="26" x2="75" y2="68" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="95" y1="26" x2="95" y2="68" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />

      <path d="M117 40 L125 40 L135 52 L135 70 L117 70 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
      <polygon points="123,43 131,51 123,51" fill="#bae6fd" />
      <circle cx="132" cy="65" r="2" fill="#fbbf24" />

      <circle cx="48" cy="72" r="7" fill="#1e293b" />
      <circle cx="48" cy="72" r="3.5" fill="#94a3b8" />
      <circle cx="66" cy="72" r="7" fill="#1e293b" />
      <circle cx="66" cy="72" r="3.5" fill="#94a3b8" />
      <circle cx="123" cy="72" r="7" fill="#1e293b" />
      <circle cx="123" cy="72" r="3.5" fill="#94a3b8" />
    </svg>
  </div>
);

// Center Flow Warehouse to Factory Scene
const WarehouseToFactoryFlowScene: React.FC = () => (
  <div className="w-full py-1.5 px-3 select-none">
    <svg viewBox="0 0 540 85" className="w-full h-18 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="20" y="24" width="95" height="52" rx="1" fill="#cbd5e1" opacity="0.95" />
        <polygon points="15,24 67.5,10 120,24" fill="#94a3b8" />
        <rect x="35" y="38" width="22" height="38" fill="#64748b" rx="1" />
        <rect x="65" y="42" width="18" height="18" rx="1" fill="#f8fafc" />
        <rect x="88" y="42" width="18" height="18" rx="1" fill="#f8fafc" />
        <rect x="120" y="58" width="14" height="14" rx="1" fill="#d97706" />
        <rect x="135" y="52" width="16" height="20" rx="1" fill="#b45309" />
        <rect x="127" y="44" width="13" height="13" rx="1" fill="#f59e0b" />
      </g>

      <g transform="translate(165, 36)">
        <rect x="8" y="20" width="26" height="16" rx="1" fill="#f59e0b" />
        <rect x="4" y="10" width="12" height="18" rx="1" fill="#1e293b" />
        <rect x="6" y="12" width="8" height="7" fill="#bae6fd" />
        <rect x="32" y="4" width="3" height="32" fill="#334155" />
        <rect x="35" y="28" width="14" height="3" fill="#334155" />
        <rect x="36" y="14" width="13" height="14" rx="1" fill="#d97706" />
        <circle cx="12" cy="36" r="4.5" fill="#0f172a" />
        <circle cx="28" cy="36" r="4.5" fill="#0f172a" />
      </g>

      <g>
        <path
          d="M230 46 L335 46"
          stroke="#93c5fd"
          strokeWidth="3.5"
          strokeDasharray="6 4"
          strokeLinecap="square"
        />
        <polygon points="340,46 330,41 330,51" fill="#60a5fa" />
      </g>

      <g transform="translate(345, 0)">
        <rect x="15" y="32" width="75" height="44" rx="1" fill="#cbd5e1" />
        <polygon points="15,32 30,22 45,32 60,22 75,32 90,22 90,32" fill="#94a3b8" />
        <rect x="25" y="44" width="12" height="14" fill="#60a5fa" opacity="0.6" rx="1" />
        <rect x="45" y="44" width="12" height="14" fill="#60a5fa" opacity="0.6" rx="1" />
        <rect x="65" y="44" width="12" height="14" fill="#60a5fa" opacity="0.6" rx="1" />
        <rect x="98" y="28" width="18" height="48" rx="2" fill="#94a3b8" />
        <rect x="120" y="36" width="16" height="40" rx="2" fill="#cbd5e1" />
        <line x1="107" y1="28" x2="107" y2="18" stroke="#64748b" strokeWidth="2" />
        <rect x="42" y="8" width="8" height="24" fill="#64748b" />
        <path d="M44 4 Q42 0 46 -3 Q50 -6 48 -9" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.7" />
      </g>

      <path d="M0 78 L540 78" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />
    </svg>
  </div>
);

// Globe with Handwritten Cursive Script Quote
const GlobeQuoteSection: React.FC = () => (
  <div className="relative w-full pt-3 pb-2 flex flex-col items-center justify-center select-none overflow-hidden">
    <div className="relative w-full max-w-[260px] h-36 flex items-center justify-center">
      <svg viewBox="0 0 200 160" className="w-full h-full opacity-35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="85" r="62" stroke="#38bdf8" strokeWidth="1.5" fill="#f0f9ff" opacity="0.5" />
        <ellipse cx="100" cy="85" rx="62" ry="24" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="100" cy="85" rx="62" ry="48" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="100" cy="85" rx="26" ry="62" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M80 60 Q95 55 110 65 Q115 80 100 95 Q85 85 80 60 Z" fill="#93c5fd" opacity="0.6" />
        <path d="M120 70 Q135 68 145 82 Q140 100 125 96 Z" fill="#93c5fd" opacity="0.6" />
        <path d="M65 95 Q75 110 85 125 Q70 120 65 95 Z" fill="#93c5fd" opacity="0.6" />

        <path d="M30 115 Q100 10 170 65" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="4 4" fill="none" />
        <g transform="translate(94, 42)">
          <path d="M6 0 C2.7 0 0 2.7 0 6 C0 10.5 6 16 6 16 C6 16 12 10.5 12 6 C12 2.7 9.3 0 6 0 Z" fill="#1d4ed8" />
          <circle cx="6" cy="6" r="2.5" fill="#ffffff" />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 px-2">
        <p
          className="text-lg sm:text-xl leading-tight font-bold text-blue-900 drop-shadow-xs"
          style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
        >
          A Stronger<br />
          Supply Chain<br />
          Builds a Stronger<br />
          Organization
        </p>
        <svg viewBox="0 0 140 14" className="w-32 h-3.5 mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8 Q70 14 136 3" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   INFOGRAPHIC DATA ARRAYS
   ───────────────────────────────────────────────────────────── */

const rawMaterialSources = [
  {
    id: 1,
    title: 'Suppliers',
    sub: 'Vendor Tier 1 & 2',
    tag: 'INBOUND SUPPLY',
    icon: Building2,
    iconColor: '#0ea5e9',
    iconBg: '#e0f2fe',
    iconBorder: '#bae6fd',
  },
  {
    id: 2,
    title: 'Global Supply Network',
    sub: 'Cross-border Inbound',
    tag: 'INBOUND SUPPLY',
    icon: Globe,
    iconColor: '#3b82f6',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
  },
  {
    id: 3,
    title: 'Transportation',
    sub: 'Fleet & 3PL Logistics',
    tag: 'INBOUND SUPPLY',
    icon: Truck,
    iconColor: '#f59e0b',
    iconBg: '#fffbeb',
    iconBorder: '#fde68a',
  },
  {
    id: 4,
    title: 'Warehousing',
    sub: 'RM Storage & Hubs',
    tag: 'INBOUND SUPPLY',
    icon: Warehouse,
    iconColor: '#10b981',
    iconBg: '#ecfdf5',
    iconBorder: '#a7f3d0',
  },
  {
    id: 5,
    title: 'Raw Materials',
    sub: 'Critical & Standard SKUs',
    tag: 'INBOUND SUPPLY',
    icon: Package,
    iconColor: '#8b5cf6',
    iconBg: '#f5f3ff',
    iconBorder: '#ddd6fe',
  },
];

const inflowArteries = [
  { label: 'Reliable Supply', icon: ShieldCheck, color: '#10b981' },
  { label: 'Quality Materials', icon: Award, color: '#10b981' },
  { label: 'On-time Delivery', icon: Clock, color: '#10b981' },
  { label: 'Cost Optimization', icon: Coins, color: '#10b981' },
];

const distributionVeins = [
  { label: 'Production Plant', icon: Factory, color: '#3b82f6' },
  { label: 'Enterprise Growth', icon: BarChart3, color: '#3b82f6' },
  { label: 'Operational Stability', icon: Settings, color: '#3b82f6' },
  { label: 'Market Distribution', icon: Share2, color: '#3b82f6' },
];

const keyChallenges = [
  {
    title: 'Disruptions',
    sub: 'Port & transit bottlenecks',
    icon: AlertTriangle,
    iconColor: '#ef4444',
    iconBg: '#fef2f2',
    iconBorder: '#fecaca',
  },
  {
    title: 'Demand Fluctuations',
    sub: 'Unpredictable variations',
    icon: Activity,
    iconColor: '#f97316',
    iconBg: '#fff7ed',
    iconBorder: '#ffedd5',
  },
];

const keyBenefits = [
  {
    title: 'Customer Satisfaction',
    sub: 'On-time delivery SLA',
    icon: Users,
    iconColor: '#10b981',
    iconBg: '#ecfdf5',
    iconBorder: '#a7f3d0',
  },
  {
    title: 'Improved Profitability',
    sub: 'Reduced total cost of ownership',
    icon: TrendingUp,
    iconColor: '#10b981',
    iconBg: '#ecfdf5',
    iconBorder: '#a7f3d0',
  },
];

const fivePillars = [
  {
    label: 'Right Quality',
    sub: 'Zero defect inflow',
    icon: Award,
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    label: 'Right Quantity',
    sub: 'No excess, no stockout',
    icon: Layers,
    color: '#10b981',
    bg: '#ecfdf5',
    border: '#a7f3d0',
  },
  {
    label: 'Right Time',
    sub: 'Exact JIT delivery',
    icon: Clock,
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    label: 'Right Cost',
    sub: 'Optimized landed cost',
    icon: Coins,
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    label: 'Healthy Organization',
    sub: 'Resilient operations',
    icon: ShieldCheck,
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT — MINIMAL RADIUS ON ALL ELEMENTS
   ───────────────────────────────────────────────────────────── */

export const OverviewSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="overview-section"
      className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300 relative"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-7">
        
        {/* ─────────────────────────────────────────────────────────
            1. TOP HEADER STRIP (Direct on Page Background)
            ───────────────────────────────────────────────────────── */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pb-2">
          
          {/* Top Left: Checkmark Badge & Text */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-xs border border-emerald-400">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="leading-tight">
              <p className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-emerald-700">
                SUPPLYING THE RIGHT MATERIAL
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
                for a Stronger Organization
              </p>
            </div>
          </div>

          {/* Top Center: Heading & Subtitle */}
          <div className="flex-1 text-center max-w-2xl px-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-grotesk tracking-tight leading-tight">
              Why is Raw Material Supply Chain <span className="text-blue-600">Important?</span>
            </h2>
            <p className="text-xs sm:text-[13px] font-medium text-slate-600 mt-1 leading-snug">
              <strong className="font-bold text-slate-800">Raw material supply chain</strong> is the backbone of an organization, just as arteries &amp; veins are to the human body.
            </p>
            {/* Dual-color bar */}
            <div className="mx-auto mt-2 h-1 w-14 rounded-xs flex overflow-hidden shadow-xs">
              <div className="w-1/2 h-full bg-emerald-500" />
              <div className="w-1/2 h-full bg-blue-600" />
            </div>
          </div>

          {/* Top Right: Smarter Materials / Stronger Tomorrow & Silhouette */}
          <div className="relative hidden lg:flex items-center gap-4 shrink-0 text-right">
            <div>
              <p className="text-xs italic font-bold text-slate-500 font-serif tracking-wide">
                Smarter Materials
              </p>
              <p className="text-base font-extrabold italic text-emerald-800 font-serif tracking-tight leading-tight">
                Stronger Tomorrow
              </p>
              <svg viewBox="0 0 120 8" className="w-24 h-2 ml-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6 Q60 1 118 4" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <HeaderFactorySkyline />
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────
            2. MAIN 3-COLUMN CONTENT GRID (Direct on Background)
            ───────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* ═════════════════════════════════════════════════════════
              LEFT COLUMN: RAW MATERIAL SOURCES (5 Inbound Channels)
              ═════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-3">
            <div>
              {/* Header with Title & Pill Badge */}
              <div className="flex items-center justify-between mb-2.5 px-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-indigo-700">
                  RAW MATERIAL SOURCES
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs">
                  5 Inbound Channels
                </span>
              </div>

              {/* 5 Source Cards */}
              <div className="space-y-2.5">
                {rawMaterialSources.map((source) => {
                  const Icon = source.icon;
                  return (
                    <div
                      key={source.id}
                      className="group p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer shadow-xs"
                    >
                      {/* Icon & Details */}
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div
                          className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs"
                          style={{
                            backgroundColor: source.iconBg,
                            border: `1.5px solid ${source.iconBorder}`,
                            color: source.iconColor,
                          }}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight truncate">
                            {source.title}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight truncate mt-0.5">
                            {source.sub}
                          </p>
                          <span className="inline-block mt-0.5 text-[8.5px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            {source.tag}
                          </span>
                        </div>
                      </div>

                      {/* Action Chevron */}
                      <div className="w-6 h-6 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Logistics Truck Scene */}
            <div className="mt-3 pt-1">
              <TruckLogisticsIllustration />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════
              CENTER COLUMN: ARTERIES & VEINS FLOW CORE
              ═════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 border border-slate-200 p-3.5 shadow-xs">
            
            {/* Top Subheaders */}
            <div className="w-full flex items-center justify-between gap-2 px-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/70 border border-emerald-300 text-emerald-800 text-[11px] font-extrabold tracking-wide uppercase shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                SUPPLY INFLOW (ARTERIES)
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-300 text-blue-800 text-[11px] font-extrabold tracking-wide uppercase shadow-2xs">
                DISTRIBUTION (VEINS)
                <Share2 className="w-3.5 h-3.5 text-blue-600" />
              </div>
            </div>

            {/* Central Flow Diagram with Reduced Radius Pills */}
            <div className="relative w-full my-2.5 flex items-center justify-center">
              
              {/* SVG Connecting Flow Lines */}
              <svg
                viewBox="0 0 540 240"
                className="w-full h-auto max-h-[250px] select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="greenInflowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="blueOutflowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Left Inflow Curves */}
                <path
                  d="M140 38 C185 38, 205 90, 235 105"
                  stroke="url(#greenInflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="237,106 228,101 230,111" fill="#059669" />

                <path
                  d="M140 88 C175 88, 195 105, 230 115"
                  stroke="url(#greenInflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="233,116 223,112 225,121" fill="#059669" />

                <path
                  d="M140 142 C175 142, 195 130, 230 124"
                  stroke="url(#greenInflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="233,123 225,118 223,127" fill="#059669" />

                <path
                  d="M140 196 C185 196, 205 145, 235 132"
                  stroke="url(#greenInflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="237,131 230,126 228,136" fill="#059669" />

                {/* Right Outflow Curves */}
                <path
                  d="M305 105 C335 90, 355 38, 400 38"
                  stroke="url(#blueOutflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="403,38 393,34 393,42" fill="#2563eb" />

                <path
                  d="M310 115 C345 105, 365 88, 400 88"
                  stroke="url(#blueOutflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="403,88 393,84 393,92" fill="#2563eb" />

                <path
                  d="M310 124 C345 130, 365 142, 400 142"
                  stroke="url(#blueOutflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="403,142 393,138 393,146" fill="#2563eb" />

                <path
                  d="M305 132 C335 145, 355 196, 400 196"
                  stroke="url(#blueOutflowGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />
                <polygon points="403,196 393,192 393,200" fill="#2563eb" />

                {/* Center Hub */}
                <circle cx="270" cy="118" r="54" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
                <circle cx="270" cy="64" r="2.5" fill="#0284c7" />
                <circle cx="270" cy="172" r="2.5" fill="#0284c7" />
                <circle cx="216" cy="118" r="2.5" fill="#0284c7" />
                <circle cx="324" cy="118" r="2.5" fill="#0284c7" />

                <circle cx="270" cy="118" r="46" fill="url(#centerGlow)" />
                <circle cx="270" cy="118" r="40" fill="#ffffff" stroke="#0ea5e9" strokeWidth="3.5" />

                <text
                  x="270"
                  y="112"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontWeight="900"
                  fill="#0f172a"
                  letterSpacing="0.05em"
                >
                  ORGANIZATION
                </text>
                <text
                  x="270"
                  y="126"
                  textAnchor="middle"
                  fontSize="8.5"
                  fontWeight="800"
                  fill="#0d9488"
                  letterSpacing="0.06em"
                >
                  SUPPLY CORE
                </text>
                <circle cx="270" cy="136" r="3" fill="#2563eb" />
              </svg>

              {/* Left Floating Cards (rounded-lg) */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1 z-10">
                {inflowArteries.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-emerald-200/90 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
                    >
                      <div
                        className="w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 text-white shadow-2xs"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right Floating Cards (rounded-lg) */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-1 z-10">
                {distributionVeins.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-blue-200/90 shadow-xs hover:border-blue-400 transition-all cursor-pointer"
                    >
                      <div
                        className="w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 text-white shadow-2xs"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Warehouse to Factory Process Scene */}
            <WarehouseToFactoryFlowScene />

            {/* Bottom Solid Blue Organization Health Banner */}
            <div className="w-full rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white text-center py-2.5 px-4 shadow-xs mt-2">
              <p className="text-xs sm:text-sm font-black tracking-wider uppercase font-grotesk">
                ORGANIZATION HEALTH
              </p>
              <p className="text-[9.5px] sm:text-[10.5px] font-bold tracking-widest text-blue-100 uppercase mt-0.5">
                DEPENDENT ON A STRONG REAL-TIME SUPPLY CHAIN
              </p>
            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
              RIGHT COLUMN: KEY CHALLENGES, KEY BENEFITS & GLOBE QUOTE
              ═════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-3">
            
            <div className="space-y-3">
              {/* 1. KEY CHALLENGES */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-rose-600 mb-2 px-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  KEY CHALLENGES
                </h3>
                <div className="space-y-2.5">
                  {keyChallenges.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.title}
                        className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-rose-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3 cursor-pointer"
                      >
                        <div
                          className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 shadow-xs"
                          style={{
                            backgroundColor: c.iconBg,
                            border: `1.5px solid ${c.iconBorder}`,
                            color: c.iconColor,
                          }}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                            {c.title}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                            {c.sub}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. KEY BENEFITS */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-emerald-600 mb-2 px-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  KEY BENEFITS
                </h3>
                <div className="space-y-2.5">
                  {keyBenefits.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={b.title}
                        className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3 cursor-pointer"
                      >
                        <div
                          className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 shadow-xs"
                          style={{
                            backgroundColor: b.iconBg,
                            border: `1.5px solid ${b.iconBorder}`,
                            color: b.iconColor,
                          }}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                            {b.title}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                            {b.sub}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Globe with Handwritten Cursive Quote */}
            <div className="mt-1">
              <GlobeQuoteSection />
            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────
            3. BOTTOM STRIP: 5 PILLARS (Direct on Background)
            ───────────────────────────────────────────────────────── */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-2">
          {fivePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="group flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-200 cursor-pointer relative overflow-hidden"
              >
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: pillar.bg,
                    border: `1.5px solid ${pillar.border}`,
                    color: pillar.color,
                  }}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                      {pillar.label}
                    </p>
                    <span className="text-[9px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>
                  <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                    {pillar.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
