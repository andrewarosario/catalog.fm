interface LastfmAlbumMatch {
  type: 'album';
  name: string;
  artist: string | any;
  url: string;
  mbid: string;
  image?: Images;
  playcount: string;
}

interface Album extends LastfmAlbumMatch {
  id?: string;
  artist: string;
  playcount: string;
  tracks: {
    track: TrackMatch[]
  };
  tags: {
    tag: {
      name: string;
      url: string;
    }[];
  };
  wiki?: {
    published: string;
    summary: string;
    content: string;
  };
}

interface AlbumSearchResponse {
  results: {
    '@attr': {
      for: string
    }
    'opensearch:Query': {
      '#text': string;
      role: 'request';
      searchTerms: string;
      startPage: string;
    };
    'opensearch:itemsPerPage': string;
    'opensearch:startIndex': string;
    'opensearch:totalResults': string;
    albummatches: {
      album: LastfmAlbumMatch[];
    };
  };
}

interface AlbumInfoResponse {
  album: Album;
}

interface LastfmTopAlbums {
  '@attr': LastfmTopAlbumsSearch;
  album: LastfmAlbumMatch[];
}

interface LastfmTopAlbumsResponse {
  topalbums: LastfmTopAlbums;
}
