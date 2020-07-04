import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProfileTopArtists } from '@core/models/profile';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-top-artists',
  templateUrl: './user-top-artists.component.html',
  styleUrls: ['./user-top-artists.component.scss']
})
export class UserTopArtistsComponent implements OnInit {

  @Input() public topArtists: ProfileTopArtists;
  @Output() public changePage = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
