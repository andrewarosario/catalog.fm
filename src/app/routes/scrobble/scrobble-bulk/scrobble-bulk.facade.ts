import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ScrobbleService } from '../../../shared/services/usecases/scrobble.service';
import { map } from 'rxjs/operators';
import { ScrobbleResponseType } from '@core/models/scrobble-response-type';

@Injectable({
  providedIn: 'root'
})
export class ScrobbleBulkFacade {

  constructor(
    private scrobbleService: ScrobbleService,
  ) {}

  public scrobble(text: string): Observable<ScrobbleResponseType> {
    const tracks = this.convertTextToArrayScrobble(text)
      .map(this.convertLineToTrackScrobble);

    return this.scrobbleTracks(tracks);
  }

  private convertTextToArrayScrobble(text: string): string[] {
    return text.split((/\n/));
  }

  private convertLineToTrackScrobble(line: string): TrackScrobble {
    const scrobbleLine = line.split('-');
    return {
      artist: scrobbleLine[0],
      song: scrobbleLine[1],
      album: scrobbleLine[2] || ''
    };
  }

  private scrobbleTracks(tracks: TrackScrobble[]): Observable<ScrobbleResponseType> {
    const tracksToScrobble = tracks.map(track => this.scrobbleService.scrobble(track));

    return forkJoin(tracksToScrobble).pipe(
      map(response => response[0])
    );
  }
}
