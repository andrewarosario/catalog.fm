import { NgModule } from '@angular/core';
import { ScrobbleCacheComponent } from './containers/scrobble-cache/scrobble-cache.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ScrobbleCacheComponent
  }
];

@NgModule({
  declarations: [
    ScrobbleCacheComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ScrobbleCacheModule { }
