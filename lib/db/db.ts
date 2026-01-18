import Dexie, { type Table } from 'dexie';

export type RunRecord = {
  id: string; // uuid
  createdAt: number; // timestamp
  url: string;
  tag?: string;
  note?: string;
  device?: 'mobile' | 'desktop' | 'unknown';
  raw: unknown; // lighthouse json
};

class TraceDB extends Dexie {
  runs!: Table<RunRecord>;

  constructor() {
    super('TraceDB');
    this.version(1).stores({
      runs: 'id, createdAt, url, tag, device',
    });
  }
}

export const db = new TraceDB();
