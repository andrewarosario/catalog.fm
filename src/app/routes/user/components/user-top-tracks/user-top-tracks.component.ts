import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopTracks, TopTrack } from '@core/profile/models/profile';
import { UserResources, UserInfo } from '../../interfaces/user-resources';

@Component({
  selector: 'app-user-top-tracks',
  templateUrl: './user-top-tracks.component.html',
  styleUrls: ['./user-top-tracks.component.scss']
})
export class UserTopTracksComponent implements UserResources {

  @Input() public topTracks: ProfileTopTracks;
  @Output() public openTrackInfo = new EventEmitter<TopTrack>();
  @Output() public change = new EventEmitter<UserInfo>();

}
