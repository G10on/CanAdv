import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'lanzarote',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'gran-canaria',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'tenerife',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-gomera',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-palma',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'el-hierro',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'fuerteventura',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-graciosa',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'favs',
    loadChildren: () => import('./tabs/favs/favs.module').then( m => m.FavsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
