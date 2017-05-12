import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FoGHero } from './FoG.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FoGService {
  private heroesCollection$: BehaviorSubject<FoGHero[]>;

  constructor(private http: Http) {
    this.heroesCollection$ = new BehaviorSubject<FoGHero[]>([]);
  }

  /**
   * Get observable heroes collection.
   * @returns {Observable<FoGHero[]>}
   */
  public get heroesCollection() {
    return this.heroesCollection$.asObservable();
  };

  /**
   * Load heroes collection from API.
   */
  public loadCollection(): void {
    this.http.get('/assets/data/fog-collection.json')
      .map((response: Response) => {
        return response.json() || [];
      })
      .catch(this.handleError)
      .subscribe(data => {
        this.heroesCollection$.next(data);
      });
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
