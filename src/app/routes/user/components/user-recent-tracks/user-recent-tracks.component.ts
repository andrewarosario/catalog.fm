import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileRecentTracks, RecentTrack } from '@core/profile/models/profile';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-recent-tracks',
  templateUrl: './user-recent-tracks.component.html',
  styleUrls: ['./user-recent-tracks.component.scss']
})
export class UserRecentTracksComponent implements OnInit {

  @Input() public recentTracks: ProfileRecentTracks;
  @Output() public openTrackInfo = new EventEmitter<RecentTrack>();
  @Output() public changePage = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
