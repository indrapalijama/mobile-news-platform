import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
// import { MessageHelper, LoadingService } from '@aax/shared';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    urlpath = environment.urlpath; //api aax
    quitOnBackButton = false;

    constructor(
        private http: HttpClient
    ) { }

    getAllCategory() {
        return this.http.get<any>(this.urlpath).pipe(
            map(res => res))
    }

    getSpecificNews(val) {
        return this.http.get<any>(this.urlpath + 'v1/' + val).pipe(
            map(res => res))
    }

}
