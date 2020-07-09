import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtistFacade } from '../artist.facade';
import { Artist } from '@core/artist/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistResolver implements Resolve<Artist> {

  constructor(private facade: ArtistFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artist> {
    return this.facade.getArtist(route.params.artist);
  }
}
