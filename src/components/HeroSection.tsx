import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Zap,
  Radio,
  ShieldCheck,
  TrendingUp,
  Clock,
  BarChart3,
  CheckCircle2,
  PlayCircle,
  ChevronRight,
  Activity,
  Cpu,
  AlertTriangle,
  Package
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ── Animated counter hook ───────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ── Stat Item ───────────────────────────────────────────── */
const StatItem: React.FC<{
  value: string; suffix?: string; label: string; started: boolean; numericVal: number;
}> = ({ value, suffix = '', label, started, numericVal }) => {
  const count = useCounter(numericVal, 1600, started);
  const display = numericVal ? `${count.toLocaleString()}${suffix}` : value;
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-2xl sm:text-3xl font-bold font-grotesk tabular-nums"
        style={{ color: '#f97316' }}
      >
        {display}
      </span>
      <span className="text-xs font-semibold tracking-wide text-slate-500">{label}</span>
    </div>
  );
};

/* ── Live Feed Ticker ────────────────────────────────────── */
const liveFeedItems = [
  { icon: CheckCircle2, color: '#10b981', text: 'GRR scan verified — Dock B, Pune Plant', time: '2s ago' },
  { icon: AlertTriangle, color: '#f59e0b', text: 'Shortage alert — RM SKU #4421, Line 3', time: '18s ago' },
  { icon: Package, color: '#3b82f6',  text: 'Bin transfer complete — Store → WIP', time: '42s ago' },
  { icon: Activity, color: '#8b5cf6', text: 'ERP sync delta resolved — 0 mismatches', time: '1m ago' },
  { icon: Cpu, color: '#06b6d4',      text: 'Wearable scan batch uploaded — 240 items', time: '2m ago' },
];

const LiveFeedTicker: React.FC = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % liveFeedItems.length), 3200);
    return () => clearInterval(t);
  }, []);
  const item = liveFeedItems[active];
  const Icon = item.icon;
  return (
    <div
      key={active}
      className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium animate-ticker"
      style={{
        background: 'rgba(13,17,23,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: item.color }} />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: item.color }} />
      </span>
      <Icon className="w-4 h-4 shrink-0" style={{ color: item.color }} />
      <span className="text-slate-300 truncate">{item.text}</span>
      <span className="ml-auto shrink-0 text-xs text-slate-600 font-mono-data">{item.time}</span>
    </div>
  );
};

/* ── Mini Dashboard Card ─────────────────────────────────── */
const MiniDashCard: React.FC<{
  icon: React.ElementType; label: string; value: string; trend: string; color: string;
}> = ({ icon: Icon, label, value, trend, color }) => (
  <div className="card-premium p-4 flex flex-col gap-2.5 rounded-md">
    <div className="flex items-center justify-between">
      <div className="icon-badge rounded-xs" style={{ background: `${color}16` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <span className="badge-pill badge-green text-[10px] rounded-xs">↑ {trend}</span>
    </div>
    <div>
      <p className="text-xl font-bold font-grotesk tabular-nums text-white">{value}</p>
      <p className="text-xs mt-0.5 text-slate-500">{label}</p>
    </div>
  </div>
);

/* ── Feature Tag ─────────────────────────────────────────── */
const FeatureTag: React.FC<{ icon: React.ElementType; label: string }> = ({ icon: Icon, label }) => (
  <span
    className="inline-flex items-center gap-1.5 text-xs font-semibold font-grotesk px-3 py-1.5 rounded-xs"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.09)',
      color: '#94a3b8',
    }}
  >
    <Icon className="w-3.5 h-3.5" style={{ color: '#10b981' }} />
    {label}
  </span>
);

