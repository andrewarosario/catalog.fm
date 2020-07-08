import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@core/user/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() user: User;
  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;
  @Input() toggleChecked = false;

  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  @Output() logout = new EventEmitter();

  constructor() {}
}
