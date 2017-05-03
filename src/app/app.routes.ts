import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fog', loadChildren: './+fog/fog.module#FoGModule' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NoContentComponent },
];
