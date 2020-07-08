import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuService } from './menu.service';
import { IconsService } from '@core/bootstrap/icons.service';
import { ScrobbleService } from '@core/scrobble/services/scrobble.service';
import { ResourcesService } from './resources.service';

@Injectable()
export class StartupService {
  constructor(
    private resourcesService: ResourcesService,
    private menuService: MenuService,
    private http: HttpClient,
    private iconsService: IconsService,
    private scrobbleService: ScrobbleService,
  ) {}

  load() {
    const resources = this.resourcesService.getMenuResources();
    this.menuService.set(resources);
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .get('assets/data/menu.json?_t=' + Date.now())
  //       .pipe(
  //         catchError(res => {
  //           resolve();
  //           return res;
  //         })
  //       )
  //       .subscribe(
  //         (res: any) => {
  //           this.menuService.recursMenuForTranslation(res.menu, 'menu');
  //           this.menuService.set(res.menu);
  //         },
  //         () => {},
  //         () => {
  //           resolve();
  //         }
  //       );
  //   });
  }
}
