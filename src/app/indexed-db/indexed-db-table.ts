import { Injector } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { IndexedDbService } from './indexed-db.service';
import { uuid } from '@shared/helpers/uuid';

export class IndexedDbTable<T extends {id?: string}> {

  protected table: Dexie.Table<T, string>;
  protected db: IndexedDbService;
  private tableSubject$ = new BehaviorSubject<T[]>([]);
  public collection$ = this.tableSubject$.asObservable();

  constructor(
    protected injector: Injector,
    tableName: string
  ) {
    this.db = injector.get(IndexedDbService);
    this.createTable(tableName);
    this.getAll().subscribe(data => this.tableSubject$.next(data));
  }

  public getTable() {
    return this.tableSubject$.getValue();
  }

  public add(data: T) {
    const dbData = { id: uuid(), ...data};
    this.tableSubject$.next([ ...this.getTable(), dbData ]);
    return from(this.table.add(dbData));
  }

  public delete(id: string) {
    this.tableSubject$.next(this.getTable().filter(table => table.id !== id));
    return from(this.table.delete(id));
  }

  public clear() {
    this.tableSubject$.next([]);
    return from(this.table.clear());
  }

  public getAll() {
    return from(this.table.toArray());
  }

  private createTable(tableName: string): void {
    this.db.createTable(tableName);
    this.table = this.db.table(tableName);
  }
}
