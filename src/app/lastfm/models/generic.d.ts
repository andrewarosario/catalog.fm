type Entity = Track | Album | Artist | UserLastfm;
type Searchable = Track | LastfmAlbumMatch | ArtistMatch;

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
