import { Injectable } from '@angular/core';
import { LastfmAuthService } from '../../lastfm/services/lastfm-auth.service';
import { UserService } from './user.service';
import { tap, switchMap, map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { ProfileService } from '@shared/services/usecases/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private lastfmAuthService: LastfmAuthService,
    private profileService: ProfileService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
    this.getTokenAndSetUser();
  }

  public redirectToAuthLastfm() {
    location.href = `http://www.last.fm/api/auth/?api_key=${environment.apiKey}&cb=${encodeURIComponent(`${environment.baseUrl}/auth`)}`;
  }

  public authenticate(token: string) {
    return this.lastfmAuthService.authenticate(token)
      .pipe(
        tap(authResponse => this.userService.setUser(authResponse.session)),
        tap(authResponse => this.localStorageService.setKey('x-access-token', JSON.stringify(authResponse.session))),
        switchMap(authResponse => this.profileService.get(authResponse.session.name)),
        map(profile => this.userService.setUserProfile(profile)),
        tap(user => this.localStorageService.setKey('x-access-token', JSON.stringify(user)))
      );
  }

  public getTokenAndSetUser(): User {
    const token = this.localStorageService.getKey('x-access-token');
    if (token) {
      const decodedToken = JSON.parse(token) as User;
      this.userService.setUser(decodedToken);
      return decodedToken;
    }
    return null;
  }

  public logout(): void {
    this.userService.setUser(null);
    this.localStorageService.removeKey('x-access-token');
    this.router.navigate(['/auth']);
  }
}
