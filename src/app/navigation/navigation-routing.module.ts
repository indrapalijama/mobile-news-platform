import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
  {
    path: 'g',
    component: NavigationPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/g/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPageRoutingModule { }
