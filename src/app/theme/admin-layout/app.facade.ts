import { Injectable } from '@angular/core';
import { UserService } from '@core/user/services/user.service';
import { AuthService } from '@core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {

  public user$ = this.userService.user$;
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  public auth() {
    this.authService.redirectToAuthLastfm();
  }

  public logout() {
    this.authService.logout();
  }

}
