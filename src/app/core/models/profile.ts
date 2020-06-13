export interface Profile {
  name: string;
  realName: string;
  image: string;
  gender: 'm'| 'f';
  country: string;
  playcount: number;
  registered: number;
}

export interface ProfileRecentTracks {
  info: InfoRecentTracks;
  tracks: RecentTrack[];
}

interface InfoRecentTracks {
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
}

interface RecentTrack extends TrackScrobble {
  albumImage: string;
  nowPlaying: boolean;
}
