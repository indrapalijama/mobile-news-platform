import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    isLoading = false;

    constructor(public loadingController: LoadingController) { }

    async present(msg = null) {
        this.isLoading = true;
        return await this.loadingController.create({
            message: msg
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss()
                }
            });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss();
    }
}