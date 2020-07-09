import { Injectable } from '@angular/core';
import { LastfmService } from './helpers/lastfm.service';
import { LastfmHttp } from '../models/last-fm-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmArtistService {

  constructor(private lastfmService: LastfmService) { }

  getArtist(artist: string): Observable<ArtistInfoResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'artist.getInfo',
      data: { artist },
      encode: ['artist']
    };

    return this.lastfmService.get<ArtistInfoResponse>(lastfmResponse);
  }

  getAlbum(artist: string, album: string): Observable<AlbumInfoResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'album.getInfo',
      data: { artist, album },
    };

    return this.lastfmService.get<AlbumInfoResponse>(lastfmResponse);
  }

  search(artistSearch: string, limit = 10, page = 1): Observable<ArtistSearchResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'artist.search',
      data: {
        artist: artistSearch,
        limit: limit.toString(),
        page: page.toString(),
      },
    };

    return this.lastfmService.get<ArtistSearchResponse>(lastfmResponse);
  }
}
