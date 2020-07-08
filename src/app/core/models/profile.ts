import { PeriodLastfm } from './periods';

export interface Profile {
  name: string;
  realName: string;
  image: string;
  gender: 'm'| 'f';
  country: string;
  playcount: number;
  registered: number;
}

export interface InfoResult {
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
  period?: PeriodLastfm;
}

export interface ProfileRecentTracks {
  info: InfoResult;
  tracks: RecentTrack[];
}

export interface RecentTrack extends TrackScrobble {
  albumImage: string;
  nowPlaying: boolean;
}

export interface ProfileTopAlbums {
  info: InfoResult;
  albums: TopAlbum[];
}

export interface ProfileTopArtists {
  info: InfoResult;
  artists: TopArtist[];
}

export interface ProfileTopTracks {
  info: InfoResult;
  tracks: TopTrack[];
}

export interface TopAlbum {
  name: string;
  artist: string;
  image: string;
  imageSize2: string;
  playcount: number;
}

export interface TopArtist {
  name: string;
  image: string;
  playcount: number;
}

export interface TopTrack {
  artist: string;
  song: string;
  playcount: number;
  image: string;
  imageSize2: string;
  duration: number;
}
