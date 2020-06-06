import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" [routerLink]="['/']">
      <img src="./assets/images/catalog.png" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">CATALOG.FM</span>
    </a>
  `,
})
export class BrandingComponent {}
