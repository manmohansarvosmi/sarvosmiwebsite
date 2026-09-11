import React from 'react';
import { useTheme } from '../context/ThemeContext';

/* ═══════════════════════════════════════════════════════════
   PANEL 1 — Why is Raw Material Supply Chain Important?
═══════════════════════════════════════════════════════════ */
const Panel1: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-sky-50 via-white to-emerald-50 rounded-3xl overflow-hidden shadow-2xl border border-blue-100">

    {/* ── Header ── */}
    <div className="relative flex items-center justify-between px-6 py-4 bg-white border-b border-blue-100 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(255,255,255,0.2)"/>
            <path d="M7 17s1-5 6-5 6 5 6 5" strokeLinecap="round"/>
            <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-tight">Supplying the Right Material</p>
          <p className="text-[10px] font-bold text-slate-500 leading-tight">for a Stronger Organization</p>
        </div>
      </div>
      <div className="flex-1 text-center px-6">
        <h2 className="text-2xl font-black text-slate-900 leading-tight">
          Why is Raw Material Supply Chain <span className="text-blue-600">Important?</span>
        </h2>
        <p className="text-xs text-slate-600 mt-1 leading-snug max-w-lg mx-auto">
          <strong>Raw material supply chain</strong> is the backbone of an organization, just as arteries &amp; veins are to the human body.
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">A strong and resilient supply chain ensures uninterrupted production, better quality, lower cost and long-term business growth.</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-slate-700 uppercase tracking-tight">Strong Supply Chain</p>
        <p className="text-sm font-black text-emerald-600 uppercase tracking-wide">Stronger Tomorrow</p>
      </div>
    </div>

    {/* ── Body 3-column ── */}
    <div className="grid grid-cols-12 gap-3 p-5">

      {/* LEFT: Sources */}
      <div className="col-span-2 flex flex-col gap-2">
        <p className="text-[9px] font-black uppercase text-slate-600 tracking-widest border-b-2 border-slate-300 pb-1">Raw Material Sources</p>
        {[
          { label: 'Suppliers', svg: (
            <svg viewBox="0 0 36 36" className="w-10 h-10"><rect x="3" y="10" width="30" height="22" rx="2" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1.5"/><rect x="7" y="14" width="5" height="8" rx="1" fill="#0ea5e9" opacity=".7"/><rect x="15" y="14" width="5" height="8" rx="1" fill="#0ea5e9" opacity=".7"/><rect x="23" y="14" width="5" height="8" rx="1" fill="#0ea5e9" opacity=".7"/><rect x="9" y="6" width="18" height="6" rx="2" fill="#0284c7"/><path d="M0 32h36" stroke="#64748b" strokeWidth="1.5"/></svg>
          )},
          { label: 'Global Supply Network', svg: (
            <svg viewBox="0 0 36 36" className="w-10 h-10"><circle cx="18" cy="18" r="15" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1.5"/><ellipse cx="18" cy="18" rx="7" ry="15" fill="none" stroke="#0284c7" strokeWidth="1"/><path d="M3 18h30M18 3c-4 5-4 25 0 30M18 3c4 5 4 25 0 30" stroke="#0284c7" strokeWidth="1" fill="none"/></svg>
          )},
          { label: 'Transportation', svg: (
            <svg viewBox="0 0 36 36" className="w-10 h-10"><rect x="1" y="13" width="26" height="14" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/><path d="M27 17h5l3 7v5h-8V17z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/><circle cx="7" cy="30" r="3" fill="#374151" stroke="#f59e0b" strokeWidth="1"/><circle cx="21" cy="30" r="3" fill="#374151" stroke="#f59e0b" strokeWidth="1"/><circle cx="32" cy="30" r="3" fill="#374151" stroke="#f59e0b" strokeWidth="1"/></svg>
          )},
          { label: 'Warehousing', svg: (
            <svg viewBox="0 0 36 36" className="w-10 h-10"><polygon points="18,3 34,12 34,33 2,33 2,12" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/><polygon points="18,3 34,12 18,12" fill="#6ee7b7"/><rect x="12" y="20" width="6" height="13" rx="1" fill="#10b981"/><rect x="20" y="23" width="8" height="10" rx="1" fill="#6ee7b7" stroke="#10b981" strokeWidth="1"/></svg>
          )},
          { label: 'Raw Materials', svg: (
            <svg viewBox="0 0 36 36" className="w-10 h-10"><ellipse cx="18" cy="30" rx="12" ry="4" fill="#e2e8f0"/><ellipse cx="18" cy="14" rx="9" ry="10" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/><ellipse cx="18" cy="11" rx="9" ry="4" fill="#64748b"/><path d="M9 14 Q18 20 27 14" fill="none" stroke="#475569" strokeWidth="1"/></svg>
          )},
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 bg-white rounded-2xl p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
            {s.svg}
            <span className="text-[9px] font-bold text-slate-700 text-center leading-tight">{s.label}</span>
          </div>
        ))}
      </div>

      {/* CENTER: Artery / Body diagram */}
      <div className="col-span-8 flex flex-col items-center">
        <svg viewBox="0 0 700 340" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="supplyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e"/>
              <stop offset="100%" stopColor="#16a34a"/>
            </linearGradient>
            <linearGradient id="distGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#60a5fa"/>
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe"/>
              <stop offset="100%" stopColor="#bfdbfe"/>
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/></filter>
          </defs>

          {/* ── Left green supply arrows ── */}
          {[
            { y1: 110, y2: 180, label: '✓  Reliable Supply', ly: 104 },
            { y1: 145, y2: 195, label: '⚙  Quality Materials', ly: 139 },
            { y1: 180, y2: 210, label: '🚛  On-time Delivery', ly: 174 },
            { y1: 215, y2: 225, label: '$  Cost Optimization', ly: 209 },
          ].map((a, i) => (
            <g key={i}>
              <path d={`M50 ${a.y1} Q200 ${a.y1} 320 ${a.y2}`} stroke="#22c55e" strokeWidth={9-i*1.5} fill="none" strokeLinecap="round" opacity={1-i*0.1}/>
              <text x="52" y={a.ly} fontSize="10" fill="#15803d" fontWeight="bold">{a.label}</text>
            </g>
          ))}

          {/* ── Right blue distribution arrows ── */}
          {[
            { y1: 155, y2: 100, label: 'Production 🏭', lx: 545, ly: 95 },
            { y1: 185, y2: 165, label: 'Growth 📈', lx: 565, ly: 160 },
            { y1: 210, y2: 210, label: 'Stability ⚙', lx: 563, ly: 205 },
            { y1: 225, y2: 250, label: 'Finished Goods 📦', lx: 532, ly: 244 },
            { y1: 235, y2: 290, label: 'Market Delivery 🚛', lx: 533, ly: 284 },
          ].map((a, i) => (
            <g key={i}>
              <path d={`M380 ${a.y1} Q510 ${a.y1} 540 ${a.y2}`} stroke="#3b82f6" strokeWidth={8-i*1} fill="none" strokeLinecap="round" opacity={1-i*0.08}/>
              <path d={`M536 ${a.y2-5} l8 5 -8 5`} fill="#3b82f6"/>
              <text x={a.lx} y={a.ly} fontSize="10" fill="#1d4ed8" fontWeight="bold">{a.label}</text>
            </g>
          ))}

          {/* ── Body silhouette ── */}
          {/* Head */}
          <ellipse cx="350" cy="42" rx="26" ry="30" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
          {/* Hair */}
          <path d="M324 30 Q340 10 350 14 Q360 10 376 30 Q360 20 350 22 Q340 20 324 30z" fill="#78350f"/>
          {/* Neck */}
          <rect x="340" y="70" width="20" height="18" rx="4" fill="#fde68a"/>
          {/* Torso */}
          <path d="M295 88 Q290 130 295 185 Q310 200 350 202 Q390 200 405 185 Q410 130 405 88 Q390 82 350 80 Q310 82 295 88z" fill="url(#bodyGrad)" stroke="#93c5fd" strokeWidth="1.5"/>
          {/* Shirt */}
          <path d="M298 90 Q310 84 350 82 Q390 84 402 90 L398 150 Q385 165 350 167 Q315 165 302 150z" fill="#1e40af" opacity="0.15"/>
          {/* Arms */}
          <path d="M297 92 Q270 110 265 155 Q268 170 278 172 Q290 170 292 155 Q296 120 307 102z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/>
          <path d="M403 92 Q430 110 435 155 Q432 170 422 172 Q410 170 408 155 Q404 120 393 102z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/>
          {/* Legs */}
          <path d="M315 195 Q310 230 308 270 Q314 280 328 278 Q340 276 338 260 Q336 235 335 200z" fill="#1e3a8a" stroke="#1e40af" strokeWidth="1"/>
          <path d="M385 195 Q390 230 392 270 Q386 280 372 278 Q360 276 362 260 Q364 235 365 200z" fill="#1e3a8a" stroke="#1e40af" strokeWidth="1"/>
          {/* Arteries in body — red supply */}
          <path d="M350 88 Q340 100 338 120 Q342 140 350 150 Q358 140 362 120 Q360 100 350 88z" fill="none" stroke="#ef4444" strokeWidth="3.5" opacity="0.7"/>
          <path d="M338 120 Q325 125 318 135 Q315 145 322 148" fill="none" stroke="#ef4444" strokeWidth="2.5" opacity="0.6"/>
          <path d="M362 120 Q375 125 382 135 Q385 145 378 148" fill="none" stroke="#ef4444" strokeWidth="2.5" opacity="0.6"/>
          {/* Veins — blue distribution */}
          <path d="M350 152 Q342 165 338 180 Q342 195 350 200" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.7"/>
          <path d="M350 152 Q358 165 362 180 Q358 195 350 200" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.7"/>
          {/* Heart */}
          <g filter="url(#shadow)">
            <path d="M350 125 C346 119 336 118 335 127 C334 135 343 143 350 150 C357 143 366 135 365 127 C364 118 354 119 350 125z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1"/>
          </g>
          {/* Pulse lines from heart */}
          <path d="M320 130 Q325 128 330 130 L335 120 L340 135 L345 125 L348 128" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,1"/>

          {/* ── Labels ── */}
          {/* Supply Chain label */}
          <rect x="230" y="52" width="90" height="32" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1"/>
          <text x="275" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">SUPPLY CHAIN</text>
          <text x="275" y="77" textAnchor="middle" fontSize="7.5" fill="#ef4444">(Arteries)</text>
          {/* Distribution label */}
          <rect x="380" y="52" width="100" height="32" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
          <text x="430" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">DISTRIBUTION CHAIN</text>
          <text x="430" y="77" textAnchor="middle" fontSize="7.5" fill="#3b82f6">(Veins)</text>

          {/* ── Organization Building ── */}
          <g transform="translate(295,215)">
            <rect x="0" y="0" width="110" height="70" rx="4" fill="#1e40af"/>
            <rect x="5" y="5" width="100" height="60" rx="3" fill="#1e3a8a"/>
            {/* Windows */}
            {[0,1,2,3].map(i=><rect key={i} x={8+i*25} y="12" width="18" height="14" rx="2" fill="#93c5fd" opacity="0.8"/>)}
            {[0,1,2,3].map(i=><rect key={i} x={8+i*25} y="32" width="18" height="14" rx="2" fill="#93c5fd" opacity="0.6"/>)}
            <rect x="38" y="46" width="34" height="24" rx="2" fill="#1e40af"/>
            {/* Door */}
            <rect x="44" y="52" width="22" height="18" rx="2" fill="#60a5fa"/>
            <text x="55" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">ORGANIZATION</text>
          </g>
          <text x="350" y="300" textAnchor="middle" fontSize="8" fill="#6b7280" letterSpacing="4">PEOPLE  |  PROCESS  |  TECHNOLOGY  |  GROWTH</text>
        </svg>

        {/* Organization Health banner */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white text-center rounded-2xl px-4 py-2.5 shadow-lg mt-1">
          <p className="text-sm font-black tracking-wide">ORGANIZATION HEALTH</p>
          <p className="text-[10px] text-blue-200 font-semibold">DEPENDENT ON A STRONG SUPPLY CHAIN</p>
        </div>
      </div>

      {/* RIGHT: Challenges + Benefits */}
      <div className="col-span-2 flex flex-col gap-3">
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-red-100">
          <p className="text-[9px] font-black uppercase text-red-700 border-b border-red-200 pb-1 mb-2 tracking-widest">Key Challenges</p>
          {[
            { icon: '⚠️', c: 'text-red-500', label: 'Disruptions' },
            { icon: '📊', c: 'text-orange-500', label: 'Demand Fluctuations' },
            { icon: '🦠', c: 'text-purple-500', label: 'Pandemics' },
            { icon: '📦', c: 'text-amber-600', label: 'Material Shortage' },
            { icon: '💸', c: 'text-red-600', label: 'Rising Costs' },
            { icon: '❗', c: 'text-orange-600', label: 'Supply Risk & Uncertainty' },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-1.5 py-1 border-b border-slate-50 last:border-0">
              <span className="text-base">{c.icon}</span>
              <span className={`text-[9px] font-semibold ${c.c}`}>{c.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-emerald-100">
          <p className="text-[9px] font-black uppercase text-emerald-700 border-b border-emerald-200 pb-1 mb-2 tracking-widest">Key Benefits</p>
          {[
            { icon: '⭐', label: 'Higher Customer Satisfaction' },
            { icon: '📈', label: 'Improved Profitability' },
            { icon: '🌿', label: 'Sustainability & Resilience' },
            { icon: '🏆', label: 'Long-term Business Growth' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-1.5 py-1 border-b border-slate-50 last:border-0">
              <span className="text-base">{b.icon}</span>
              <span className="text-[9px] font-semibold text-emerald-700">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom 5-pillar strip */}
    <div className="grid grid-cols-5 divide-x divide-blue-100 border-t-2 border-blue-100">
      {[
        { emoji: '🎯', label: 'Right Quality', bg: 'from-red-50 to-red-100/50', txt: 'text-red-700' },
        { emoji: '📋', label: 'Right Quantity', bg: 'from-green-50 to-green-100/50', txt: 'text-green-700' },
        { emoji: '🕐', label: 'Right Time', bg: 'from-blue-50 to-blue-100/50', txt: 'text-blue-700' },
        { emoji: '₹', label: 'Right Cost', bg: 'from-amber-50 to-amber-100/50', txt: 'text-amber-700', emojiClass: 'text-2xl font-black' },
        { emoji: '🛡️', label: 'Keep the Organization Healthy', bg: 'from-emerald-50 to-emerald-100/50', txt: 'text-emerald-700' },
      ].map((p) => (
        <div key={p.label} className={`flex items-center gap-2 px-4 py-3 bg-gradient-to-br ${p.bg}`}>
          <span className={p.emojiClass ?? 'text-2xl'}>{p.emoji}</span>
          <span className={`text-[10px] font-bold ${p.txt} leading-tight`}>{p.label}</span>
        </div>
      ))}
    </div>
    <div className="text-center text-[10px] text-slate-400 font-semibold tracking-[0.25em] uppercase py-2 bg-white/60">
      — From Raw Materials to a Brighter Tomorrow —
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   PANEL 2 — Introducing Sarvosmi ERX™ RMSC
═══════════════════════════════════════════════════════════ */
const Panel2: React.FC = () => {
  const rows = [
    {
      num: '01', accent: '#dc2626', bg: 'from-red-50 to-white', border: 'border-red-200',
      leftBg: 'bg-red-600', numText: 'text-white',
      iconSvg: (
        <svg viewBox="0 0 64 64" className="w-14 h-14"><circle cx="32" cy="32" r="28" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/><circle cx="32" cy="32" r="22" fill="none" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4,3"/><path d="M32 14 L32 32 L44 32" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/><circle cx="32" cy="32" r="3" fill="#dc2626"/><path d="M20 12 Q32 6 44 12" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2"/></svg>
      ),
      title: 'Real-Time',
      desc: 'In Sarvosmi ERX™ RMSC all actions are recorded and processed immediately as they happen and exceptions if any, are highlighted to the appropriate officials in your organization.',
      tags: ['💻 Live Updates','🔔 Instant Alerts','📋 Exception Tracking','👥 Right People, Right Time'],
      sidebar: 'Every Action\nIn Real-Time',
      sidebarColor: 'text-red-600',
      visual: (
        <div className="flex flex-col items-center gap-2">
          <div className="grid grid-cols-2 gap-2">
            {[{t:'Material Request Created',ic:'🛒'},{t:'Material Inward',ic:'🚛'},{t:'Quality Check',ic:'✅'},{t:'Stock Updated',ic:'📦'}].map(b=>(
              <div key={b.t} className="flex items-center gap-1 bg-blue-50 border border-blue-200 rounded-lg px-2 py-1.5 shadow-sm">
                <span className="text-base">{b.ic}</span>
                <span className="text-[8px] font-bold text-blue-800 leading-tight">{b.t}</span>
              </div>
            ))}
          </div>
          <div className="relative w-20 h-20 mt-1">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#f1f5f9" strokeWidth="2"/>
              {/* Clock tick marks */}
              {[...Array(12)].map((_,i)=>{const a=i*30*Math.PI/180,x1=40+26*Math.sin(a),y1=40-26*Math.cos(a),x2=40+30*Math.sin(a),y2=40-30*Math.cos(a);return<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth={i%3===0?2:1}/>;})}
              {/* Colored segments */}
              <path d="M40 40 L40 12 A28 28 0 0 1 66 54 z" fill="#22c55e" opacity="0.7"/>
              <path d="M40 40 L66 54 A28 28 0 0 1 14 54 z" fill="#f59e0b" opacity="0.7"/>
              <path d="M40 40 L14 54 A28 28 0 0 1 40 12 z" fill="#ef4444" opacity="0.7"/>
              {/* Hands */}
              <line x1="40" y1="40" x2="40" y2="18" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="40" y1="40" x2="56" y2="48" stroke="#1e293b" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="40" cy="40" r="3" fill="#1e293b"/>
              <text x="40" y="72" textAnchor="middle" fontSize="7" fill="#64748b" fontWeight="bold">Real-Time</text>
            </svg>
          </div>
        </div>
      ),
    },
    {
      num: '02', accent: '#16a34a', bg: 'from-green-50 to-white', border: 'border-green-200',
      leftBg: 'bg-green-600', numText: 'text-white',
      iconSvg: (
        <svg viewBox="0 0 64 64" className="w-14 h-14"><circle cx="32" cy="32" r="28" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/><path d="M18 32 Q32 16 46 32 Q32 48 18 32z" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"/><circle cx="32" cy="32" r="6" fill="#16a34a"/><path d="M22 22 Q12 32 22 42" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/><path d="M42 22 Q52 32 42 42" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: 'Flexible',
      desc: 'Sarvosmi ERX™ RMSC can be configured to suit every process of Raw Material Supply Chain.',
      tags: ['⚙️ Configurable Workflows','🔄 Adaptable to Your Process','📈 Scalable Solution','✂️ Minimal Customization Effort'],
      sidebar: 'Flexible Today\nReady for\nTomorrow',
      sidebarColor: 'text-green-600',
      visual: (
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <svg viewBox="0 0 100 100" className="w-24 h-24">
            <path d="M25 75 Q10 45 30 25 Q50 5 70 25 Q90 45 75 75" fill="none" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round"/>
            <ellipse cx="75" cy="78" rx="10" ry="5" fill="#fbbf24" transform="rotate(-20,75,78)"/>
            <circle cx="30" cy="22" r="6" fill="#374151"/>
            <path d="M30 28 L30 18 Q32 20 28 20z" fill="#374151"/>
          </svg>
          <span className="text-[9px] font-extrabold text-green-700 italic text-center leading-tight">Flexible Today<br />Ready for Tomorrow</span>
        </div>
      ),
    },
    {
      num: '03', accent: '#1d4ed8', bg: 'from-blue-50 to-white', border: 'border-blue-200',
      leftBg: 'bg-blue-600', numText: 'text-white',
      iconSvg: (
        <svg viewBox="0 0 64 64" className="w-14 h-14"><circle cx="32" cy="32" r="28" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>{[0,1,2,3,4,5].map(i=>{const a=i*60*Math.PI/180;const x=32+20*Math.sin(a);const y=32-20*Math.cos(a);return<g key={i}><circle cx={x} cy={y} r="7" fill={['#ef4444','#f59e0b','#22c55e','#3b82f6','#8b5cf6','#ec4899'][i]} stroke="white" strokeWidth="1.5"/></g>;})} <circle cx="32" cy="32" r="10" fill="white" stroke="#e2e8f0" strokeWidth="1"/><circle cx="32" cy="32" r="6" fill="#3b82f6"/></svg>
      ),
      title: 'Collaborative',
      desc: 'Sarvosmi ERX™ RMSC can collaborate with its own or 3rd party hardware or software platforms.',
      tags: ['🤝 Work with Internal Teams','🔗 Integrate with Partners','🖥 Multi-Platform Support','💬 Seamless Communication'],
      sidebar: 'Together\nfor a Stronger\nSupply Chain',
      sidebarColor: 'text-blue-700',
      visual: (
        <div className="flex flex-col items-center justify-center h-full">
          <svg viewBox="0 0 120 120" className="w-28 h-28">
            {[0,1,2,3,4,5].map(i=>{const a=(i*60-90)*Math.PI/180;const cx=60+40*Math.cos(a);const cy=60+40*Math.sin(a);const colors=['#ef4444','#f59e0b','#22c55e','#3b82f6','#8b5cf6','#ec4899'];return<g key={i}><circle cx={cx} cy={cy} r="12" fill={colors[i]}/><circle cx={cx} cy={cy-3} r="4" fill="white" opacity=".8"/></g>;})}
            <path d="M60 60 m-20 0 a20 20 0 1 0 40 0 a20 20 0 1 0-40 0" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="60" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">TEAM</text>
          </svg>
        </div>
      ),
    },
    {
      num: '04', accent: '#7c3aed', bg: 'from-purple-50 to-white', border: 'border-purple-200',
      leftBg: 'bg-purple-700', numText: 'text-white',
      iconSvg: (
        <svg viewBox="0 0 64 64" className="w-14 h-14"><circle cx="32" cy="32" r="28" fill="#faf5ff" stroke="#8b5cf6" strokeWidth="2"/><path d="M20 32 Q32 18 44 32 Q32 46 20 32z" fill="none" stroke="#8b5cf6" strokeWidth="2"/><path d="M20 32 Q32 46 44 32" stroke="#7c3aed" strokeWidth="2.5" fill="none"/><path d="M24 24 Q32 12 40 24" stroke="#a78bfa" strokeWidth="2" fill="none"/><path d="M24 40 Q32 52 40 40" stroke="#a78bfa" strokeWidth="2" fill="none"/><circle cx="32" cy="32" r="5" fill="#7c3aed"/></svg>
      ),
      title: 'Connected Platform',
      titleHighlight: true,
      desc: 'Sarvosmi ERX™ RMSC is connected to processes, technologies and productivity so that compliments your existing ERP / SCM / WMS implementations.',
      tags: ['🔄 Integrates with ERP','⚙️ Works with SCM / WMS','🌊 Unified Data Flow','📊 Improves Productivity'],
      sidebar: 'Connected\nfor Greater\nPossibilities',
      sidebarColor: 'text-purple-700',
      visual: (
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <svg viewBox="0 0 120 110" className="w-28 h-24">
            <text x="12" y="22" fontSize="11" fontWeight="bold" fill="#1e293b">ERP</text>
            <text x="90" y="22" fontSize="11" fontWeight="bold" fill="#16a34a">WMS</text>
            <text x="12" y="100" fontSize="11" fontWeight="bold" fill="#2563eb">SCM</text>
            <text x="78" y="100" fontSize="9" fontWeight="bold" fill="#64748b">Other Systems</text>
            <path d="M30 60 Q60 20 90 60 Q60 100 30 60z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
            <path d="M90 60 Q60 20 30 60 Q60 100 90 60z" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" opacity=".6"/>
            <circle cx="60" cy="60" r="10" fill="#7c3aed"/>
            <text x="60" y="64" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">LINK</text>
          </svg>
          <span className="text-[9px] font-extrabold text-purple-700 italic text-center leading-tight">Connected for<br />Greater Possibilities</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-red-600 font-black italic text-2xl tracking-tight">Sarvosmi</span>
          <span className="text-green-600 font-black italic text-lg tracking-tight">ERX<sup className="text-xs">TM</sup></span>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900">
            Introducing <span className="text-red-600 italic">Sarvosmi ERX</span><sup className="text-[11px] font-black">TM</sup> <span className="italic text-slate-800">RMSC</span>
          </h2>
          <p className="text-[10px] tracking-[0.25em] text-slate-400 font-semibold uppercase mt-0.5">Raw Material Supply Chain</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-black text-slate-700 uppercase tracking-tight">Smart Supply Chain</p>
          <p className="text-sm font-black text-green-600 uppercase tracking-wide">Profitable Organization</p>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-100">
        {rows.map((r) => (
          <div key={r.num} className={`grid grid-cols-12 items-stretch bg-gradient-to-r ${r.bg} border-l-4 border-transparent`}
               style={{ borderLeftColor: r.accent }}>
            {/* Number box */}
            <div className={`col-span-1 ${r.leftBg} flex items-center justify-center`}>
              <span className={`text-2xl font-black ${r.numText}`}>{r.num}</span>
            </div>
            {/* Icon */}
            <div className="col-span-1 flex items-center justify-center px-2 py-4">{r.iconSvg}</div>
            {/* Text */}
            <div className="col-span-5 px-4 py-4 flex flex-col justify-center">
              <h3 className="text-lg font-black text-slate-900 mb-1">
                {r.titleHighlight
                  ? <><span className="text-slate-900">Connected </span><span style={{ color: r.accent }}>Platform</span></>
                  : r.title}
              </h3>
              <p className="text-[10px] text-slate-500 mb-2 leading-relaxed">{r.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {r.tags.map((t) => (
                  <span key={t} className="text-[9px] font-bold text-slate-500">{t}</span>
                ))}
              </div>
            </div>
            {/* Visual */}
            <div className={`col-span-4 border-l ${r.border} flex items-center justify-center px-3 py-3`}>{r.visual}</div>
            {/* Sidebar tagline */}
            <div className={`col-span-1 border-l ${r.border} flex items-center justify-center px-2 py-3`}>
              <span className={`text-[9px] font-black italic text-center whitespace-pre-line leading-tight ${r.sidebarColor}`}>{r.sidebar}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-7 py-3 bg-slate-50 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-[10px] text-green-700 font-bold">
          <svg viewBox="0 0 20 20" className="w-4 h-4"><path d="M10 2C5.6 3.8 3 8 3 12c0 4.4 3.1 7 7 7s7-2.6 7-7c0-4-2.6-8.2-7-10z" fill="#16a34a"/></svg>
          Sustainable Supply Chains for a Brighter Tomorrow
        </div>
        <div className="text-[10px] text-slate-400 font-semibold tracking-[0.2em] uppercase">People | Process | Technology | Growth</div>
        <div className="text-[11px] font-black text-slate-700 uppercase text-right leading-tight">
          A Smarter Supply Chain.<br />A Stronger Organization.
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PANEL 3 — Why Raw Material Supply Chain Matters?
═══════════════════════════════════════════════════════════ */
const TrafficLight: React.FC = () => (
  <div className="flex flex-col items-center gap-1 bg-slate-800 rounded-full px-2 py-3 shadow-xl border border-slate-700">
    <div className="w-6 h-6 rounded-full bg-red-500 shadow-lg shadow-red-500/60"/>
    <div className="w-6 h-6 rounded-full bg-amber-400 shadow-lg shadow-amber-400/60"/>
    <div className="w-6 h-6 rounded-full bg-green-500 shadow-lg shadow-green-500/60"/>
    <div className="w-2 h-10 bg-slate-600 rounded mt-1"/>
  </div>
);

const Panel3: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100 shadow-sm">
      <div>
        <p className="text-red-600 font-black italic text-xl">Sarvosmi</p>
        <p className="text-[11px] text-slate-500 font-bold tracking-wide">Consulting</p>
      </div>
      <h2 className="text-xl font-black text-slate-900">
        Why <span className="text-green-600">Raw Material Supply Chain</span> Matters?
      </h2>
      <div className="text-right">
        <p className="text-xs text-slate-400 italic">From</p>
        <p className="text-base font-black text-green-600 italic">Supply to Success</p>
      </div>
    </div>

    {/* Top flow: Sales → Mfg → Shipping */}
    <div className="flex items-center gap-2 px-5 pt-5 pb-3">
      <TrafficLight />
      {[
        {
          n: 1, bg: 'bg-blue-600', border: 'border-blue-300', title: 'SALES TEAM',
          photo: (
            <svg viewBox="0 0 80 80" className="w-24 h-20">
              <rect x="5" y="20" width="50" height="35" rx="3" fill="#1e40af"/><rect x="7" y="22" width="46" height="29" rx="2" fill="#3b82f6"/><rect x="10" y="25" width="40" height="20" rx="1" fill="#eff6ff"/>{/* screen data */}<rect x="12" y="27" width="15" height="8" rx="1" fill="#dbeafe"/><path d="M14 32 L16 29 L19 34 L22 28 L25 33" fill="none" stroke="#2563eb" strokeWidth="1.5"/><rect x="28" y="27" width="20" height="8" rx="1" fill="#dbeafe"/><path d="M30 33 L38 29 L46 31" fill="none" stroke="#22c55e" strokeWidth="2"/><rect x="20" y="55" width="20" height="4" rx="1" fill="#374151"/><rect x="10" y="59" width="40" height="3" rx="1.5" fill="#374151"/>
              {/* Person */}<circle cx="65" cy="28" r="7" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/><rect x="57" y="35" width="16" height="18" rx="4" fill="#1e40af"/><path d="M57 42 L52 52" stroke="#fde68a" strokeWidth="3" strokeLinecap="round"/><path d="M73 42 L77 52" stroke="#fde68a" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          ),
          points: ["Sales team has got the customer's orders against tough competition","Sales team commits firm delivery date to customers"],
        },
        {
          n: 2, bg: 'bg-blue-600', border: 'border-blue-300', title: 'MANUFACTURING',
          photo: (
            <svg viewBox="0 0 80 80" className="w-24 h-20">
              {/* Robotic arm */}<rect x="5" y="50" width="6" height="20" rx="2" fill="#64748b"/><rect x="2" y="45" width="12" height="8" rx="2" fill="#94a3b8"/><path d="M11 47 Q25 35 30 20" fill="none" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round"/><path d="M30 20 Q35 10 40 18" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/><circle cx="30" cy="20" r="4" fill="#475569"/><circle cx="11" cy="47" r="5" fill="#475569"/>
              {/* Worker */}<circle cx="60" cy="22" r="7" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/><rect x="55" y="20" width="10" height="5" rx="2" fill="#eab308"/> {/* helmet */}<rect x="52" y="29" width="16" height="18" rx="4" fill="#d97706"/><path d="M52 36 L47 48" stroke="#fde68a" strokeWidth="3" strokeLinecap="round"/><path d="M68 36 L70 48" stroke="#fde68a" strokeWidth="3" strokeLinecap="round"/><rect x="50" y="47" width="20" height="18" rx="3" fill="#1e40af" opacity=".8"/>
            </svg>
          ),
          points: ["Fine-tunes production plans","Allocates machine capacity","Schedules manufacturing operations"],
        },
        {
          n: 3, bg: 'bg-blue-600', border: 'border-blue-300', title: 'SHIPPING DEPARTMENT',
          photo: (
            <svg viewBox="0 0 80 80" className="w-24 h-20">
              {/* Warehouse */}<rect x="2" y="30" width="45" height="35" rx="2" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1"/><polygon points="2,30 24,15 46,30" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/><rect x="8" y="42" width="8" height="10" rx="1" fill="#94a3b8"/><rect x="20" y="42" width="8" height="10" rx="1" fill="#94a3b8"/><rect x="32" y="42" width="8" height="10" rx="1" fill="#94a3b8"/><rect x="14" y="52" width="16" height="13" rx="1" fill="#cbd5e1"/>
              {/* Truck */}<rect x="42" y="45" width="32" height="20" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/><rect x="54" y="38" width="20" height="10" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/><circle cx="48" cy="65" r="5" fill="#374151"/><circle cx="68" cy="65" r="5" fill="#374151"/>
            </svg>
          ),
          points: ["Passes on shipping schedules to transporters","Transporters are booked"],
        },
      ].map((col, i) => (
        <React.Fragment key={col.n}>
          <div className={`flex-1 rounded-2xl border-2 ${col.border} bg-blue-50/40 p-4 flex flex-col gap-2`}>
            <div className="flex items-center gap-2 mb-1">
              <div className={`${col.bg} text-white font-black text-sm w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow`}>{col.n}</div>
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wide">{col.title}</span>
            </div>
            <div className="flex justify-center py-1">{col.photo}</div>
            <ul className="space-y-1.5">
              {col.points.map((p) => (
                <li key={p} className="text-[9.5px] text-slate-600 flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-green-500 shrink-0 mt-0.5" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#22c55e"/><path d="M3.5 6 L5.5 8 L8.5 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          {i < 2 && (
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3l6 7-6 7V3z"/></svg>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      <TrafficLight />
    </div>

    {/* Middle Banner */}
    <div className="mx-5 my-2">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl px-8 py-4 text-center shadow-xl border border-emerald-500/30">
        <p className="text-xs text-slate-300 font-semibold">Everything and everyone else is ready</p>
        <p className="text-lg font-black text-red-400 tracking-wide">NOW SUCCESS DEPENDS ON THE</p>
        <p className="text-lg font-black text-white uppercase tracking-widest">RAW MATERIAL SUPPLY CHAIN ORGANIZATION</p>
      </div>
    </div>

    {/* Bottom 3-column */}
    <div className="grid grid-cols-12 gap-3 px-5 pb-4">
      {/* IF PERFORMS WELL */}
      <div className="col-span-4 bg-green-50 border-2 border-green-400 rounded-2xl p-4 shadow-sm">
        <p className="text-[10px] font-black text-green-700 uppercase tracking-widest border-b-2 border-green-300 pb-2 mb-3">If Raw Material Supply Chain Performs Well</p>
        <ul className="space-y-1.5 mb-4">
          {[
            'No stockouts',
            'On-time correct and complete material delivery to production',
            'Negligible material rejections',
            'Stress of employees & operators reduced',
            'Results in increased efficiency and productivity',
          ].map((p) => (
            <li key={p} className="text-[9.5px] text-slate-600 flex items-start gap-1.5">
              <svg className="w-3 h-3 text-green-500 shrink-0 mt-0.5" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#22c55e"/><path d="M3.5 6 L5.5 8 L8.5 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              {p}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-green-200 shadow-sm mt-auto">
          <svg viewBox="0 0 40 40" className="w-12 h-12 shrink-0">
            <circle cx="20" cy="20" r="18" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
            <circle cx="20" cy="16" r="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/>
            <path d="M8 34 Q20 24 32 34" fill="#22c55e"/>
            <circle cx="15" cy="18" r="1.5" fill="#374151"/><circle cx="25" cy="18" r="1.5" fill="#374151"/>
            <path d="M15 24 Q20 28 25 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="text-[11px] font-black text-green-700 uppercase">Users Satisfied</p>
            <div className="flex items-center gap-1 mt-0.5">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm3 5.5L6.5 11 4 8.5l1-1 1.5 1.5L10 5.5l1 1z"/></svg>
              <p className="text-[10px] font-bold text-green-600 uppercase">Organization Succeeds</p>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER: Supply Chain Wheel */}
      <div className="col-span-4 flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 240 240" className="w-52 h-52">
          <defs>
            <linearGradient id="wheelCenter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af"/>
              <stop offset="100%" stopColor="#2563eb"/>
            </linearGradient>
          </defs>
          {/* Outer ring segments */}
          {[
            { label: 'Suppliers', color: '#f87171', angle: 0 },
            { label: 'Procurement', color: '#fb923c', angle: 60 },
            { label: 'Inventory\nManagement', color: '#facc15', angle: 120 },
            { label: 'Logistics', color: '#4ade80', angle: 180 },
            { label: 'Quality\nAssurance', color: '#60a5fa', angle: 240 },
            { label: 'Planning &\nSourcing', color: '#c084fc', angle: 300 },
          ].map((seg) => {
            const rad = seg.angle * Math.PI / 180;
            const cx = 120 + 90 * Math.cos(rad);
            const cy = 120 + 90 * Math.sin(rad);
            const tx = 120 + 112 * Math.cos(rad);
            const ty = 120 + 112 * Math.sin(rad);
            return (
              <g key={seg.label}>
                <circle cx={cx} cy={cy} r="18" fill={seg.color} stroke="white" strokeWidth="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.2))"/>
                {seg.label.split('\n').map((line, li) => (
                  <text key={li} x={tx} y={ty + li * 9 - (seg.label.includes('\n') ? 4 : 0)} textAnchor="middle" fontSize="7" fontWeight="bold" fill="#374151">{line}</text>
                ))}
                <line x1="120" y1="120" x2={cx} y2={cy} stroke={seg.color} strokeWidth="2" opacity=".4"/>
              </g>
            );
          })}
          {/* Center */}
          <circle cx="120" cy="120" r="58" fill="url(#wheelCenter)" stroke="#1e3a8a" strokeWidth="2" filter="drop-shadow(0 3px 6px rgba(30,64,175,0.3))"/>
          <text x="120" y="110" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#bfdbfe" letterSpacing="1">RAW MATERIAL</text>
          <text x="120" y="121" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#bfdbfe" letterSpacing="1">SUPPLY CHAIN</text>
          <text x="120" y="132" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" letterSpacing="1">ORGANIZATION</text>
        </svg>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 bg-green-600 text-white rounded-full px-3 py-1.5 text-[10px] font-black shadow">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 12 12"><path d="M6 1L1 11h10z" transform="rotate(180,6,6)"/></svg>
            Performs Well
          </div>
          <div className="flex items-center gap-1.5 bg-red-600 text-white rounded-full px-3 py-1.5 text-[10px] font-black shadow">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 12 12"><path d="M6 1L1 11h10z"/></svg>
            Fails to Perform
          </div>
        </div>
      </div>

      {/* IF FAILS */}
      <div className="col-span-4 bg-red-50 border-2 border-red-400 rounded-2xl p-4 shadow-sm">
        <p className="text-[10px] font-black text-red-700 uppercase tracking-widest border-b-2 border-red-300 pb-2 mb-3">If Raw Material Supply Chain Fails to Perform</p>
        <ul className="space-y-1.5 mb-4">
          {[
            'Material Shortage',
            'Delayed material delivery to production',
            'Wrong or defective parts delivered to production',
            'High initiation levels among employees & operators',
            'Results in high inefficiencies and high cost of production',
          ].map((p) => (
            <li key={p} className="text-[9.5px] text-slate-600 flex items-start gap-1.5">
              <svg className="w-3 h-3 text-red-500 shrink-0 mt-0.5" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#ef4444"/><path d="M4 4 L8 8 M8 4 L4 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {p}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-red-200 shadow-sm mt-auto">
          <svg viewBox="0 0 40 40" className="w-12 h-12 shrink-0">
            <circle cx="20" cy="20" r="18" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/>
            <circle cx="20" cy="16" r="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/>
            <path d="M8 34 Q20 26 32 34" fill="#ef4444"/>
            <circle cx="15" cy="18" r="1.5" fill="#374151"/><circle cx="25" cy="18" r="1.5" fill="#374151"/>
            <path d="M15 26 Q20 22 25 26" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="text-[11px] font-black text-red-700 uppercase">Users Unsatisfied</p>
            <div className="flex items-center gap-1 mt-0.5">
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm-3 6.5 1-1 2 2 4-4 1 1-5 5-3-3z"/></svg>
              <p className="text-[10px] font-bold text-red-600 uppercase">Organization Fails</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mx-5 mb-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl px-6 py-3 text-center shadow">
      <p className="text-[11px] text-slate-300 leading-relaxed">
        <span className="text-red-400 font-black italic">Sarvosmi ERX</span><sup className="text-[9px]">TM</sup>
        {' '}<span className="font-bold">RMSC</span> automates the entire Raw Material Supply Chain workflow — giving a real-time visibility to Buyers, Suppliers, Logistics Providers and also to the internal supply-chain teams alike
      </p>
      <p className="text-[9px] text-slate-500 tracking-[0.2em] uppercase mt-1.5">People | Process | Technology | Growth</p>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════ */
export const OverviewSection: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <section
      id="overview-section"
      className={`w-full py-3 px-2 sm:px-4 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-[#f0f4fa]'}`}
    >
      <div className="w-full max-w-[1530px] mx-auto flex flex-col gap-5">
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </div>
    </section>
  );
};
