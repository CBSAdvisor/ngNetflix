import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import { Kingdom } from './gems-of-war.model';

@Injectable()
export class GoWKingdomsService {
  constructor() {
  }

  public getKingdoms(): Observable<Kingdom[]> {
    return Observable.of([{
      id: '236784796367',
      name: 'Adana',
      subname: 'Adana subname',
      description: 'adana description',
      banner: 'adana banner',
      bannerBonus: 'adana banner bonus'
    }]);
  }
}
