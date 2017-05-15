import { Routes } from '@angular/router';
import { FoGComponent } from './fog.component';
import { FoGHeroesCollectionComponent } from './fog-heroes-collection';

export const routes: Routes = [
  {
      path: '',
      component: FoGComponent,
      children: [
          { path: '', redirectTo: 'heroes' },
          { path: 'heroes', component: FoGHeroesCollectionComponent }
      ]
  }
];
