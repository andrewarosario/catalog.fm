import { Injectable } from '@angular/core';
import { Profile, ProfileRecentTracks, ProfileTopAlbums, ProfileTopArtists, ProfileTopTracks } from '@core/profile/models/profile';
import { ALBUM_IMAGE_DEFAULT, ARTIST_IMAGE_DEFAULT } from '@core/models/default';
import { PeriodLastfm } from '@core/lastfm/models/periods';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdapterService {

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

  public adaptLastfmTopAlbumsToProfileTopAlbums(
    response: LastfmTopAlbumsResponse,
    period: PeriodLastfm
  ): ProfileTopAlbums {
    const topAlbums = response.topalbums;

    return {
      info: { ...topAlbums['@attr'], period },
      albums: topAlbums.album.map(album => ({
        artist: album.artist.name,
        name: album.name,
        playcount: +album.playcount,
        image: album.image[3]['#text'],
        imageSize2: album.image[2]['#text'],
      }))
    };
  }

  public adaptLastfmTopArtistsToProfileTopArtist(
    lastfmResponse: LastfmTopArtistsResponse,
    theAudioDbResponse: TheAudioDbArtist[],
    period: PeriodLastfm
  ): ProfileTopArtists {
    const topArtists = lastfmResponse.topartists;

    return {
      info: { ...topArtists['@attr'], period },
      artists: topArtists.artist.map((artist, index) => ({
        name: artist.name,
        playcount: +artist.playcount,
        image: theAudioDbResponse[index]?.strArtistThumb || ARTIST_IMAGE_DEFAULT
      }))
    };
  }

  public adaptLastfmTopTracksToProfileTopTracks(
    response: LastfmTopTracksResponse,
    period: PeriodLastfm
  ): ProfileTopTracks {
    const topTracks = response.toptracks;

    return {
      info: { ...topTracks['@attr'], period },
      tracks: topTracks.track.map(track => ({
          artist: track.artist.name,
          song: track.name,
          playcount: +track.playcount,
          image: track.image[1]['#text'],
          imageSize2: track.image[2]['#text'],
          duration: +track.duration
        }))
    };
  }

}
