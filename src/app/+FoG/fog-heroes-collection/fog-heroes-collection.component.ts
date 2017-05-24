import {
    Component,
    OnInit, OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

    constructor(private fogService: FoGService) {

        this.heroes$ = this.fogService.heroesCollection;
    }

    public ngOnInit() {
        console.log('ON INIT FoGHeroesCollectionComponent');

        this.fogService.loadCollection();
    }

    public ngOnDestroy() {
        console.log('ON DESTROY FoGHeroesCollectionComponent');
        // this.routerEventsSubscription$.unsubscribe();
    }
}
