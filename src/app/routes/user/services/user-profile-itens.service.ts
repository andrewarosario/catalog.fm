import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeriodLastfm } from '@core/lastfm/models/periods';
import { LocalStorageService } from '@shared/services/local-storage.service';

export interface ProfileItens {
  recentTracksLimit: number;
  topArtistsLimit: number;
  topAlbumsLimit: number;
  topTracksLimit: number;
  topArtistsPeriod: PeriodLastfm;
  topAlbumsPeriod: PeriodLastfm;
  topTracksPeriod: PeriodLastfm;
}

const profileItensDefault: ProfileItens = {
  recentTracksLimit: 20,
  topArtistsLimit: 10,
  topAlbumsLimit: 10,
  topTracksLimit: 10,
  topArtistsPeriod: PeriodLastfm.Week,
  topAlbumsPeriod: PeriodLastfm.OneMonth,
  topTracksPeriod: PeriodLastfm.Week,
};

@Injectable({
  providedIn: 'root'
})
export class UserProfileItensService {
  public profileItens = profileItensDefault;
  private profileItensSubject$ = new BehaviorSubject<ProfileItens>(profileItensDefault);
  public profileItens$ = this.profileItensSubject$.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    this.profileItens = this.getItens();
  }

  public getItens(): ProfileItens {
    const profileItensLocalStorage = this.localStorageService.getKey('profile-itens');
    return profileItensLocalStorage
      ? JSON.parse(profileItensLocalStorage) as ProfileItens
      : profileItensDefault;
  }

  public setItens(profileItens: ProfileItens) {
    this.localStorageService.setKey('profile-itens', JSON.stringify(profileItens));
  }
}
