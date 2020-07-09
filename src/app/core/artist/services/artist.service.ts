import { Injectable } from '@angular/core';
import { LastfmArtistService } from '@core/lastfm/services/lastfm-artist.service';
import { map, switchMap, tap } from 'rxjs/operators';
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
    return this.lastfmArtistService.getArtist(name).pipe(
      tap(console.log),
      map(response => this.adapter.adaptLastfmArtist(response))
    );
  }

  // getTopArtists(userName: string, page = 1, limit = 10, period = PeriodLastfm.Week): Observable<ProfileTopArtists> {
  //   return this.userLastfmService.getUserTopArtists(userName, page, limit, period).pipe(
  //     switchMap(res => {
  //       return forkJoin(
  //           of(res),
  //           forkJoin(res.topartists.artist.map(a => this.theAudioDbService.getArtistInfo(a.name)))
  //         );
  //     }),
  //     map(([lastfmResult, theAudioDbResult]) => this.adapter.adaptLastfmTopArtistsToProfileTopArtist(lastfmResult, theAudioDbResult, period)),
  //   );
  // }

}
