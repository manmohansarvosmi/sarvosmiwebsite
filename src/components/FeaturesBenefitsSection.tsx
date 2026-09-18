import React, { useState } from 'react';
import {
  Settings, Calendar, Truck, ShieldCheck, Boxes, LayoutDashboard,
  ArrowRight, Clock, Cog, BarChart2, Leaf, Trophy, Coins, Award,
  TrendingUp, Layers, Zap, CheckCircle2, ChevronRight, Sparkles,
  Activity, Radio,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ─── Module accent colors (light-friendly) ─────────────── */
const MODULE_COLORS = [
  { primary: '#2563eb', bg: 'rgba(37,99,235,0.07)',  border: 'rgba(37,99,235,0.18)', label: 'blue'    },
  { primary: '#059669', bg: 'rgba(5,150,105,0.07)',  border: 'rgba(5,150,105,0.18)', label: 'emerald' },
  { primary: '#d97706', bg: 'rgba(217,119,6,0.07)',  border: 'rgba(217,119,6,0.18)', label: 'amber'   },
  { primary: '#7c3aed', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)',label: 'violet'  },
  { primary: '#e11d48', bg: 'rgba(225,29,72,0.07)',  border: 'rgba(225,29,72,0.18)', label: 'rose'    },
  { primary: '#0891b2', bg: 'rgba(8,145,178,0.07)',  border: 'rgba(8,145,178,0.18)', label: 'cyan'    },
];

const STEP_COLORS = [
  '#2563eb','#059669','#d97706','#0284c7','#0d9488','#7c3aed','#f97316',
];

/* ─── Feature Module Card (Light) ────────────────────────── */
const FeatureCard: React.FC<{
  id: string; title: string; desc: string; cta: string;
  icon: React.ElementType; color: typeof MODULE_COLORS[0];
}> = ({ id, title, desc, cta, icon: Icon, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: hovered ? `${color.bg}` : '#ffffff',
        border: hovered ? `1.5px solid ${color.border}` : '1px solid rgba(15,23,42,0.09)',
        boxShadow: hovered
          ? `0 8px 32px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)`
          : '0 2px 8px rgba(15,23,42,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Top accent stripe */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${color.primary}, transparent 70%)` }}
      />

      {/* Number watermark */}
      <div
        className="absolute top-3 right-4 text-[56px] font-black leading-none select-none pointer-events-none"
        style={{ color: `${color.primary}09`, fontFamily: 'Space Grotesk' }}
      >
        {id}
      </div>

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Icon + Title */}
        <div className="flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: color.bg, border: `1px solid ${color.border}` }}
          >
            <Icon className="w-4.5 h-4.5" style={{ color: color.primary }} />
          </div>
          <div className="pt-0.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] mb-0.5" style={{ color: color.primary }}>
              Module {id}
            </div>
            <h3 className="text-sm font-bold text-slate-900 leading-tight font-grotesk">{title}</h3>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: `linear-gradient(90deg, ${color.border}, transparent)` }} />

        {/* Description */}
        <p className="text-xs leading-relaxed text-slate-500 flex-1">{desc}</p>

        {/* CTA */}
        <button
          className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider w-fit transition-all duration-200 group/btn"
          style={{ color: color.primary }}
        >
          <span className="group-hover/btn:underline">{cta}</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

/* ─── Step Card (Light) ──────────────────────────────────── */
const StepCard: React.FC<{
  step: number; title: string; desc: string; tag: string; color: string; isLast: boolean;
}> = ({ step, title, desc, tag, color, isLast }) => (
  <div
    className="relative flex flex-col rounded-xl p-4 gap-3 h-full transition-all duration-300 hover:-translate-y-1 bg-white"
    style={{
      border: `1px solid ${color}22`,
      boxShadow: `0 2px 12px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)`,
    }}
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
        style={{ background: color, boxShadow: `0 3px 10px ${color}45` }}
      >
        {step}
      </div>
      <span
        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
        style={{ background: `${color}10`, color: color, border: `1px solid ${color}25` }}
      >
        {tag}
      </span>
    </div>

    <h4 className="text-xs font-bold text-slate-800 leading-tight font-grotesk min-h-[32px]">{title}</h4>

    <div className="h-px" style={{ background: `${color}20` }} />

    <p className="text-[10.5px] text-slate-500 leading-relaxed">{desc}</p>

    {/* Connector arrow */}
    {!isLast && (
      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full items-center justify-center bg-white shadow-sm"
        style={{ border: `1px solid ${color}30` }}>
        <ChevronRight className="w-3.5 h-3.5" style={{ color }} />
      </div>
    )}
  </div>
);

