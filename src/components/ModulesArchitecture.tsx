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

  // Central Hub Coordinates in 1240x710 canvas
  const hubCenter = { x: 610, y: 390, r: 62 };

  // 12 Master Data Modules Node Coordinates (Left Side Wing)
  const masterNodes: NodeCoord[] = useMemo(() => [
    // Row 1 / Top Cluster: Basic Config
    { id: 'mod-calendar', title: 'Calendar', category: 'master', icon: 'Calendar', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 130, y: 80, row: 1, subText: 'Shifts & Plant Holidays', erpAction: 'ERP Plant Calendar Sync', hasRedDot: true },
    { id: 'mod-users', title: 'Users', category: 'master', icon: 'Users', color: '#f43f5e', borderColor: '#fb7185', bgColor: '#fff1f2', x: 300, y: 90, row: 1, subText: 'Roles & Authorizations', erpAction: 'SSO / LDAP Directory Sync' },
    { id: 'mod-rm-store', title: 'Raw Material Store', category: 'master', icon: 'Warehouse', color: '#3b82f6', borderColor: '#60a5fa', bgColor: '#eff6ff', x: 60, y: 190, row: 1, subText: 'Racks, Bins & Aisles', erpAction: 'ERP Storage Location (SLOC)' },
    { id: 'mod-docks', title: 'Unloading Docks', category: 'master', icon: 'Container', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 245, y: 205, row: 1, subText: 'Truck Bays & Levelers', erpAction: 'Plant Logistics Master', hasRedDot: true },

    // Row 2 / Middle Cluster: Commercial & Materials
    { id: 'mod-materials', title: 'Materials', category: 'master', icon: 'Box', color: '#eab308', borderColor: '#facc15', bgColor: '#fefce8', x: 20, y: 315, row: 2, subText: 'SKU Specs & Tolerances', erpAction: 'ERP Material Master (MARA)' },
    { id: 'mod-contracts', title: 'Contracts', category: 'master', icon: 'FileText', color: '#ef4444', borderColor: '#f87171', bgColor: '#fef2f2', x: 210, y: 325, row: 2, subText: 'Rate SLAs & Delivery MOQ', erpAction: 'ERP Purchasing Info Record', hasRedDot: true },
    { id: 'mod-suppliers', title: 'Suppliers', category: 'master', icon: 'Truck', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 370, y: 310, row: 2, subText: 'Vendor Profiles & Rating', erpAction: 'ERP Vendor Master (LFA1)' },
    { id: 'mod-packing', title: 'Packing', category: 'master', icon: 'Package', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 40, y: 440, row: 2, subText: 'Pallets & Label Schemas', erpAction: 'Packaging Specification Sync' },

    // Row 3 / Bottom Cluster: Engineering, Quality & Devices
    { id: 'mod-bom', title: 'Bill of Materials', category: 'master', icon: 'Layers', color: '#8b5cf6', borderColor: '#a78bfa', bgColor: '#f5f3ff', x: 230, y: 450, row: 3, subText: 'Multi-Level BOM & Scrap', erpAction: 'ERP Production BOM (STPO)', hasRedDot: true },
    { id: 'mod-reasons', title: 'Reason', category: 'master', icon: 'HelpCircle', color: '#84cc16', borderColor: '#a3e635', bgColor: '#f7fee7', x: 390, y: 460, row: 3, subText: 'Defect & Rejection Codes', erpAction: 'Standard Defect Catalog' },
    { id: 'mod-equipment', title: 'Equipment', category: 'master', icon: 'Wrench', color: '#92400e', borderColor: '#b45309', bgColor: '#fffbeb', x: 120, y: 565, row: 3, subText: 'Forklifts & Weigh Scales', erpAction: 'Plant Maintenance (PM) Sync' },
    { id: 'mod-devices', title: 'Device', category: 'master', icon: 'Smartphone', color: '#06b6d4', borderColor: '#22d3ee', bgColor: '#ecfeff', x: 300, y: 575, row: 3, subText: 'Ring Scanners & Displays', erpAction: 'ERX Hardware Subsystem', hasRedDot: true }
  ], []);

  // 14 Transactional Modules Node Coordinates (Right Side Wing)
  const txNodes: NodeCoord[] = useMemo(() => [
    // Row 1 / Stage 1: Demand, Plan, Sourcing & Gate
    { id: 'tx-demand', title: 'Material Demand Creation', category: 'transactional', icon: 'FileSpreadsheet', color: '#8b5cf6', borderColor: '#a78bfa', bgColor: '#f5f3ff', x: 740, y: 80, row: 1, subText: 'MRP Net Requirement', erpAction: 'Imports MRP / Releases Demand' },
    { id: 'tx-plan-exec', title: 'Production Plan Execution', category: 'transactional', icon: 'PlayCircle', color: '#ef4444', borderColor: '#f87171', bgColor: '#fef2f2', x: 910, y: 85, row: 1, subText: 'Shift Work Order Release', erpAction: 'ERP Production Order (CO01)', hasRedDot: true },
    { id: 'tx-proc-schedule', title: 'Procurement Schedule & Requests (Buyer)', category: 'transactional', icon: 'Send', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 1070, y: 95, row: 1, subText: 'Buyer Delivery Call-Offs', erpAction: 'ERP Purchase Order (ME21N)' },
    { id: 'tx-asn', title: 'Advance Shipping Notice (ASN) (Supplier)', category: 'transactional', icon: 'FileCheck', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 790, y: 195, row: 1, subText: 'Vendor Dispatch Manifest', erpAction: 'Inbound Delivery (VL31N)', hasRedDot: true },
    { id: 'tx-gate', title: 'Gate Receipts', category: 'transactional', icon: 'ShieldCheck', color: '#3b82f6', borderColor: '#60a5fa', bgColor: '#eff6ff', x: 965, y: 200, row: 1, subText: '1-Scan Gate Entry Clearance', erpAction: 'ERP Gate Status Update' },

    // Row 2 / Stage 2: Docking, QC & Storage
    { id: 'tx-docking', title: 'Docking & Unloading', category: 'transactional', icon: 'Truck', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 715, y: 315, row: 2, subText: 'Bay Assignment & Staging GRR', erpAction: 'Initial Goods Staging Log', hasRedDot: true },
    { id: 'tx-qc', title: 'Inward QC / Inspections', category: 'transactional', icon: 'CheckCircle2', color: '#eab308', borderColor: '#facc15', bgColor: '#fefce8', x: 885, y: 320, row: 2, subText: 'Dual-Stream QC Routing', erpAction: 'ERP Quality Lot (QA32)' },
    { id: 'tx-store-ops', title: 'RM Store Operations', category: 'transactional', icon: 'Warehouse', color: '#f97316', borderColor: '#fb923c', bgColor: '#fff7ed', x: 1055, y: 310, row: 2, subText: 'Real-Time Stock Movements', erpAction: 'ERP Stock Ledger (MARD)' },

    // Row 3 / Stage 3: Returns, Layout, Testing, Picking, Delivery & Line Replacement
    { id: 'tx-rejections', title: 'Rejections & Returns', category: 'transactional', icon: 'RotateCcw', color: '#10b981', borderColor: '#34d399', bgColor: '#ecfdf5', x: 730, y: 440, row: 3, subText: 'Vendor RTV Clearance', erpAction: 'ERP Return Delivery (MIGO 122)', hasRedDot: true },
    { id: 'tx-store-layout', title: 'Store Layout', category: 'transactional', icon: 'LayoutGrid', color: '#06b6d4', borderColor: '#22d3ee', bgColor: '#ecfeff', x: 900, y: 445, row: 3, subText: '2D/3D Dynamic Bin Mapping', erpAction: 'Bin Coordinates Telemetry' },
    { id: 'tx-material-inspection', title: 'Material Inspection', category: 'transactional', icon: 'SearchCheck', color: '#f43f5e', borderColor: '#fb7185', bgColor: '#fff1f2', x: 1065, y: 440, row: 3, subText: 'Lab COA Verification', erpAction: 'ERP Results Recording (QE51N)' },
    { id: 'tx-picking-putting', title: 'Picking & Putting', category: 'transactional', icon: 'ScanLine', color: '#ef4444', borderColor: '#f87171', bgColor: '#fef2f2', x: 785, y: 565, row: 3, subText: 'Wearable Ring Scan Path', erpAction: 'ERP Transfer Order (LT01)', hasRedDot: true },
    { id: 'tx-delivery', title: 'Material Delivery', category: 'transactional', icon: 'ArrowRightCircle', color: '#14b8a6', borderColor: '#2dd4bf', bgColor: '#f0fdfa', x: 945, y: 570, row: 3, subText: 'Line-side Kitting Delivery', erpAction: 'Goods Issue to Order (MIGO 261)' },
    { id: 'tx-line-rejections', title: 'Line Rejections & Re-issuer', category: 'transactional', icon: 'RefreshCw', color: '#8b5cf6', borderColor: '#a78bfa', bgColor: '#f5f3ff', x: 1075, y: 565, row: 3, subText: '<15 Min Defect Replacement', erpAction: 'Shop-Floor Scrap & Re-issue', hasRedDot: true }
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

  // Filter modules
  const filteredMaster = useMemo(() => {
    if (!searchQuery) return masterNodes;
    const q = searchQuery.toLowerCase();
    return masterNodes.filter(n => n.title.toLowerCase().includes(q) || n.subText.toLowerCase().includes(q) || n.erpAction.toLowerCase().includes(q));
  }, [masterNodes, searchQuery]);

  const filteredTx = useMemo(() => {
    if (!searchQuery) return txNodes;
    const q = searchQuery.toLowerCase();
    return txNodes.filter(n => n.title.toLowerCase().includes(q) || n.subText.toLowerCase().includes(q) || n.erpAction.toLowerCase().includes(q));
  }, [txNodes, searchQuery]);

  return (
    <div id="modules-architecture-container" className={`w-full py-0 px-0 transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#faf7f5] text-slate-900'}`}>
      <div className="w-full max-w-none px-0 space-y-0">

        {/* MAIN DISPLAY: PURE INTERACTIVE DESKERA-STYLE FLOW (ONLY CANVAS FIT TO SCREEN) */}
        <div id="deskera-style-flow-wrapper" ref={containerRef} className="relative w-full overflow-hidden transition-all py-2">
          
          {/* SVG Mindmap Scaled Canvas Container (No Horizontal Scrollbar & No Right Cut-off) */}
          <div className="w-full flex justify-center items-start overflow-hidden">
            <div
              style={{
                width: '1240px',
                height: `${710 * autoScale * zoomLevel}px`,
                transform: `scale(${autoScale * zoomLevel})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out, height 0.2s ease-out'
              }}
              className="relative select-none shrink-0"
            >
                
                <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 1240 710">
                  <defs>
                    {/* Warm ambient background glow centered at hub */}
                    <radialGradient id="hubWarmGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity={isDark ? "0.2" : "0.25"} />
                      <stop offset="45%" stopColor="#fb923c" stopOpacity={isDark ? "0.08" : "0.1"} />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                    </radialGradient>

                    {/* Master Data gradient line */}
                    <linearGradient id="masterWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                    </linearGradient>

                    {/* Transactional gradient line */}
                    <linearGradient id="txWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                    </linearGradient>

                    {/* Filter drop-shadow for cards */}
                    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity={isDark ? "0.4" : "0.08"} />
                    </filter>
                  </defs>

                  {/* 1. Large Central Radiant Halo Background */}
                  <ellipse cx={hubCenter.x} cy={hubCenter.y} rx="360" ry="300" fill="url(#hubWarmGlow)" />

                  {/* 2. Concentric Radiating Rings around Hub */}
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="85" fill="none" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 6" />
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="135" fill="none" stroke="#fb923c" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 7" />
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="190" fill="none" stroke="#fdba74" strokeOpacity="0.15" strokeWidth="1" />
                  <circle cx={hubCenter.x} cy={hubCenter.y} r="250" fill="none" stroke="#fed7aa" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="6 8" />

                  {/* 3. Curved Connector Lines: Master Data Modules (Left) to Hub */}
                  {filteredMaster.map((node) => {
                    const startX = node.x + 120;
                    const startY = node.y + 24;
                    const targetX = hubCenter.x - 55;
                    const targetY = hubCenter.y;
                    const c1X = startX + (targetX - startX) * 0.55;
                    const c1Y = startY;
                    const c2X = startX + (targetX - startX) * 0.75;
                    const c2Y = targetY;
                    const pathD = `M ${startX} ${startY} C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === node.id || selectedModule.id === node.id;

                    return (
                      <g key={`wire-master-${node.id}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? node.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 3 : 1.5}
                          strokeOpacity={isHovered ? 0.9 : 0.45}
                          className="transition-all duration-300"
                        />
                        {/* Red anchor junction dot */}
                        {node.hasRedDot && (
                          <circle cx={startX} cy={startY} r="3.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {/* Animated Live Data Particle */}
                        {isSimulating && (
                          <circle r={isHovered ? 3.5 : 2.5} fill={node.color} opacity="0.85">
                            <animateMotion path={pathD} dur={`${2.8 + (node.row * 0.4)}s`} repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}

                  {/* 4. Curved Connector Lines: Hub to Transactional Modules (Right) */}
                  {filteredTx.map((node) => {
                    const startX = hubCenter.x + 55;
                    const startY = hubCenter.y;
                    const targetX = node.x;
                    const targetY = node.y + 24;
                    const c1X = startX + (targetX - startX) * 0.35;
                    const c1Y = startY;
                    const c2X = startX + (targetX - startX) * 0.65;
                    const c2Y = targetY;
                    const pathD = `M ${startX} ${startY} C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${targetX} ${targetY}`;
                    const isHovered = hoveredNodeId === node.id || selectedModule.id === node.id;

                    return (
                      <g key={`wire-tx-${node.id}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isHovered ? node.color : (isDark ? '#475569' : '#cbd5e1')}
                          strokeWidth={isHovered ? 3 : 1.5}
                          strokeOpacity={isHovered ? 0.9 : 0.45}
                          className="transition-all duration-300"
                        />
                        {/* Red anchor junction dot */}
                        {node.hasRedDot && (
                          <circle cx={targetX} cy={targetY} r="3.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        )}
                        {/* Animated Live Data Particle flowing outward to transactional floor */}
                        {isSimulating && (
                          <circle r={isHovered ? 3.5 : 2.5} fill={node.color} opacity="0.85">
                            <animateMotion path={pathD} dur={`${3.0 + (node.row * 0.35)}s`} repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* 5. Central Hub Node (Exact Sarvosmi ERX™ RMSC Center) */}
                <div
                  style={{
                    left: `${hubCenter.x - hubCenter.r}px`,
                    top: `${hubCenter.y - hubCenter.r}px`,
                    width: `${hubCenter.r * 2}px`,
                    height: `${hubCenter.r * 2}px`
                  }}
                  className="absolute z-10 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white p-2 shadow-2xl border-4 border-amber-500/40 flex flex-col items-center justify-center text-center cursor-pointer group hover:scale-105 transition-transform"
                  onClick={() => handleSelectNode('tx-demand')}
                >
                  <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping pointer-events-none opacity-40" />
                  <span className="text-[10px] font-black tracking-wide text-red-500 uppercase leading-none">Sarvosmi</span>
                  <span className="text-xs font-black text-emerald-400 tracking-tight leading-none mt-0.5">ERX™</span>
                  <span className="text-[11px] font-bold text-white tracking-widest leading-none mt-0.5">RMSC</span>
                  <span className="text-[7.5px] font-medium text-amber-200/80 leading-tight mt-0.5 text-center px-1">Orchestration Core</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                </div>

                {/* 6. HTML Master Data Nodes on Left */}
                {filteredMaster.map((node) => {
                  const isSelected = selectedModule.id === node.id;
                  return (
                    <div
                      key={node.id}
                      style={{ left: `${node.x}px`, top: `${node.y}px` }}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onClick={() => handleSelectNode(node.id)}
                      className={`absolute z-10 w-[145px] p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? isDark
                            ? 'ring-2 ring-purple-500 bg-slate-800 border-purple-400/80 shadow-lg'
                            : 'ring-2 ring-purple-500 bg-white border-purple-400 shadow-lg'
                          : isDark
                          ? 'bg-slate-900/95 border-slate-700/80 hover:border-purple-400 shadow-sm'
                          : 'bg-white border-slate-200/90 hover:border-purple-400 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.09)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                          style={{
                            backgroundColor: isDark ? `${node.color}22` : `${node.color}15`,
                            color: node.color,
                            border: `1.5px solid ${node.color}${isDark ? '40' : '30'}`
                          }}
                        >
                          {renderIcon(node.icon, 'w-3.5 h-3.5')}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-[11px] font-bold truncate leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {node.title}
                          </p>
                          <p className={`text-[9px] truncate leading-normal mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {node.subText}
                          </p>
                        </div>
                      </div>
                      <div className={`mt-1.5 pt-1 border-t flex items-center justify-between ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <span className={`text-[8.5px] font-semibold tracking-wide uppercase ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                          Master Data
                        </span>
                        <ArrowUpRight className={`w-2.5 h-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'} shrink-0`} />
                      </div>
                    </div>
                  );
                })}

                {/* 7. HTML Transactional Nodes on Right */}
                {filteredTx.map((node) => {
                  const isSelected = selectedModule.id === node.id;
                  return (
                    <div
                      key={node.id}
                      style={{ left: `${node.x}px`, top: `${node.y}px` }}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onClick={() => handleSelectNode(node.id)}
                      className={`absolute z-10 w-[150px] p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? isDark
                            ? 'ring-2 ring-blue-500 bg-slate-800 border-blue-400/80 shadow-lg'
                            : 'ring-2 ring-blue-500 bg-white border-blue-400 shadow-lg'
                          : isDark
                          ? 'bg-slate-900/95 border-slate-700/80 hover:border-blue-400 shadow-sm'
                          : 'bg-white border-slate-200/90 hover:border-blue-400 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.09)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                          style={{
                            backgroundColor: isDark ? `${node.color}22` : `${node.color}15`,
                            color: node.color,
                            border: `1.5px solid ${node.color}${isDark ? '40' : '30'}`
                          }}
                        >
                          {renderIcon(node.icon, 'w-4 h-4')}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold truncate leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {node.title}
                          </p>
                          <p className={`text-[10px] truncate leading-normal mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {node.subText}
                          </p>
                        </div>
                      </div>
                      <div className={`mt-2 pt-1.5 border-t flex items-center justify-between ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <span className={`text-[9px] font-semibold tracking-wide uppercase ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                          Phase 1 Trans.
                        </span>
                        <ArrowUpRight className={`w-3 h-3 ${isDark ? 'text-slate-500' : 'text-slate-400'} shrink-0`} />
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
