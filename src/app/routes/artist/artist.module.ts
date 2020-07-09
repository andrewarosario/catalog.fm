import { NgModule } from '@angular/core';
import { ArtistComponent } from './containers/artist/artist.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ArtistResolver } from './resolvers/artist.resolver';

const routes: Routes = [
  {
    path: ':artist',
    component: ArtistComponent,
    resolve: { artist: ArtistResolver },
    // children: [
    //   {
    //     path: '',
    //     component: UserProfileDetailsComponent,
    //   },
    // ]
  }
];

@NgModule({
  declarations: [ArtistComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtistModule { }
