import { Injectable } from '@angular/core';
import { Menu } from './menu.service';
import { IndexedDbScrobbles } from '@indexed-db/tables/indexed-db-scrobbles';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(
    private indexedDbScrobbles: IndexedDbScrobbles
  ) {}

  getMenuResources(): Menu[] {
    return [
        {
          route: 'scrobble',
          name: 'Scrobble',
          type: 'sub',
          icon: 'send',
          children: [{
              route: 'bulk',
              name: 'Bulk',
              type: 'link'
            },
            {
              route: 'cache',
              name: 'Cache',
              type: 'link',
              badge: {
                color: 'red-500',
                value: this.indexedDbScrobbles.length$
              }
            }
          ]
        },
        {
          route: 'mosaic/album',
          name: 'Mosaico',
          type: 'link',
          icon: 'grid_on'
        }
      ];
    }
  }

