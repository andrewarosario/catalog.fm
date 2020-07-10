import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LastfmArtistService } from '@core/lastfm/services/lastfm-artist.service';
import { ArtistService } from '@core/artist/services/artist.service';
import { Artist } from '@core/artist/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistFacade {

  private artistSubject$ = new BehaviorSubject<Artist>(null);
  public artist$ = this.artistSubject$.asObservable();

  constructor(
    private artistService: ArtistService
  ) {}

  public getArtist(name: string) {
    return this.artistService.get(name).pipe(
      tap(artist => this.artistSubject$.next(artist))
    );
  }


}
