interface LastfmAlbumMatch {
  type: 'album';
  name: string;
  artist: string | any;
  url: string;
  mbid: string;
  image?: Images;
}

interface LastfmAlbum extends LastfmAlbumMatch {
  id?: string;
  artist: string | any;
  playcount: string;
  tracks: {
    track: LastfmTrackMatch[]
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
  album: LastfmAlbum;
}

interface LastfmTopAlbums {
  '@attr': LastfmTopAlbumsSearch;
  album: LastfmAlbum[];
}

interface LastfmTopAlbumsResponse {
  topalbums: LastfmTopAlbums;
}
