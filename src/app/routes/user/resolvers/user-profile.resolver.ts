import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '@core/profile/services/profile.service';
import { ProfileRecentTracks } from '@core/profile/models/profile';
import { Observable } from 'rxjs';
import { UserProfileFacade } from '../user-profile.facade';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<ProfileRecentTracks> {

  constructor(private facade: UserProfileFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileRecentTracks> {
    return this.facade.getUser(route.params.user);
  }
}
