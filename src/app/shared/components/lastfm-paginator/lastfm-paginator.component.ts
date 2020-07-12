import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoResult } from '@core/profile/models/profile';

interface LastfmPaginator {
  limit: number;
  page: number;
}

@Component({
  selector: 'app-lastfm-paginator',
  templateUrl: './lastfm-paginator.component.html',
  styleUrls: ['./lastfm-paginator.component.scss']
})
export class LastfmPaginatorComponent implements OnInit {

  @Input() info: InfoResult;
  @Output() changePage = new EventEmitter<LastfmPaginator>();
  constructor() { }

  ngOnInit(): void {
  }

}
