import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '@news/modules/account/account.component';
import { BookmarkComponent } from '@news/modules/bookmark/bookmark.component';
import { SearchComponent } from '@news/modules/search/search.component';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
  {
    path: 'g',
    component: NavigationPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'bookmark',
        component: BookmarkComponent
      },
      {
        path: 'search',
        component: SearchComponent
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
