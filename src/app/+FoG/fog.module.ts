import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './fog.routes';
import { FoGComponent } from './fog.component';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FoGComponent,
  ],
  imports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class FoGModule {
  public static routes = routes;
}
