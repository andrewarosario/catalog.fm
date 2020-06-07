import { Injectable } from '@angular/core';
import { OnlineOfflineService } from '../bootstrap/online-offline.service';
import { UserService } from './user.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthOnlineService {

  constructor(
    private onlineOfflineService: OnlineOfflineService,
    private userService: UserService
  ) { }

  public isLogged$(): Observable<boolean> {
    return combineLatest(
      this.onlineOfflineService.statusConnection$,
      this.userService.user$
    ).pipe(
      map(([online, user]) => online && !!user)
    );
  }

  public isLogged(): boolean {
    return !!this.userService.user && this.onlineOfflineService.isOnline;
  }
}
