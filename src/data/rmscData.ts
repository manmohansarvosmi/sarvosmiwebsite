import {
  StakeholderRole,
  ConceptPillar,
  ObjectiveItem,
  FeatureBlock,
  WorkflowStage,
  ModuleItem,
  MethodologyPhase
} from '../types';

export const COMPANY_INFO = {
  name: 'Sarvosmi Consulting',
  productName: 'Sarvosmi ERX™ RMSC',
  tagline: 'Real-Time Raw Material Supply Chain Execution Software',
  subheading: 'Whereas ERP deals with planning of organization’s resources, ERX deals with real-time execution of the plans as per pre-defined processes.',
  phone: '+91 9225523216',
  email: 'navneet.punj@sarvosmi.io',
  address: {
    street: '12A, 2nd Floor, Ashok Sankul-1, 18, Ashok CHS, Range Hills Road',
    city: 'Pune',
    pincode: '411007',
    state: 'Maharashtra',
    country: 'India',
  },
  approach: 'Total turnkey basis — from process mapping to go-live & continuity support.'
};

export interface SlideQuestion {
  id: string;
  question: string;
  roleTarget: string;
  rootCauseWithoutErx: string;
  erxResolution: string;
  frequency: string;
  impactScore: number;
}

export const SLIDE_QUESTIONS: SlideQuestion[] = [
  {
    id: 'q-prod-plan',
    question: 'Which Production Plan can be executed?',
    roleTarget: 'PPC Manager & Production',
    rootCauseWithoutErx: 'ERP shows logical stock only; no guarantee raw material is physically in bin or cleared by QC.',
    erxResolution: 'Live Plan Validation against 100% verified physical stock with dynamic Committed vs Confirmed distinction.',
    frequency: 'Every Shift Change',
    impactScore: 94
  },
  {
    id: 'q-material-dock',
    question: 'Why is the material still at dock?',
    roleTarget: 'Dock Supervisor & Storekeeper',
    rootCauseWithoutErx: 'Paper GRNs, uncoordinated unloading bay scheduling, and missing PO revision details.',
    erxResolution: 'Dynamic bay scheduling and one-scan barcode put-away routing straight to storage rack.',
    frequency: 'Hourly Stoppage',
    impactScore: 88
  },
  {
    id: 'q-qc-done',
    question: 'When will the QC be done?',
    roleTarget: 'Inward QC Manager',
    rootCauseWithoutErx: 'QC engineers unaware of arrival priority; test specifications not integrated at receiving.',
    erxResolution: 'Smart dual-stream triage: Supplier QC certified items auto-routed, prioritized test protocols on mobile.',
    frequency: 'Every Inward Consignment',
    impactScore: 91
  },
  {
    id: 'q-dock-free',
    question: 'Is the unloading dock free?',
    roleTarget: 'Gate Security & Transporters',
    rootCauseWithoutErx: 'Trucks arrive unannounced without ASN, blocking bays while awaiting documentation.',
    erxResolution: 'Pre-registered ASN dashboard, automated dock reservation, and real-time bay occupancy status.',
    frequency: 'Constant Bottleneck',
    impactScore: 85
  },
  {
    id: 'q-consignment-arriving',
    question: 'When will my consignment be arriving?',
    roleTarget: 'Buyer & Sourcing Lead',
    rootCauseWithoutErx: 'No live transit tracking; supplier dispatches tracked via phone calls and WhatsApp messages.',
    erxResolution: 'Real-time supplier portal with IoT GPS tracking, automated ASN generation, and ETA alerts.',
    frequency: 'Multiple Times Daily',
    impactScore: 89
  },
  {
    id: 'q-shortage-shortage',
    question: 'Production Plan cannot be executed due to material shortage',
    roleTarget: 'Management & Plant Head',
    rootCauseWithoutErx: 'ERP batch MRP runs once a day/week, blind to line rejections, bin misplacements, or theft.',
    erxResolution: 'Real-time 4-level shortage warning engine with automatic line starvation prevention and buffer alerts.',
    frequency: 'Critical Emergency',
    impactScore: 98
  }
];

export interface SimulationStep {
  id: string;
  stepNumber: number;
  time: string;
  roleId: string;
  roleTitle: string;
  withoutErx: {
    event: string;
    quote: string;
    status: 'bottleneck' | 'blocked' | 'idle' | 'conflict';
    delayMinutes: number;
    frictionReason: string;
  };
  withErx: {
    event: string;
    resolution: string;
    status: 'synced' | 'automated' | 'cleared';
    executionSeconds: number;
    erxAdvantage: string;
  };
}

