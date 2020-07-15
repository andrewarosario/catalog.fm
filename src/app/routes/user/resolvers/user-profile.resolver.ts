import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Profile } from '@core/profile/models/profile';
import { Observable } from 'rxjs';
import { UserProfileFacade } from '../user-profile.facade';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<Profile> {

  constructor(private facade: UserProfileFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    return this.facade.getUser(route.params.user);
  }
}
