type Entity = LastfmTrack | LastfmAlbum | LastfmArtist | UserLastfm;
type Searchable = LastfmTrack | LastfmAlbumMatch | LastfmArtistMatch;

interface PaginatedData<T extends Searchable> {
  [page: number]: T[];
}

interface SearchResult<T extends Searchable> {
  count: number;
  results: T[];
}

interface LastfmSearch {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
