import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileRecentTracks, RecentTrack } from '@core/profile/models/profile';
import { UserResources, UserInfo } from '../../interfaces/user-resources';

@Component({
  selector: 'app-user-recent-tracks',
  templateUrl: './user-recent-tracks.component.html',
  styleUrls: ['./user-recent-tracks.component.scss']
})
export class UserRecentTracksComponent implements UserResources {

  @Input() public recentTracks: ProfileRecentTracks;
  @Output() public openTrackInfo = new EventEmitter<RecentTrack>();
  @Output() public change = new EventEmitter<UserInfo>();

}
