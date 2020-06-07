import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'album'
  },
  {
    path: 'album',
    loadChildren: () => import('./mosaic-album/mosaic-album.module').then(m => m.MosaicAlbumModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScrobbleModule { }
