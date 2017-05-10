import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './fog.routes';
import { FoGComponent } from './fog.component';

@NgModule({
  declarations: [
    FoGComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class FoGModule {
  public static routes = routes;
}
