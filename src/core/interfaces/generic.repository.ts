export interface GenericRepository<T> {
  create(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T>;
  find(): Promise<T[]>;
}
