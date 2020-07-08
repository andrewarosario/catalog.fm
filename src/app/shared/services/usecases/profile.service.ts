import { Injectable } from '@angular/core';
import { LastfmUserService } from '@lastfm/services/lastfm-user.service';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { Profile, ProfileRecentTracks, ProfileTopAlbums, ProfileTopArtists, ProfileTopTracks } from '@core/models/profile';
import { PeriodLastfm } from '@core/models/periods';
import { ProfileAdapterService } from '../adapters/profile-adapter.service';
import { TheAudioDbService } from 'app/the-audio-db/services/the-audio-db.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private userLastfmService: LastfmUserService,
    private theAudioDbService: TheAudioDbService,
    private adapter: ProfileAdapterService
  ) {}

  get(userName: string): Observable<Profile> {
    return this.userLastfmService.getInfo(userName).pipe(
      map(response => this.adapter.adaptUserLastfmToProfile(response))
    );
  }

  getTopArtists(userName: string, page = 1, limit = 10, period = PeriodLastfm.Week): Observable<ProfileTopArtists> {
    return this.userLastfmService.getUserTopArtists(userName, page, limit, period).pipe(
      switchMap(res => {
        return forkJoin(
            of(res),
            forkJoin(res.topartists.artist.map(a => this.theAudioDbService.getArtistInfo(a.name)))
          );
      }),
      map(([lastfmResult, theAudioDbResult]) => this.adapter.adaptLastfmTopArtistsToProfileTopArtist(lastfmResult, theAudioDbResult, period)),
    );
  }

  getTopTracks(userName: string, page = 1, limit = 10, period = PeriodLastfm.Week): Observable<ProfileTopTracks> {
    return this.userLastfmService.getUserTopTracks(userName, page, limit, period).pipe(
      map(response => this.adapter.adaptLastfmTopTracksToProfileTopTracks(response, period)),
    );
  }

  getTopAlbums(userName: string, page = 1, limit = 8, period = PeriodLastfm.Week): Observable<ProfileTopAlbums> {
    return this.userLastfmService.getUserTopAlbums(userName, page, limit, period).pipe(
      map(response => this.adapter.adaptLastfmTopAlbumsToProfileTopAlbums(response, period))
    );
  }

  getRecentTracks(userName: string, limit = 50, page = 1): Observable<ProfileRecentTracks> {
    return this.userLastfmService.getUserRecentTracks(userName, limit, page).pipe(
      map(response => this.adapter.adaptLastfmRecentTracksToProfileRecentTracks(response))
    );
  }
}
