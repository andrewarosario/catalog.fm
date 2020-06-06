import { Injectable } from '@angular/core';
import { LastfmHttpService } from './lastfm-http.service';
import { HttpClient } from '@angular/common/http';
import { LastfmHttp } from '../../models/last-fm-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmService extends LastfmHttpService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public get<T>(data: LastfmHttp): Observable<T> {
    return this.http.get<T>(this.buildURL(data));
  }

  public post<T>(data: LastfmHttp): Observable<T> {
    return this.http.post<T>(this.buildURL(data), null);
  }
}
