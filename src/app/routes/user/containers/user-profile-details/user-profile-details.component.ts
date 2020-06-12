import { Component, OnInit } from '@angular/core';
import { UserProfileFacade } from '../../user-profile.facade';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit {

  constructor(
    public facade: UserProfileFacade
  ) { }

  ngOnInit(): void {
  }

  public changePagination(userName: string, event: PageEvent) {
    this.facade.getRecentTracks(userName, event.pageSize, event.pageIndex + 1)
      .subscribe(() => window.scrollTo(0, 0));
  }

}
