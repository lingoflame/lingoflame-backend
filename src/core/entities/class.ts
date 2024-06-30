export class Class {
  remaining_capacity: number;
  constructor(
    public name: string,
    public level: ClassLevel,
    public teacher: string,
    public book: string,
    public sessionsPerWeek: number,
    public dayOfWeek: string,
    public hour: string,
    public cost: number,
    public capacity: number,
  ) {
    this.remaining_capacity = capacity;
  }
}

export enum ClassLevel {
  A1 = 'a1',
  A2 = 'a2',
  B1 = 'b1',
  B2 = 'b2',
  C1 = 'c1',
  C2 = 'c2',
}
