import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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

@NgModule({
    declarations: [
        AppPageHeaderToolbarComponent
    ],
    exports: [
        AppPageHeaderToolbarComponent
    ],
    imports: [
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
}
