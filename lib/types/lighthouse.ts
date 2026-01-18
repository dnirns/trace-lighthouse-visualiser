export type LighthouseJson = Record<string, unknown>;

export type DeviceType = 'mobile' | 'desktop' | 'unknown';

export type CategoryScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export type CoreMetrics = {
  lcpMs?: number;
  cls?: number;
  tbtMs?: number;
  inpMs?: number;
};

export type RunSummary = {
  url: string;
  fetchTime: string; // ISO if available
  device: DeviceType;
  categories: CategoryScores;
  metrics: CoreMetrics;
};

export type RunRecord = {
  id: string;
  createdAt: number;
  url: string;
  tag?: string;
  note?: string;
  device: DeviceType;
  fetchTime?: string;
  summary: RunSummary;
  raw: LighthouseJson;
};
