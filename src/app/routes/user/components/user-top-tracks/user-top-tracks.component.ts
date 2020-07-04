import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopTracks, TopTrack } from '@core/models/profile';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-top-tracks',
  templateUrl: './user-top-tracks.component.html',
  styleUrls: ['./user-top-tracks.component.scss']
})
export class UserTopTracksComponent implements OnInit {

  @Input() public topTracks: ProfileTopTracks;
  @Output() public openTrackInfo = new EventEmitter<TopTrack>();
  @Output() public changePage = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
