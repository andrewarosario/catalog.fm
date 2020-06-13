import { Injectable } from '@angular/core';
import { LastfmUserService } from '@lastfm/services/lastfm-user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile, ProfileRecentTracks } from '@core/models/profile';
import { PeriodLastfm } from '@core/models/periods';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdapterService {

  constructor() {}

  public adaptUserLastfmToProfile(response: UserLastfmResponse): Profile {
    const user = response.user;
    return {
      name: user.name,
      realName: user.realname,
      image: user.image[3]['#text'],
      gender: user.gender,
      country: user.country,
      playcount: +user.playcount,
      registered: +user.registered['#text'],
    };
  }

  public adaptLastfmRecentTracksToProfileRecentTracks(response: LastfmRecentTracksResponse): ProfileRecentTracks {
    const recentTracks = response.recenttracks;
    return {
      info: recentTracks['@attr'],
      tracks: recentTracks.track.map(track => ({
        artist: track.artist['#text'],
        song: track.name,
        album: track.album['#text'],
        albumImage: track.image[1]['#text'],
        timestamp: +track.date?.uts || null,
        nowPlaying: !!track['@attr']?.nowplaying
      }))
    };
  }

}
