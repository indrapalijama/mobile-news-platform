import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { LoadingService } from "@news/shared";
import { HomeService } from "../home.service";

@Component({
    selector: './settings.scss',
    templateUrl: './settings.html'
})

export class SettingsPage implements OnInit {
    compareFn(c1: any, c2: any): boolean {
        return c1 == c2;
    }
    compareWith = this.compareFn;

    data = [];
    provider = [];
    category = [];
    newsprovider;
    categorylist;

    filtervalue;
    headervalue;


    constructor(
        private modal: ModalController,
        private service: HomeService,
        private navParams: NavParams,
        private loading: LoadingService
    ) {
        this.service.getAllCategory().subscribe(res => {
            console.log('halo', res)
            this.provider = [];
            this.data = res.listApi;
            for (var key in this.data) {
                this.provider.push(key)
            }
        })
    }

    ngOnInit() {
        this.loading.present();
        setTimeout(() => {
            this.newsprovider = this.navParams.get('providervalue');
            this.categorylist = this.navParams.get('categoryvalue');
            this.loading.dismiss();
        }, 500);
    }

    async onChangeProvider(val: string) {
        this.categorylist = await null
        await this.category.splice(0, this.category.length)
        this.headervalue = await val;
        this.filtervalue = await val.toLowerCase().replace(' ', '-');
        for (let index = 0; index < this.data[val].listType.length; index++) {
            await this.category.push(this.data[val].listType[index])
        }
    }

    applyFilter(val) {
        if (!this.categorylist) {
            val = val + '/'
        }
        this.modal.dismiss({
            header: this.headervalue,
            provider: this.newsprovider,
            category: this.categorylist,
            url: val
        }, 'apply')
    }

    async onChangeCategory(val: string) {
        this.filtervalue = await this.filtervalue + '/' + val
    }

    close() {
        this.modal.dismiss()
    }
}