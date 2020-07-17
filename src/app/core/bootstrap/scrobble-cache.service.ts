import { Injectable } from '@angular/core';
import { mapTo, switchMap, tap, filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { IndexedDbScrobbles } from '../indexed-db/tables/indexed-db-scrobbles';
import { AuthOnlineService } from '../auth/auth-online.service';
import { MessageService } from '../../shared/services/message.service';
import { ScrobbleService } from '../scrobble/services/scrobble.service';


@Injectable({
  providedIn: 'root'
})
export class ScrobbleCacheService {

  constructor(
    private indexedDbScrobbles: IndexedDbScrobbles,
    private authOnlineService: AuthOnlineService,
    private messageService: MessageService,
    private scrobbleService: ScrobbleService
  ) {}

  public listenSendScrobblesInCache() {
    this.authOnlineService.isLogged$().pipe(
      filter(isLogged => isLogged),
      switchMap(() => this.indexedDbScrobbles.getAll()),
      filter(tracks => !!tracks.length),
      switchMap(scrobbles => forkJoin(scrobbles.map(track => this.scrobbleService.scrobbleToLastfm(track)))),
      tap(() => this.indexedDbScrobbles.clear())
    )
    .subscribe(scrobbledTracks => {
      const tracksLength = scrobbledTracks.length;

      const textResponse = this.getMessageScrobbledTracks(tracksLength);
      this.messageService.open(textResponse);
    });
  }

  private getMessageScrobbledTracks(tracksLength: number): string {
    return `${tracksLength} ${tracksLength > 1
      ? 'faixas foram scrobbladas'
      : 'faixa foi scrobblada'} do cache`;
  }


}
