import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: 'nocontent', component: NoContentComponent },
  { path: '**', component: NoContentComponent }
];
