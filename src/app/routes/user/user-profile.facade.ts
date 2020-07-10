import { Injectable } from '@angular/core';
import { ProfileService } from '@core/profile/services/profile.service';
import { tap, switchMap } from 'rxjs/operators';
import { Profile, ProfileRecentTracks, ProfileTopAlbums, ProfileTopArtists, ProfileTopTracks } from '@core/profile/models/profile';
import { Observable, BehaviorSubject } from 'rxjs';
import { PeriodLastfm } from '@core/lastfm/models/periods';

@Injectable({
  providedIn: 'root'
})
export class UserProfileFacade {

  private profileSubject$ = new BehaviorSubject<Profile>(null);
  public profile$ = this.profileSubject$.asObservable();
  private recentTracksSubject$ = new BehaviorSubject<ProfileRecentTracks>(null);
  public recentTracks$ = this.recentTracksSubject$.asObservable();
  private topArtistsSubject$ = new BehaviorSubject<ProfileTopArtists>(null);
  public topArtists$ = this.topArtistsSubject$.asObservable();
  private topAlbumsSubject$ = new BehaviorSubject<ProfileTopAlbums>(null);
  public topAlbums$ = this.topAlbumsSubject$.asObservable();
  private topTracksSubject$ = new BehaviorSubject<ProfileTopTracks>(null);
  public topTracks$ = this.topTracksSubject$.asObservable();

  constructor(
    private profileService: ProfileService
  ) {}

  public getUser(name: string) {

    if (!this.verifyChangeUser(name)) {
      return;
    }

    this.getTopArtists(name).subscribe();
    this.getTopAlbums(name).subscribe();
    this.getTopTracks(name).subscribe();

    return this.getInfoUser(name).pipe(
      switchMap(() => this.getRecentTracks(name)),
    );
  }

  public getInfoUser(name: string): Observable<Profile> {
    return this.profileService.get(name).pipe(
      tap(profile => this.profileSubject$.next(profile))
    );
  }

  public getRecentTracks(name: string, limit = 20, page = 1): Observable<ProfileRecentTracks> {
    return this.profileService.getRecentTracks(name, limit, page).pipe(
      tap(recent => this.recentTracksSubject$.next(recent))
    );
  }

  public getTopArtists(name: string, limit = 10, page = 1, period = PeriodLastfm.Week): Observable<ProfileTopArtists> {
    return this.profileService.getTopArtists(name, limit, page, period).pipe(
      tap(albums => this.topArtistsSubject$.next(albums))
    );
  }

  public getTopAlbums(name: string, limit = 10, page = 1, period = PeriodLastfm.OneMonth): Observable<ProfileTopAlbums> {
    return this.profileService.getTopAlbums(name, limit, page, period).pipe(
      tap(albums => this.topAlbumsSubject$.next(albums))
    );
  }

  public getTopTracks(name: string, limit = 10, page = 1, period = PeriodLastfm.OneMonth): Observable<ProfileTopTracks> {
    return this.profileService.getTopTracks(name, limit, page, period).pipe(
      tap(tracks => this.topTracksSubject$.next(tracks))
    );
  }

  public setUser(profile: Profile) {
    this.profileSubject$.next(profile);
  }

  private verifyChangeUser(name: string): boolean {
    const profile = this.profileSubject$.getValue();

    if (!profile) {
      return true;
    }
    return profile.name.toLowerCase() !== name.toLowerCase();
  }

}
