import {
    Component,
    OnInit
} from '@angular/core';
import { AppPageHeaderToolbarService } from './app-page-header-toolbar.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-page-header-toolbar',
    styleUrls: ['./app-page-header-toolbar.component.scss'],
    templateUrl: `./app-page-header-toolbar.component.html`
})
export class AppPageHeaderToolbarComponent implements OnInit {
    public title$: Observable<string>;
    public subTitle$: Observable<string>;

    constructor(private service: AppPageHeaderToolbarService) {
        console.log('constructor AppPageHeaderToolbarComponent');
        this.title$ = service.title;
        this.subTitle$ = service.subtitle;
    }

    public ngOnInit() {
        console.log('ngOnInit AppPageHeaderToolbarComponent');

        this.subTitle$.subscribe(t => {
            console.log(`SUBTITLE Changed "${t}"`);
        });
    }

    public onMenu() {
        this.service.toggleMenu();
    }
}
