import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarModule } from 'primeng/primeng';

import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { AgmCoreModule } from '@agm/core';
import { PrimeNgCalendarComponent } from './primeng-calendar.component/primeng-calendar.component';
import { MatPrimeNgDateTimePickerComponent } from './primeng-calendar.component/mat-primeng-datetimepicker/mat-primeng-datetimepicker.component';

const routes: Routes = [
  {
    path: 'primeng/calendar',
    component: PrimeNgCalendarComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FuseWidgetModule,
    NgxChartsModule,
    CalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    })
  ],
  declarations: [
    PrimeNgCalendarComponent,
    MatPrimeNgDateTimePickerComponent
  ],
  providers: []
})
export class SandboxAppModule {
}
