import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopAlbums } from '@core/profile/models/profile';
import { UserResources, UserInfo } from '../../interfaces/user-resources';

@Component({
  selector: 'app-user-top-albums',
  templateUrl: './user-top-albums.component.html',
  styleUrls: ['./user-top-albums.component.scss']
})
export class UserTopAlbumsComponent implements UserResources {

  @Input() public topAlbums: ProfileTopAlbums;
  @Output() public change = new EventEmitter<UserInfo>();

}
