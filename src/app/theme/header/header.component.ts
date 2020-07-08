import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as screenfull from 'screenfull';
import { User } from '@core/user/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() showBranding = false;
  @Input() user: User;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();
  @Output() logout = new EventEmitter();
  @Output() auth = new EventEmitter();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor() {}

  ngOnInit() {}

  // TODO:
  toggleFullscreen() {
    if (this.screenfull.isEnabled) {
      this.screenfull.toggle();
    }
  }
}
