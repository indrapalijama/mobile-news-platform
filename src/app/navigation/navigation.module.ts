import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationPage } from './navigation.page';
import { AccountComponent } from '@news/modules/account/account.component';
import { BookmarkComponent } from '@news/modules/bookmark/bookmark.component';
import { SearchComponent } from '@news/modules/search/search.component';
import { SharedModule } from '@news/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationPageRoutingModule,
    SharedModule
  ],
  declarations: [
    NavigationPage,
    AccountComponent,
    BookmarkComponent,
    SearchComponent
  ],
  entryComponents: [
    AccountComponent,
    BookmarkComponent,
    SearchComponent
  ]
})
export class NavigationPageModule { }
