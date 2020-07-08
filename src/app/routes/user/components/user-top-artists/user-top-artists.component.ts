import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProfileTopArtists } from '@core/profile/models/profile';
import { PageEvent } from '@angular/material/paginator';
import { PeriodLastfm } from '@core/lastfm/models/periods';

@Component({
  selector: 'app-user-top-artists',
  templateUrl: './user-top-artists.component.html',
  styleUrls: ['./user-top-artists.component.scss']
})
export class UserTopArtistsComponent {

  @Input() public topArtists: ProfileTopArtists;
  @Output() public changePage = new EventEmitter<PageEvent>();
  @Output() public changePeriod = new EventEmitter<PeriodLastfm>();

}
