import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SkeletonLoaderModule } from "./skeleton-loader/skeleton-loader.module";
import { DefaultPageModule } from "./default-page/default-page.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        SkeletonLoaderModule,
        DefaultPageModule,
        ReactiveFormsModule
    ],
    exports: [
        SkeletonLoaderModule,
        DefaultPageModule
    ]
})
export class ComponentsModule { }