import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { GowKingdomsComponent } from './kingdoms/kingdoms.component';
import { RouterModule, Routes } from '@angular/router';
import { GoWKingdomsService } from './gems-of-war.service';

const routes: Routes = [
  {
    path: 'kingdoms',
    component: GowKingdomsComponent
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    GowKingdomsComponent
  ],
  providers: [
    GoWKingdomsService
  ]
})
export class GemsOfWarModule {
}
