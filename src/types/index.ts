export interface StakeholderRole {
  id: string;
  role: string;
  avatar: string;
  quote: string;
  category: 'production' | 'procurement' | 'warehouse' | 'leadership' | 'quality' | 'supplier' | 'consulting';
  impactSummary: string;
  erxSolution: string;
  keyMetric: string;
  otherIssues?: string[];
  slideRow?: 1 | 2;
  questionKey?: string;
  silhouetteType?: 'ppc' | 'buyer' | 'supplier' | 'security' | 'dock' | 'qc' | 'storekeeper' | 'production' | 'operator' | 'management' | 'consultant';
}

export interface ConceptPillar {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  features: string[];
  businessValue: string;
}

export interface ObjectiveItem {
  id: string;
  title: string;
  description: string;
  category: 'efficiency' | 'quality' | 'financial' | 'security';
  icon: string;
  benefit: string;
}

export interface FeatureBlock {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
  tag: string;
  icon: string;
  color: string;
}

export interface WorkflowStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  stakeholders: string[];
  keyActions: string[];
  technologyUsed: string;
  badge: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  category: 'master' | 'transactional';
  description: string;
  erpSync: string;
  icon: string;
  inputs: string[];
  outputs: string[];
}

export interface MethodologyPhase {
  phaseNumber: number;
  phaseName: string;
  phaseTheme: string;
  color: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    deliverable: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  designation: string;
  currentErp: string;
  facilityLocation: string;
  primaryChallenge: string;
  message: string;
}
