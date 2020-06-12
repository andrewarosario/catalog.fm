import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { Profile } from '@core/models/profile';
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
