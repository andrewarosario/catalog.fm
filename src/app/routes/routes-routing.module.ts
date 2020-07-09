import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastfmAuthGuard } from '@core/auth/guards/lastfm-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        data: { title: 'Auth', titleI18n: 'auth' },
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        data: { title: 'Usuário', titleI18n: 'Usuário' },
      },
      {
        path: 'artist',
        loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule),
        data: { title: 'Artista', titleI18n: 'Artista' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'Sessions' },
      },
      {
        path: 'scrobble',
        loadChildren: () => import('./scrobble/scrobble.module').then(m => m.ScrobbleModule),
        data: { title: 'Scrobble', titleI18n: 'Scrobble' },
      },
      {
        path: 'mosaic',
        canActivate: [ LastfmAuthGuard ],
        loadChildren: () => import('./mosaic/mosaic.module').then(m => m.ScrobbleModule),
        data: { title: 'Mosaico', titleI18n: 'Mosaico' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
