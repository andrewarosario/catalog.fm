import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheAudioDbService {

  constructor(
    private http: HttpClient
  ) {}

  private readonly base = 'https://theaudiodb.com/api/v1/json/1/search.php?s=';

  public getArtistInfo(artist: string): Observable<TheAudioDbArtist> {
    return this.http.get<TheAudioDbArtistResponse>(this.base + artist).pipe(
      map(res => res.artists),
      map(artists => artists ? artists[0] : null)
    );
  }
}
