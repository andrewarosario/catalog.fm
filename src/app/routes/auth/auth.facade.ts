import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(private authService: AuthService) {}

  auth() {
    this.authService.redirectToAuthLastfm();
  }
}
