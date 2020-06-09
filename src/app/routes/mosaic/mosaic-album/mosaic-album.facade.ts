import { Injectable } from '@angular/core';
import { ProfileService } from '@shared/services/usecases/profile.service';
import { UserService } from '@core/services/user.service';
import { PeriodLastfm } from '@core/models/periods';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MosaicAlbumFacade {

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  public getImageAlbums(size: number, period: PeriodLastfm) {
    return this.profileService
        .getTopAlbums(this.userService.user.name, 1, size, period)
        .pipe(
          map(res => res.album),
          map(albums => albums.map(album => album.image['2']['#text'])),
        );
  }


}
