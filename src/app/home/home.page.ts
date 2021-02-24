import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeService } from '@news/home/home.service';
import { SettingsPage } from './settings-overflow/settings';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data = [];
  dataRender: boolean = false;
  loader: boolean = false;

  header: string = 'Home';
  providervalue;
  categoryvalue;

  constructor(
    private service: HomeService,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  async category() {
    const modal = await this.modalController.create(
      {
        component: SettingsPage,
        componentProps: {
          providervalue: this.providervalue,
          categoryvalue: this.categoryvalue
        },
        cssClass: 'category-modal',
        animated: true
      });

    modal.onDidDismiss().then(modal => {
      this.loader = true;
      if (modal.role == 'apply' && modal.data != '') {
        this.header = modal.data.header;
        this.providervalue = modal.data.provider;
        this.categoryvalue = modal.data.category;
        this.service.getSpecificNews(modal.data.url).subscribe(value => {
          if (value.code == 200) {
            this.data = value.data;
            this.dataRender = true;
            this.loader = false;
          }
        }, (err) => {
          this.loader = false;
        })
      } else {
        this.loader = false;
      }
    });
    return await modal.present()
  }
}