/* ════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════ */
export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Radio,       label: 'Real-Time Capture' },
    { icon: ShieldCheck, label: 'Zero Manual Entry' },
    { icon: TrendingUp,  label: 'ERP Sync Engine' },
    { icon: Clock,       label: 'Instant Alerts' },
    { icon: BarChart3,   label: 'Live Analytics' },
  ];

  const dashCards = [
    { icon: Activity,     label: 'GRR Scans Today',  value: '1,248',   trend: '12%', color: '#3b82f6' },
    { icon: CheckCircle2, label: 'BIN Accuracy',     value: '99.2%',   trend: '0.4%', color: '#10b981' },
    { icon: AlertTriangle,label: 'Active Alerts',    value: '3',        trend: '-67%', color: '#f59e0b' },
    { icon: Cpu,          label: 'Lines Executing',  value: '14 / 16', trend: '2', color: '#8b5cf6' },
  ];

  const bg = isDark
    ? 'bg-[#05070f]'
    : 'bg-slate-950';

  return (
    <section
      id="hero-section"
      className={`relative overflow-hidden ${bg}`}
    >
      {/* ── Background decorations ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient blobs */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full animate-mesh-drift"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 68%)' }}
        />
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full animate-mesh-drift delay-300"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 68%)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 68%)' }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        {/* Orange glow under headline */}
        <div
          className="absolute top-1/3 left-1/4 w-[300px] h-[100px] blur-[80px] opacity-20"
          style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24)' }}
        />
      </div>

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="relative max-w-screen-xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column — Text + CTAs */}
          <div className="flex flex-col gap-8 animate-fade-up">

            {/* Top badge */}
            <div className="flex items-center gap-3">
              <span className="badge-pill badge-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Industry 4.0 · RMSC Intelligence
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-grotesk leading-[1.08] tracking-tight text-white">
                The Bridge Between{' '}
                <span className="text-gradient-blue">ERP Plans</span>
                {' '}& Factory{' '}
                <span className="text-gradient-orange">Reality</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed max-w-lg text-slate-400">
                <strong className="text-slate-200 font-semibold">Sarvosmi ERX™</strong> is a real-time Raw Material
                Supply Chain execution system. Wearable scanners on the shop floor capture live data — eliminating
                manual entry, reducing shortages and giving production teams instant visibility.
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {features.map((f, i) => (
                <FeatureTag key={i} icon={f.icon} label={f.label} />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#features-benefits-section" id="hero-get-demo-btn" className="btn-primary">
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#why-erx-section" id="hero-learn-more-btn" className="btn-outline">
                <PlayCircle className="w-4 h-4" />
                How it Works
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs font-medium text-slate-600">
              Trusted by manufacturing plants across India · No spreadsheets. No paper. No delays.
            </p>
          </div>

          {/* Right Column — Dashboard preview */}
          <div className="flex flex-col gap-4 animate-fade-up delay-200">

            {/* Live ticker header */}
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold font-grotesk text-emerald-400">
                Live Feed — Pune Plant, Shift 2
              </span>
            </div>

            <LiveFeedTicker />

            {/* Mini dashboard cards */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {dashCards.map((card, i) => (
                <MiniDashCard key={i} {...card} />
              ))}
            </div>

            {/* ERP sync status bar */}
            <div
              className="p-4 flex items-center gap-4 rounded-md"
              style={{
                background: 'rgba(13,17,23,0.9)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            >
              <div className="icon-badge" style={{ background: 'rgba(59,130,246,0.14)' }}>
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-semibold font-grotesk text-slate-200">
                    ERP ↔ Floor Sync
                  </p>
                  <span className="badge-pill badge-green text-[10px]">Live</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: '96%', background: 'linear-gradient(90deg, #f97316, #10b981)' }}
                  />
                </div>
                <p className="text-xs mt-1.5 text-slate-500 font-mono-data">
                  96% plans executed · 4% deviation flagged
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ─────────────────────────────────────── */}
        <div
          ref={statsRef}
          className="mt-20 pt-10 border-t border-white/[0.06]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <StatItem value="50+" label="Plants Served"    numericVal={50}      suffix="+" started={statsStarted} />
            <StatItem value="1M+" label="Scans Processed"  numericVal={1000000} suffix="+" started={statsStarted} />
            <StatItem value="99.2%" label="BIN Accuracy"   numericVal={0}       suffix=""  started={statsStarted} />
            <StatItem value="0"   label="Paper-based Logs"  numericVal={0}       suffix=""  started={statsStarted} />
          </div>
        </div>
      </div>
    </section>
  );
};
