import { Injectable } from '@angular/core';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { map, tap } from 'rxjs/operators';
import { Profile } from '@core/models/profile';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileFacade {

  private profileSubject$ = new Subject<Profile>();
  public profile$ = this.profileSubject$.asObservable();

  constructor(
    private profileService: ProfileService
  ) {}

  public getUser(name: string): Observable<Profile> {
    return this.profileService.get(name).pipe(
      tap(profile => this.profileSubject$.next(profile))
    );
  }






}
