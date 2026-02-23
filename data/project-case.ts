export type CaseHeaderData = {
  title: string;
  intro: string;
  role: string;
  team: string;
  timeline: string;
  responsibilities: string[];
  deliverables: string[];
  confidentiality?: string;
};

export type CaseFinding = {
  title: string;
  body: string;
};

export type CaseKpi = {
  label: string;
  value: string;
  note: string;
};

export type CaseScope = {
  must: string[];
  should: string[];
  nice: string[];
  reasons?: {
    must: string;
    should: string;
    nice: string;
  };
};

export type CaseFlowNode = {
  id: string;
  title: string;
  description: string;
  screens?: string[];
};

export type CaseFlow = {
  overview?: string;
  nodes: CaseFlowNode[];
};

export type CaseException = {
  trigger: string;
  response: string;
  rule: string;
  consequence: string;
};

export type CaseDataEntity = {
  name: string;
  description: string;
  relations?: string[];
};

export type CasePrinciple = {
  title: string;
  body: string;
};

export type CaseDataModel = {
  entities: CaseDataEntity[];
  principles: CasePrinciple[];
};

export type CaseBuildPhase = {
  phase: string;
  duration: string;
  goals: string[];
  deliverables: string[];
  integrations: string[];
};

export type CaseArtifact = {
  label: string;
  type: string;
  href: string;
  thumbnail?: string;
};

export type ProjectCaseContent = {
  header: CaseHeaderData;
  findings: CaseFinding[];
  kpis: CaseKpi[];
  scope: CaseScope;
  flow: CaseFlow;
  exceptions: CaseException[];
  dataModel: CaseDataModel;
  buildPlan: CaseBuildPhase[];
  artifacts: CaseArtifact[];
  reflection?: string[];
};
