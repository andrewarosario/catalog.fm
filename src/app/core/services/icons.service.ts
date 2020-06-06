import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.registerIcons();
  }

  private registerIcons() {
    this.matIconRegistry.addSvgIcon(
      `lastfm`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/lastfm.svg')
    );
  }
}
