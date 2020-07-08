import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getKey(key: string): string {
    return localStorage.getItem(key);
  }

  public setKey(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public removeKey(key: string): void {
    localStorage.removeItem(key);
  }
}