export const SHIFT_SIMULATION_STEPS: SimulationStep[] = [
  {
    id: 'sim-1',
    stepNumber: 1,
    time: '08:00 AM',
    roleId: 'ppc-manager',
    roleTitle: 'PPC Manager',
    withoutErx: {
      event: 'PPC attempts to schedule Shift-1 Production Plan',
      quote: "I don't know which Production Plan to execute as I have no idea of actual physical inventory!",
      status: 'bottleneck',
      delayMinutes: 45,
      frictionReason: 'ERP screen shows 2,000 units, but 600 units are actually defective or missing from bin.'
    },
    withErx: {
      event: 'Instant Plan Validation against Physical Stock',
      resolution: 'ERX cross-checks live barcoded shelf inventory. Confirmed plan loaded with 100% material match.',
      status: 'synced',
      executionSeconds: 15,
      erxAdvantage: 'Zero phantom scheduling; plan committed only after physical IoT verification.'
    }
  },
  {
    id: 'sim-2',
    stepNumber: 2,
    time: '08:30 AM',
    roleId: 'buyer',
    roleTitle: 'Buyer & Sourcing',
    withoutErx: {
      event: 'Emergency shortage discovered for Critical Part A-102',
      quote: 'Many times I am told at the last moment of shortages. It takes hours of frantic vendor calls.',
      status: 'conflict',
      delayMinutes: 60,
      frictionReason: 'No automated re-order trigger; buyer scrambles to arrange emergency air-courier.'
    },
    withErx: {
      event: 'Automated 4-Level Re-order Trigger',
      resolution: 'ERX auto-dispatched PO trigger 18 hours prior when stock touched safety threshold.',
      status: 'automated',
      executionSeconds: 30,
      erxAdvantage: '80% reduction in rush orders and emergency freight surcharges.'
    }
  },
  {
    id: 'sim-3',
    stepNumber: 3,
    time: '09:00 AM',
    roleId: 'supplier',
    roleTitle: 'Raw Material Supplier',
    withoutErx: {
      event: 'Vendor vehicle arrives without advance notice',
      quote: "I can't keep excess inventory to meet erratic last-minute demands without advance schedules!",
      status: 'bottleneck',
      delayMinutes: 30,
      frictionReason: 'Supplier received PO with vague delivery window; sent truck on estimated date.'
    },
    withErx: {
      event: 'Supplier Portal with Digital ASN',
      resolution: 'Supplier pre-generated barcode tags and Advance Shipping Notice (ASN) with exact ETA.',
      status: 'synced',
      executionSeconds: 45,
      erxAdvantage: 'Seamless supplier alignment with JIT delivery slots.'
    }
  },
  {
    id: 'sim-4',
    stepNumber: 4,
    time: '09:15 AM',
    roleId: 'security',
    roleTitle: 'Gate Security Guard',
    withoutErx: {
      event: 'Truck arrives at factory gate with physical paper invoice',
      quote: "I don't know which consignment is coming when, who approved it, and what is its priority!",
      status: 'blocked',
      delayMinutes: 40,
      frictionReason: 'Security calls storekeeper to verify if truck should be let in; phone is constantly busy.'
    },
    withErx: {
      event: 'One-Scan Gate Verification via Security Tablet',
      resolution: 'Security scans QR on driver phone. Approved ASN pops up with assigned Bay #3.',
      status: 'cleared',
      executionSeconds: 60,
      erxAdvantage: 'Gate clearance time slashed to under 90 seconds. Zero gate congestion.'
    }
  },
  {
    id: 'sim-5',
    stepNumber: 5,
    time: '09:30 AM',
    roleId: 'dock-supervisor',
    roleTitle: 'Unloading Dock Supervisor',
    withoutErx: {
      event: 'Truck arrives at dock area, all bays occupied',
      quote: 'The consignment may be urgent, but the dock is already occupied. So wait outside!',
      status: 'blocked',
      delayMinutes: 50,
      frictionReason: 'Unplanned truck arrivals create bottleneck; forklifts idle waiting for access.'
    },
    withErx: {
      event: 'Dynamic Dock Bay Scheduling & Direct Offloading',
      resolution: 'Dock #2 automatically reserved for vehicle. High-capacity forklift alerted in advance.',
      status: 'cleared',
      executionSeconds: 120,
      erxAdvantage: 'Zero dock waiting time; palletized offloading in under 12 minutes.'
    }
  },
  {
    id: 'sim-6',
    stepNumber: 6,
    time: '10:00 AM',
    roleId: 'qc-manager',
    roleTitle: 'Inward QC Manager',
    withoutErx: {
      event: 'Unloaded pallets stacked in staging area awaiting QC',
      quote: 'Even if consignment has come, I cannot get QC done as engineers are tied up or unaware.',
      status: 'bottleneck',
      delayMinutes: 90,
      frictionReason: 'QC engineers manually search drawings & paper test criteria; pallets block aisles.'
    },
    withErx: {
      event: 'Dual-Stream Triage & Mobile QC App',
      resolution: 'Vendor certified parts skip routine QC. Sample lot checked digitally on rugged tablet in 10 mins.',
      status: 'synced',
      executionSeconds: 180,
      erxAdvantage: '70% faster QC turnaround. Instant barcode release to warehouse put-away.'
    }
  },
  {
    id: 'sim-7',
    stepNumber: 7,
    time: '10:30 AM',
    roleId: 'storekeeper',
    roleTitle: 'RM Storekeeper',
    withoutErx: {
      event: 'Put-away and material issue to production requested',
      quote: 'I have no advance information about consignments or issues, so my store is in a mess!',
      status: 'conflict',
      delayMinutes: 60,
      frictionReason: 'Parts stored in arbitrary locations; storekeeper wanders aisle with paper picklist.'
    },
    withErx: {
      event: 'Barcode-Directed Storage & Automated Issue Picklist',
      resolution: 'Wearable ring-scanner guides picker directly to Bin R-04-B. Instant scan verification.',
      status: 'cleared',
      executionSeconds: 90,
      erxAdvantage: '99.9% put-away accuracy. Zero search time for warehouse pickers.'
    }
  },
  {
    id: 'sim-8',
    stepNumber: 8,
    time: '11:00 AM',
    roleId: 'production-supervisor',
    roleTitle: 'Production Supervisor',
    withoutErx: {
      event: 'Assembly line waiting for kits; shift target falling behind',
      quote: 'I have not received the materials till now, operators are sitting idle on the shop floor!',
      status: 'idle',
      delayMinutes: 75,
      frictionReason: 'Kits not sequenced; subassemblies missing 2 essential fasteners.'
    },
    withErx: {
      event: 'Sequenced Line-Side Delivery (Just-in-Time Kitting)',
      resolution: 'Kitted material delivered to line station 20 minutes before work station setup begins.',
      status: 'synced',
      executionSeconds: 60,
      erxAdvantage: 'Zero operator starvation; 100% adherence to hourly production targets.'
    }
  },
  {
    id: 'sim-9',
    stepNumber: 9,
    time: '11:20 AM',
    roleId: 'assembly-operator',
    roleTitle: 'Assembly Line Operator',
    withoutErx: {
      event: 'Operator discovers 5 wrong / defective parts during assembly',
      quote: '5 parts are wrong or defective, I am waiting for replacement for last 2 hours. When can I get them?',
      status: 'idle',
      delayMinutes: 120,
      frictionReason: 'Operator fills paper rejection slip; walks across 3 bays to get supervisor signature.'
    },
    withErx: {
      event: 'Instant Line Rejection & Automated Replacement Trigger',
      resolution: 'Operator touches terminal screen. Store receives priority replacement alert; delivered in 8 mins.',
      status: 'cleared',
      executionSeconds: 120,
      erxAdvantage: '< 15 minute replacement cycle. Defective lot segregated and tagged digitally.'
    }
  },
  {
    id: 'sim-10',
    stepNumber: 10,
    time: '11:45 AM',
    roleId: 'management',
    roleTitle: 'Management & CXO',
    withoutErx: {
      event: 'End-of-shift review: 4.5 hours cumulative plant delay',
      quote: 'We already invested huge amounts in software, yet physical & logical inventory gap keeps increasing!',
      status: 'conflict',
      delayMinutes: 270,
      frictionReason: 'ERP numbers look green, but actual factory output missed by 38%; ₹2.8L in overtime & idle costs.'
    },
    withErx: {
      event: 'Single Pane of Real-Time Operational Truth',
      resolution: 'Live executive dashboard: 100% plan adherence, 0 idle hours, exact reconciliation of every gram.',
      status: 'synced',
      executionSeconds: 30,
      erxAdvantage: 'Complete peace of mind; quantifiable ROI and eliminate stock write-offs forever.'
    }
  },
  {
    id: 'sim-11',
    stepNumber: 11,
    time: '12:00 PM',
    roleId: 'sarvosmi-consulting',
    roleTitle: 'Sarvosmi Consulting Services',
    withoutErx: {
      event: 'Plant team in perpetual firefighting mode across all departments',
      quote: 'Tell us all your issues. Traditional ERP alone cannot execute the shop-floor reality.',
      status: 'conflict',
      delayMinutes: 300,
      frictionReason: 'Disjointed departments, blamed suppliers, and lack of real-time execution backbone.'
    },
    withErx: {
      event: 'Turnkey Implementation & Transformation Success',
      resolution: 'Sarvosmi Consulting implements ERX RMSC turnkey — from process mapping to hardware & go-live!',
      status: 'synced',
      executionSeconds: 0,
      erxAdvantage: 'Turnkey transformation guarantee. We do not just give software; we deliver plant results.'
    }
  }
];

