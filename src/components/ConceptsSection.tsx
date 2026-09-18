import React from 'react';
import {
  Laptop,
  Truck,
  Warehouse,
  Factory,
  CheckCircle2,
  TrendingUp,
  Target,
  Clock,
  Sparkles,
  Cog,
  FileCheck2,
  MapPin,
  Barcode,
  RefreshCcw,
  Zap,
  Activity,
  Boxes,
  ShieldCheck,
  Search,
  CheckSquare,
  AlertCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import sarvosmiLogo from '../asset/sarvosmi.png';

export const ConceptsSection: React.FC = () => {
  const { isDark } = useTheme();

  const pillars = [
    {
      id: 'planning',
      title: 'REAL-TIME PLANNING & VISIBILITY',
      color: 'from-blue-600 to-sky-500',
      badgeBg: 'bg-[#1868db]',
      badgeShadow: 'shadow-blue-500/30',
      pedestalColor: 'rgba(59, 130, 246, 0.15)',
      checkColor: 'text-[#1868db]',
      checkBg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/60',
      accentColor: '#1868db',
      icon: Laptop,
      illustration: (
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Radial Light Pedestal */}
          <div className="absolute inset-x-4 bottom-2 h-16 rounded-full bg-gradient-to-t from-blue-500/20 via-blue-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-3 w-40 h-7 rounded-full bg-blue-500/15 dark:bg-blue-400/10 border border-blue-400/20" />

          {/* SVG Laptop with Analytics & Magnifier */}
          <svg viewBox="0 0 200 130" className="w-48 h-28 relative z-10 drop-shadow-lg">
            {/* Base Pedestal Ring */}
            <ellipse cx="100" cy="112" rx="72" ry="14" fill="#3b82f6" opacity="0.25" />
            <ellipse cx="100" cy="108" rx="60" ry="11" fill="#60a5fa" opacity="0.35" />

            {/* Laptop Body Outer */}
            <rect x="42" y="24" width="116" height="74" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            
            {/* Screen Inner */}
            <rect x="48" y="30" width="104" height="62" rx="3" fill="#090d16" />

            {/* Grid Lines inside Screen */}
            <line x1="48" y1="48" x2="152" y2="48" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="48" y1="66" x2="152" y2="66" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

            {/* Bar Charts */}
            <rect x="56" y="58" width="8" height="26" rx="1.5" fill="#2563eb" opacity="0.9" />
            <rect x="68" y="48" width="8" height="36" rx="1.5" fill="#38bdf8" opacity="0.9" />
            <rect x="80" y="64" width="8" height="20" rx="1.5" fill="#60a5fa" opacity="0.9" />
            <rect x="92" y="42" width="8" height="42" rx="1.5" fill="#818cf8" opacity="0.9" />

            {/* Analytics Pulse Line */}
            <path
              d="M54 74 L70 54 L84 62 L106 38 L122 50 L144 32"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Data Glow Dots */}
            <circle cx="70" cy="54" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="106" cy="38" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="144" cy="32" r="3.5" fill="#38bdf8" />

            {/* Analytics Magnifying Glass */}
            <g transform="translate(118, 52)">
              <circle cx="14" cy="14" r="14" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="24" y1="24" x2="36" y2="36" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
              {/* Inner Mini Trend */}
              <path d="M7 16 L12 10 L17 14 L22 8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Laptop Base Hinge */}
            <path d="M30 98 L170 98 L158 106 L42 106 Z" fill="#334155" stroke="#475569" strokeWidth="1" />
            <rect x="85" y="99" width="30" height="3" rx="1" fill="#64748b" />
          </svg>
        </div>
      ),
      points: [
        { text: 'Truly “real-time” software application & implemented on total turnkey basis', icon: Zap },
        { text: 'Virtually no manual data entry, thus no errors, delays or manipulation', icon: ShieldCheck },
        { text: 'Reasons for Exception, helps to identify bottle-necks as well as quality issues', icon: AlertCircle },
        { text: 'All raw materials can be classified as critical or non-critical Materials', icon: Layers },
        { text: 'Production Plan wise material availability / shortages displayed w.r.t. real-time actual inventory', icon: Activity },
        { text: 'Concept of “committed” and “confirmed” plans', icon: FileCheck2 },
      ],
    },
    {
      id: 'supplier',
      title: 'SUPPLIER & LOGISTICS CONTROL',
      color: 'from-emerald-600 to-green-500',
      badgeBg: 'bg-[#009a52]',
      badgeShadow: 'shadow-emerald-500/30',
      pedestalColor: 'rgba(16, 185, 129, 0.15)',
      checkColor: 'text-[#009a52]',
      checkBg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60',
      accentColor: '#009a52',
      icon: Truck,
      illustration: (
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Radial Light Pedestal */}
          <div className="absolute inset-x-4 bottom-2 h-16 rounded-full bg-gradient-to-t from-emerald-500/20 via-emerald-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-3 w-40 h-7 rounded-full bg-emerald-500/15 dark:bg-emerald-400/10 border border-emerald-400/20" />

          {/* SVG Delivery Truck with Clipboard & GPS */}
          <svg viewBox="0 0 200 130" className="w-48 h-28 relative z-10 drop-shadow-lg">
            {/* Base Pedestal Ring */}
            <ellipse cx="100" cy="112" rx="72" ry="14" fill="#10b981" opacity="0.25" />
            <ellipse cx="100" cy="108" rx="60" ry="11" fill="#34d399" opacity="0.35" />

            {/* GPS Beacon on top of Truck */}
            <g transform="translate(68, 14)">
              <circle cx="8" cy="8" r="7" fill="#009a52" />
              <path d="M8 8 L8 22" stroke="#009a52" strokeWidth="2.5" />
              <circle cx="8" cy="8" r="3" fill="#ffffff" />
              <circle cx="8" cy="8" r="11" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Logistics Cargo Box (White/Clean) */}
            <rect x="36" y="38" width="76" height="52" rx="4" fill="#f8fafc" stroke="#009a52" strokeWidth="2.5" />
            <line x1="36" y1="56" x2="112" y2="56" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Truck Cabin (Green) */}
            <path d="M112 50 L134 50 L146 64 L146 90 L112 90 Z" fill="#009a52" stroke="#047857" strokeWidth="1.5" />
            
            {/* Windshield */}
            <path d="M118 54 L132 54 L141 64 L118 64 Z" fill="#d1fae5" stroke="#009a52" strokeWidth="1" />

            {/* Headlight */}
            <rect x="143" y="78" width="4" height="6" rx="1" fill="#fef08a" />

            {/* Truck Wheels */}
            {/* Rear Wheel 1 */}
            <circle cx="58" cy="92" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="58" cy="92" r="5" fill="#94a3b8" />
            {/* Rear Wheel 2 */}
            <circle cx="86" cy="92" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="86" cy="92" r="5" fill="#94a3b8" />
            {/* Front Wheel */}
            <circle cx="132" cy="92" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="132" cy="92" r="5" fill="#94a3b8" />

            {/* Clipboard with Checklist Document on Right */}
            <g transform="translate(142, 22)">
              <rect x="0" y="4" width="38" height="54" rx="4" fill="#ffffff" stroke="#009a52" strokeWidth="2" />
              {/* Clip Top */}
              <rect x="10" y="0" width="18" height="8" rx="2" fill="#009a52" />
              <circle cx="19" cy="3" r="1.5" fill="#ffffff" />
              {/* Document Text Lines */}
              <line x1="6" y1="18" x2="32" y2="18" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="26" x2="32" y2="26" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="34" x2="26" y2="34" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="42" x2="20" y2="42" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              {/* Mini Checkmark on doc */}
              <polyline points="24,40 27,43 33,37" fill="none" stroke="#009a52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      ),
      points: [
        { text: 'Individual Supplier wise & Item wise lead time', icon: Clock },
        { text: 'Accurate advance requirement schedule to Suppliers (Bulk or Selective Suppliers)', icon: FileCheck2 },
        { text: 'Splitting material requirement to one or multiple Suppliers & real-time ASN activity tracking', icon: Boxes },
        { text: 'Estimated Time of Dispatch (ETD) and Actual Time of Dispatch (ATD) and Arrival (ETA) known in advance to all stake holders', icon: MapPin },
      ],
    },
    {
      id: 'warehouse',
      title: 'WAREHOUSE & MATERIAL MANAGEMENT',
      color: 'from-purple-600 to-indigo-500',
      badgeBg: 'bg-[#7400d8]',
      badgeShadow: 'shadow-purple-500/30',
      pedestalColor: 'rgba(139, 92, 246, 0.15)',
      checkColor: 'text-[#7400d8]',
      checkBg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60',
      accentColor: '#7400d8',
      icon: Warehouse,
      illustration: (
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Radial Light Pedestal */}
          <div className="absolute inset-x-4 bottom-2 h-16 rounded-full bg-gradient-to-t from-purple-500/20 via-purple-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-3 w-40 h-7 rounded-full bg-purple-500/15 dark:bg-purple-400/10 border border-purple-400/20" />

          {/* SVG Warehouse, Pallets, and Forklift */}
          <svg viewBox="0 0 200 130" className="w-48 h-28 relative z-10 drop-shadow-lg">
            {/* Base Pedestal Ring */}
            <ellipse cx="100" cy="112" rx="72" ry="14" fill="#8b5cf6" opacity="0.25" />
            <ellipse cx="100" cy="108" rx="60" ry="11" fill="#a78bfa" opacity="0.35" />

            {/* Warehouse Facility Building */}
            <polygon points="30,50 68,22 106,50" fill="#581c87" />
            <polygon points="68,22 106,50 114,46 76,18" fill="#7e22ce" />
            <rect x="30" y="50" width="76" height="46" fill="#7400d8" stroke="#c084fc" strokeWidth="1.5" />
            
            {/* Main Warehouse Shutter Door */}
            <rect x="50" y="62" width="28" height="34" rx="2" fill="#ede9fe" />
            <line x1="50" y1="70" x2="78" y2="70" stroke="#7400d8" strokeWidth="1.5" />
            <line x1="50" y1="78" x2="78" y2="78" stroke="#7400d8" strokeWidth="1.5" />
            <line x1="50" y1="86" x2="78" y2="86" stroke="#7400d8" strokeWidth="1.5" />

            {/* Stored Pallet Boxes */}
            <g transform="translate(108, 54)">
              {/* Bottom Box */}
              <rect x="0" y="24" width="22" height="18" rx="1.5" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
              <line x1="11" y1="24" x2="11" y2="42" stroke="#b45309" strokeWidth="1" />
              {/* Top Box */}
              <rect x="2" y="4" width="20" height="18" rx="1.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
              <line x1="12" y1="4" x2="12" y2="22" stroke="#d97706" strokeWidth="1" />
            </g>

            {/* Industrial Trolley / Forklift on Right */}
            <g transform="translate(132, 56)">
              {/* Body */}
              <rect x="10" y="16" width="28" height="24" rx="3" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
              {/* Cabin Frame */}
              <rect x="20" y="4" width="16" height="14" rx="2" fill="none" stroke="#475569" strokeWidth="2.5" />
              {/* Fork Mast */}
              <line x1="6" y1="2" x2="6" y2="40" stroke="#334155" strokeWidth="3" />
              <line x1="0" y1="36" x2="12" y2="36" stroke="#334155" strokeWidth="3" />
              {/* Wheels */}
              <circle cx="16" cy="42" r="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
              <circle cx="34" cy="42" r="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
            </g>
          </svg>
        </div>
      ),
      points: [
        { text: 'Quick & controlled Material Receipts with complete documentation', icon: FileCheck2 },
        { text: 'Precise docking, each item related to a particular unloading dock', icon: MapPin },
        { text: 'Quick & accurate inward QC / Inspection process', icon: Search },
        { text: '100% accurate putting & picking using Put & Pick-to-Barcode technology', icon: Barcode },
        { text: 'Highly organized and optimized Raw Material warehouse and its activities', icon: Boxes },
      ],
    },
    {
      id: 'production',
      title: 'PRODUCTION SUPPORT & INVENTORY CONTROL',
      color: 'from-amber-600 to-orange-500',
      badgeBg: 'bg-[#d96b00]',
      badgeShadow: 'shadow-amber-500/30',
      pedestalColor: 'rgba(245, 158, 11, 0.15)',
      checkColor: 'text-[#d96b00]',
      checkBg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60',
      accentColor: '#d96b00',
      icon: Factory,
      illustration: (
        <div className="relative w-full h-32 flex items-center justify-center">
          {/* Radial Light Pedestal */}
          <div className="absolute inset-x-4 bottom-2 h-16 rounded-full bg-gradient-to-t from-amber-500/20 via-amber-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-3 w-40 h-7 rounded-full bg-amber-500/15 dark:bg-amber-400/10 border border-amber-400/20" />

          {/* SVG Assembly Line Conveyor & Robotic Arm */}
          <svg viewBox="0 0 200 130" className="w-48 h-28 relative z-10 drop-shadow-lg">
            {/* Base Pedestal Ring */}
            <ellipse cx="100" cy="112" rx="72" ry="14" fill="#f59e0b" opacity="0.25" />
            <ellipse cx="100" cy="108" rx="60" ry="11" fill="#fbbf24" opacity="0.35" />

            {/* Industrial Conveyor Belt */}
            <rect x="28" y="76" width="144" height="12" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            {/* Conveyor Rollers */}
            <circle cx="40" cy="82" r="3.5" fill="#94a3b8" />
            <circle cx="65" cy="82" r="3.5" fill="#94a3b8" />
            <circle cx="90" cy="82" r="3.5" fill="#94a3b8" />
            <circle cx="115" cy="82" r="3.5" fill="#94a3b8" />
            <circle cx="140" cy="82" r="3.5" fill="#94a3b8" />
            <circle cx="160" cy="82" r="3.5" fill="#94a3b8" />

            {/* Robotic Arm / Feeder on Left */}
            <g transform="translate(32, 28)">
              {/* Machine Base */}
              <rect x="0" y="16" width="22" height="34" rx="2" fill="#d96b00" stroke="#9a3412" strokeWidth="1.5" />
              {/* Articulated Arm */}
              <line x1="20" y1="24" x2="48" y2="38" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
              <circle cx="48" cy="38" r="4.5" fill="#7c2d12" />
              <line x1="48" y1="38" x2="62" y2="48" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" />
              <circle cx="62" cy="48" r="3.5" fill="#f97316" />
            </g>

            {/* Moving WIP Materials / Packages */}
            <rect x="80" y="62" width="18" height="14" rx="1.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <rect x="114" y="62" width="18" height="14" rx="1.5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

            {/* Upward Growth / Speed Chevron Screen on Top-Right */}
            <g transform="translate(138, 20)">
              <rect x="0" y="0" width="36" height="30" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              {/* Chevron Up Arrow */}
              <polyline points="10,20 18,10 26,20" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      ),
      points: [
        { text: 'On-time, quick and accurate material delivery at production stage, every time', icon: Clock },
        { text: 'Defective, Damaged, Missing items from production line replaced very quickly', icon: RefreshCcw },
        { text: 'WIP inventory returned back to RM Store if a production plan is cancelled or put on hold', icon: Boxes },
        { text: 'WIP Inventory of cancelled production plans back to original storage location with complete inspection or QC', icon: ShieldCheck },
      ],
    },
  ];

  return (
    <section id="concepts-section" className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* ═══════════ HEADER ═══════════ */}
        <div
          className={`px-4 sm:px-8 py-5 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {/* Brand Title */}
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
            <p className="text-xs font-extrabold text-slate-600 dark:text-slate-400">
              Some very practical concepts built into
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              <span className="text-red-600 italic">Sarvosmi</span> <span className="text-emerald-600">ERX™ RMSC</span>
            </h2>
          </div>

          {/* Badge pill in center */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200">
              “Real-Time” Raw Material Supply Chain execution software
            </span>
          </div>

          {/* Slogan */}
          <div className="text-center md:text-right hidden sm:block">
            <p className="text-xs font-black italic tracking-wide text-slate-700 dark:text-slate-300 font-serif">
              Smarter Materials
            </p>
            <p className="text-sm font-black italic text-emerald-600 dark:text-emerald-400 font-serif">
              Stronger Tomorrow
            </p>
          </div>
        </div>

        {/* ═══════════ 4 PILLARS GRID (EXACT FIDELITY TO USER SPECIFICATION) ═══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {pillars.map((pillar) => {
            return (
              <div
                key={pillar.id}
                className={`rounded-xl border flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group overflow-hidden ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'bg-white border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Illustration Pod */}
                  <div className="pt-5 px-4 pb-2 flex flex-col items-center bg-gradient-to-b from-slate-50/80 to-transparent dark:from-slate-800/30">
                    {pillar.illustration}

                    {/* Pillar Title Banner Badge (Solid Vibrant color) */}
                    <div
                      className={`w-full text-center py-2.5 px-3 rounded-lg text-white font-black text-[12px] sm:text-[12.5px] tracking-wide shadow-md mt-1 ${pillar.badgeBg} ${pillar.badgeShadow}`}
                    >
                      {pillar.title}
                    </div>
                  </div>

                  {/* Bullet Points with Crisp Checkmarks */}
                  <div className="p-4 sm:p-5">
                    <ul className="space-y-3.5">
                      {pillar.points.map((pt, pIdx) => {
                        const PointIcon = pt.icon;
                        return (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-[12.5px] font-medium text-slate-700 dark:text-slate-200 leading-relaxed group/item transition-colors"
                          >
                            <span
                              className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${pillar.checkColor}`}
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                            <span className="flex-1">
                              {pt.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Bottom Solid Accent Strip matching card theme */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: pillar.accentColor }}
                />
              </div>
            );
          })}
        </div>

        {/* ═══════════ BOTTOM BANNER ═══════════ */}
        <div className={`p-4 sm:p-5 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            
            {/* Left Cogs Graphic */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Cog className="w-8 h-8 text-blue-600 animate-[spin_10s_linear_infinite]" />
                <Cog className="w-5 h-5 text-amber-500 animate-[spin_6s_linear_infinite_reverse] absolute -top-1 -right-1" />
                <Cog className="w-4 h-4 text-emerald-500 animate-[spin_8s_linear_infinite] absolute -bottom-1 -left-1" />
              </div>
            </div>

            {/* Center Core Message */}
            <div className="text-center max-w-3xl">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-red-600 italic">Sarvosmi ERX</strong><sup className="text-[10px] font-bold">TM</sup>{' '}
                <strong className="text-emerald-600">RMSC</strong> is a completely <span className="font-extrabold text-blue-600 dark:text-blue-400">system &amp; process driven</span> platform which removes uncertainty and stress from daily routine work, while improving{' '}
                <span className="font-black text-blue-600 dark:text-blue-400">efficiency</span>,{' '}
                <span className="font-black text-purple-600 dark:text-purple-400">productivity</span> and{' '}
                <span className="font-black text-emerald-600 dark:text-emerald-400">profitability</span>.
              </p>
            </div>

            {/* Right Target / Growth Graphic */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-end gap-1 h-8">
                <div className="w-2.5 h-3 bg-blue-500 rounded-sm" />
                <div className="w-2.5 h-5 bg-purple-500 rounded-sm" />
                <div className="w-2.5 h-7 bg-amber-500 rounded-sm" />
                <div className="w-2.5 h-8 bg-emerald-500 rounded-sm" />
              </div>
              <Target className="w-7 h-7 text-red-500" />
            </div>

          </div>

          {/* Footer Pillars Tag */}
          <div className="mt-3 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
              PEOPLE &nbsp;|&nbsp; PROCESS &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
