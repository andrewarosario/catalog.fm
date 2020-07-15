import { Injectable } from '@angular/core';
import { LastfmUserService } from '@core/lastfm/services/lastfm-user.service';
import { UserService } from '@core/user/services/user.service';
import * as moment from 'moment';
import { IndexedDbScrobbles } from '@core/indexed-db/tables/indexed-db-scrobbles';
import { mapTo } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthOnlineService } from '@core/auth/auth-online.service';
import { ScrobbleResponseType } from '@core/scrobble/models/scrobble-response-type';

@Injectable({
  providedIn: 'root'
})
export class ScrobbleService {

  constructor(
    private userService: UserService,
    private lastfmUserService: LastfmUserService,
    private indexedDbScrobbles: IndexedDbScrobbles,
    private authOnlineService: AuthOnlineService,
  ) {}

  public scrobble(track: TrackScrobble): Observable<ScrobbleResponseType> {
    return this.authOnlineService.isLogged()
      ? this.scrobbleToLastfm(track)
      : this.addScrobbleToIndexedDb(track);
  }

  public scrobbleToLastfm(track: TrackScrobble, timestamp = moment().unix()): Observable<ScrobbleResponseType> {
    return this.lastfmUserService
      .scrobble(this.userService.user.key, track, timestamp)
      .pipe(mapTo(ScrobbleResponseType.Lastfm));
  }

  private addScrobbleToIndexedDb(track: TrackScrobble): Observable<ScrobbleResponseType> {
    return this.indexedDbScrobbles
      .add(track)
      .pipe(mapTo(ScrobbleResponseType.IndexedDb));
  }
}
