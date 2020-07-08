import { Injectable } from '@angular/core';
import { ProfileService } from '@core/profile/services/profile.service';
import { UserService } from '@core/user/services/user.service';
import { PeriodLastfm } from '@core/lastfm/models/periods';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MosaicAlbumFacade {

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  public getImageAlbums(size: number, period: PeriodLastfm): Observable<string[]> {
    return this.profileService
        .getTopAlbums(this.userService.user.name, size, 1, period)
        .pipe(
          map(topAlbums => topAlbums.albums.map(album => album.imageSize2)),
        );
  }


}
