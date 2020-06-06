import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  private statusConnectionSubject$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.setStatusConnection());
    window.addEventListener('offline', () => this.setStatusConnection());
  }

  public get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  public get statusConnection$(): Observable<boolean> {
    return this.statusConnectionSubject$.asObservable().pipe(
      startWith(this.isOnline)
    );
  }

  private setStatusConnection(): void {
    this.statusConnectionSubject$.next(window.navigator.onLine);
  }

}
