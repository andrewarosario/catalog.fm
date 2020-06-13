interface ArtistMatch {
  type: 'artist';
  name: string;
  url: string;
  streamable: '0' | '1';
  mbid: string;
  image?: Images;
}

interface Artist extends ArtistMatch {
  id?: string;
  albums: LastfmAlbumMatch[];
  stats: {
    listeners: string;
    playcount: string;
  };
  wiki?: {
    published: string;
    summary: string;
    content: string;
    links: {
      '#text': string;
      href: string;
      rel: string;
    }[]
  };
}

interface ArtistSearchResponse {
  results: {
    '@attr': {
      for: string
    }
    opensearch: {
      '#text': string;
      role: 'request';
      startPage: string;
    };
    'opensearch:itemsPerPage': string;
    'opensearch:startIndex': string;
    'opensearch:totalResults': string;
    artistmatches: {
      artist: ArtistMatch[];
    };
  };
}

interface ArtistInfoResponse {
  artist: Artist;
}

interface LastfmTopAlbumsSearch extends LastfmSearch {
  artist: string;
}

interface LastfmTopAlbums {
  '@attr': LastfmTopAlbumsSearch;
  album: LastfmAlbumMatch[];
}

interface LastfmTopAlbumsResponse {
  topalbums: LastfmTopAlbums;
}