/* ─── Benefit Pill (Light) ───────────────────────────────── */
const BenefitPill: React.FC<{
  icon: React.ElementType; title: string; sub: string; color: string;
}> = ({ icon: Icon, title, sub, color }) => (
  <div
    className="flex items-center gap-3 p-3.5 rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5"
    style={{
      border: `1px solid rgba(15,23,42,0.09)`,
      boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
    }}
  >
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: `${color}10`, border: `1px solid ${color}25` }}
    >
      <Icon className="w-4.5 h-4.5" style={{ color }} />
    </div>
    <div>
      <p className="text-xs font-bold text-slate-800 font-grotesk">{title}</p>
      <p className="text-[10px] text-slate-400 mt-0.5">{sub}</p>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════ */
export const FeaturesBenefitsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'both' | 'modules' | 'process'>('both');

  const featureModules = [
    { id: '01', title: 'Organization & Configuration', icon: Settings, cta: 'Configure Smarter',
      desc: 'Multiple unloading docks, RM stores, storage areas, zones & locations; 4-level stock triggers; Supplier self-service; accurate advance schedule; ASN & real-time status view.' },
    { id: '02', title: 'Procurement Scheduling', icon: Calendar, cta: 'Plan Ahead',
      desc: 'Automatic advance material schedules, material shortage triggers to Buyers & Suppliers; real-time transit tracking; stock-outs are history.' },
    { id: '03', title: 'Material Receipts', icon: Truck, cta: 'Receive with Accuracy',
      desc: 'Advance material gate notification, instant ASN verification, organized docking and a fully time-stamped audit trail.' },
    { id: '04', title: 'Acceptance & Put-Away', icon: ShieldCheck, cta: 'Quality at Every Step',
      desc: 'Materials segregated as "inspection only", "Supplier QC certificate", "need only inspection" and "need inward QC". Fast acceptance & accurate put away using Put-to-Barcode technology.' },
    { id: '05', title: 'Kitting, Sequencing & Issue', icon: Boxes, cta: 'Pick. Issue. Produce.',
      desc: 'Issue by item, kit or sequence: Pick-to-Barcode with speed & accuracy; full accountability from issue to material delivery acknowledgement at production line / stage.' },
    { id: '06', title: 'Dashboards & Notifications', icon: LayoutDashboard, cta: 'Insights that Drive Action',
      desc: 'Real-time, web-based dashboards for Senior Management, Buyers and Suppliers — built for faster decisions. Instant real-time notifications for quick actions.' },
  ];

  const workflowSteps = [
    { step: 1, title: 'Raw Material Demand Generation',       tag: 'Demand Sync',    desc: 'Based on production plans confirmed or by PPE. Done on any time interval.' },
    { step: 2, title: 'On Time Procurement',                  tag: 'JIT Sourcing',   desc: 'Buyers & Suppliers on same platform to ensure on-time procurement as per JIT schedules.' },
    { step: 3, title: 'On Time & Quick Material Receipts',    tag: 'Fast Clearance', desc: 'Even with partial documentation, still enables fast clearance.' },
    { step: 4, title: 'Error-Free Docking & Unloading',       tag: 'Dock Managed',   desc: 'Transporters dock only when available, unload quickly with GRR done. Material sent to staging.' },
    { step: 5, title: 'Quick Inward QC / Inspection',         tag: 'Segregated QC',  desc: 'Non-QC material by Store Operators; QC engineers inspect only critical materials.' },
    { step: 6, title: 'Accurate Put-Away & Picking',          tag: 'Pick & Put',     desc: 'All accepted non-QC and QC materials put away accurately using barcode-based system.' },
    { step: 7, title: 'On-Time Material Delivery to Production', tag: 'Line Delivery', desc: 'On-time & exact materials delivered to each production stage & acknowledged immediately.' },
  ];

  const bottomBenefits = [
    { icon: Clock,     title: 'Real-Time Control', sub: 'From gate to production',  color: '#059669' },
    { icon: Cog,       title: 'Higher Efficiency', sub: 'Optimized processes',       color: '#2563eb' },
    { icon: BarChart2, title: 'Lower Costs',        sub: 'Less waste, more value',    color: '#7c3aed' },
    { icon: Leaf,      title: 'Sustainable Growth', sub: 'Smarter supply chain',      color: '#0d9488' },
  ];

  const keyBenefits = [
    { icon: Coins,     title: 'Lower Operational Costs',  sub: 'Transactional & logistics savings', color: '#059669' },
    { icon: Award,     title: 'Better Quality',           sub: 'Negligible RM wastages or leakages', color: '#2563eb' },
    { icon: TrendingUp,title: 'Higher Profitability',      sub: 'Efficiency & productivity gains',    color: '#7c3aed' },
    { icon: Activity,  title: 'Real-Time Inventory',      sub: 'Zero physical/logical discrepancy',  color: '#f97316' },
  ];

  const TABS = [
    { key: 'both',    label: 'All Views' },
    { key: 'modules', label: '6 Feature Modules' },
    { key: 'process', label: '7-Step Process' },
  ];

  return (
    <section
      id="features-benefits-section"
      className="w-full section-padding px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{ background: '#f8fafc' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">

        {/* ══════════ SECTION HEADER ══════════ */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xs mb-4"
            style={{ background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.18)' }}>
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-600">
              Features &amp; Benefits
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-grotesk text-slate-900 mb-3">
            <span className="text-gradient-indigo">Sarvosmi ERX™ RMSC</span>{' '}
            <span className="text-slate-800">Key Features</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            End-to-end control across configuration, procurement, receipt, put-away, issue and reporting
          </p>

          {/* Tab Toggle */}
          <div
            className="flex items-center justify-center gap-1 mt-6 p-1 rounded-md w-fit mx-auto bg-white shadow-sm"
            style={{ border: '1px solid rgba(15,23,42,0.09)' }}
          >
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className="px-4 py-2 rounded-xs text-xs font-bold font-grotesk transition-all duration-200"
                style={
                  activeTab === tab.key
                    ? {
                        background: 'linear-gradient(135deg, #4f46e5, #4338ca)',
                        color: '#ffffff',
                        boxShadow: '0 2px 12px rgba(79,70,229,0.30)',
                      }
                    : { color: '#94a3b8' }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ══════════ PART 1: 6 FEATURE MODULE CARDS ══════════ */}
        {(activeTab === 'both' || activeTab === 'modules') && (
          <div>
            {/* Sub-header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-slate-200" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-xs"
                style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.18)' }}>
                <Layers className="w-3 h-3 text-blue-600" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">6 Core Modules</span>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featureModules.map((mod, i) => (
                <FeatureCard key={mod.id} {...mod} icon={mod.icon} color={MODULE_COLORS[i]} />
              ))}
            </div>

            {/* Bottom 4 quick pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {bottomBenefits.map((b, i) => (
                <BenefitPill key={i} {...b} />
              ))}
            </div>
          </div>
        )}

        {/* ══════════ PART 2: 7-STEP PROCESS FLOW ══════════ */}
        {(activeTab === 'both' || activeTab === 'process') && (
          <div>
            {/* Sub-header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-slate-200" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-xs"
                style={{ background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.20)' }}>
                <Radio className="w-3 h-3 text-emerald-600" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">7-Step Process Flow</span>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Step Cards */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative min-w-[900px] lg:min-w-0">
                {workflowSteps.map((step, idx) => (
                  <StepCard
                    key={step.step}
                    {...step}
                    color={STEP_COLORS[idx]}
                    isLast={idx === workflowSteps.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Key Benefits Banner */}
            <div
              className="mt-6 rounded-md p-5 bg-white"
              style={{
                border: '1px solid rgba(79,70,229,0.12)',
                boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
              }}
            >
              {/* Banner header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(217,119,6,0.10)', border: '1px solid rgba(217,119,6,0.22)' }}
                >
                  <Trophy className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 font-grotesk">Key Benefits</p>
                  <p className="text-[11px] text-slate-400">Optimizing all processes resulting in...</p>
                </div>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {keyBenefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-md transition-all duration-200 hover:-translate-y-0.5 bg-slate-50"
                      style={{ border: `1px solid ${b.color}15` }}
                    >
                      <div
                        className="w-9 h-9 rounded-xs flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${b.color}12`, border: `1px solid ${b.color}28` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: b.color }} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-slate-800 leading-tight font-grotesk">{b.title}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">{b.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer tag */}
              <div
                className="mt-5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left"
                style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  PEOPLE &nbsp;|&nbsp; PROCESS &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
                </span>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5" />
                  Building supply chains for a brighter tomorrow
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
