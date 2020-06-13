import { Injectable } from '@angular/core';
import { LastfmUserService } from '@lastfm/services/lastfm-user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile, ProfileRecentTracks } from '@core/models/profile';
import { PeriodLastfm } from '@core/models/periods';
import { ProfileAdapterService } from '../adapters/profile-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private userLastfmService: LastfmUserService,
    private adapter: ProfileAdapterService
  ) {}

  get(userName: string): Observable<Profile> {
    return this.userLastfmService.getInfo(userName).pipe(
      map(response => this.adapter.adaptUserLastfmToProfile(response))
    );
  }

  getTopAlbums(userName: string, page = 1, limit = 10, period = PeriodLastfm.Week): Observable<LastfmTopAlbums> {
    return this.userLastfmService.getUserTopAlbums(userName, page, limit, period).pipe(
      map(response => response.topalbums)
    );
  }

  getRecentTracks(userName: string, limit = 50, page = 1): Observable<ProfileRecentTracks> {
    return this.userLastfmService.getUserRecentTracks(userName, limit, page).pipe(
      map(response => this.adapter.adaptLastfmRecentTracksToProfileRecentTracks(response))
    );
  }
}
