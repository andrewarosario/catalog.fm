import { Injectable } from '@angular/core';
import { LastfmService } from './helpers/lastfm.service';
import { LastfmHttp } from '../models/last-fm-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmAuthService {

  constructor(private lastfmService: LastfmService) { }

  authenticate(token: string): Observable<AuthenticationResponse> {

    const lastfmResponse: LastfmHttp = {
      method: 'auth.getSession',
      data: { token }
    };

    return this.lastfmService.get<AuthenticationResponse>(lastfmResponse);
  }
}
