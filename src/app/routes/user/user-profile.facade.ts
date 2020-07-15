import { Injectable } from '@angular/core';
import { ProfileService } from '@core/profile/services/profile.service';
import { tap, switchMap } from 'rxjs/operators';
import { Profile, ProfileRecentTracks, ProfileTopAlbums, ProfileTopArtists, ProfileTopTracks } from '@core/profile/models/profile';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { UserProfileItensService } from './services/user-profile-itens.service';
import { UserInfo } from './interfaces/user-resources';

@Injectable({
  providedIn: 'root'
})
export class UserProfileFacade {

  private profileSubject$ = new BehaviorSubject<Profile>(null);
  private recentTracksSubject$ = new BehaviorSubject<ProfileRecentTracks>(null);
  private topArtistsSubject$ = new BehaviorSubject<ProfileTopArtists>(null);
  private topAlbumsSubject$ = new BehaviorSubject<ProfileTopAlbums>(null);
  private topTracksSubject$ = new BehaviorSubject<ProfileTopTracks>(null);
  public profile$ = this.profileSubject$.asObservable();
  public recentTracks$ = this.recentTracksSubject$.asObservable();
  public topArtists$ = this.topArtistsSubject$.asObservable();
  public topAlbums$ = this.topAlbumsSubject$.asObservable();
  public topTracks$ = this.topTracksSubject$.asObservable();
  public selectedTabIndex = 0;

  constructor(
    private profileService: ProfileService,
    private userProfileItensService: UserProfileItensService
  ) {}

  public getUser(name: string): Observable<Profile> {

    if (!this.verifyChangeUser(name)) {
      return;
    }

    merge(
      this.getRecentTracks(name, this.userProfileItensService.makeRecentTracksParams()),
      this.getTopArtists(name, this.userProfileItensService.makeTopArtistsParams()),
      this.getTopAlbums(name, this.userProfileItensService.makeTopAlbumsParams()),
      this.getTopTracks(name, this.userProfileItensService.makeTopTracksParams()),
    ).subscribe();

    return this.getInfoUser(name);
  }

  public getRecentTracks(name: string, { limit, page }: UserInfo): Observable<ProfileRecentTracks> {
    return this.profileService.getRecentTracks(name, limit, page).pipe(
      tap(recent => this.recentTracksSubject$.next(recent))
    );
  }

  public getTopArtists(name: string, { limit, page, period }: UserInfo ): Observable<ProfileTopArtists> {
    return this.profileService.getTopArtists(name, limit, page, period).pipe(
      tap(albums => this.topArtistsSubject$.next(albums))
    );
  }

  public getTopAlbums(name: string, { limit, page, period }: UserInfo): Observable<ProfileTopAlbums> {
    return this.profileService.getTopAlbums(name, limit, page, period).pipe(
      tap(albums => this.topAlbumsSubject$.next(albums))
    );
  }

  public getTopTracks(name: string, { limit, page, period }: UserInfo): Observable<ProfileTopTracks> {
    return this.profileService.getTopTracks(name, limit, page, period).pipe(
      tap(tracks => this.topTracksSubject$.next(tracks))
    );
  }

  public setTabIndex(tabIndex: number) {
    this.selectedTabIndex = tabIndex;
  }

  public setProfileItens() {
    this.userProfileItensService.setItens({
      recentTracksLimit: +this.recentTracksSubject$.getValue().info.perPage,
      topTracksLimit: +this.topTracksSubject$.getValue().info.perPage,
      topAlbumsLimit: +this.topAlbumsSubject$.getValue().info.perPage,
      topArtistsLimit: +this.topArtistsSubject$.getValue().info.perPage,
      topTracksPeriod: this.topTracksSubject$.getValue().info.period,
      topAlbumsPeriod: this.topAlbumsSubject$.getValue().info.period,
      topArtistsPeriod: this.topArtistsSubject$.getValue().info.period,

    });
  }

  private verifyChangeUser(name: string): boolean {
    const profile = this.profileSubject$.getValue();

    if (!profile) {
      return true;
    }
    return profile.name.toLowerCase() !== name.toLowerCase();
  }

  private getInfoUser(name: string): Observable<Profile> {
    return this.profileService.get(name).pipe(
      tap(profile => this.profileSubject$.next(profile))
    );
  }

}
