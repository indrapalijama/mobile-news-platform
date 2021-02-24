import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SkeletonLoaderModule } from "./skeleton-loader/skeleton-loader.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        SkeletonLoaderModule,
        ReactiveFormsModule
    ],
    exports: [
        SkeletonLoaderModule
    ]
})
export class ComponentsModule { }