import { Injectable } from '@angular/core';
import { LastfmArtistService } from '@core/lastfm/services/lastfm-artist.service';
import { map } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { ArtistAdapterService } from './artist-adapter.service';
import { Artist } from '../models/artist';
import { TheAudioDbService } from '@core/the-audio-db/services/the-audio-db.service';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private lastfmArtistService: LastfmArtistService,
    private theAudioDbService: TheAudioDbService,
    private adapter: ArtistAdapterService
  ) {}

  get(name: string): Observable<Artist> {
    return forkJoin(
      this.lastfmArtistService.getArtist(name),
      this.theAudioDbService.getArtistInfo(name)
    ).pipe(
      map(([lastfmResponse, theAudioDbResponse]) => this.adapter.adaptLastfmArtist(lastfmResponse, theAudioDbResponse))
    );
  }

}
