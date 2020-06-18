import { Injectable } from '@angular/core';
import { Profile, ProfileRecentTracks } from '@core/models/profile';
import { ALBUM_IMAGE_DEFAULT } from '@core/models/default';

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
        albumImage: track.image[1]['#text'] || ALBUM_IMAGE_DEFAULT,
        timestamp: +track.date?.uts || null,
        nowPlaying: !!track['@attr']?.nowplaying
      }))
    };
  }

  public adaptLastfmTopAlbumsToProfileTopAlbums(response: LastfmTopAlbumsResponse) {
    const topAlbums = response.topalbums;

    return {
      info: topAlbums['@attr'],
      albums: topAlbums.album.map(album => ({
        artist: album.artist.name,
        name: album.name,
        playcount: +album.playcount,
        image: album.image[3]['#text']
      }))
    };
  }

}
