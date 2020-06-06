import { Component } from '@angular/core';
import { AuthFacade } from '../../auth.facade';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    public facade: AuthFacade,
    public route: ActivatedRoute,
  ) { }

  public get waitingCallback() {
    return this.route.queryParams.pipe(map(params => !!params.token));
  }

  public login() {
    this.facade.auth();
  }

}
