import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './fog.routes';
import { FoGComponent } from './fog.component';
import { FoGService } from './fog.service';
import { FoGHeroesCollectionComponent } from './fog-heroes-collection';
import { FoGHeroCardSummaryComponent } from './fog-hero-card-summary';

@NgModule({
    declarations: [
        FoGComponent,
        FoGHeroesCollectionComponent,
        FoGHeroCardSummaryComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        FlexLayoutModule,
        MdCardModule,
        MdButtonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        FoGService
    ]
})
export class FoGModule {
    public static routes = routes;
}
