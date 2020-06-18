import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { Profile, ProfileTopAlbums } from '@core/models/profile';
import { Observable } from 'rxjs';
import { UserProfileFacade } from '../user-profile.facade';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<ProfileTopAlbums> {

  constructor(private facade: UserProfileFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileTopAlbums> {
    return this.facade.getUser(route.params.user);
  }
}
