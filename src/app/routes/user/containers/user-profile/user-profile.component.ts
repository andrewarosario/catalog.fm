import { Component, OnInit } from '@angular/core';
import { UserProfileFacade } from '../../user-profile.facade';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public facade: UserProfileFacade,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const userChanges$ = this.route.data.pipe(map(data => data.user));

  }

}
