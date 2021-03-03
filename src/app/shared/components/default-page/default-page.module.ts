import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        MaintenanceComponent
    ]
})
export class DefaultPageModule { }