import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService extends Dexie {

  constructor() {
    super('catalog-fm');
  }

  public createTable(tableName: string) {
    this.version(1).stores({
      [tableName]: 'id'
    });
  }
}
