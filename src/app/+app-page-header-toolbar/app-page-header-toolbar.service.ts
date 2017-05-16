import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AppPageHeaderToolbarService {
    private titleSubject$: BehaviorSubject<string>;
    private subTitleSubject$: BehaviorSubject<string>;
    private toggleMenu$: EventEmitter<number>;
    private toggleMenuSubscription$: Subscription;

    constructor() {
        this.titleSubject$ = new BehaviorSubject<string>('[APP TITLE]');
        this.subTitleSubject$ = new BehaviorSubject<string>('sub title');
        this.toggleMenu$ = new EventEmitter(true);
    }

    public toggleMenu(): void {
        this.toggleMenu$.emit(0);
    }

    public setOnToggleMenuHandler(fn: any) {
        if(this.toggleMenuSubscription$) {
            this.toggleMenuSubscription$.unsubscribe();
        }
        this.toggleMenuSubscription$ = this.toggleMenu$.subscribe(fn);
    }

    /**
     * Get title
     * @returns {Observable<string>}
     */
    get title(): Observable<string> {
        return this.titleSubject$.asObservable();
    }

    /**
     * Change title
     * @param {string} t Title
     */
    public changeTitle(t: string): void {
        this.titleSubject$.next(t);
    }

    /**
     * Get subtitle
     * @returns {Observable<string>}
     */
    get subtitle(): Observable<string> {
        return this.subTitleSubject$.asObservable();
    }

    /**
     * Change subtitle
     * @param {string} t Subtitle
     */
    public changeSubtitle(t: string): void {
        this.subTitleSubject$.next(t);
    }
}
