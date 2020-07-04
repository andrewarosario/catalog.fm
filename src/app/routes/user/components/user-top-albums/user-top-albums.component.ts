import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileTopAlbums } from '@core/models/profile';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-top-albums',
  templateUrl: './user-top-albums.component.html',
  styleUrls: ['./user-top-albums.component.scss']
})
export class UserTopAlbumsComponent implements OnInit {

  @Input() public topAlbums: ProfileTopAlbums;
  @Output() public changePage = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
