import type { RunRecord } from '@/lib/types/lighthouse';

export interface RunStore {
  add(run: RunRecord): Promise<void>;
  list(opts?: { query?: string; tag?: string; url?: string }): Promise<RunRecord[]>;
  get(id: string): Promise<RunRecord | undefined>;
}