export const STAKEHOLDER_ROLES: StakeholderRole[] = [
  {
    id: 'ppc-manager',
    role: 'PPC Manager',
    avatar: 'ClipboardList',
    quote: "I am PPC Manager, I don't know which Production Plan to execute as I have no idea of actual inventory. My other issues are......",
    category: 'production',
    slideRow: 1,
    silhouetteType: 'ppc',
    questionKey: 'Which Production Plan can be executed?',
    impactSummary: 'Plans disrupted, unexpected raw material stockouts, low machine capacity utilization.',
    otherIssues: [
      'Physical stock count differs significantly from ERP system numbers',
      'Cannot commit customer dispatch dates with confidence due to uncertain material feeds',
      'Shift plans have to be altered mid-way due to missing minor child-parts',
      'No clear distinction between "Confirmed" plans vs "Tentative" plans'
    ],
    erxSolution: 'Real-time production plan validation against actual verified stock, instantaneous shortage visibility, and automated committed vs confirmed scheduling.',
    keyMetric: '100% Plan Execution Accuracy'
  },
  {
    id: 'buyer',
    role: 'Buyer & Sourcing',
    avatar: 'ShoppingBag',
    quote: "I am Buyer and many times I am told at last moment of raw material shortages, it takes lot of time & effort to co-ordination with Suppliers. My other issues are.........",
    category: 'procurement',
    slideRow: 1,
    silhouetteType: 'buyer',
    questionKey: 'When will my consignment be arriving?',
    impactSummary: 'Emergency freight costs, strained vendor relationships, high procurement stress.',
    otherIssues: [
      'Expedited air freight and premium transport charges eat into gross margins',
      'Vendors constantly complain of erratic purchase order schedules and sudden panic orders',
      'Zero real-time transit visibility once materials are dispatched from supplier factories',
      'Team spends 80% of working hours firefighting instead of strategic sourcing'
    ],
    erxSolution: 'Automated 4-level stock replenishment triggers, collaborative buyer-supplier portal, advance requirement forecasting, and real-time transit tracking.',
    keyMetric: '80% Reduction in Rush POs'
  },
  {
    id: 'supplier',
    role: 'Supplier',
    avatar: 'Truck',
    quote: "I am Supplier I can't keep excess inventory to meet your last minute demand for raw materials. My other issues are ....",
    category: 'supplier',
    slideRow: 1,
    silhouetteType: 'supplier',
    questionKey: 'When will my consignment be arriving?',
    impactSummary: 'Buffer inventory holding cost, delivery delays, SLA penalties.',
    otherIssues: [
      'Unpredictable ordering forces us to hold costly buffer stock at our own expense',
      'Our trucks get stuck outside the plant factory gate for hours without parking or status',
      'Frequent disputes over received quantities vs invoiced quantities',
      'Delayed payment release because internal GRN booking takes 3 to 7 days'
    ],
    erxSolution: 'Supplier self-service portal, item-wise lead time tracking, automated ASN generation, and transparent demand schedules.',
    keyMetric: 'JIT Supply Alignment'
  },
  {
    id: 'security',
    role: 'Gate Security',
    avatar: 'ShieldAlert',
    quote: "I am gate Security I don't know which consignment is coming when and what is it's priority. My other issues are ........",
    category: 'warehouse',
    slideRow: 1,
    silhouetteType: 'security',
    questionKey: 'Is the unloading dock free?',
    impactSummary: 'Gate congestion, demurrage penalties, delayed critical inputs.',
    otherIssues: [
      'No Advance Shipment Notice (ASN) to verify incoming vehicles and drivers',
      'Driver entry logs maintained manually in paper registers prone to error and loss',
      'Truck lines spill out onto the main public highway causing traffic fines',
      'No way to identify which incoming truck carries critical line-stopping components'
    ],
    erxSolution: 'Pre-registered ASN gate dashboard, one-scan security clearance, instant transporter priority verification, and digital gate passes.',
    keyMetric: '< 2 Min Gate Clearance'
  },
  {
    id: 'dock-supervisor',
    role: 'Dock Supervisor',
    avatar: 'Container',
    quote: "I am Dock Supervisor. The consignment may be urgent, but the dock is already occupied. So wait. My other issues are.....",
    category: 'warehouse',
    slideRow: 1,
    silhouetteType: 'dock',
    questionKey: 'Is the unloading dock free?',
    impactSummary: 'Dock bottlenecks, chaotic unloading, damaged material during rushed offloading.',
    otherIssues: [
      'All unloading bays occupied by non-critical trucks while critical consignments wait',
      'Material handling equipment (MHE) and operators idle when trucks are not ready',
      'Chaotic rushed unloading causes physical damage to fragile raw materials',
      'No digital scheduling or advance dock reservation capability'
    ],
    erxSolution: 'Dynamic dock scheduling, automated unloading bay allocation based on shipment size/type, and real-time dock availability status.',
    keyMetric: 'Zero Dock Congestion'
  },
  {
    id: 'qc-manager',
    role: 'Inward QC Manager',
    avatar: 'CheckCircle2',
    quote: "I am Inward QC Manager, even if the consignment has come I cannot get QC done as all QC Engineers may be busy. My other issues are ....",
    category: 'quality',
    slideRow: 2,
    silhouetteType: 'qc',
    questionKey: 'When will the QC be done?',
    impactSummary: 'Uninspected inventory sitting in quarantine, delayed production feeds.',
    otherIssues: [
      'QC samples pile up in receiving bay without priority tags or SLA tracking',
      'Engineers lack instant access to supplier test certificates and latest drawings',
      'Critical line materials wait in staging for hours or days waiting for sign-off',
      'Production supervisors blame QC for production line starvation'
    ],
    erxSolution: 'Smart dual-stream triage: Supplier QC certified items auto-routed to put-away; critical materials assigned instant test protocols with mobile inspection.',
    keyMetric: '70% Faster QC Turnaround'
  },
  {
    id: 'storekeeper',
    role: 'Storekeeper',
    avatar: 'Boxes',
    quote: "I am Storekeeper, I have no advance information about new incoming consignment or material to be issued, so my store is in mess. My other issues are ......",
    category: 'warehouse',
    slideRow: 2,
    silhouetteType: 'storekeeper',
    questionKey: 'Why is the material still at dock?',
    impactSummary: 'Misplaced stock, high search times, bin errors, manual stock count mismatches.',
    otherIssues: [
      'Items put in wrong racks due to unloading rush and lack of barcode validation',
      'Searching for parts consumes hours of picker time during shift changeover',
      'Manual kitting errors result in missing parts when dispatched to the shop floor',
      'Stock audit reveals wide discrepancies between system counts and shelf inventory'
    ],
    erxSolution: 'Put-to-Barcode directed storage, live location mapping, wearable ring scanner binning, and automated issue pick-lists.',
    keyMetric: '99.9% Put-Away Exactness'
  },
  {
    id: 'production-supervisor',
    role: 'Production Supervisor',
    avatar: 'Factory',
    quote: "I am Production Supervisor and I have not received the materials till now, operators are sitting idle. My other issues are ........",
    category: 'production',
    slideRow: 2,
    silhouetteType: 'production',
    questionKey: 'Production Plan cannot be executed due to material shortage',
    impactSummary: 'Down-time escalation, missed customer commitments, overtime costs.',
    otherIssues: [
      'Operators sitting idle on assembly lines while fixed plant labor costs tick on',
      'Target output per shift is consistently missed, causing delayed customer dispatches',
      'Unplanned setup teardowns and retooling required when expected kits fail to arrive',
      'Buffer racks run dry without any early visual or audible warning'
    ],
    erxSolution: 'Automated stage-by-stage kitting, sequenced line-side delivery with digital acknowledgment, and live WIP replenishment monitors.',
    keyMetric: 'Zero Starvation at Line'
  },
  {
    id: 'assembly-operator',
    role: 'Assembly Operator',
    avatar: 'Wrench',
    quote: "I am Assembly Operator, 5 parts are wrong or defective, I am waiting for replacement for last 2 hours, when I can get them? My other issues are....",
    category: 'production',
    slideRow: 2,
    silhouetteType: 'operator',
    questionKey: 'Why is the material still at dock?',
    impactSummary: 'Line stoppage, idle operator wages, missed daily production targets.',
    otherIssues: [
      'Wrong part orientation or incorrect design revision issued in the kit bin',
      'Paper-based rejection slips take hours to obtain supervisor and QC stamps',
      'Nobody informs the operator when the replacement lot will physically reach the station',
      'Individual piece-rate performance rating suffers due to line waiting downtime'
    ],
    erxSolution: 'Instant line rejection trigger via terminal, immediate store notification, prioritized replacement picking in minutes, and digital return tracking.',
    keyMetric: '< 15 Min Replacement Cycle'
  },
  {
    id: 'management',
    role: 'Management (CXO / Plant Head)',
    avatar: 'TrendingUp',
    quote: "As Management, I have already invested a huge amount in software and now I have more problems, gap between physical and logical inventory keeps on increasing every day. My other issues are ......",
    category: 'leadership',
    slideRow: 2,
    silhouetteType: 'management',
    questionKey: 'Production Plan cannot be executed due to material shortage',
    impactSummary: 'Capital locked in safety stock, audit write-offs, lack of real-time operational truth.',
    otherIssues: [
      'Huge capital locked up in redundant safety buffer inventory to compensate for mistrust',
      'Substantial financial write-offs during quarterly and annual physical stock counts',
      'ERP dashboards show green status while floor managers are screaming on calls',
      'No single source of real-time operational truth across procurement, stores & lines'
    ],
    erxSolution: 'Turnkey execution platform bridging ERP planning with shop-floor reality, delivering 100% data fidelity, zero manual entry, and quantifiable ROI.',
    keyMetric: '100% Physical-to-Logical Match'
  },
  {
    id: 'sarvosmi-consulting',
    role: 'Sarvosmi Consulting Services',
    avatar: 'Sparkles',
    quote: "I am from Sarvosmi Consulting Services, please tell me all your issues. I think I can help you.",
    category: 'consulting',
    slideRow: 2,
    silhouetteType: 'consultant',
    questionKey: 'All Questions Resolved Turnkey',
    impactSummary: 'Eliminates friction across all 10 stakeholders with guaranteed turnkey execution.',
    otherIssues: [
      'Traditional consulting provides PowerPoint reports; Sarvosmi provides turnkey execution',
      'Hardware, software, barcode IoT and training provided on a total turnkey basis',
      'Full bi-directional integration with your existing ERP / WMS (SAP, Oracle, Dynamics, etc.)',
      'Guaranteed 100% match between physical materials and digital system counts'
    ],
    erxSolution: 'Total turnkey execution partner: we diagnose, deploy hardware & IoT scanners, configure ERX RMSC, train your operators, and deliver guaranteed plant results.',
    keyMetric: 'Turnkey Execution Guarantee'
  }
];

