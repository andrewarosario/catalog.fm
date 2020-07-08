import { Injectable } from '@angular/core';
import { MessageService } from '@shared/services/message.service';
import { ScrobbleResponseType } from '@core/scrobble/models/scrobble-response-type';
import { ScrobbleService } from './scrobble.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const MESSAGE_SCROBBLE = {
  [ScrobbleResponseType.Lastfm]: 'Faixa scrobblada com sucesso!',
  [ScrobbleResponseType.IndexedDb]: 'A faixa foi armazenada no cache'
};

@Injectable({
  providedIn: 'root'
})
export class ScrobbleMessageService {

  constructor(
    private scrobbleService: ScrobbleService,
    private messageService: MessageService
  ) { }

  public scrobble(track: TrackScrobble) {
    return this.scrobbleService.scrobble(track).pipe(
      tap(response => this.messageService.open(MESSAGE_SCROBBLE[response])),
      catchError(err => of(this.messageService.open('Erro ao scrobblar faixa!')))
    );
  }
}
