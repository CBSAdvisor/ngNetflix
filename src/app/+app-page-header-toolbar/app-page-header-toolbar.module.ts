import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule
} from '@angular/material';
import { AppPageHeaderToolbarComponent } from './app-page-header-toolbar.component';
import { AppPageHeaderToolbarService } from './app-page-header-toolbar.service';

@NgModule({
    declarations: [
        AppPageHeaderToolbarComponent
    ],
    exports: [
        AppPageHeaderToolbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdMenuModule,
        MdIconModule,
        MdSidenavModule,
        MdListModule,
    ]
})
export class AppPageHeaderToolbarModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppPageHeaderToolbarModule,
            providers: [
                AppPageHeaderToolbarService
            ]
        };
    }
}
