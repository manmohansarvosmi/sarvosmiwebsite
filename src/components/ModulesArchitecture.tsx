import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Layers,
  Database,
  Calendar,
  Users,
  Warehouse,
  Container,
  Box,
  FileText,
  Truck,
  Package,
  HelpCircle,
  Wrench,
  Smartphone,
  FileSpreadsheet,
  PlayCircle,
  Send,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  LayoutGrid,
  Search,
  ScanLine,
  ArrowRightCircle,
  RefreshCw,
  Settings,
  Activity,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Play,
  Pause,
  ArrowRight,
  Info,
  Check,
  ExternalLink,
  Sparkles,
  SearchCheck,
  GitFork,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import { MASTER_MODULES, TRANSACTIONAL_MODULES } from '../data/rmscData';
import { ModuleItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NodeCoord {
  id: string;
  title: string;
  category: 'master' | 'transactional';
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  x: number;
  y: number;
  row: number;
  subText: string;
  erpAction: string;
  hasRedDot?: boolean;
}

export const ModulesArchitecture: React.FC = () => {
  const { isDark } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScale, setAutoScale] = useState<number>(1);

  const [selectedModule, setSelectedModule] = useState<ModuleItem>(TRANSACTIONAL_MODULES[0]);
  const [activeTab, setActiveTab] = useState<'all' | 'master' | 'transactional'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [showCatalogDrawer, setShowCatalogDrawer] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        if (currentWidth > 0) {
          // Scale canvas to fill 100% edge-to-edge screen width
          const calculatedScale = currentWidth / 1240;
          setAutoScale(calculatedScale);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Top Central Orchestration Hub Coordinates in 1240x820 canvas
  const hubCenter = { x: 620, y: 70, r: 52 };

  // 14 Transactional Modules Node Coordinates (Vertical Top-to-Bottom Flow)
  const txNodes: NodeCoord[] = useMemo(() => [
    // Stage 1 / Row 1 (y: 150)
    { id: 'tx-demand', title: 'Material Demand Creation', category: 'transactional', icon: 'FileSpreadsheet', color: '#8b5cf6', borderColor: '#a78bfa', bgColor: '#f5f3ff', x: 75, y: 150, row: 1, subText: 'MRP Net Requirement', erpAction: 'Imports MRP / Releases Demand', hasRedDot: true },
    { id: 'tx-plan-exec', title: 'Production Plan Execution', category: 'transactional', icon: 'PlayCircle', color: '#ef4444', borderColor: '#f87171', bgColor: '#fef2f2', x: 355, y: 150, row: 1, subText: 'Shift Work Order Release', erpAction: 'ERP Production Order (CO01)', hasRedDot: true },
    { id: 'tx-proc-schedule', title: 'Procurement Schedule', category: 'transactional', icon: 'Send', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 635, y: 150, row: 1, subText: 'Buyer Delivery Call-Offs', erpAction: 'ERP Purchase Order (ME21N)' },
    { id: 'tx-asn', title: 'Advance Shipping Notice', category: 'transactional', icon: 'FileCheck', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 915, y: 150, row: 1, subText: 'Vendor Dispatch Manifest', erpAction: 'Inbound Delivery (VL31N)', hasRedDot: true },

    // Stage 2 / Row 2 (y: 255)
    { id: 'tx-gate', title: 'Gate Receipts', category: 'transactional', icon: 'ShieldCheck', color: '#3b82f6', borderColor: '#60a5fa', bgColor: '#eff6ff', x: 75, y: 255, row: 2, subText: '1-Scan Gate Clearance', erpAction: 'ERP Gate Status Update' },
    { id: 'tx-docking', title: 'Docking & Unloading', category: 'transactional', icon: 'Truck', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 355, y: 255, row: 2, subText: 'Bay Assignment & GRR', erpAction: 'Initial Goods Staging Log', hasRedDot: true },
    { id: 'tx-qc', title: 'Inward QC / Inspection', category: 'transactional', icon: 'CheckCircle2', color: '#eab308', borderColor: '#facc15', bgColor: '#fefce8', x: 635, y: 255, row: 2, subText: 'Dual-Stream QC Routing', erpAction: 'ERP Quality Lot (QA32)' },
    { id: 'tx-material-inspection', title: 'Material Inspection', category: 'transactional', icon: 'SearchCheck', color: '#f43f5e', borderColor: '#fb7185', bgColor: '#fff1f2', x: 915, y: 255, row: 2, subText: 'Lab COA Verification', erpAction: 'ERP Results Recording (QE51N)' },

    // Stage 3 / Row 3 (y: 360)
    { id: 'tx-store-ops', title: 'RM Store Operations', category: 'transactional', icon: 'Warehouse', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 175, y: 360, row: 3, subText: 'Real-Time Stock Movements', erpAction: 'ERP Stock Ledger (MARD)' },
    { id: 'tx-store-layout', title: 'Store Layout', category: 'transactional', icon: 'LayoutGrid', color: '#06b6d4', borderColor: '#22d3ee', bgColor: '#ecfeff', x: 485, y: 360, row: 3, subText: '2D/3D Dynamic Mapping', erpAction: 'Bin Coordinates Telemetry' },
    { id: 'tx-rejections', title: 'Rejections & Returns', category: 'transactional', icon: 'RotateCcw', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 795, y: 360, row: 3, subText: 'Vendor RTV Clearance', erpAction: 'ERP Return Delivery (MIGO 122)', hasRedDot: true },

    // Stage 4 / Row 4 (y: 465)
    { id: 'tx-picking-putting', title: 'Picking & Putting', category: 'transactional', icon: 'ScanLine', color: '#ef4444', borderColor: '#f87171', bgColor: '#fef2f2', x: 175, y: 465, row: 4, subText: 'Wearable Ring Scan Path', erpAction: 'ERP Transfer Order (LT01)', hasRedDot: true },
    { id: 'tx-delivery', title: 'Material Delivery', category: 'transactional', icon: 'ArrowRightCircle', color: '#14b8a6', borderColor: '#2dd4bf', bgColor: '#f0fdfa', x: 485, y: 465, row: 4, subText: 'Line-side Kitting Delivery', erpAction: 'Goods Issue to Order (MIGO 261)' },
    { id: 'tx-line-rejections', title: 'Line Rejections & Re-issue', category: 'transactional', icon: 'RefreshCw', color: '#8b5cf6', borderColor: '#a78bfa', bgColor: '#f5f3ff', x: 795, y: 465, row: 4, subText: '<15 Min Defect Replacement', erpAction: 'Shop-Floor Scrap & Re-issue', hasRedDot: true }
  ], []);

  // Icon Helper
  const renderIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Calendar': return <Calendar className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Warehouse': return <Warehouse className={className} />;
      case 'Container': return <Container className={className} />;
      case 'Box': return <Box className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Package': return <Package className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'HelpCircle': return <HelpCircle className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
      case 'PlayCircle': return <PlayCircle className={className} />;
      case 'Send': return <Send className={className} />;
      case 'FileCheck': return <FileCheck className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'CheckCircle2': return <CheckCircle2 className={className} />;
      case 'RotateCcw': return <RotateCcw className={className} />;
      case 'LayoutGrid': return <LayoutGrid className={className} />;
      case 'SearchCheck': return <Search className={className} />;
      case 'ScanLine': return <ScanLine className={className} />;
      case 'ArrowRightCircle': return <ArrowRightCircle className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      default: return <Activity className={className} />;
    }
  };

  // Find module data for inspection modal
  const handleSelectNode = (nodeId: string) => {
    const all = [...MASTER_MODULES, ...TRANSACTIONAL_MODULES];
    const found = all.find(m => m.id === nodeId);
    if (found) {
      setSelectedModule(found);
    }
  };

  const filteredTx = useMemo(() => {
    if (!searchQuery) return txNodes;
    const q = searchQuery.toLowerCase();
    return txNodes.filter(n => n.title.toLowerCase().includes(q) || n.subText.toLowerCase().includes(q) || n.erpAction.toLowerCase().includes(q));
  }, [txNodes, searchQuery]);

  return (
    <div id="modules-architecture-container" className={`w-full py-4 px-0 transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#faf7f5] text-slate-900'}`}>
      <div className="w-full max-w-none px-0 space-y-0">

        {/* MAIN DISPLAY: PURE INTERACTIVE DESKERA-STYLE FLOW */}
        <div id="deskera-style-flow-wrapper" ref={containerRef} className="relative w-full overflow-hidden transition-all py-2">
          
          {/* SVG Mindmap Scaled Canvas Container */}
          <div
            className="w-full flex justify-center items-start overflow-hidden"
            style={{ height: `${570 * autoScale * zoomLevel}px`, transition: 'height 0.2s ease-out' }}
          >
            <div
              style={{
                width: '1240px',
                height: '570px',
                transform: `scale(${autoScale * zoomLevel})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out'
              }}
              className="relative select-none shrink-0"
            >
                
                <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 1240 570">
                  <defs>
                    {/* Warm ambient background glow centered at top hub */}
                    <radialGradient id="hubWarmGlow" cx="50%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity={isDark ? "0.3" : "0.32"} />
                      <stop offset="50%" stopColor="#fb923c" stopOpacity={isDark ? "0.1" : "0.12"} />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                    </radialGradient>

                    {/* Filter drop-shadow for cards */}
                    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity={isDark ? "0.4" : "0.08"} />
                    </filter>
                  </defs>

                  {/* 1. Ambient Background Halo around Hub */}
                  <ellipse cx={hubCenter.x} cy={hubCenter.y} rx="340" ry="180" fill="url(#hubWarmGlow)" />

                  {/* 2. Concentric Radiating Rings around Hub */}
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="70" fill="none" stroke="#f97316" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" />
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="120" fill="none" stroke="#fb923c" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 7" />

                  {/* 3. Curved Vertical Connector Lines: Top Hub to Stage 1 Nodes */}
                  {filteredTx.filter(n => n.row === 1).map((node) => {
                    const cardW = 250;
                    const startX = hubCenter.x;
                    const startY = hubCenter.y + 42;
                    const targetX = node.x + cardW / 2;
                    const targetY = node.y;
                    const c1X = startX;
                    const c1Y = startY + (targetY - startY) * 0.45;
                    const c2X = targetX;
                    const c2Y = startY + (targetY - startY) * 0.75;
                    const pathD = `M ${startX} ${startY} C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === node.id || selectedModule.id === node.id;

                    return (
                      <g key={`wire-hub-to-${node.id}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? node.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 3 : 1.5}
                          strokeOpacity={isHovered ? 0.95 : 0.55}
                          className="transition-all duration-300"
                        />
                        {node.hasRedDot && (
                          <circle cx={targetX} cy={targetY} r="3.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {isSimulating && (
                          <circle r={isHovered ? 3.5 : 2.5} fill={node.color} opacity="0.85">
                            <animateMotion path={pathD} dur="2.4s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}

                  {/* 4. Downward Connector Lines: Stage 1 to Stage 2 */}
                  {[0, 1, 2, 3].map((idx) => {
                    const stage1Nodes = filteredTx.filter(n => n.row === 1);
                    const stage2Nodes = filteredTx.filter(n => n.row === 2);
                    const n1 = stage1Nodes[idx];
                    const n2 = stage2Nodes[idx];
                    if (!n1 || !n2) return null;

                    const cardW = 250;
                    const startX = n1.x + cardW / 2;
                    const startY = n1.y + 56;
                    const targetX = n2.x + cardW / 2;
                    const targetY = n2.y;
                    const pathD = `M ${startX} ${startY} L ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === n1.id || hoveredNodeId === n2.id;

                    return (
                      <g key={`wire-stage1-2-${idx}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? n2.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 2.5 : 1.5}
                          strokeDasharray="4 4"
                          strokeOpacity={0.6}
                          className="transition-all duration-300"
                        />
                        {n2.hasRedDot && (
                          <circle cx={targetX} cy={targetY} r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {isSimulating && (
                          <circle r={2.5} fill={n2.color} opacity="0.8">
                            <animateMotion path={pathD} dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}

                  {/* 5. Downward Connector Lines: Stage 2 to Stage 3 */}
                  {[0, 1, 2].map((idx) => {
                    const stage2Nodes = filteredTx.filter(n => n.row === 2);
                    const stage3Nodes = filteredTx.filter(n => n.row === 3);
                    const n2 = stage2Nodes[idx + (idx === 2 ? 1 : 0)];
                    const n3 = stage3Nodes[idx];
                    if (!n2 || !n3) return null;

                    const cardW2 = 250;
                    const cardW3 = 270;
                    const startX = n2.x + cardW2 / 2;
                    const startY = n2.y + 56;
                    const targetX = n3.x + cardW3 / 2;
                    const targetY = n3.y;
                    const c1X = startX;
                    const c1Y = startY + (targetY - startY) * 0.5;
                    const c2X = targetX;
                    const c2Y = startY + (targetY - startY) * 0.5;
                    const pathD = `M ${startX} ${startY} C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === n3.id;

                    return (
                      <g key={`wire-stage2-3-${idx}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? n3.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 2.5 : 1.5}
                          strokeOpacity={0.55}
                          className="transition-all duration-300"
                        />
                        {n3.hasRedDot && (
                          <circle cx={targetX} cy={targetY} r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {isSimulating && (
                          <circle r={2.5} fill={n3.color} opacity="0.8">
                            <animateMotion path={pathD} dur="2.0s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}

                  {/* 6. Downward Connector Lines: Stage 3 to Stage 4 */}
                  {[0, 1, 2].map((idx) => {
                    const stage3Nodes = filteredTx.filter(n => n.row === 3);
                    const stage4Nodes = filteredTx.filter(n => n.row === 4);
                    const n3 = stage3Nodes[idx];
                    const n4 = stage4Nodes[idx];
                    if (!n3 || !n4) return null;

                    const cardW = 270;
                    const startX = n3.x + cardW / 2;
                    const startY = n3.y + 56;
                    const targetX = n4.x + cardW / 2;
                    const targetY = n4.y;
                    const pathD = `M ${startX} ${startY} L ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === n4.id;

                    return (
                      <g key={`wire-stage3-4-${idx}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? n4.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 2.5 : 1.5}
                          strokeDasharray="4 4"
                          strokeOpacity={0.6}
                          className="transition-all duration-300"
                        />
                        {n4.hasRedDot && (
                          <circle cx={targetX} cy={targetY} r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {isSimulating && (
                          <circle r={2.5} fill={n4.color} opacity="0.8">
                            <animateMotion path={pathD} dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* 7. Top Central Orchestration Core Hub (Sarvosmi ERX™ RMSC Center) */}
                <div
                  style={{
                    left: `${hubCenter.x - 130}px`,
                    top: `${hubCenter.y - 42}px`,
                    width: '260px',
                    height: '84px'
                  }}
                  className="absolute z-10 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white px-4 py-2.5 shadow-2xl border-2 border-amber-500/70 flex items-center justify-between cursor-pointer group hover:scale-[1.02] transition-transform"
                  onClick={() => handleSelectNode('tx-demand')}
                >
                  <div className="absolute inset-0 rounded-2xl border border-amber-400/30 animate-ping pointer-events-none opacity-30" />
                  
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black tracking-widest text-red-500 uppercase leading-none">Sarvosmi</span>
                    <span className="text-base font-black text-emerald-400 tracking-tight leading-none mt-1">ERX™ RMSC</span>
                    <span className="text-[9px] font-medium text-amber-200/90 leading-tight mt-1">Real-Time Orchestration Core</span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-wider">Active</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>
                </div>

                {/* 8. HTML Transactional Nodes In Vertical Stages */}
                {filteredTx.map((node) => {
                  const isSelected = selectedModule.id === node.id;
                  const isWide = node.row >= 3;
                  const cardW = isWide ? 270 : 250;
                  const isFlipped = hoveredNodeId === node.id;

                  return (
                    <div
                      key={node.id}
                      style={{ left: `${node.x}px`, top: `${node.y}px`, width: `${cardW}px`, perspective: '900px' }}
                      className="absolute z-10 cursor-pointer"
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onClick={() => handleSelectNode(node.id)}
                    >
                      {/* Flip wrapper */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '86px',
                          transformStyle: 'preserve-3d',
                          transition: 'transform 0.52s cubic-bezier(0.4,0,0.2,1)',
                          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        }}
                      >
                        {/* ── FRONT FACE ── */}
                        <div
                          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                          className={`absolute inset-0 p-2.5 rounded-xl border overflow-hidden ${
                            isSelected
                              ? isDark ? 'ring-2 ring-blue-500 bg-slate-800 border-blue-400/80 shadow-lg' : 'ring-2 ring-blue-500 bg-white border-blue-400 shadow-lg'
                              : isDark ? 'bg-slate-900/95 border-slate-700/80' : 'bg-white border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
                          }`}
                        >
                          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: node.color }} />
                          <div className="flex items-center gap-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: isDark ? `${node.color}22` : `${node.color}15`, color: node.color, border: `1.5px solid ${node.color}${isDark ? '40' : '30'}` }}
                            >
                              {renderIcon(node.icon, 'w-3.5 h-3.5')}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className={`text-[11px] font-bold truncate leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{node.title}</p>
                              <p className={`text-[9.5px] truncate leading-normal mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{node.subText}</p>
                            </div>
                          </div>
                          <div className={`mt-2 pt-1.5 border-t flex items-center justify-between ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                            <span className={`text-[8px] font-semibold tracking-wide uppercase ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Phase 1 Trans.</span>
                            <ArrowUpRight className={`w-2.5 h-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'} shrink-0`} />
                          </div>
                        </div>

                        {/* ── BACK FACE ── */}
                        <div
                          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                          className="absolute inset-0 p-2.5 rounded-xl border overflow-hidden bg-slate-900 border-slate-700"
                        >
                          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: node.color }} />
                          <p className="text-[7.5px] font-black tracking-widest uppercase text-slate-500 mb-1">ERP Action</p>
                          <p className="text-[10px] font-bold text-white leading-snug" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {node.erpAction}
                          </p>
                          <div className="mt-2 pt-1.5 border-t border-slate-800 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: node.color }} />
                            <span className="text-[8px] font-semibold uppercase tracking-wider" style={{ color: node.color }}>
                              {node.hasRedDot ? 'Priority' : 'Standard'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

        </div>

      </div>
    </div>
  );
};
