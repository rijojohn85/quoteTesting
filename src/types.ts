export interface PaperSize {
  width: number;
  length: number;
}

export interface MachineSize {
  plateSize: { width: number; length: number };
  gripperMargin: number;
  maxFeedingSize: { width: number; length: number };
}
