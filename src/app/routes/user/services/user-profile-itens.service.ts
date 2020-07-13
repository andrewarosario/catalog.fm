import { Injectable } from '@angular/core';
import { PeriodLastfm } from '@core/lastfm/models/periods';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfo } from '../interfaces/user-resources';

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
  private profileItens = profileItensDefault;

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

  public makeTopArtistsParams(): UserInfo {
    return { limit: this.profileItens.topArtistsLimit,
      page: 1,
      period: this.profileItens.topArtistsPeriod
    };
  }

  public makeTopAlbumsParams(): UserInfo {
    return { limit: this.profileItens.topAlbumsLimit,
      page: 1,
      period: this.profileItens.topAlbumsPeriod
    };
  }

  public makeTopTracksParams(): UserInfo {
    return { limit: this.profileItens.topTracksLimit,
      page: 1,
      period: this.profileItens.topTracksPeriod
    };
  }

  public makeRecentTracksParams(): UserInfo {
    return { limit: this.profileItens.recentTracksLimit,
      page: 1,
    };
  }
}
