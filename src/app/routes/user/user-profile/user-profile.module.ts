import { NgModule } from '@angular/core';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }
