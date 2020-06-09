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

  public getUserRecentTracks(user: string, page = 1): Observable<any> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getRecentTracks',
      data: {
        user,
        page: page.toString()
      }
    };

    return this.lastfmService.get<any>(lastfmResponse);
  }

  public getUserTopAlbums(user: string, page: number, limit: number, period: PeriodLastfm): Observable<any> {

    const lastfmResponse: LastfmHttp = {
      method: 'user.getTopAlbums',
      data: {
        user,
        page: page.toString(),
        limit: limit.toString(),
        period
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
