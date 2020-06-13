import { Injectable } from '@angular/core';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { Profile, ProfileRecentTracks } from '@core/models/profile';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileFacade {

  private profileSubject$ = new BehaviorSubject<Profile>(null);
  public profile$ = this.profileSubject$.asObservable();
  private recentTracksSubject$ = new BehaviorSubject<ProfileRecentTracks>(null);
  public recentTracks$ = this.recentTracksSubject$.asObservable();

  constructor(
    private profileService: ProfileService
  ) {}

  public getUser(name: string) {
    return this.profileService.get(name).pipe(
      tap(profile => this.profileSubject$.next(profile)),
      switchMap(() => this.getRecentTracks(name, 10)),
    );
  }

  public getRecentTracks(name: string, limit = 10, page = 1): Observable<ProfileRecentTracks> {
    return this.profileService.getRecentTracks(name, limit, page).pipe(
      tap(recent => this.recentTracksSubject$.next(recent))
    );
  }

  public setUser(profile: Profile) {
    this.profileSubject$.next(profile);
  }

}
