type Entity = Track | Album | Artist | UserLastfm;
type Searchable = Track | AlbumMatch | ArtistMatch;

interface PaginatedData<T extends Searchable> {
  [page: number]: T[];
}

interface SearchResult<T extends Searchable> {
  count: number;
  results: T[];
}
