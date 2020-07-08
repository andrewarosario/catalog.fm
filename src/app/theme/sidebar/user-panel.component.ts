import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@core/user/models/user';

@Component({
  selector: 'app-user-panel',
  template: `
    <div class="matero-user-panel" fxLayout="column" fxLayoutAlign="center center">
      <img
        *ngIf="user.profile"
        class="matero-user-panel-avatar"
        [src]="user.profile?.image"
        alt="avatar"
        width="64"
      />
      <h4 class="matero-user-panel-name">{{ user.name }}</h4>
      <h5 class="matero-user-panel-email">{{ user.profile?.realName }}</h5>
      <div class="matero-user-panel-icons">
        <a [routerLink]="['/user', user.name]" (click)="closeMenu.emit()" mat-icon-button>
          <mat-icon>account_circle</mat-icon>
        </a>
        <!-- <a routerLink="/profile/settings" mat-icon-button>
          <mat-icon>settings</mat-icon>
        </a> -->
        <a (click)="logout.emit(); closeMenu.emit()" mat-icon-button>
          <mat-icon>exit_to_app</mat-icon>
        </a>
      </div>
    </div>
  `,
})
export class UserPanelComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
}
