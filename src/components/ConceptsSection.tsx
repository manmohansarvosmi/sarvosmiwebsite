import React from 'react';
import { motion } from 'motion/react';
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
import conceptPlanningImg from '../asset/concept_planning.jpg';
import conceptSupplierImg from '../asset/concept_supplier.jpg';

export const ConceptsSection: React.FC = () => {
  const { isDark } = useTheme();

  const pillars = [
    {
      id: 'planning',
      title: 'REAL-TIME PLANNING & VISIBILITY',
      color: 'from-blue-600 to-sky-500',
      badgeBg: 'bg-[#1868db]',
      badgeShadow: 'shadow-blue-500/25',
      checkColor: 'text-[#1868db]',
      accentColor: '#1868db',
      bgSubtle: 'bg-blue-50/50 dark:bg-blue-950/20',
      borderSubtle: 'border-blue-200/80 dark:border-blue-900/40',
      icon: Laptop,
      image: (
        <div className="relative w-full h-32 flex items-center justify-center shrink-0 overflow-hidden rounded-xl">
          <motion.img
            src={conceptPlanningImg}
            alt="Real-Time Planning & Visibility - 3D Analytics Laptop"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-32 h-32 object-contain drop-shadow-md"
            loading="eager"
          />
        </div>
      ),
      points: [
        'Truly “real-time” software application & implemented on total turnkey basis',
        'Virtually no manual data entry, thus no errors, delays or manipulation',
        'Reasons for Exception, helps to identify bottle-necks as well as quality issues',
        'All raw materials can be classified as critical or non-critical Materials',
        'Production Plan wise material availability / shortages displayed w.r.t. real-time actual inventory',
        'Concept of “committed” and “confirmed” plans',
      ],
    },
    {
      id: 'supplier',
      title: 'SUPPLIER & LOGISTICS CONTROL',
      color: 'from-emerald-600 to-green-500',
      badgeBg: 'bg-[#009a52]',
      badgeShadow: 'shadow-emerald-500/25',
      checkColor: 'text-[#009a52]',
      accentColor: '#009a52',
      bgSubtle: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      borderSubtle: 'border-emerald-200/80 dark:border-emerald-900/40',
      icon: Truck,
      image: (
        <div className="relative w-full h-32 flex items-center justify-center shrink-0 overflow-hidden rounded-xl">
          <motion.img
            src={conceptSupplierImg}
            alt="Supplier & Logistics Control - 3D Logistics Delivery Truck"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-32 h-32 object-contain drop-shadow-md"
            loading="eager"
          />
        </div>
      ),
      points: [
        'Individual Supplier wise & Item wise lead time',
        'Accurate advance requirement schedule to Suppliers (Bulk or Selective Suppliers)',
        'Splitting material requirement to one or multiple Suppliers & real-time ASN activity tracking',
        'Estimated Time of Dispatch (ETD) and Actual Time of Dispatch (ATD) and Arrival (ETA) known in advance to all stake holders',
      ],
    },
    {
      id: 'warehouse',
      title: 'WAREHOUSE & MATERIAL MANAGEMENT',
      color: 'from-purple-600 to-indigo-500',
      badgeBg: 'bg-[#7400d8]',
      badgeShadow: 'shadow-purple-500/25',
      checkColor: 'text-[#7400d8]',
      accentColor: '#7400d8',
      bgSubtle: 'bg-purple-50/50 dark:bg-purple-950/20',
      borderSubtle: 'border-purple-200/80 dark:border-purple-900/40',
      icon: Warehouse,
      image: (
        <div className="relative w-full h-32 flex items-center justify-center shrink-0">
          {/* Glowing 3D Pedestal */}
          <div className="absolute inset-x-4 bottom-1 h-14 rounded-full bg-gradient-to-t from-purple-500/25 via-purple-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-2.5 w-36 h-6 rounded-full bg-purple-500/20 border border-purple-400/30" />

          {/* 3D Rendered Isometric Smart Warehouse & Forklift Visual */}
          <motion.svg
            viewBox="0 0 220 140"
            className="w-40 h-28 relative z-10 drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <defs>
              <linearGradient id="purpleRoofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>
              <linearGradient id="purpleWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id="forkliftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#7c3aed" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Neon Pedestal Ring */}
            <ellipse cx="110" cy="118" rx="80" ry="14" fill="#a855f7" opacity="0.3" filter="url(#purpleGlow)" />
            <ellipse cx="110" cy="114" rx="65" ry="11" fill="#c084fc" opacity="0.4" />

            {/* Smart Warehouse Building (3D Facet) */}
            <g transform="translate(20, 24)">
              {/* Roof Left */}
              <polygon points="40,24 80,0 80,48 40,72" fill="url(#purpleRoofGrad)" />
              {/* Roof Right */}
              <polygon points="80,0 120,24 80,48" fill="#a855f7" />
              {/* Front Facade */}
              <polygon points="0,48 40,24 40,72 0,96" fill="#6d28d9" />
              {/* Main Wall */}
              <rect x="40" y="24" width="70" height="64" rx="3" fill="url(#purpleWallGrad)" stroke="#a855f7" strokeWidth="1.5" />
              
              {/* Bay Roll-up Door with Glow */}
              <rect x="55" y="44" width="36" height="44" rx="2" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1.5" />
              <line x1="55" y1="52" x2="91" y2="52" stroke="#7c3aed" strokeWidth="1.5" />
              <line x1="55" y1="60" x2="91" y2="60" stroke="#7c3aed" strokeWidth="1.5" />
              <line x1="55" y1="68" x2="91" y2="68" stroke="#7c3aed" strokeWidth="1.5" />
              <line x1="55" y1="76" x2="91" y2="76" stroke="#7c3aed" strokeWidth="1.5" />
              {/* Door Sensor Indicator */}
              <circle cx="73" cy="40" r="2.5" fill="#10b981" />
            </g>

            {/* Pallet Cargo Boxes */}
            <g transform="translate(116, 68)">
              {/* Bottom Box */}
              <polygon points="0,16 16,6 32,16 16,26" fill="#fbbf24" />
              <polygon points="0,16 16,26 16,42 0,32" fill="#d97706" />
              <polygon points="16,26 32,16 32,32 16,42" fill="#b45309" />
              {/* Top Box */}
              <g transform="translate(6, -18)">
                <polygon points="0,12 12,4 24,12 12,20" fill="#fde047" />
                <polygon points="0,12 12,20 12,32 0,24" fill="#f59e0b" />
                <polygon points="12,20 24,12 24,24 12,32" fill="#d97706" />
              </g>
            </g>

            {/* 3D Automated Yellow Forklift */}
            <g transform="translate(140, 60)">
              {/* Forklift Body */}
              <rect x="12" y="20" width="34" height="28" rx="4" fill="url(#forkliftGrad)" stroke="#b45309" strokeWidth="1.5" />
              {/* Cabin Roof & Pillars */}
              <rect x="22" y="6" width="20" height="16" rx="2" fill="none" stroke="#334155" strokeWidth="3" />
              <rect x="24" y="8" width="16" height="12" rx="1" fill="#e0f2fe" opacity="0.8" />
              {/* Mast Vertical Rail */}
              <line x1="6" y1="2" x2="6" y2="48" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
              {/* Horizontal Fork */}
              <line x1="-2" y1="42" x2="12" y2="42" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
              {/* Heavy Wheels */}
              <circle cx="20" cy="48" r="8" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="20" cy="48" r="3" fill="#cbd5e1" />
              <circle cx="40" cy="48" r="8" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="40" cy="48" r="3" fill="#cbd5e1" />
              {/* Safety Beacon Light */}
              <circle cx="32" cy="4" r="2.5" fill="#f97316" />
            </g>
          </motion.svg>
        </div>
      ),
      points: [
        'Quick & controlled Material Receipts with complete documentation',
        'Precise docking, each item related to a particular unloading dock',
        'Quick & accurate inward QC / Inspection process',
        '100% accurate putting & picking using Put & Pick-to-Barcode technology',
        'Highly organized and optimized Raw Material warehouse and its activities',
      ],
    },
    {
      id: 'production',
      title: 'PRODUCTION SUPPORT & INVENTORY CONTROL',
      color: 'from-amber-600 to-orange-500',
      badgeBg: 'bg-[#d96b00]',
      badgeShadow: 'shadow-amber-500/25',
      checkColor: 'text-[#d96b00]',
      accentColor: '#d96b00',
      bgSubtle: 'bg-amber-50/50 dark:bg-amber-950/20',
      borderSubtle: 'border-amber-200/80 dark:border-amber-900/40',
      icon: Factory,
      image: (
        <div className="relative w-full h-32 flex items-center justify-center shrink-0">
          {/* Glowing 3D Pedestal */}
          <div className="absolute inset-x-4 bottom-1 h-14 rounded-full bg-gradient-to-t from-amber-500/25 via-amber-400/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute bottom-2.5 w-36 h-6 rounded-full bg-amber-500/20 border border-amber-400/30" />

          {/* 3D Rendered Isometric Conveyor Line & Robotic Feeder */}
          <motion.svg
            viewBox="0 0 220 140"
            className="w-40 h-28 relative z-10 drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <defs>
              <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#9a3412" />
              </linearGradient>
              <linearGradient id="beltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Neon Pedestal Ring */}
            <ellipse cx="110" cy="118" rx="80" ry="14" fill="#f59e0b" opacity="0.3" filter="url(#amberGlow)" />
            <ellipse cx="110" cy="114" rx="65" ry="11" fill="#fcd34d" opacity="0.4" />

            {/* 3D Industrial Conveyor Belt */}
            <g transform="translate(24, 70)">
              {/* Belt Surface */}
              <polygon points="12,12 160,12 148,26 0,26" fill="url(#beltGrad)" stroke="#64748b" strokeWidth="1.5" />
              {/* Belt Leg Supports */}
              <rect x="18" y="26" width="6" height="24" rx="1" fill="#475569" />
              <rect x="74" y="26" width="6" height="24" rx="1" fill="#475569" />
              <rect x="130" y="26" width="6" height="24" rx="1" fill="#475569" />
              {/* Rollers */}
              <circle cx="16" cy="19" r="4.5" fill="#94a3b8" />
              <circle cx="48" cy="19" r="4.5" fill="#94a3b8" />
              <circle cx="80" cy="19" r="4.5" fill="#94a3b8" />
              <circle cx="112" cy="19" r="4.5" fill="#94a3b8" />
              <circle cx="144" cy="19" r="4.5" fill="#94a3b8" />
            </g>

            {/* Articulated Robotic Arm Feeder */}
            <g transform="translate(36, 18)">
              {/* Machine Pedestal Base */}
              <rect x="4" y="32" width="26" height="36" rx="3" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
              <circle cx="17" cy="42" r="5" fill="#7c2d12" />
              
              {/* Primary Boom */}
              <line x1="17" y1="36" x2="48" y2="16" stroke="url(#armGrad)" strokeWidth="6" strokeLinecap="round" />
              <circle cx="48" cy="16" r="5.5" fill="#7c2d12" stroke="#f97316" strokeWidth="2" />
              
              {/* Secondary Arm */}
              <line x1="48" y1="16" x2="72" y2="44" stroke="url(#armGrad)" strokeWidth="5" strokeLinecap="round" />
              <circle cx="72" cy="44" r="4.5" fill="#f97316" />
              
              {/* Vacuum Gripper Head */}
              <line x1="72" y1="44" x2="72" y2="56" stroke="#334155" strokeWidth="4" />
              <line x1="66" y1="56" x2="78" y2="56" stroke="#0f172a" strokeWidth="3" />
            </g>

            {/* 3D Moving WIP Cargo Boxes on Conveyor */}
            <g transform="translate(100, 56)">
              {/* Box 1 */}
              <polygon points="0,10 12,3 24,10 12,17" fill="#fde047" />
              <polygon points="0,10 12,17 12,28 0,21" fill="#f59e0b" />
              <polygon points="12,17 24,10 24,21 12,28" fill="#d97706" />
              {/* Box 2 */}
              <g transform="translate(42, -2)">
                <polygon points="0,10 12,3 24,10 12,17" fill="#fef08a" />
                <polygon points="0,10 12,17 12,28 0,21" fill="#fbbf24" />
                <polygon points="12,17 24,10 24,21 12,28" fill="#d97706" />
              </g>
            </g>

            {/* High-Speed Indicator Screen */}
            <g transform="translate(162, 22)">
              <rect x="0" y="0" width="38" height="32" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <polyline points="10,22 19,10 28,22" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="19" cy="6" r="2" fill="#38bdf8" />
            </g>
          </motion.svg>
        </div>
      ),
      points: [
        'On-time, quick and accurate material delivery at production stage, every time',
        'Defective, Damaged, Missing items from production line replaced very quickly',
        'WIP inventory returned back to RM Store if a production plan is cancelled or put on hold',
        'WIP Inventory of cancelled production plans back to original storage location with complete inspection or QC',
      ],
    },
  ];

  return (
    <section
      id="concepts-section"
      className="w-full py-6 sm:py-8 px-3 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5">
        
        {/* ═══════════ HEADER (MATCHING USER SCREENSHOT) ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`px-4 sm:px-6 py-3.5 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left ${
            isDark ? 'bg-slate-900/90 border-slate-800 shadow-xs' : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          {/* Brand Title */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <img
                src={sarvosmiLogo}
                alt="Sarvosmi Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 border-l border-slate-300 dark:border-slate-700">
                Consulting
              </span>
            </div>
            <p className="text-[10.5px] font-extrabold text-slate-500 dark:text-slate-400">
              Some very practical concepts built into
            </p>
            <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 dark:text-white leading-tight">
              <span className="text-red-600 italic">Sarvosmi</span> <span className="text-emerald-600">ERX™ RMSC</span>
            </h2>
          </div>

          {/* Center Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-black text-slate-800 dark:text-slate-200">
              “Real-Time” Raw Material Supply Chain execution software
            </span>
          </div>

          {/* Slogan */}
          <div className="text-center md:text-right hidden sm:block shrink-0">
            <p className="text-[10.5px] font-black italic tracking-wide text-slate-700 dark:text-slate-300 font-serif">
              Smarter Materials
            </p>
            <p className="text-xs sm:text-sm font-black italic text-emerald-600 dark:text-emerald-400 font-serif">
              Stronger Tomorrow
            </p>
          </div>
        </motion.div>

        {/* ═══════════ 4 HORIZONTAL CONCEPT CARDS (ILLUSTRATION ON LEFT + EXACT BULLETS ON RIGHT) ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
          {pillars.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -2 }}
                className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800 shadow-xs hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Left Colored Accent Bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: pillar.accentColor }}
                />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 pl-2">
                  
                  {/* Left Column: AI Image / 3D Rendered Model on Pedestal */}
                  <div className="w-full sm:w-40 flex flex-col items-center shrink-0">
                    {pillar.image}

                    {/* Pillar Title Banner Badge */}
                    <div
                      className={`w-full text-center py-2 px-2 rounded-lg text-white font-black text-[10px] sm:text-[10.5px] tracking-wide shadow-xs mt-1 ${pillar.badgeBg} ${pillar.badgeShadow}`}
                    >
                      {pillar.title}
                    </div>
                  </div>

                  {/* Right Column: 100% Exact Verbatim Bullet Points */}
                  <div className="flex-1 w-full">
                    <ul className="space-y-2">
                      {pillar.points.map((ptText, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-[11px] sm:text-[11.5px] font-medium text-slate-700 dark:text-slate-200 leading-snug group/item"
                        >
                          <span
                            className={`shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center ${pillar.checkColor}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                          <span className="flex-1">
                            {ptText}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Accent Line */}
                <div
                  className="mt-3.5 h-1 w-full rounded-full opacity-30"
                  style={{ backgroundColor: pillar.accentColor }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════ BOTTOM CORE SUMMARY BANNER ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-3 sm:p-3.5 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            
            {/* Left Cogs */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Cog className="w-6 h-6 text-blue-600 animate-[spin_10s_linear_infinite]" />
                <Cog className="w-3.5 h-3.5 text-amber-500 animate-[spin_6s_linear_infinite_reverse] absolute -top-0.5 -right-0.5" />
              </div>
            </div>

            {/* Center Core Message */}
            <div className="text-center max-w-3xl">
              <p className="text-xs sm:text-[12.5px] font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-red-600 italic">Sarvosmi ERX</strong><sup className="text-[8.5px] font-bold">TM</sup>{' '}
                <strong className="text-emerald-600">RMSC</strong> is a completely <span className="font-extrabold text-blue-600 dark:text-blue-400">system &amp; process driven</span> platform which removes uncertainty and stress from daily routine work, while improving{' '}
                <span className="font-black text-blue-600 dark:text-blue-400">efficiency</span>,{' '}
                <span className="font-black text-purple-600 dark:text-purple-400">productivity</span> and{' '}
                <span className="font-black text-emerald-600 dark:text-emerald-400">profitability</span>.
              </p>
            </div>

            {/* Right Target Growth Indicator */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-end gap-1 h-6">
                <div className="w-1.5 h-2 bg-blue-500 rounded-xs" />
                <div className="w-1.5 h-3.5 bg-purple-500 rounded-xs" />
                <div className="w-1.5 h-4.5 bg-amber-500 rounded-xs" />
                <div className="w-1.5 h-6 bg-emerald-500 rounded-xs" />
              </div>
              <Target className="w-5 h-5 text-red-500" />
            </div>

          </div>

          <div className="mt-2 text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
              PEOPLE &nbsp;·&nbsp; PROCESS &nbsp;·&nbsp; TECHNOLOGY &nbsp;·&nbsp; GROWTH
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
