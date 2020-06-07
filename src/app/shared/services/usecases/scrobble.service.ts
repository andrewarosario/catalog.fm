import { Injectable } from '@angular/core';
import { LastfmUserService } from '@lastfm/services/lastfm-user.service';
import { UserService } from '@core/services/user.service';
import * as moment from 'moment';
import { IndexedDbScrobbles } from '@indexed-db/tables/indexed-db-scrobbles';
import { mapTo, switchMap, tap, filter } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { MessageService } from '@shared/services/message.service';
import { AuthOnlineService } from '@core/services/auth-online.service';
import { ScrobbleResponseType } from '@core/models/scrobble-response-type';

@Injectable({
  providedIn: 'root'
})
export class ScrobbleService {

  constructor(
    private userService: UserService,
    private lastfmUserService: LastfmUserService,
    private indexedDbScrobbles: IndexedDbScrobbles,
    private authOnlineService: AuthOnlineService,
    private messageService: MessageService
  ) {
    this.sendScrobblesInCache();
  }

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

  private sendScrobblesInCache() {
    this.authOnlineService.isLogged$().pipe(
      filter(isLogged => isLogged),
      switchMap(() => this.indexedDbScrobbles.getAll()),
      filter(tracks => !!tracks.length),
      switchMap(scrobbles => forkJoin(scrobbles.map(track => this.scrobbleToLastfm(track)))),
      tap(() => this.indexedDbScrobbles.clear())
    )
    .subscribe(scrobbledTracks => {
      const tracksLength = scrobbledTracks.length;

      const textResponse = `${tracksLength} ${tracksLength > 1
        ? 'faixas foram scrobbladas'
        : 'faixa foi scrobblada'} do cache`;

      this.messageService.open(textResponse);
    });
  }


}
