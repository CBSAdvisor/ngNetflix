import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { NfxSampleComponent } from './sample.component';

const routes = [
  {
    path: 'sample',
    component: NfxSampleComponent
  }
];

@NgModule({
  declarations: [
    NfxSampleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NfxSampleComponent
  ]
})

export class NfxSampleModule {
}
