import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { MenuService } from './menu.service';
import { IconsService } from '@core/services/icons.service';
import { ScrobbleService } from 'app/routes/scrobble/services/scrobble.service';

@Injectable()
export class StartupService {
  constructor(
    private menuService: MenuService,
    private http: HttpClient,
    private iconsService: IconsService,
    private scrobbleService: ScrobbleService,
  ) {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/data/menu.json?_t=' + Date.now())
        .pipe(
          catchError(res => {
            resolve();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
            this.menuService.recursMenuForTranslation(res.menu, 'menu');
            this.menuService.set(res.menu);
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }
}
