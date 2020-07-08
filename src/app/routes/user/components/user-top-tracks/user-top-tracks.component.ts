import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopTracks, TopTrack } from '@core/profile/models/profile';
import { PageEvent } from '@angular/material/paginator';
import { PeriodLastfm } from '@core/lastfm/models/periods';

@Component({
  selector: 'app-user-top-tracks',
  templateUrl: './user-top-tracks.component.html',
  styleUrls: ['./user-top-tracks.component.scss']
})
export class UserTopTracksComponent implements OnInit {

  @Input() public topTracks: ProfileTopTracks;
  @Output() public openTrackInfo = new EventEmitter<TopTrack>();
  @Output() public changePage = new EventEmitter<PageEvent>();
  @Output() public changePeriod = new EventEmitter<PeriodLastfm>();
  constructor() { }

  ngOnInit(): void {
  }

}
