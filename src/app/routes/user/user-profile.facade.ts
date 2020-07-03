import { Injectable } from '@angular/core';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { tap, switchMap } from 'rxjs/operators';
import { Profile, ProfileRecentTracks, ProfileTopAlbums, ProfileTopArtists, ProfileTopTracks } from '@core/models/profile';
import { Observable, BehaviorSubject } from 'rxjs';

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
    this.getTopArtists(name).subscribe();
    this.getTopAlbums(name).subscribe();
    this.getTopTracks(name).subscribe();

    return this.getInfoUser(name).pipe(
      switchMap(() => this.getRecentTracks(name, 10)),
    );
  }

  public getInfoUser(name: string): Observable<Profile> {
    return this.profileService.get(name).pipe(
      tap(profile => this.profileSubject$.next(profile))
    );
  }

  public getRecentTracks(name: string, limit = 10, page = 1): Observable<ProfileRecentTracks> {
    return this.profileService.getRecentTracks(name, limit, page).pipe(
      tap(recent => this.recentTracksSubject$.next(recent))
    );
  }

  public getTopArtists(name: string): Observable<ProfileTopArtists> {
    return this.profileService.getTopArtists(name).pipe(
      tap(albums => this.topArtistsSubject$.next(albums))
    );
  }

  public getTopAlbums(name: string): Observable<ProfileTopAlbums> {
    return this.profileService.getTopAlbums(name).pipe(
      tap(albums => this.topAlbumsSubject$.next(albums))
    );
  }

  public getTopTracks(name: string, limit = 10, page = 1): Observable<ProfileTopTracks> {
    return this.profileService.getTopTracks(name, limit, page).pipe(
      tap(tracks => this.topTracksSubject$.next(tracks))
    );
  }

  public setUser(profile: Profile) {
    this.profileSubject$.next(profile);
  }

}
