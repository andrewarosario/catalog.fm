import { Injectable, Injector } from '@angular/core';
import { IndexedDbTable } from '../indexed-db-table';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbScrobbles extends IndexedDbTable<TrackScrobble> {

  constructor(protected injector: Injector) {
    super(injector, 'scrobbles');
  }
}
