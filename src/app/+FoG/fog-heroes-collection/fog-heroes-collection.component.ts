import {
    Component,
    OnInit, OnDestroy
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FoGService } from '../fog.service';
import { FoGHero } from '../FoG.model';
import { AppPageHeaderToolbarService } from '../../+app-page-header-toolbar';

@Component({
    selector: 'fog-heroes-collection',
    templateUrl: './fog-heroes-collection.component.html',
    styleUrls: ['./fog-heroes-collection.component.scss'],
    providers: [FoGService]
})
export class FoGHeroesCollectionComponent implements OnInit, OnDestroy {
    public heroes$: Observable<FoGHero[]>;
    private routerEventsSubscription$: Subscription;

    constructor(private fogService: FoGService,
                private router: Router,
                private appPageHeaderToolbarService: AppPageHeaderToolbarService) {

        this.heroes$ = this.fogService.heroesCollection;
    }

    public ngOnInit() {
        console.log('ON INIT FoGHeroesCollectionComponent');

        this.appPageHeaderToolbarService.changeSubtitle('FoG Collection');

        this.routerEventsSubscription$ = this.router.events
            .subscribe(event => {
                console.log(`ROUTER Changed FoGHeroesCollectionComponent`);

                if (event instanceof NavigationEnd) {
                    this.appPageHeaderToolbarService.setOnToggleMenuHandler(_ => {
                        console.log('FoG collection setOnToggleMenuHandler');
                    });
                }
            });

        this.fogService.loadCollection();
    }

    public ngOnDestroy() {
        console.log('ON DESTROY FoGHeroesCollectionComponent');
        this.routerEventsSubscription$.unsubscribe();
    }
}
