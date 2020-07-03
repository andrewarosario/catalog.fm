interface UserLastfm {
  type: 'user';
  id?: string;
  name: string;
  realname: string;
  url: string;
  image: Images;
  country: string;
  age: string;
  gender: 'm' | 'f';
  subscriber: '0' | '1';
  playcount: string;
  playlists: string;
  bootstrap: string;
  registered: {
    unixtime: string;
    '#text': string;
  };
}

interface AuthenticationResponse {
  session: {
    name: string;
    key: string;
  };
}

interface UserLastfmResponse {
  user: UserLastfm;
}

interface LastfmRecentTracksSearch extends LastfmSearch {
  user: string;
}

interface LastfmRecentTracks {
  '@attr': LastfmRecentTracksSearch;
  track: LastfmTrack[];
}

interface LastfmRecentTracksResponse {
  recenttracks: LastfmRecentTracks;
}
