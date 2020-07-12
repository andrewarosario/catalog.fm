import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProfileTopArtists } from '@core/profile/models/profile';
import { UserResources, UserInfo } from '../../interfaces/user-resources';

@Component({
  selector: 'app-user-top-artists',
  templateUrl: './user-top-artists.component.html',
  styleUrls: ['./user-top-artists.component.scss']
})
export class UserTopArtistsComponent implements UserResources {

  @Input() public topArtists: ProfileTopArtists;
  @Output() public change = new EventEmitter<UserInfo>();

}
