import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoResult } from '@core/models/profile';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lastfm-paginator',
  templateUrl: './lastfm-paginator.component.html',
  styleUrls: ['./lastfm-paginator.component.scss']
})
export class LastfmPaginatorComponent implements OnInit {

  @Input() info: InfoResult;
  @Output() changePage = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
