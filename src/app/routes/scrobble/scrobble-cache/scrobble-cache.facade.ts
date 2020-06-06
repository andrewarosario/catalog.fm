import { Injectable } from '@angular/core';
import { ScrobbleService } from '../services/scrobble.service';
import { IndexedDbScrobbles } from '@indexed-db/tables/indexed-db-scrobbles';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { MessageService } from '@shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ScrobbleCacheFacade {

  public tracks$ = this.indexedDbScrobbles.collection$;
  constructor(
    private scrobbleService: ScrobbleService,
    private indexedDbScrobbles: IndexedDbScrobbles,
    private messageService: MessageService,
  ) {}


  public scrobbleAndRemoveFromCache(track: TrackScrobble): void {
    this.scrobbleService.scrobbleToLastfm(track)
      .subscribe(
        () => {
          this.indexedDbScrobbles.delete(track.id);
          this.messageService.open('Faixa scrobblada!');
        },
        err => this.messageService.open('Não foi possível realizar o scrobble!')
      );
  }

  public scrobbleAllAndClearCache(tracks: TrackScrobble[]): void {
    const tracksToScrobble = tracks.map(track => this.scrobbleService.scrobble(track));
    forkJoin(tracksToScrobble).pipe(tap(() => this.clear()))
    .subscribe(
      () => this.messageService.open('Faixas scrobbladas!'),
      err => this.messageService.open('Não foi possível realizar os scrobbles!')
    );
  }

  public remove(trackId: string): void {
    this.indexedDbScrobbles.delete(trackId);
  }

  public clear(): void {
    this.indexedDbScrobbles.clear();
  }


}
