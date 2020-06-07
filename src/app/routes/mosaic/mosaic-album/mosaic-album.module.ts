import { NgModule } from '@angular/core';
import { MosaicAlbumComponent } from './containers/mosaic-album/mosaic-album.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MosaicAlbumComponent
  }
];

@NgModule({
  declarations: [
    MosaicAlbumComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MosaicAlbumModule { }
