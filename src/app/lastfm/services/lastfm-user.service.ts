import { Injectable } from '@angular/core';
import { LastfmService } from './helpers/lastfm.service';
import { LastfmHttp } from '../models/last-fm-http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { PeriodLastfm } from '@core/models/periods';

@Injectable({
  providedIn: 'root'
})
export class LastfmUserService {

  constructor(
    private lastfmService: LastfmService,
  ) { }

  public getInfo(user: string): Observable<UserLastfmResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getInfo',
      data: { user }
    };

    return this.lastfmService.get<UserLastfmResponse>(lastfmResponse);
  }

  public getUserRecentTracks(user: string, limit = 50, page = 1): Observable<LastfmRecentTracksResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getRecentTracks',
      data: {
        user,
        page: page.toString(),
        limit: limit.toString(),
      }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public getUserTopArtists(user: string, page: number, limit: number, period: PeriodLastfm): Observable<LastfmTopArtistsResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getTopArtists',
      data: {
        user,
        page: page.toString(),
        limit: limit.toString(),
        period
      }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public getUserTopAlbums(user: string, page: number, limit: number, period: PeriodLastfm): Observable<LastfmTopAlbumsResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getTopAlbums',
      data: {
        user,
        page: page.toString(),
        limit: limit.toString(),
        period
      }
    };

    return this.lastfmService.get<LastfmTopAlbumsResponse>(lastfmResponse);
  }

  public getUserTopTracks(user: string, limit: number, page: number, period: PeriodLastfm): Observable<LastfmTopTracksResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getTopTracks',
      data: {
        user,
        page: page.toString(),
        limit: limit.toString(),
        period
      }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public getWeeklyChartList(user: string) {
    const lastfmResponse: LastfmHttp = {
      method: 'user.getWeeklyChartList',
      data: { user }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public getWeeklyArtistChart(user: string, from?: number, to?: number) {
    const lastfmResponse: LastfmHttp = {
      method: 'user.getWeeklyArtistChart',
      data: {
        user,
      }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public scrobble(userKey: string, input: TrackScrobble, timestamp = moment().unix()): Observable<ScrobbleResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'track.scrobble',
      data: {
        artist: input.artist,
        track: input.song,
        album: input.album,
        sk: userKey,
        timestamp: timestamp.toString(),
      },
      encode: ['album', 'artist', 'track']
    };

    return this.lastfmService.post<ScrobbleResponse>(lastfmResponse);
  }
}
