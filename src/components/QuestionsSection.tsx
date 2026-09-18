import React, { useState } from 'react';
import {
  ClipboardList,
  Boxes,
  CheckCircle,
  Warehouse,
  Truck,
  AlertTriangle,
  HelpCircle,
  UserCheck,
  Shield,
  Layers,
  Factory,
  Wrench,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Activity,
  Package,
  Clock,
  CheckCircle2,
  Lock,
  Container,
  BarChart3
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ═══════════════════════════════════════════════════════════
   QUESTION 1 COMPONENT (Real Questions. Real Challenges)
═══════════════════════════════════════════════════════════ */
const Question1Card: React.FC = () => {
  const { isDark } = useTheme();

  const questions = [
    {
      id: 1,
      title: 'Which Production Plan can be executed?',
      subText: 'Shortage vs available RM inventory sync',
      category: 'PLANNING DILEMMA',
      icon: ClipboardList,
      color: '#3b82f6',
    },
    {
      id: 2,
      title: 'Why is the material still at dock?',
      subText: 'Unloading delay & GRR verification bottleneck',
      category: 'DOCKING INQUIRY',
      icon: Container,
      color: '#f97316',
    },
    {
      id: 3,
      title: 'When will the QC be done?',
      subText: 'Inward inspection queue & engineer availability',
      category: 'QUALITY CLEARANCE',
      icon: CheckCircle2,
      color: '#10b981',
    },
    {
      id: 4,
      title: 'Is the unloading dock free?',
      subText: 'Real-time bay occupancy & turn-around time',
      category: 'LOGISTICS BAY',
      icon: Warehouse,
      color: '#8b5cf6',
    },
    {
      id: 5,
      title: 'When will my consignment be arriving?',
      subText: 'Supplier dispatch telemetry & ETA tracking',
      category: 'TRANSIT TRACKING',
      icon: Truck,
      color: '#f43f5e',
    },
    {
      id: 6,
      title: 'Production Plan cannot be executed due to shortage',
      subText: 'Unresolved material constraints on shop floor',
      category: 'EXECUTION BLOCKER',
      icon: AlertTriangle,
      color: '#eab308',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 relative">

      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
          REAL PLANNING CHALLENGES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Real Questions. <span className="text-blue-600 dark:text-blue-400">Real Challenges.</span>
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
          Across planning, materials, QC, logistics and supply chain.
        </p>
      </div>

      {/* Module-Style Question Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8 relative z-10">
        {questions.map((q) => {
          const Icon = q.icon;
          return (
            <div
              key={q.id}
              className={`p-3.5 rounded-lg border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between cursor-pointer ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700/80 hover:border-blue-400'
                  : 'bg-white border-slate-200/90 hover:border-blue-300 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: isDark ? `${q.color}22` : `${q.color}15`,
                    color: q.color,
                    border: `1.5px solid ${q.color}${isDark ? '40' : '30'}`
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-bold leading-snug text-slate-900 dark:text-white">
                    {q.title}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal font-medium">
                    {q.subText}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span
                  className="text-[9px] font-semibold tracking-wide uppercase"
                  style={{ color: q.color }}
                >
                  {q.category}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Team Silhouettes & Industrial Background SVG */}
      <div className="relative w-full h-44 sm:h-56 overflow-hidden rounded-md bg-gradient-to-t from-blue-100/50 via-sky-50/20 to-transparent dark:from-slate-800/60 dark:via-slate-900/30 dark:to-transparent flex items-end justify-center border border-slate-200/50 dark:border-slate-800">
        
        {/* Floating Sarvosmi ERX Badge in center */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-xs bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 animate-bounce">
          <span className="font-extrabold italic text-red-600 text-sm">Sarvosmi</span>
          <span className="font-extrabold text-emerald-600 text-xs tracking-wider">ERX™</span>
        </div>

        {/* Floating Question marks */}
        <span className="absolute top-10 left-[18%] text-blue-400 dark:text-blue-500 font-bold text-2xl opacity-60 animate-pulse">?</span>
        <span className="absolute top-6 left-[35%] text-amber-400 dark:text-amber-500 font-bold text-xl opacity-60">?</span>
        <span className="absolute top-12 right-[35%] text-purple-400 dark:text-purple-500 font-bold text-xl opacity-60">?</span>
        <span className="absolute top-8 right-[18%] text-rose-400 dark:text-rose-500 font-bold text-2xl opacity-60 animate-pulse">?</span>

        {/* Silhouette SVG */}
        <svg viewBox="0 0 900 220" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
          <g opacity={isDark ? '0.2' : '0.35'} fill="#64748b">
            <rect x="20" y="150" width="220" height="15" rx="3" />
            <line x1="40" y1="165" x2="40" y2="200" stroke="#64748b" strokeWidth="4" />
            <line x1="120" y1="165" x2="120" y2="200" stroke="#64748b" strokeWidth="4" />
            <line x1="200" y1="165" x2="200" y2="200" stroke="#64748b" strokeWidth="4" />
            <rect x="50" y="125" width="25" height="25" rx="2" />
            <rect x="100" y="125" width="25" height="25" rx="2" />
            <rect x="150" y="125" width="25" height="25" rx="2" />
            <path d="M40 120 L70 70 L110 85 L115 115" stroke="#64748b" strokeWidth="8" fill="none" strokeLinecap="round" />
            <rect x="700" y="60" width="180" height="140" fill="none" stroke="#64748b" strokeWidth="4" />
            <line x1="700" y1="110" x2="880" y2="110" stroke="#64748b" strokeWidth="3" />
            <line x1="700" y1="155" x2="880" y2="155" stroke="#64748b" strokeWidth="3" />
            <rect x="710" y="75" width="30" height="30" rx="2" />
            <rect x="750" y="75" width="30" height="30" rx="2" />
            <rect x="720" y="120" width="35" height="30" rx="2" />
            <rect x="770" y="120" width="35" height="30" rx="2" />
          </g>

          <g fill={isDark ? '#1e293b' : '#0f172a'}>
            <circle cx="310" cy="115" r="20" />
            <path d="M290 110 C290 95 330 95 330 110 Z" fill="#f59e0b" />
            <path d="M270 220 L275 145 C275 135 345 135 345 145 L350 220 Z" />

            <circle cx="390" cy="120" r="19" />
            <path d="M375 120 C370 145 365 160 365 170 C375 170 380 150 380 135 Z" />
            <path d="M355 220 L360 150 C360 140 420 140 420 150 L425 220 Z" />

            <circle cx="470" cy="110" r="22" />
            <path d="M485 100 C500 95 510 115 490 120" stroke={isDark ? '#334155' : '#1e293b'} strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M430 220 L435 140 C435 130 505 130 505 140 L510 220 Z" fill={isDark ? '#334155' : '#1e293b'} />

            <circle cx="550" cy="122" r="19" />
            <path d="M515 220 L520 152 C520 142 580 142 580 152 L585 220 Z" />

            <circle cx="630" cy="115" r="20" />
            <path d="M590 220 L595 145 C595 135 665 135 665 145 L670 220 Z" />
            <rect x="655" y="160" width="22" height="32" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" transform="rotate(15 655 160)" />
          </g>
        </svg>
      </div>

      {/* Bottom Solution Bar */}
      <div className="mt-6 p-4 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white text-center shadow-lg">
        <h3 className="text-base sm:text-lg font-black tracking-wide">
          Get answers with <span className="underline decoration-emerald-400">Sarvosmi ERX™</span>
        </h3>
        <p className="text-xs font-bold text-blue-100 mt-0.5 tracking-wider uppercase">
          Plan Smarter &nbsp;|&nbsp; Execute Faster &nbsp;|&nbsp; Keep Supply Flowing
        </p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   QUESTION 2 COMPONENT (Role-Based Cards)
═══════════════════════════════════════════════════════════ */
const Question2Card: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'ppc',
      role: 'PPC Manager',
      category: 'PLANNING & INVENTORY',
      color: '#3b82f6',
      icon: ClipboardList,
      speech: 'I am PPC Manager, I don’t know which Production Plan to execute as I have no idea of actual inventory.',
      subText: 'Lack of real-time stock sync',
    },
    {
      id: 'buyer',
      role: 'Buyer',
      category: 'SOURCING COORDINATION',
      color: '#ec4899',
      icon: UserCheck,
      speech: 'I am Buyer and many times I am told at last moment of raw material shortages, it takes lot of time & effort to co-ordinate.',
      subText: 'Late notice on item shortages',
    },
    {
      id: 'supplier',
      role: 'Supplier',
      category: 'VENDOR LEAD TIME',
      color: '#10b981',
      icon: Truck,
      speech: 'I am Supplier I can’t keep excess inventory to meet your last minute demand for raw materials.',
      subText: 'Volatile last-minute pull',
    },
    {
      id: 'security',
      role: 'Gate Security',
      category: 'GATE ENTRY CLEARANCE',
      color: '#8b5cf6',
      icon: Shield,
      speech: "I am gate Security I don't know which consignment is coming when and what is it's priority.",
      subText: 'No advance ASN visibility',
    },
    {
      id: 'dock',
      role: 'Dock Supervisor',
      category: 'BAY OCCUPANCY',
      color: '#f97316',
      icon: Warehouse,
      speech: 'I am Dock Supervisor. The consignment may be urgent, but the dock is already occupied. So wait.',
      subText: 'Unorganized dock congestion',
    },
    {
      id: 'qc',
      role: 'Inward QC Manager',
      category: 'QUALITY ROUTING',
      color: '#7c3aed',
      icon: CheckCircle,
      speech: 'I am Inward QC Manager, even if the consignment has come I cannot get QC done as all QC Engineers may be busy.',
      subText: 'Inspection backlog & delays',
    },
    {
      id: 'store',
      role: 'Storekeeper',
      category: 'STORE OPERATIONS',
      color: '#0284c7',
      icon: Boxes,
      speech: 'I am Storekeeper, I have no advance information about new incoming consignment or material to be issued, so my store is in mess.',
      subText: 'No advance put-away plan',
    },
    {
      id: 'production_sup',
      role: 'Production Supervisor',
      category: 'LINE FEEDING',
      color: '#d97706',
      icon: Factory,
      speech: 'I am Production Supervisor and I have not received the materials till now, operators are sitting idle.',
      subText: 'Delayed line feeding',
    },
    {
      id: 'assembly',
      role: 'Assembly Operator',
      category: 'SHOP FLOOR SCRAP',
      color: '#e11d48',
      icon: Wrench,
      speech: 'I am Assembly Operator, 5 parts are wrong or defective, I am waiting for replacement for last 2 hours.',
      subText: 'Slow defect turnaround',
    },
    {
      id: 'management',
      role: 'Management',
      category: 'EXECUTIVE VISIBILITY',
      color: '#059669',
      icon: TrendingUp,
      speech: 'As Management, I have invested huge amount in software, gap between physical and logical inventory keeps increasing.',
      subText: 'Physical vs ERP discrepancy',
    },
    {
      id: 'sarvosmi',
      role: 'Sarvosmi Consulting',
      category: 'ENTERPRISE SOLUTION',
      color: '#06b6d4',
      icon: Sparkles,
      speech: 'I am from Sarvosmi Consulting Services, please tell me all your issues. I think I can help you.',
      subText: 'Turnkey RMSC execution',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 relative">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
          ROLE-BASED SUPPLY CHAIN CHALLENGES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Different Roles. Real Challenges.{' '}
          <span className="text-emerald-600 dark:text-emerald-400">One Solution Ahead.</span>
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
          Every stakeholder encounters friction in the conventional raw material supply chain.
        </p>
      </div>

      {/* Deskera Module Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
        {roles.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedRole === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedRole(isSelected ? null : item.id)}
              className={`rounded-lg border p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                isSelected
                  ? 'ring-2 ring-emerald-500 shadow-lg'
                  : isDark
                  ? 'bg-slate-800/80 border-slate-700/80 hover:border-slate-500'
                  : 'bg-white border-slate-200/90 hover:border-blue-300 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isDark ? `${item.color}22` : `${item.color}15`,
                      color: item.color,
                      border: `1.5px solid ${item.color}${isDark ? '40' : '30'}`
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                      {item.role}
                    </h3>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400 truncate">
                      {item.subText}
                    </p>
                  </div>
                </div>

                <p className="text-xs font-medium leading-relaxed my-2 text-slate-700 dark:text-slate-300">
                  {item.speech}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span
                  className="text-[9px] font-semibold tracking-wide uppercase"
                  style={{ color: item.color }}
                >
                  {item.category}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom One Solution Banner */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white text-center shadow-lg">
        <h3 className="text-base sm:text-lg font-black tracking-wide">
          Bridge Every Gap with <span className="underline decoration-amber-300">Sarvosmi ERX™ RMSC</span>
        </h3>
        <p className="text-xs font-bold text-emerald-100 mt-0.5 tracking-wider uppercase">
          Empowering Everyone: From Gate Security to Senior Management
        </p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN QUESTIONS SECTION (Tabs + Code Layout)
═══════════════════════════════════════════════════════════ */
export const QuestionsSection: React.FC = () => {
  const [viewTab, setViewTab] = useState<'both' | 'q1' | 'q2'>('both');

  return (
    <section id="questions-section" className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Section View Switcher Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Supply Chain Diagnostic &amp; Operational Inquiries
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewTab('both')}
              className={`px-3 py-1.5 rounded-md text-xs font-black transition-all ${
                viewTab === 'both'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              All Inquiries (Q1 &amp; Q2)
            </button>
            <button
              onClick={() => setViewTab('q1')}
              className={`px-3 py-1.5 rounded-md text-xs font-black transition-all ${
                viewTab === 'q1'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Q1: Core Challenges
            </button>
            <button
              onClick={() => setViewTab('q2')}
              className={`px-3 py-1.5 rounded-md text-xs font-black transition-all ${
                viewTab === 'q2'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Q2: Role Pain Points
            </button>
          </div>
        </div>

        {/* Render Question 1 */}
        {(viewTab === 'both' || viewTab === 'q1') && <Question1Card />}

        {/* Render Question 2 */}
        {(viewTab === 'both' || viewTab === 'q2') && <Question2Card />}
      </div>
    </section>
  );
};