export const CORE_PILLARS: ConceptPillar[] = [
  {
    id: 'planning-visibility',
    title: 'Real-Time Planning & Visibility',
    tagline: 'Bridging the chasm between static batch plans and live factory execution.',
    icon: 'Activity',
    color: 'emerald',
    features: [
      'Truly real-time software engine implemented on total turnkey basis',
      'Virtually zero manual data entry — eliminates human errors, delays, and manipulation',
      'Instant exception alerts to pinpoint bottlenecks and quality deviations',
      'Granular material classification into Critical vs Non-Critical inventory',
      'Production plan-wise material shortage heatmaps against actual physical stock',
      'Dynamic distinction between "Committed" and "Confirmed" manufacturing plans'
    ],
    businessValue: 'Eliminates unexpected line stoppages and gives plant leadership live operational truth.'
  },
  {
    id: 'supplier-logistics',
    title: 'Supplier & Logistics Control',
    tagline: 'End-to-end synchronization with tier-1/2 vendors and inbound freight.',
    icon: 'Network',
    color: 'blue',
    features: [
      'Individual supplier and item-wise lead time tracking',
      'Accurate advance requirement schedules to suppliers (bulk or selective)',
      'Split material requirements across multiple suppliers with real-time ASN tracking',
      'Estimated Time of Dispatch (ETD) & Actual Time of Dispatch (ATD) alerts',
      'Live Estimated Time of Arrival (ETA) broadcasts to gate security & store teams'
    ],
    businessValue: 'Drastically cuts safety buffer stock while improving on-time vendor fulfillment.'
  },
  {
    id: 'warehouse-management',
    title: 'Warehouse & Material Management',
    tagline: 'Flawless dock-to-bin flow powered by barcode serialization and wearable IIoT.',
    icon: 'Warehouse',
    color: 'teal',
    features: [
      'Quick & controlled Material Receipts with complete documentation validation',
      'Precise dock scheduling — each material mapped to dedicated unloading bays',
      'Rapid Inward QC & Inspection with supplier certificate bypass routing',
      '100% Put & Pick-to-Barcode technology ensuring zero binning errors',
      'Wearable mobile computer + ring barcode scanner for completely hands-free operations',
      'Highly organized, optimized warehouse space utilization'
    ],
    businessValue: 'Cuts material put-away time by 65% and guarantees zero misplaced inventory.'
  },
  {
    id: 'production-inventory',
    title: 'Production Support & Inventory Control',
    tagline: 'Continuous, error-free line replenishment with closed-loop return systems.',
    icon: 'Cpu',
    color: 'amber',
    features: [
      'On-time, sequenced, and accurate material delivery right at the assembly station',
      'Rapid turnaround for defective, damaged, or missing parts (<15 minutes)',
      'WIP inventory auto-returned to RM store if production plan is cancelled or put on hold',
      'Rigorous QC inspection upon return of cancelled production WIP inventory',
      'Tight segregation of non-conforming items with root-cause reason tracking'
    ],
    businessValue: 'Protects assembly line throughput and prevents scrap leakage across shifts.'
  }
];

export const TENETS = [
  {
    title: 'Real-Time',
    desc: 'All shop-floor actions recorded and processed immediately as they happen; exceptions highlighted instantly to concerned officials.',
    icon: 'Zap'
  },
  {
    title: 'Flexible',
    desc: 'Easily configurable to suit every unique nuance of your Raw Material Supply Chain processes across industries.',
    icon: 'Sliders'
  },
  {
    title: 'Collaborative',
    desc: 'Seamlessly collaborates with proprietary or 3rd-party hardware, scanners, sensors, and software platforms.',
    icon: 'Users'
  },
  {
    title: 'Connected Platform',
    desc: 'Ties together processes, technologies, and workforce productivity to complement your existing ERP / SCM / WMS implementations.',
    icon: 'Layers'
  }
];

