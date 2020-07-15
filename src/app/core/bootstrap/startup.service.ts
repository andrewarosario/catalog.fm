import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuService } from './menu.service';
import { IconsService } from '@core/bootstrap/icons.service';
import { ScrobbleCacheService } from './scrobble-cache.service';
import { ResourcesService } from './resources.service';

@Injectable()
export class StartupService {
  constructor(
    private resourcesService: ResourcesService,
    private menuService: MenuService,
    private http: HttpClient,
    private iconsService: IconsService,
    private scrobbleCacheService: ScrobbleCacheService,
  ) {}

  load() {
    const resources = this.resourcesService.getMenuResources();
    this.menuService.set(resources);
    this.scrobbleCacheService.listenSendScrobblesInCache();
  }
}
