import { NgModule } from '@angular/core';
import { AuthComponent } from './containers/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LastfmCallbackAuthGuard } from './guards/lastfm-callback-auth.guard';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [ LastfmCallbackAuthGuard ],
    component: AuthComponent
  }
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