export const KEY_OBJECTIVES: ObjectiveItem[] = [
  {
    id: 'uninterrupted-flow',
    title: 'Uninterrupted Flow of Raw Materials',
    description: 'Ensure a smooth, uninterrupted pipeline of all raw material grades to keep production lines running at peak capacity.',
    category: 'efficiency',
    icon: 'Repeat',
    benefit: 'Zero line starvation'
  },
  {
    id: 'inventory-optimization',
    title: 'Optimize Inventory & Slash Losses',
    description: 'Dramatically reduce working capital lockup and minimize losses arising from raw material leakage, damage, aging, and obsolescence.',
    category: 'financial',
    icon: 'TrendingDown',
    benefit: '15-25% working capital freed'
  },
  {
    id: 'exactness',
    title: 'Exactness of Physical & Logical Inventory',
    description: 'Ensure 100% alignment between physical inventory on the floor and logical inventory recorded in the systems.',
    category: 'quality',
    icon: 'CheckSquare',
    benefit: '100% stock fidelity'
  },
  {
    id: 'realtime-monitoring',
    title: 'Monitor Supplies & Logistics in Real-Time',
    description: 'Live visibility over inbound freight, supplier dispatches, dock occupancy, and transit milestones.',
    category: 'efficiency',
    icon: 'Compass',
    benefit: 'Full inbound transparency'
  },
  {
    id: 'supplier-relationships',
    title: 'Healthy Supplier Partnerships',
    description: 'Foster trust and mutually beneficial relationships with transparent forecast sharing, self-service portals, and fast invoice reconciliation.',
    category: 'quality',
    icon: 'Handshake',
    benefit: 'Strengthened vendor loyalty'
  },
  {
    id: 'stakeholder-integration',
    title: 'Maximize Active Stakeholder Collaboration',
    description: 'Connect security guards, dock teams, QC inspectors, storekeepers, buyers, and operators with role-specific views and granular security.',
    category: 'security',
    icon: 'Share2',
    benefit: 'Zero communication silos'
  },
  {
    id: 'lean-manufacturing',
    title: 'Standardize Lean Manufacturing Processes',
    description: 'Standardize, rationalize, and simplify shop-floor procedures to implement world-class lean manufacturing practices.',
    category: 'efficiency',
    icon: 'Minimize2',
    benefit: 'Standardized SOP compliance'
  },
  {
    id: 'jit-wcm',
    title: 'Just-In-Time (JIT) for World Class Manufacturing',
    description: 'Implement true JIT pull systems for materials, transitioning from costly safety-stock buffers to synchronized demand-driven flows.',
    category: 'financial',
    icon: 'Clock',
    benefit: 'World-Class Manufacturing benchmark'
  },
  {
    id: 'role-security',
    title: 'Permission & Time-Based Access Control',
    description: 'Role-based access security ensuring internal operators and external suppliers only interact with authorized records at assigned time windows.',
    category: 'security',
    icon: 'Lock',
    benefit: 'Enterprise-grade data governance'
  },
  {
    id: 'avoid-waste',
    title: 'Eliminate Duplication, Waste & Obsolescence',
    description: 'Prevent double-ordering, expired shelf-life material consumption, and obsolete part deployment via strict FIFO/FEFO automation.',
    category: 'quality',
    icon: 'Trash2',
    benefit: 'Negligible scrap write-offs'
  },
  {
    id: 'performance-audit',
    title: 'Record Supplier, Transporter & User Performance',
    description: 'Automated time-stamped scoring of vendor delivery timeliness, transporter dwell times, QC rejection rates, and worker picking speeds.',
    category: 'quality',
    icon: 'BarChart3',
    benefit: 'Objective SLA enforcement'
  },
  {
    id: 'accurate-data',
    title: 'Automated Accurate Data Capture',
    description: 'Capture accurate, complete data using barcode/IoT automation and assign focused tasks to optimize workforce productivity.',
    category: 'efficiency',
    icon: 'Scan',
    benefit: 'Negligible manual entry errors'
  }
];

export const FEATURES_BENEFITS: FeatureBlock[] = [
  {
    number: '01',
    title: 'Organization & Configuration',
    subtitle: 'Hierarchical master modeling of physical infrastructure and dynamic thresholds.',
    points: [
      'Multi-dock configuration, raw material storage zones, aisles, and bin locations',
      '4-level stock threshold triggers (Min, Reorder, Critical, Safety)',
      'Supplier self-service portal & digital onboarding',
      'Advance replenishment schedule generator and real-time status view'
    ],
    tag: 'Foundation',
    icon: 'SlidersHorizontal',
    color: 'emerald'
  },
  {
    number: '02',
    title: 'Procurement Scheduling',
    subtitle: 'Autonomous procurement triggers and supplier dispatch synchronization.',
    points: [
      'Automatic advance material scheduling matched to confirmed production plans',
      'Instant material shortage triggers dispatched to buyers and suppliers',
      'Real-time transit tracking with ETD/ETA milestone alerts',
      'Total elimination of unexpected stockouts and emergency purchase orders'
    ],
    tag: 'Procurement',
    icon: 'CalendarCheck2',
    color: 'blue'
  },
  {
    number: '03',
    title: 'Material Receipts & Docking',
    subtitle: 'High-speed gate triage, ASN verification, and conflict-free bay docking.',
    points: [
      'Advance material gate notification & digital manifest pre-check',
      'Instant ASN barcode verification at factory gates (< 2 minutes)',
      'Organized dock allocation to eliminate truck queues and demurrage costs',
      'Fully time-stamped digital audit trail for every inbound consignment'
    ],
    tag: 'Inbound Logistics',
    icon: 'Truck',
    color: 'teal'
  },
  {
    number: '04',
    title: 'Acceptance, Inward QC & Put-Away',
    subtitle: 'Intelligent dual-stream inspection and guided barcode binning.',
    points: [
      'Intelligent segregation: "Inspection Only", "Supplier QC Certificate", "Critical Inward QC"',
      'Fast-track material acceptance bypassing unnecessary inspection loops',
      'Put-to-Barcode directed binning ensuring zero misplaced items',
      'Integration with wearable scanners for rapid, error-free put-away'
    ],
    tag: 'Quality & Storage',
    icon: 'QrCode',
    color: 'indigo'
  },
  {
    number: '05',
    title: 'Kitting, Sequencing & Line Issue',
    subtitle: 'Precision material delivery directly to manufacturing work centers.',
    points: [
      'Flexible issue strategies: Issue by Item, Issue by Kit, or Issue by Assembly Sequence',
      'Pick-to-Barcode guidance with real-time pick verification',
      'Full accountability: From store issue to digital shop-floor acknowledgment',
      'Immediate replacement of defective, wrong, or damaged line parts'
    ],
    tag: 'Production Feed',
    icon: 'Layers',
    color: 'amber'
  },
  {
    number: '06',
    title: 'Dashboards & Instant Notifications',
    subtitle: 'Executive intelligence and automated escalation alerts.',
    points: [
      'Real-time web dashboards for Senior Management, Plant Heads, Buyers, and Suppliers',
      'Faster, data-backed operational decision making',
      'Configurable exception alerts for threshold violations and dock delays',
      'Instant SMS / Email / In-App notifications for proactive bottleneck resolution'
    ],
    tag: 'Intelligence',
    icon: 'LayoutDashboard',
    color: 'rose'
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    title: 'Raw Material Demand Generation',
    subtitle: 'Production Plan Driven',
    description: 'Material demand is automatically calculated against confirmed production plans or dynamic PPE forecasts. Can be generated at any custom interval (shift, daily, weekly).',
    stakeholders: ['PPC Manager', 'Plant Planner'],
    keyActions: [
      'Calculate net requirements from Bill of Materials (BOM)',
      'Cross-check actual on-hand stock vs committed WIP',
      'Classify materials into critical and standard categories'
    ],
    technologyUsed: 'ERX Demand Engine & ERP Synchronization Connector',
    badge: 'Demand Generation'
  },
  {
    step: 2,
    title: 'On-Time Procurement Scheduling',
    subtitle: 'Collaborative Buyer-Supplier Platform',
    description: 'Buyers and suppliers collaborate on a unified platform to ensure procurement schedules align strictly with Just-In-Time (JIT) delivery windows.',
    stakeholders: ['Buyer', 'Supplier', 'Sourcing Lead'],
    keyActions: [
      'Auto-generate split requirement schedules based on vendor lead times',
      'Supplier reviews, acknowledges, and commits to dispatch dates',
      'Automated triggers for near-critical inventory levels'
    ],
    technologyUsed: 'Supplier Self-Service Portal & JIT Scheduler',
    badge: 'Procurement'
  },
  {
    step: 3,
    title: 'On-Time & Quick Material Receipts',
    subtitle: 'Advance Shipping Notice (ASN) & Gate Triage',
    description: 'Suppliers issue digital ASNs prior to truck departure. Even with partial documentation, gate security achieves rapid clearance using barcode verification.',
    stakeholders: ['Gate Security', 'Transporter', 'Store Inward Team'],
    keyActions: [
      'Transporter presents barcode / digital consignment pass at gate',
      'Instant ASN check and arrival timestamping in system',
      'System assigns designated unloading dock priority'
    ],
    technologyUsed: 'Gate Security Barcode Scanner & Digital Gate Pass',
    badge: 'Gate Receipts'
  },
  {
    step: 4,
    title: 'Error-Free Docking & Unloading',
    subtitle: 'Dynamic Dock Management',
    description: 'Transporters dock only when the assigned bay is ready. Material is offloaded rapidly and Goods Receipt Report (GRR) is digitally prepared at the staging area.',
    stakeholders: ['Dock Supervisor', 'Unloading Operators'],
    keyActions: [
      'Direct truck to free designated dock',
      'Unload directly into staging zones with physical item count',
      'Generate instant digital GRR with initial package condition logs'
    ],
    technologyUsed: 'Dock Allocation Dashboard & Wearable Computer',
    badge: 'Docking'
  },
  {
    step: 5,
    title: 'Quick Inward QC or Inspection',
    subtitle: 'Dual-Stream Quality Triage',
    description: 'Non-critical materials are inspected directly by Store Operators using Supplier QC Certificates. Inward QC engineers focus exclusively on critical parts.',
    stakeholders: ['Inward QC Manager', 'QC Engineers', 'Store Operators'],
    keyActions: [
      'Fast-track pre-certified materials directly to put-away',
      'Conduct rigorous sample tests on critical items using mobile QC app',
      'Instant digital approval / quarantine / rejection stamping'
    ],
    technologyUsed: 'Mobile QC Inspection App & Defect Reason Tagging',
    badge: 'Quality Control'
  },
  {
    step: 6,
    title: 'Accurate Put-Away & Material Picking',
    subtitle: 'Put-to-Barcode & Ring Scanner Operations',
    description: 'All accepted materials are guided to designated warehouse rack/bin locations using Put-to-Barcode technology. Hands-free ring scanners maximize worker speed.',
    stakeholders: ['Warehouse Operators', 'Forklift Drivers'],
    keyActions: [
      'Scan item barcode, scan bin barcode to confirm exact storage',
      '100% verification eliminating search delays and misplaced lots',
      'FIFO / FEFO strict rotation enforcement'
    ],
    technologyUsed: 'Ring Barcode Scanner + Wearable Mobile Computer',
    badge: 'Storage & Put-Away'
  },
  {
    step: 7,
    title: 'On-Time Delivery to Production Line',
    subtitle: 'Kitted, Sequenced & Acknowledged',
    description: 'Materials are kitted and delivered to specific production stages on time. Operators acknowledge receipts digitally, and defective parts are replaced in minutes.',
    stakeholders: ['Production Supervisor', 'Assembly Operators', 'Material Handler'],
    keyActions: [
      'Deliver kitted material carts to line-side stations',
      'Assembly operator digital signoff on received lot numbers',
      'One-tap defective part alert triggers express replacement from store'
    ],
    technologyUsed: 'Line-side Touch Terminals & Express Re-issue Workflow',
    badge: 'Production Feed'
  }
];

