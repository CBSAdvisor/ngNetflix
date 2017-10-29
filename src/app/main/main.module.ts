import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';
import { NfxMainComponent } from './main.component';
import { NfxContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    NfxContentComponent,
    NfxMainComponent,
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    NfxMainComponent
  ]
})

export class NfxMainModule {
}
