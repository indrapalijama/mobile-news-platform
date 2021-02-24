import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SkeletonCard } from "./skeleton-card/card.component";



@NgModule({
    declarations: [
        SkeletonCard
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        SkeletonCard
    ]
})
export class SkeletonLoaderModule { }