export const MASTER_MODULES: ModuleItem[] = [
  {
    id: 'mod-calendar',
    title: 'Calendar',
    category: 'master',
    description: 'Defines factory working shifts, plant holidays, supplier operating schedules, and dock operating hours.',
    erpSync: 'Bi-directional sync with ERP plant calendar',
    icon: 'Calendar',
    inputs: ['Working days', 'Shift timings', 'Supplier holiday schedules'],
    outputs: ['Lead time calculation basis', 'Dock availability matrix']
  },
  {
    id: 'mod-users',
    title: 'Users',
    category: 'master',
    description: 'Configures granular user roles, departmental hierarchy, and time/location restricted permissions.',
    erpSync: 'SSO / LDAP / ERP user registry integration',
    icon: 'Users',
    inputs: ['User profile', 'Role assignments', 'Station authorizations'],
    outputs: ['Role-based dashboard views', 'Action audit trails']
  },
  {
    id: 'mod-rm-store',
    title: 'Raw Material Store',
    category: 'master',
    description: 'Models store layout, storage zones, cold storage, quarantine cages, racks, shelves, and bin coordinate structures.',
    erpSync: 'Synced with ERP plant storage locations (SLOC)',
    icon: 'Warehouse',
    inputs: ['Zone taxonomy', 'Capacity dimensions', 'Environmental specs'],
    outputs: ['3D bin coordinates', 'Put-away path algorithms']
  },
  {
    id: 'mod-docks',
    title: 'Unloading Docks',
    category: 'master',
    description: 'Defines dock physical bays, vehicle size compatibility, unloading equipment availability, and staging zones.',
    erpSync: 'Plant logistics master sync',
    icon: 'Container',
    inputs: ['Dock numbers', 'Vehicle type compatibility', 'Hoist/forklift specs'],
    outputs: ['Dock schedule slots', 'Gate truck routing']
  },
  {
    id: 'mod-materials',
    title: 'Materials',
    category: 'master',
    description: 'Comprehensive raw material catalog with critical/non-critical tags, shelf life, unit of measures, and inspection parameters.',
    erpSync: 'Auto-imported from ERP Material Master (MARA/MARC)',
    icon: 'Box',
    inputs: ['SKU code', 'Classification', 'Inspection plan', 'Storage type'],
    outputs: ['Material specifications', 'Packaging requirements']
  },
  {
    id: 'mod-contracts',
    title: 'Contracts',
    category: 'master',
    description: 'Tracks vendor rate agreements, delivery terms (FOB/CIF), minimum order quantities, and penalty clauses.',
    erpSync: 'ERP Purchasing info records and contracts',
    icon: 'FileText',
    inputs: ['Contract validity', 'Price tiers', 'Payment terms'],
    outputs: ['Purchase order validation rules']
  },
  {
    id: 'mod-suppliers',
    title: 'Suppliers',
    category: 'master',
    description: 'Supplier directory with contact points, self-service credentials, rating scores, and historical lead-time metrics.',
    erpSync: 'ERP Vendor Master (LFA1)',
    icon: 'Truck',
    inputs: ['Vendor details', 'Contact points', 'Self-service logins'],
    outputs: ['Supplier rating scorecards', 'ASN portal access']
  },
  {
    id: 'mod-packing',
    title: 'Packing',
    category: 'master',
    description: 'Specifies packaging standards (pallets, crates, blister packs, boxes), standard batch sizes, and barcode label templates.',
    erpSync: 'Packaging specification sync',
    icon: 'Package',
    inputs: ['Container specs', 'Packaging hierarchy', 'Label templates'],
    outputs: ['Standard pallet quantities', 'Serialization schemas']
  },
  {
    id: 'mod-bom',
    title: 'Bill of Materials',
    category: 'master',
    description: 'Multi-level BOM hierarchies mapping finished goods to raw material components, sub-assemblies, and scrap allowances.',
    erpSync: 'ERP Production BOM (STPO/MAST)',
    icon: 'Layers',
    inputs: ['FG part number', 'Component breakdown', 'Quantity per unit'],
    outputs: ['Material explosion for demand generation']
  },
  {
    id: 'mod-reasons',
    title: 'Reason',
    category: 'master',
    description: 'Standardized taxonomies for QC rejection codes, dock delays, inventory discrepancy reasons, and line stoppage tags.',
    erpSync: 'Standard plant defect catalogs',
    icon: 'AlertTriangle',
    inputs: ['Discrepancy category', 'Severity tag', 'Corrective action code'],
    outputs: ['Root cause Pareto charts', 'Vendor quality penalty reports']
  },
  {
    id: 'mod-equipment',
    title: 'Equipment',
    category: 'master',
    description: 'Registers forklifts, hydraulic pallet trucks, AGVs, overhead cranes, and maintenance calibration records.',
    erpSync: 'Plant Maintenance (PM) module',
    icon: 'Wrench',
    inputs: ['Equipment ID', 'Capacity', 'Battery/service status'],
    outputs: ['Equipment assignment matrix for warehouse tasks']
  },
  {
    id: 'mod-devices',
    title: 'Device',
    category: 'master',
    description: 'Configures wearable mobile computers, ring barcode scanners, gate terminals, temperature sensors, and wireless access points.',
    erpSync: 'ERX Hardware management subsystem',
    icon: 'Smartphone',
    inputs: ['MAC address', 'IP/Device ID', 'Assigned operator ID'],
    outputs: ['Live device health', 'Telemetry data stream']
  }
];

