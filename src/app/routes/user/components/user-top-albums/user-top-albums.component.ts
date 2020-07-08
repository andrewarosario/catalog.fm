import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopAlbums } from '@core/profile/models/profile';
import { PageEvent } from '@angular/material/paginator';
import { PeriodLastfm } from '@core/lastfm/models/periods';

@Component({
  selector: 'app-user-top-albums',
  templateUrl: './user-top-albums.component.html',
  styleUrls: ['./user-top-albums.component.scss']
})
export class UserTopAlbumsComponent implements OnInit {

  @Input() public topAlbums: ProfileTopAlbums;
  @Output() public changePage = new EventEmitter<PageEvent>();
  @Output() public changePeriod = new EventEmitter<PeriodLastfm>();
  constructor() { }

  ngOnInit(): void {
  }

}
