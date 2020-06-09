import { Injectable } from '@angular/core';
import { LastfmUserService } from '@lastfm/services/lastfm-user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from '@core/models/profile';
import { PeriodLastfm } from '@core/models/periods';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private userLastfmService: LastfmUserService
  ) {}

  get(userName: string): Observable<Profile> {
    return this.userLastfmService.getInfo(userName).pipe(
      map(response => response.user),
      map(user => ({
        name: user.name,
        realName: user.realname,
        image: user.image[3]['#text'],
        gender: user.gender,
        country: user.country,
        playcount: +user.playcount,
        registered: +user.registered['#text'],
      }))
    );
  }

  getTopAlbums(userName: string, page = 1, limit = 10, period = PeriodLastfm.Week): Observable<any> {
    return this.userLastfmService.getUserTopAlbums(userName, page, limit, period).pipe(
      map(response => response.topalbums)
    );
  }
}