export const TRANSACTIONAL_MODULES: ModuleItem[] = [
  {
    id: 'tx-demand',
    title: 'Material Demand Creation',
    category: 'transactional',
    description: 'Translates production plans into precise net raw material purchase and issue requirements with timeline bounds.',
    erpSync: 'Imports MRP runs or triggers independent demand',
    icon: 'FileSpreadsheet',
    inputs: ['Production schedule', 'BOM explosion', 'Current physical stock'],
    outputs: ['Net procurement requests', 'Material reservation tokens']
  },
  {
    id: 'tx-plan-exec',
    title: 'Production Plan Execution',
    category: 'transactional',
    description: 'Monitors real-time availability of parts per shift and releases committed production plans for shop-floor execution.',
    erpSync: 'Updates ERP Production Order status (CO01/CO02)',
    icon: 'PlayCircle',
    inputs: ['Planned orders', 'Material readiness checklist'],
    outputs: ['Work order release authorization', 'Kitting tickets']
  },
  {
    id: 'tx-proc-schedule',
    title: 'Procurement Schedule & Requests (Buyer)',
    category: 'transactional',
    description: 'Dispatches targeted procurement schedules to vendors with split allocations, delivery dates, and auto-reminders.',
    erpSync: 'Creates / Updates ERP Purchase Orders (ME21N)',
    icon: 'Send',
    inputs: ['Approved demand', 'Supplier allocation rules', 'Lead times'],
    outputs: ['Digital purchase schedules', 'Vendor acknowledgment confirmations']
  },
  {
    id: 'tx-asn',
    title: 'Advance Shipping Notice (ASN) (Supplier)',
    category: 'transactional',
    description: 'Supplier submits dispatch details (invoice, transporter, vehicle number, dispatch time, barcode manifest) prior to arrival.',
    erpSync: 'Inbound Delivery creation (VL31N)',
    icon: 'FileCheck',
    inputs: ['Vendor dispatch data', 'Consignment barcode list', 'ETD/ETA'],
    outputs: ['Pre-cleared gate manifest', 'Dock scheduling reservation']
  },
  {
    id: 'tx-gate',
    title: 'Gate Receipts',
    category: 'transactional',
    description: 'Security records truck entry, verifies ASN barcode within seconds, validates vehicle credentials, and generates digital gate pass.',
    erpSync: 'Gate entry timestamping & ERP status update',
    icon: 'ShieldCheck',
    inputs: ['Truck arrival scan', 'Driver ID', 'Transporter papers'],
    outputs: ['Digital Gate Pass', 'Dock bay direction token']
  },
  {
    id: 'tx-docking',
    title: 'Docking & Unloading',
    category: 'transactional',
    description: 'Directs truck to available dock, records offloading progress, verifies physical package count, and triggers staging GRR.',
    erpSync: 'Initial goods staging log in ERP',
    icon: 'Truck',
    inputs: ['Dock check-in', 'Package scan count', 'Damage observations'],
    outputs: ['Staging Goods Receipt Report (GRR)', 'QC queue alert']
  },
  {
    id: 'tx-qc',
    title: 'Inward QC / Inspections',
    category: 'transactional',
    description: 'Routes material through fast-track certificate checks or thorough technical inspections with parameter measurement capture.',
    erpSync: 'ERP Quality Inspection Lot (QA32)',
    icon: 'CheckCircle',
    inputs: ['Inspection lot sample', 'Tolerance specs', 'Supplier QC cert'],
    outputs: ['QC Pass certificate / Quarantine label / Rejection slip']
  },
  {
    id: 'tx-store-ops',
    title: 'RM Store Operations',
    category: 'transactional',
    description: 'Central hub for store status, stock transfers, inter-warehouse replenishment, and shelf-life monitoring.',
    erpSync: 'Synchronized with ERP stock ledger (MARD/MB52)',
    icon: 'Warehouse',
    inputs: ['Stock movements', 'Transfer requests', 'Periodic audit triggers'],
    outputs: ['Live stock ledger', 'Storage heatmaps']
  },
  {
    id: 'tx-rejections',
    title: 'Rejections & Returns',
    category: 'transactional',
    description: 'Manages vendor return workflows for rejected inbound consignments, debit note triggers, and gate exit clearance.',
    erpSync: 'Creates ERP Return Delivery (MIGO 122/161)',
    icon: 'RotateCcw',
    inputs: ['QC rejection slip', 'Vendor return authorization', 'Debit advice'],
    outputs: ['Return Gate Pass', 'Supplier penalty record']
  },
  {
    id: 'tx-store-layout',
    title: 'Store Layout',
    category: 'transactional',
    description: 'Visual 2D/3D bin layout mapper, aisle occupancy monitor, path travel optimizer, and capacity utilization telemetry.',
    erpSync: 'Warehouse layout matrix & Bin coordinates sync',
    icon: 'LayoutGrid',
    inputs: ['Zone boundaries', 'Bin capacity parameters', 'Aisle travel paths'],
    outputs: ['Real-time bin occupancy map', 'Optimized picking route paths']
  },
  {
    id: 'tx-material-inspection',
    title: 'Material Inspection',
    category: 'transactional',
    description: 'Detailed laboratory and metallurgical test parameter entry, Certificate of Analysis (COA) match, and pass/fail lot disposition.',
    erpSync: 'ERP Quality Inspection Results Recording (QE51N)',
    icon: 'SearchCheck',
    inputs: ['Sample test readings', 'Chemical/Physical specs', 'COA file'],
    outputs: ['Inspection Certificate', 'Disposition approval token']
  },
  {
    id: 'tx-picking-putting',
    title: 'Picking & Putting',
    category: 'transactional',
    description: 'Directs warehouse staff through optimal travel paths for put-away and picking using wearable ring scanners.',
    erpSync: 'ERP Transfer Order (LT01/LT03) confirmation',
    icon: 'ScanLine',
    inputs: ['Put-away tasks', 'Picking lists', 'Bin scans'],
    outputs: ['100% verified bin confirmations', 'Task completion logs']
  },
  {
    id: 'tx-delivery',
    title: 'Material Delivery',
    category: 'transactional',
    description: 'Tracks kitted material movement to line stations, staging buffer delivery, and digital receipt acknowledgment by line operator.',
    erpSync: 'Goods Issue to Production Order (MIGO 261)',
    icon: 'ArrowRightCircle',
    inputs: ['Line staging scan', 'Operator ID signoff'],
    outputs: ['Line-side stock transfer confirmation', 'WIP inventory credit']
  },
  {
    id: 'tx-line-rejections',
    title: 'Line Rejections & Re-issuer',
    category: 'transactional',
    description: 'Instant shop-floor alert when defective parts are identified during assembly; triggers express replacement and returns damaged parts.',
    erpSync: 'Scrap booking / Quality notification in ERP',
    icon: 'AlertOctagon',
    inputs: ['Line operator defect report', 'Part serial number'],
    outputs: ['Express replacement pick-list', 'Defective lot quarantine']
  }
];

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phaseNumber: 1,
    phaseName: 'Assess & Analyze',
    phaseTheme: 'From Diagnosis to Documented Reality',
    color: 'emerald',
    steps: [
      {
        stepNumber: 1,
        title: 'Study Existing Processes',
        description: 'Walk through current raw-material supply chain workflows end-to-end, on the ground, alongside the frontline personnel who operate them every day.',
        deliverable: 'Comprehensive Process Journey Map & Floor Observations'
      },
      {
        stepNumber: 2,
        title: 'Identify Problems, Issues & Concerns',
        description: 'Surface hidden bottlenecks, process breakdowns, and acute pain points across procurement, dock logistics, QC inspection, storekeeping, and line feeding.',
        deliverable: 'Stakeholder Pain Point Matrix & Root-Cause Analysis'
      },
      {
        stepNumber: 3,
        title: 'Document "As-Is" & "To-Be" Processes',
        description: 'Meticulously capture the current baseline process precisely, and collaboratively design the optimized, lean target future-state workflow.',
        deliverable: 'Detailed As-Is & To-Be Flowcharts with SOP Blueprints'
      },
      {
        stepNumber: 4,
        title: 'Prepare "Gap Analysis" Report',
        description: 'Mathematically compare As-Is vs To-Be models to quantify specific functional, technological, and procedural gaps the implementation must bridge.',
        deliverable: 'Quantified Gap Analysis Report & KPI Target Baseline'
      },
      {
        stepNumber: 5,
        title: 'Finalize with All Stakeholders',
        description: 'Review and achieve 100% formal alignment on the As-Is, To-Be, and Gap Analysis with executive leadership, plant managers, buyers, and frontline supervisors.',
        deliverable: 'Signed Stakeholder Charter & Project Scope Agreement'
      }
    ]
  },
  {
    phaseNumber: 2,
    phaseName: 'Design & Plan',
    phaseTheme: 'From Blueprint to Solution Architecture',
    color: 'blue',
    steps: [
      {
        stepNumber: 6,
        title: 'Identify & List Solution Components',
        description: 'Break down the target solution into its constituent modules, ERP connectors, IIoT wearable devices, barcode infrastructure, and user role profiles.',
        deliverable: 'System Architecture Blueprint & Hardware BOM'
      },
      {
        stepNumber: 7,
        title: 'Work Out Implementation Plan',
        description: 'Sequence the rollout with explicit milestone gates, resource ownership, cutover timelines, training calendars, and ERP sync dependencies.',
        deliverable: 'Master Project Gantt Chart & RACI Governance Matrix'
      },
      {
        stepNumber: 8,
        title: 'Change Mgmt. Issues & Resolutions',
        description: 'Anticipate adoption challenges among shop-floor workers, security, and vendors; define proactive incentives, training modules, and mitigation resolutions.',
        deliverable: 'Change Management & Workforce Training Playbook'
      }
    ]
  },
  {
    phaseNumber: 3,
    phaseName: 'Invest & Sustain',
    phaseTheme: 'From Turnkey Go-Live to Sustained Value',
    color: 'amber',
    steps: [
      {
        stepNumber: 9,
        title: 'Proposed Investments',
        description: 'Lay out transparent capital and operating investment required across technology licensing, turnkey consulting services, hardware devices, and change facilitation.',
        deliverable: 'Transparent Commercial Proposal & Turnkey Scope'
      },
      {
        stepNumber: 10,
        title: 'Return on Investments (ROI)',
        description: 'Quantify expected financial gains: inventory carrying cost reduction, line stoppage prevention, labor productivity boost, and calculate payback period.',
        deliverable: 'Formal ROI Model with Payback Timeline Projection'
      },
      {
        stepNumber: 11,
        title: 'Continuity & Support Plan',
        description: 'Establish SLA-backed operational continuity, 24/7 technical helpdesk, continuous calibration, and periodic value audits long after go-live.',
        deliverable: 'SLA Support Contract & Long-term Evolution Roadmap'
      }
    ]
  }
];

