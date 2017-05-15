import {
    Component,
    OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoGService } from '../fog.service';
import { FoGHero } from '../FoG.model';

@Component({
    selector: 'fog-heroes-collection',
    templateUrl: './fog-heroes-collection.component.html',
    styleUrls: ['./fog-heroes-collection.component.scss'],
    providers: [FoGService]
})
export class FoGHeroesCollectionComponent implements OnInit {
    public heroes$: Observable<FoGHero[]>;

    constructor(private fogService: FoGService) {
        this.heroes$ = this.fogService.heroesCollection;
    }

    public ngOnInit() {
        this.fogService.loadCollection();
    }

}
