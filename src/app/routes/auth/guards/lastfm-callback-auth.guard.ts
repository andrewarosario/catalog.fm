import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LastfmCallbackAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.authService.getTokenAndSetUser();
    if (token) {
      this.router.navigate(['/scrobble']);
      return false;
    }

    const tokenParam = next.queryParams.token;

    if (tokenParam) {
      this.authService.authenticate(tokenParam)
        .subscribe(() => this.router.navigate(['/scrobble']));
    }
    return true;
  }

}