export const METHODOLOGY_CORNERSTONES = [
  {
    title: 'Evidence-Based',
    desc: 'Every recommendation is grounded in documented As-Is / To-Be analysis and a formal empirical gap assessment on your factory floor.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Stakeholder-Aligned',
    desc: 'Findings and implementation plans are validated with all internal and external stakeholders before code or configuration begins.',
    icon: 'Users'
  },
  {
    title: 'Business-Justified',
    desc: 'Every hardware and software investment is tied directly to a clear, mathematically quantified return on investment and quick payback.',
    icon: 'TrendingUp'
  },
  {
    title: 'Built to Last',
    desc: 'A dedicated continuity plan and turnkey partnership keeps the solution effective, resilient, and adaptive long after go-live.',
    icon: 'ShieldCheck'
  }
];

export const HARDWARE_SPECS = [
  {
    name: 'Wearable Mobile Computer',
    role: 'Hands-Free Warehouse Execution',
    desc: 'Arm-mounted, ruggedized Android mobile computer designed for extreme industrial shop-floor durability, vibration resistance, and seamless Wi-Fi roaming.',
    features: [
      'Glove-friendly touch display',
      'Hot-swappable full shift battery',
      'IP65 water & dust sealing',
      'Real-time ERP/ERX sync'
    ],
    icon: 'Smartphone'
  },
  {
    name: 'Ring Barcode Scanner',
    role: 'Ultra-Fast Ergonomic Scanning',
    desc: 'Finger-worn Bluetooth laser / 2D imager that frees both hands of dock and store operators for rapid picking, heavy carton lifting, and barcode verification.',
    features: [
      'Both hands completely free for picking & putting',
      'Reads damaged, shrink-wrapped, and dirty 1D/2D barcodes',
      'Instant haptic & audio confirmation',
      '10+ hours continuous scanning on single charge'
    ],
    icon: 'Scan'
  },
  {
    name: 'Specialized IIoT Computing Devices',
    role: 'Edge Computing & Gate Telemetry',
    desc: 'Industrial edge gateways installed at factory gates, unloading docks, and inspection bays to automate vehicle detection, barcode verification, and visual alerts.',
    features: [
      'Zero-latency local processing',
      'Fail-safe offline transaction caching',
      'Direct relay to visual Andon displays',
      'Secure encrypted cloud synchronization'
    ],
    icon: 'Cpu'
  }
];
