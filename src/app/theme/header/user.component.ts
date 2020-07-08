import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@core/user/models/user';

@Component({
  selector: 'app-user',
  template: `
    <button
      mat-button
      class="matero-toolbar-button matero-avatar-button"
      href="javascript:void(0)"
      [matMenuTriggerFor]="menu"
    >
      <img *ngIf="user.profile" class="matero-avatar" [src]="user.profile?.image" width="32" alt="avatar" />
      <span class="matero-username" fxHide.lt-sm>{{ user.name }}</span>
    </button>

    <mat-menu #menu="matMenu">
      <a [routerLink]="['/user', user.name]" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Meu Perfil</span>
      </a>
      <!-- <a routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>{{ 'user.settings' | translate }}</span>
      </a> -->
      <a (click)="logout.emit()" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <!-- <span>{{ 'user.logout' | translate }}</span> -->
        <span>Logout</span>
      </a>
    </mat-menu>
  `,
})
export class UserComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter();
}
