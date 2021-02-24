import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SettingsPage } from './settings-overflow/settings';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '@news/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    SettingsPage
  ]
})
export class HomePageModule { }
